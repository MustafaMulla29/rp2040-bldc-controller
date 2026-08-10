# RP2040 single-axis BLDC controller

This tscircuit project is the first hardware revision of a 12-24 V,
single-motor BLDC controller.

## Current architecture

- Complete RP2040 support circuit from `@tscircuit/common`
- DRV8323H hardware-configured three-phase gate driver in six-PWM mode
- Six CSD18540Q5B 60 V N-channel MOSFETs
- Three 5 mOhm low-side phase shunts
- DRV8323 internal current-sense amplifiers connected to RP2040 ADC0-ADC2
- INA240 high-side DC-bus current monitor connected to ADC3
- 60 V-input LMR16020 5 V buck supply
- 5 V Hall-sensor connector with 5 V-to-3.3 V dividers and RC filtering
- Optional 5 V quadrature encoder connector with filtered A, B and index inputs
- TMP102 power-stage temperature monitor with a hardware gate-enable interlock
- DRV8323H VDS overcurrent shutdown configured for its lowest 0.06 V threshold
- 5 A input fuse, 33 V TVS protection and 200 uF bulk bus capacitance

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
tscircuit's default router (`routingDisabled` has been removed). The route must
be completed and pass PCB DRC before fabrication. High-current motor and bus
routes also require a manual copper and thermal review.

This is an engineering prototype, not a production-ready motor drive. Before
fabrication, verify the regulator compensation and magnetics, gate-drive
settings, MOSFET thermal limits, shunt power rating, creepage/clearance,
regenerative-energy handling, connector current rating and PCB copper
temperature rise against the final motor and power-supply specifications.

The TMP102 defaults to comparator mode with an active-low alert. Its alert is
ANDed in hardware with the RP2040 enable command, so an asserted temperature
alert disables the DRV8323H even if firmware leaves GPIO6 high. Firmware should
program and verify the desired temperature limits during startup.

The DRV8323H VDS monitor is configured at its lowest 60 mV threshold for fast
short-circuit protection. It is not a precise 5 A current limiter: firmware
must use the three phase-shunt ADC channels to enforce the normal continuous
and peak motor-current limits, and must disable the gate driver on an ADC
overcurrent or `nFAULT` condition.
