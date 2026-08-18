import { Fragment } from "react"
import { DRV8323HRTAR } from "../imports/DRV8323HRTAR"
import {
  driverTrace,
  groundTrace,
  logicTrace,
  powerTrace,
  sections,
  senseTrace,
  sheets,
} from "./config"

const pwmChannels = [
  ["GPIO0", "INHA"],
  ["GPIO1", "INLA"],
  ["GPIO2", "INHB"],
  ["GPIO3", "INLB"],
  ["GPIO4", "INHC"],
  ["GPIO5", "INLC"],
] as const

export const GateDriverSection = () => (
  <>
    <DRV8323HRTAR
      name="U_GATE"
      pcbX={35.5}
      pcbY={-20}
      pcbRotation={90}
      schX={-8.4}
      schY={0}
      schWidth={5.2}
      schHeight={5.8}
      schPinArrangement={{
        leftSide: {
          pins: [34, 35, 36, 37, 38, 39, 30, 31, 25],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: [6, 7, 8, 15, 14, 13, 16, 17, 18],
          direction: "top-to-bottom",
        },
        topSide: {
          pins: [4, 5, 3, 2, 1, 33, 26, 29, 27, 28],
          direction: "left-to-right",
        },
        bottomSide: {
          pins: [40, 41, 32, 9, 10, 12, 11, 19, 20, 23, 22, 21, 24],
          direction: "left-to-right",
        },
      }}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />

    <resistor
      name="R_GATE_VM_LINK"
      resistance="0"
      footprint="1206"
      pcbX={28.5}
      pcbY={-28.5}
      schX={-12}
      schY={7.5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <capacitor
      name="C_GATE_VM"
      capacitance="100nF"
      footprint="0603"
      pcbX={34.5}
      pcbY={-29}
      schRotation={270}
      schX={-9}
      schY={7.5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <capacitor
      name="C_GATE_VM_BULK"
      capacitance="10uF"
      footprint="1206"
      pcbX={39.5}
      pcbY={-30}
      schRotation={270}
      schX={-6}
      schY={7.5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <capacitor
      name="C_DVDD"
      capacitance="1uF"
      footprint="0603"
      pcbX={27.5}
      pcbY={-19}
      schRotation={270}
      schX={-10}
      schY={-6.5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <capacitor
      name="C_CP"
      capacitance="47nF"
      footprint="0603"
      pcbX={33.5}
      pcbY={-25.5}
      pcbRotation={180}
      schOrientation="vertical"
      schX={-8}
      schY={6.5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <capacitor
      name="C_VCP"
      capacitance="1uF"
      footprint="1206"
      pcbX={37.5}
      pcbY={-26.5}
      pcbRotation={90}
      schOrientation="vertical"
      schX={-4}
      schY={6.5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_ENABLE_PD"
      resistance="100k"
      footprint="0603"
      pcbX={23}
      pcbY={-11}
      schRotation={270}
      schX={-13.9}
      schY={-3.2}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_FAULT_PU"
      resistance="10k"
      footprint="0603"
      pcbX={29}
      pcbY={-22}
      schRotation={270}
      schX={-13.25}
      schY={-1}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_CAL_PD"
      resistance="100k"
      footprint="0603"
      pcbX={24.5}
      pcbY={-14.5}
      schRotation={270}
      schX={-13.25}
      schY={-5.2}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_GAIN"
      resistance="47k"
      footprint="0603"
      pcbX={32}
      pcbY={-13.5}
      pcbRotation={90}
      schRotation={270}
      schX={-8}
      schY={-8.5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_IDRIVE"
      resistance="75k"
      footprint="0603"
      pcbX={35}
      pcbY={-11.5}
      pcbRotation={90}
      schRotation={270}
      schX={-5}
      schY={-8.5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    {/* 0 ohm selects the DRV8323H minimum 60 mV VDS threshold. This is
        catastrophic overcurrent/short-circuit protection; the 5 A operating
        limit is enforced from the three phase-shunt ADC measurements. */}
    <resistor
      name="R_VDS"
      resistance="0"
      footprint="0603"
      pcbX={38}
      pcbY={-11}
      pcbRotation={90}
      schRotation={270}
      schX={-2}
      schY={-8.5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_VREF_TOP"
      resistance="10k"
      footprint="0603"
      pcbX={28}
      pcbY={-12.6}
      pcbRotation={270}
      schX={-7.6}
      schY={-5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_VREF_BOT"
      resistance="10k"
      footprint="0603"
      pcbX={28}
      pcbY={-16}
      pcbRotation={270}
      schRotation={270}
      schX={-5}
      schY={-5.5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <capacitor
      name="C_VREF"
      capacitance="1uF"
      footprint="0402"
      maxDecouplingTraceLength="5.5mm"
      pcbX={30.91}
      pcbY={-19.1}
      pcbRotation={180}
      schRotation={270}
      schX={-2}
      schY={-5.5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />

    {pwmChannels.map(([gpio, driverPin], index) => (
      <Fragment key={driverPin}>
        <trace
          name={`PWM_${driverPin}`}
          from={`net.MCU_PWM_${driverPin}`}
          to={`.U_GATE > .${driverPin}`}
          schDisplayLabel={driverPin}
          {...logicTrace}
        />
      </Fragment>
    ))}
    <trace
      name="GATE_ENABLE_PD"
      from=".R_ENABLE_PD > .pin1"
      to=".U_GATE > .ENABLE"
      {...logicTrace}
    />
    <trace
      name="GATE_ENABLE_PD_GND"
      from=".R_ENABLE_PD > .pin2"
      to="net.GND"
      {...logicTrace}
    />
    <trace
      name="GATE_FAULT"
      from=".U_GATE > .nFAULT"
      to="net.MCU_GATE_FAULT"
      {...logicTrace}
    />
    <trace
      name="GATE_FAULT_PULLUP"
      from=".R_FAULT_PU > .pin1"
      to="net.V3V3"
      {...logicTrace}
    />
    <trace
      name="GATE_FAULT_PULLUP_SIGNAL"
      from=".R_FAULT_PU > .pin2"
      to=".U_GATE > .nFAULT"
      {...logicTrace}
    />
    <trace
      name="GATE_CAL"
      from="net.MCU_GATE_CAL"
      to=".U_GATE > .CAL"
      {...logicTrace}
    />
    <trace
      name="GATE_CAL_PD"
      from=".R_CAL_PD > .pin1"
      to=".U_GATE > .CAL"
      {...logicTrace}
    />
    <trace
      name="GATE_CAL_PD_GND"
      from=".R_CAL_PD > .pin2"
      to="net.GND"
      {...logicTrace}
    />

    <trace
      name="GATE_VM_LINK_INPUT"
      from="net.VM"
      to=".R_GATE_VM_LINK > .pin1"
      schDisplayLabel="VM"
      {...powerTrace}
    />
    <trace
      name="GATE_VM_LINK_OUTPUT"
      from=".R_GATE_VM_LINK > .pin2"
      to=".U_GATE > .VM"
      {...driverTrace}
    />
    <trace
      name="GATE_VDRAIN"
      from=".U_GATE > .VDRAIN"
      to=".R_GATE_VM_LINK > .pin2"
      {...driverTrace}
    />
    <trace
      name="GATE_VM_DECOUPLE"
      from=".C_GATE_VM > .pin1"
      to=".R_GATE_VM_LINK > .pin2"
      {...driverTrace}
    />
    <trace
      name="GATE_VM_DECOUPLE_GND"
      from=".C_GATE_VM > .pin2"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="GATE_VM_BULK"
      from=".C_GATE_VM_BULK > .pin1"
      to=".R_GATE_VM_LINK > .pin2"
      {...driverTrace}
    />
    <trace
      name="GATE_VM_BULK_GND"
      from=".C_GATE_VM_BULK > .pin2"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="CHARGE_PUMP_HIGH"
      from=".C_CP > .pin1"
      to=".U_GATE > .CPH"
      schDisplayLabel="CPH"
      {...driverTrace}
    />
    <trace
      name="CHARGE_PUMP_LOW"
      from=".C_CP > .pin2"
      to=".U_GATE > .CPL"
      schDisplayLabel="CPL"
      {...driverTrace}
    />
    <trace
      name="VCP_CAP_HIGH"
      from=".C_VCP > .pin1"
      to=".U_GATE > .VCP"
      schDisplayLabel="VCP"
      {...driverTrace}
    />
    <trace
      name="VCP_CAP_VM"
      from=".C_VCP > .pin2"
      to=".R_GATE_VM_LINK > .pin2"
      {...driverTrace}
    />
    <trace
      name="DVDD_DECOUPLE"
      from=".C_DVDD > .pin1"
      to=".U_GATE > .DVDD"
      schDisplayLabel="DVDD"
      {...driverTrace}
    />
    <trace
      name="DVDD_DECOUPLE_GND"
      from=".C_DVDD > .pin2"
      to="net.GND"
      {...logicTrace}
    />

    <trace
      name="MODE_6PWM"
      from=".U_GATE > .MODE"
      to="net.GND"
      schDisplayLabel="6PWM"
      {...logicTrace}
    />
    <trace
      name="GAIN_CONFIG"
      from=".U_GATE > .GAIN"
      to=".R_GAIN > .pin1"
      schDisplayLabel="GAIN_SET"
      {...logicTrace}
    />
    <trace
      name="GAIN_CONFIG_GND"
      from=".R_GAIN > .pin2"
      to="net.GND"
      {...logicTrace}
    />
    <trace
      name="IDRIVE_CONFIG"
      from=".U_GATE > .IDRIVE"
      to=".R_IDRIVE > .pin1"
      schDisplayLabel="IDRIVE_SET"
      {...logicTrace}
    />
    <trace
      name="IDRIVE_CONFIG_GND"
      from=".R_IDRIVE > .pin2"
      to="net.GND"
      {...logicTrace}
    />
    <trace
      name="VDS_CONFIG"
      from=".U_GATE > .VDS"
      to=".R_VDS > .pin1"
      schDisplayLabel="VDS_OCP"
      {...logicTrace}
    />
    <trace
      name="VDS_CONFIG_GND"
      from=".R_VDS > .pin2"
      to="net.GND"
      {...logicTrace}
    />
    <trace
      name="VREF_TOP_3V3"
      from=".R_VREF_TOP > .pin1"
      to="net.V3V3"
      {...logicTrace}
    />
    <trace
      name="VREF_MID"
      from=".R_VREF_TOP > .pin2"
      to=".R_VREF_BOT > .pin1"
      schDisplayLabel="VREF_1V65"
      {...senseTrace}
    />
    <trace
      name="VREF_DRIVER"
      from=".R_VREF_TOP > .pin2"
      to=".U_GATE > .VREF"
      schDisplayLabel="VREF_1V65"
      {...senseTrace}
    />
    <trace
      name="VREF_CAP"
      from=".C_VREF > .pin1"
      to=".U_GATE > .VREF"
      schDisplayLabel="VREF_1V65"
      {...senseTrace}
    />
    <trace
      name="VREF_BOTTOM_GND"
      from=".R_VREF_BOT > .pin2"
      to="net.GND"
      {...logicTrace}
    />
    <trace
      name="VREF_CAP_GND"
      from=".C_VREF > .pin2"
      to=".U_GATE > .AGND"
      {...logicTrace}
    />
    <trace
      name="GATE_AGND"
      from=".U_GATE > .AGND"
      to="net.GND"
      {...logicTrace}
    />
    <trace
      name="GATE_PGND"
      from=".U_GATE > .PGND"
      to="net.GND"
      {...logicTrace}
    />
    <trace
      name="GATE_EP_GND"
      from=".U_GATE > .EP"
      to="net.GND"
      {...logicTrace}
    />
  </>
)
