import { Fragment } from "react"
import { DRV8323HRTAR } from "../imports/DRV8323HRTAR"
import { logicTrace, sections, senseTrace, sheets } from "./config"

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
      pcbX={4}
      pcbY={0}
      schX={-8}
      schY={0}
      schWidth={4.2}
      schHeight={5}
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
          pins: [4, 5, 3, 2, 1, 33],
          direction: "left-to-right",
        },
        bottomSide: {
          pins: [40, 41, 32, 9, 10, 12, 11, 19, 20, 23, 22, 21, 24, 26, 29, 27, 28],
          direction: "left-to-right",
        },
      }}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />

    <capacitor
      name="C_GATE_VM"
      capacitance="1uF"
      footprint="1206"
      pcbX={-2}
      pcbY={8}
      schRotation={270}
      schX={-12}
      schY={6}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <capacitor
      name="C_DVDD"
      capacitance="1uF"
      footprint="0603"
      pcbX={-1}
      pcbY={-6}
      schRotation={270}
      schX={-10}
      schY={-6}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <capacitor
      name="C_CP"
      capacitance="47nF"
      footprint="0603"
      pcbX={2}
      pcbY={8}
      schOrientation="vertical"
      schX={-8}
      schY={6}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <capacitor
      name="C_VCP"
      capacitance="1uF"
      footprint="1206"
      pcbX={7}
      pcbY={8}
      schOrientation="vertical"
      schX={-4}
      schY={6}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_ENABLE_PD"
      resistance="100k"
      footprint="0603"
      pcbX={-2}
      pcbY={-2}
      schRotation={270}
      schX={-12}
      schY={-3}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_FAULT_PU"
      resistance="10k"
      footprint="0603"
      pcbX={-2}
      pcbY={0}
      schRotation={270}
      schX={-12}
      schY={-1}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_CAL_PD"
      resistance="100k"
      footprint="0603"
      pcbX={-2}
      pcbY={-4}
      schRotation={270}
      schX={-12}
      schY={-5}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_GAIN"
      resistance="47k"
      footprint="0603"
      pcbX={7}
      pcbY={-5}
      schRotation={270}
      schX={-8}
      schY={-7}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_IDRIVE"
      resistance="75k"
      footprint="0603"
      pcbX={10}
      pcbY={-5}
      schRotation={270}
      schX={-5}
      schY={-7}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_VDS"
      resistance="75k"
      footprint="0603"
      pcbX={13}
      pcbY={-5}
      schRotation={270}
      schX={-2}
      schY={-7}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_VREF_TOP"
      resistance="10k"
      footprint="0603"
      pcbX={10}
      pcbY={-7}
      schX={2}
      schY={-6}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <resistor
      name="R_VREF_BOT"
      resistance="10k"
      footprint="0603"
      pcbX={13}
      pcbY={-7}
      schRotation={270}
      schX={4}
      schY={-7}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />
    <capacitor
      name="C_VREF"
      capacitance="1uF"
      footprint="0603"
      pcbX={16}
      pcbY={-7}
      schRotation={270}
      schX={6}
      schY={-7}
      schSheetName={sheets.motor}
      schSectionName={sections.gateDriver}
    />

    {pwmChannels.map(([gpio, driverPin], index) => (
      <Fragment key={driverPin}>
        <trace
          name={`PWM_${driverPin}`}
          from={`.MCU > .U1 > .${gpio}`}
          to={`.U_GATE > .${driverPin}`}
          schDisplayLabel={driverPin}
          {...logicTrace}
        />
      </Fragment>
    ))}
    <trace
      name="GATE_ENABLE"
      from=".MCU > .U1 > .GPIO6"
      to=".U_GATE > .ENABLE"
      schDisplayLabel="GATE_ENABLE"
      {...logicTrace}
    />
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
      to=".MCU > .U1 > .GPIO7"
      schDisplayLabel="nFAULT"
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
      from=".MCU > .U1 > .GPIO8"
      to=".U_GATE > .CAL"
      schDisplayLabel="CSA_CAL"
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
      name="GATE_VM"
      from=".U_GATE > .VM"
      to="net.VM"
      {...logicTrace}
    />
    <trace
      name="GATE_VDRAIN"
      from=".U_GATE > .VDRAIN"
      to="net.VM"
      {...logicTrace}
    />
    <trace
      name="GATE_VM_DECOUPLE"
      from=".C_GATE_VM > .pin1"
      to=".U_GATE > .VM"
      {...logicTrace}
    />
    <trace
      name="GATE_VM_DECOUPLE_GND"
      from=".C_GATE_VM > .pin2"
      to="net.GND"
      {...logicTrace}
    />
    <trace
      name="CHARGE_PUMP_HIGH"
      from=".C_CP > .pin1"
      to=".U_GATE > .CPH"
      {...logicTrace}
    />
    <trace
      name="CHARGE_PUMP_LOW"
      from=".C_CP > .pin2"
      to=".U_GATE > .CPL"
      {...logicTrace}
    />
    <trace
      name="VCP_CAP_HIGH"
      from=".C_VCP > .pin1"
      to=".U_GATE > .VCP"
      {...logicTrace}
    />
    <trace
      name="VCP_CAP_VM"
      from=".C_VCP > .pin2"
      to="net.VM"
      {...logicTrace}
    />
    <trace
      name="DVDD_DECOUPLE"
      from=".C_DVDD > .pin1"
      to=".U_GATE > .DVDD"
      {...logicTrace}
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
      {...logicTrace}
    />
    <trace
      name="GAIN_CONFIG"
      from=".U_GATE > .GAIN"
      to=".R_GAIN > .pin1"
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
      to="net.GND"
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
