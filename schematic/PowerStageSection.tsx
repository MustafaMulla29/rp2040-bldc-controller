import { Fragment } from "react"
import { CSD18540Q5B } from "../imports/CSD18540Q5B"
import { WJ500V_5_08_03P_14_00A } from "../imports/WJ500V_5_08_03P_14_00A"
import {
  logicTrace,
  motorTrace,
  sections,
  senseTrace,
  sheets,
} from "./config"

type PhaseName = "A" | "B" | "C"

const sourcePins = ["S1", "S2", "S3"] as const
const drainPins = ["D1", "D3", "D4", "D5", "pin8_alt1"] as const

const phaseConfig: Array<{
  phase: PhaseName
  motorLabel: "U" | "V" | "W"
  pcbX: number
  schX: number
  connectorPin: "pin1" | "pin2" | "pin3"
  highGate: "GHA" | "GHB" | "GHC"
  switchNode: "SHA" | "SHB" | "SHC"
  lowGate: "GLA" | "GLB" | "GLC"
  sensePos: "SPA" | "SPB" | "SPC"
  senseNeg: "SNA" | "SNB" | "SNC"
  senseOut: "SOA" | "SOB" | "SOC"
  adc: "GPIO26_ADC0" | "GPIO27_ADC1" | "GPIO28_ADC2"
}> = [
  {
    phase: "A",
    motorLabel: "U",
    pcbX: 14,
    schX: 3.8,
    connectorPin: "pin1",
    highGate: "GHA",
    switchNode: "SHA",
    lowGate: "GLA",
    sensePos: "SPA",
    senseNeg: "SNA",
    senseOut: "SOA",
    adc: "GPIO26_ADC0",
  },
  {
    phase: "B",
    motorLabel: "V",
    pcbX: 30,
    schX: 8.7,
    connectorPin: "pin2",
    highGate: "GHB",
    switchNode: "SHB",
    lowGate: "GLB",
    sensePos: "SPB",
    senseNeg: "SNB",
    senseOut: "SOB",
    adc: "GPIO27_ADC1",
  },
  {
    phase: "C",
    motorLabel: "W",
    pcbX: 46,
    schX: 13.2,
    connectorPin: "pin3",
    highGate: "GHC",
    switchNode: "SHC",
    lowGate: "GLC",
    sensePos: "SPC",
    senseNeg: "SNC",
    senseOut: "SOC",
    adc: "GPIO28_ADC2",
  },
]

const PowerStagePhase = ({
  phase,
  motorLabel,
  pcbX,
  schX,
  connectorPin,
  highGate,
  switchNode,
  lowGate,
  sensePos,
  senseNeg,
  senseOut,
  adc,
}: (typeof phaseConfig)[number]) => {
  const qHigh = `Q_H${phase}`
  const qLow = `Q_L${phase}`
  const gateHigh = `R_GH${phase}`
  const gateLow = `R_GL${phase}`
  const gateHighPd = `R_GH${phase}_PD`
  const gateLowPd = `R_GL${phase}_PD`
  const shunt = `R_SHUNT_${phase}`
  const phaseNet = `net.${motorLabel}`
  const sourceNet = `net.LS_${phase}`

  return (
    <>
      <CSD18540Q5B
        name={qHigh}
        pcbX={pcbX}
        pcbY={12}
        pcbRotation={90}
        schX={schX}
        schY={5.5}
        schWidth={1.6}
        schHeight={2}
        schSheetName={sheets.motor}
        schSectionName={sections.powerStage}
      />
      <CSD18540Q5B
        name={qLow}
        pcbX={pcbX}
        pcbY={-2}
        pcbRotation={90}
        schX={schX}
        schY={-1}
        schWidth={1.6}
        schHeight={2}
        schSheetName={sheets.motor}
        schSectionName={sections.powerStage}
      />
      <resistor
        name={gateHigh}
        resistance="10"
        footprint="0603"
        pcbX={pcbX - 6.5}
        pcbY={12}
        schX={schX - 2.8}
        schY={7.2}
        schSheetName={sheets.motor}
        schSectionName={sections.powerStage}
      />
      <resistor
        name={gateLow}
        resistance="10"
        footprint="0603"
        pcbX={pcbX - 6.5}
        pcbY={-2}
        schX={schX - 2.8}
        schY={-2.7}
        schSheetName={sheets.motor}
        schSectionName={sections.powerStage}
      />
      <resistor
        name={gateHighPd}
        resistance="100k"
        footprint="0603"
        pcbX={pcbX - 5.5}
        pcbY={8.5}
        schRotation={270}
        schX={schX}
        schY={2.3}
        schSheetName={sheets.motor}
        schSectionName={sections.powerStage}
      />
      <resistor
        name={gateLowPd}
        resistance="100k"
        footprint="0603"
        pcbX={pcbX - 5.5}
        pcbY={-5.5}
        schRotation={270}
        schX={schX}
        schY={-7}
        schSheetName={sheets.motor}
        schSectionName={sections.powerStage}
      />
      <resistor
        name={shunt}
        resistance="5m"
        footprint="2512"
        manufacturerPartNumber="RLP25FEGMR005"
        supplierPartNumbers={{ jlcpcb: ["C393074"] }}
        pcbX={pcbX}
        pcbY={-12}
        schRotation={270}
        schX={schX}
        schY={-9}
        schSheetName={sheets.motor}
        schSectionName={sections.powerStage}
      />

      {drainPins.map((pin) => (
        <Fragment key={`${qHigh}-${pin}`}>
          <trace
            name={`${qHigh}_${pin}_VM`}
            from={`.${qHigh} > .${pin}`}
            to="net.VM"
            {...motorTrace}
          />
        </Fragment>
      ))}
      {sourcePins.map((pin) => (
        <Fragment key={`${qHigh}-${pin}`}>
          <trace
            name={`${qHigh}_${pin}_PHASE`}
            from={`.${qHigh} > .${pin}`}
            to={phaseNet}
            {...motorTrace}
          />
        </Fragment>
      ))}
      {drainPins.map((pin) => (
        <Fragment key={`${qLow}-${pin}`}>
          <trace
            name={`${qLow}_${pin}_PHASE`}
            from={`.${qLow} > .${pin}`}
            to={phaseNet}
            {...motorTrace}
          />
        </Fragment>
      ))}
      {sourcePins.map((pin) => (
        <Fragment key={`${qLow}-${pin}`}>
          <trace
            name={`${qLow}_${pin}_SHUNT`}
            from={`.${qLow} > .${pin}`}
            to={sourceNet}
            {...motorTrace}
          />
        </Fragment>
      ))}

      <trace
        name={`${phase}_HIGH_GATE_DRIVE`}
        from={`.U_GATE > .${highGate}`}
        to={`.${gateHigh} > .pin1`}
        {...logicTrace}
      />
      <trace
        name={`${phase}_HIGH_GATE`}
        from={`.${gateHigh} > .pin2`}
        to={`.${qHigh} > .G`}
        {...logicTrace}
      />
      <trace
        name={`${phase}_HIGH_GATE_PD`}
        from={`.${gateHighPd} > .pin1`}
        to={`.${qHigh} > .G`}
        {...logicTrace}
      />
      <trace
        name={`${phase}_HIGH_GATE_PD_PHASE`}
        from={`.${gateHighPd} > .pin2`}
        to={phaseNet}
        {...logicTrace}
      />
      <trace
        name={`${phase}_LOW_GATE_DRIVE`}
        from={`.U_GATE > .${lowGate}`}
        to={`.${gateLow} > .pin1`}
        {...logicTrace}
      />
      <trace
        name={`${phase}_LOW_GATE`}
        from={`.${gateLow} > .pin2`}
        to={`.${qLow} > .G`}
        {...logicTrace}
      />
      <trace
        name={`${phase}_LOW_GATE_PD`}
        from={`.${gateLowPd} > .pin1`}
        to={`.${qLow} > .G`}
        {...logicTrace}
      />
      <trace
        name={`${phase}_LOW_GATE_PD_SOURCE`}
        from={`.${gateLowPd} > .pin2`}
        to={sourceNet}
        {...logicTrace}
      />
      <trace
        name={`${phase}_SWITCH_NODE`}
        from={`.U_GATE > .${switchNode}`}
        to={phaseNet}
        {...motorTrace}
      />
      <trace
        name={`${phase}_MOTOR_OUTPUT`}
        from={phaseNet}
        to={`.J_MOTOR > .${connectorPin}`}
        {...motorTrace}
      />
      <trace
        name={`${phase}_SHUNT_HIGH`}
        from={sourceNet}
        to={`.${shunt} > .pin1`}
        {...motorTrace}
      />
      <trace
        name={`${phase}_SHUNT_GND`}
        from={`.${shunt} > .pin2`}
        to="net.GND"
        {...motorTrace}
      />
      <trace
        name={`${phase}_SHUNT_SENSE_POS`}
        from={`.U_GATE > .${sensePos}`}
        to={`.${shunt} > .pin1`}
        {...senseTrace}
      />
      <trace
        name={`${phase}_SHUNT_SENSE_NEG`}
        from={`.U_GATE > .${senseNeg}`}
        to={`.${shunt} > .pin2`}
        {...senseTrace}
      />
      <trace
        name={`${phase}_CURRENT_ADC`}
        from={`.U_GATE > .${senseOut}`}
        to={`.MCU > .U1 > .${adc}`}
        {...senseTrace}
      />
    </>
  )
}

export const PowerStageSection = () => (
  <>
    <WJ500V_5_08_03P_14_00A
      name="J_MOTOR"
      pcbX={51}
      pcbY={31}
      pcbRotation={180}
      schX={9}
      schY={9}
      schWidth={1.2}
      schHeight={2}
      schPinArrangement={{ leftSide: [1, 2, 3] }}
      schSheetName={sheets.motor}
      schSectionName={sections.powerStage}
    />
    {phaseConfig.map((config) => (
      <PowerStagePhase key={config.phase} {...config} />
    ))}
  </>
)
