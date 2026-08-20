# RP2040 single-axis BLDC controller

This tscircuit project is the first hardware revision of a 12-24 V,
single-motor BLDC controller.

## Current architecture

- Complete RP2040 support circuit from `@tscircuit/common`
- Dedicated 12 V USB-C PD power input using an STUSB4500 standalone sink
- Separate 12-24 V, 5 A barrel-jack input
- Reverse-current-blocking LM74700 ideal-diode ORing before the input fuse
- DRV8323H hardware-configured three-phase gate driver in six-PWM mode
- Six CSD18540Q5B 60 V N-channel MOSFETs
- Three 5 mOhm low-side phase shunts
- DRV8323 internal current-sense amplifiers connected to RP2040 ADC0-ADC2
- INA240 high-side bidirectional DC-bus current monitor connected to ADC3
- 60 V-input LMR16020 5 V buck supply
- 5 V Hall-sensor connector with 5 V-to-3.3 V dividers and RC filtering
- Optional 5 V quadrature encoder connector with filtered A, B and index inputs
- TMP102 power-stage temperature monitor with a hardware gate-enable interlock
- DRV8323H VDS overcurrent shutdown configured for its lowest 0.06 V threshold
- 5 A input fuse, 30 V TVS protection and 200 uF of 50 V bulk bus capacitance

The existing USB-C connector inside `Microcontroller_RP2040` remains the 5 V
configuration/debug port. It is electrically separate from the new power-only
USB-C PD connector.

## USB-C PD provisioning

Before relying on the PD connector for motor power, program the STUSB4500 NVM
with PDO2 set to 12 V / 5 A and disable PDO3. The board uses the STUSB4500
`POWER_OK2` output to close the PD power-path MOSFET only after an explicit PDO2
contract, so an ordinary 5 V USB source cannot energize the motor bus.

A 12 V / 5 A contract requires a PD source that explicitly offers that profile
and a 5 A e-marked USB-C cable. The barrel connector is the XKB
DC-012A-5A-2.0 (6.4 mm outer / 2.0 mm center), wired center-positive.

## Firmware-facing signals

| Function | RP2040 pin |
| --- | --- |
| Phase A high / low PWM | GPIO0 / GPIO1 |
| Phase B high / low PWM | GPIO2 / GPIO3 |
| Phase C high / low PWM | GPIO4 / GPIO5 |
| Gate-driver enable command | GPIO6 |
| Gate-driver fault | GPIO7 |
| Current-sense calibration | GPIO8 |
| Hall A / B / C | GPIO9 / GPIO10 / GPIO11 |
| 5 V power-good | GPIO12 |
| Encoder A / B / index | GPIO13 / GPIO14 / GPIO15 |
| Temperature sensor SDA / SCL | GPIO16 / GPIO17 |
| Temperature alert | GPIO18 |
| Phase current A / B / C | ADC0 / ADC1 / ADC2 |
| DC-bus current | ADC3 |

## Revision status

The first-pass schematic and component placement are complete. Autorouting uses
tscircuit's default router (`routingDisabled` has been removed). The generated
route currently passes tscircuit's electrical and placement diagnostics, but
high-current motor and bus routes still require a manual copper and thermal
review before fabrication.

This is an engineering prototype, not a production-ready motor drive. Before
fabrication, verify the regulator compensation and magnetics, gate-drive
settings, MOSFET thermal limits, shunt power rating, creepage/clearance,
regenerative-energy handling, connector current rating and PCB copper
temperature rise against the final motor and power-supply specifications.

The INA240 reference inputs are split between 3.3 V and GND, placing zero bus
current near the middle of the ADC range. Firmware must calibrate this zero
offset and subtract it when calculating signed bus current. This makes reverse
current visible, but it does not absorb regenerative energy; the supply or an
external braking/clamping strategy must still keep VM within the hardware
ratings. The input ideal-diode controllers intentionally prevent regenerated
energy from flowing backward into either the USB-C source or barrel adapter.

The TMP102 defaults to comparator mode with an active-low alert. Its alert is
ANDed in hardware with the RP2040 enable command, so an asserted temperature
alert disables the DRV8323H even if firmware leaves GPIO6 high. Firmware should
program and verify the desired temperature limits during startup.

The DRV8323H VDS monitor is configured at its lowest 60 mV threshold for fast
short-circuit protection. It is not a precise 5 A current limiter: firmware
must use the three phase-shunt ADC channels to enforce the normal continuous
and peak motor-current limits, and must disable the gate driver on an ADC
overcurrent or `nFAULT` condition.
