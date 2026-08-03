import { Fragment } from "react"
import { logicTrace, sections, sheets } from "./config"

const encoderChannels = [
  { name: "A", connectorPin: "pin3", gpio: "GPIO13", schY: 5 },
  { name: "B", connectorPin: "pin4", gpio: "GPIO14", schY: 0 },
  { name: "Z", connectorPin: "pin5", gpio: "GPIO15", schY: -5 },
] as const

export const EncoderSection = () => (
  <>
    <pinheader
      name="J_ENCODER"
      pinCount={5}
      gender="male"
      pitch="2.54mm"
      pinLabels={["ENC_5V", "GND", "ENC_A", "ENC_B", "ENC_Z"]}
      showSilkscreenPinLabels
      pcbX={-45}
      pcbY={-40}
      schX={7}
      schY={0}
      schWidth={1.2}
      schSheetName={sheets.encoder}
      schSectionName={sections.encoder}
    />

    {encoderChannels.map(({ name, connectorPin, gpio, schY }, index) => (
      <Fragment key={name}>
        <resistor
          name={`R_ENC_${name}_TOP`}
          resistance="10k"
          footprint="0603"
          pcbX={-36}
          pcbY={-33 - index * 3.5}
          schX={-10}
          schY={schY}
          schSheetName={sheets.encoder}
          schSectionName={sections.encoder}
        />
        <resistor
          name={`R_ENC_${name}_BOT`}
          resistance="18k"
          footprint="0603"
          pcbX={-32}
          pcbY={-33 - index * 3.5}
          schRotation={270}
          schX={-5}
          schY={schY - 1}
          schSheetName={sheets.encoder}
          schSectionName={sections.encoder}
        />
        <capacitor
          name={`C_ENC_${name}`}
          capacitance="1nF"
          footprint="0603"
          pcbX={-28}
          pcbY={-33 - index * 3.5}
          schRotation={270}
          schX={-2}
          schY={schY - 1}
          schSheetName={sheets.encoder}
          schSectionName={sections.encoder}
        />
        <trace
          name={`ENC_${name}_INPUT`}
          from={`.J_ENCODER > .${connectorPin}`}
          to={`.R_ENC_${name}_TOP > .pin1`}
          {...logicTrace}
        />
        <trace
          name={`ENC_${name}_DIVIDER`}
          from={`.R_ENC_${name}_TOP > .pin2`}
          to={`.R_ENC_${name}_BOT > .pin1`}
          {...logicTrace}
        />
        <trace
          name={`ENC_${name}_FILTER`}
          from={`.R_ENC_${name}_TOP > .pin2`}
          to={`.C_ENC_${name} > .pin1`}
          {...logicTrace}
        />
        <trace
          name={`ENC_${name}_GPIO`}
          from={`.R_ENC_${name}_TOP > .pin2`}
          to={`.MCU > .U1 > .${gpio}`}
          schDisplayLabel={`ENC_${name}`}
          {...logicTrace}
        />
        <trace
          name={`ENC_${name}_PULLDOWN_GND`}
          from={`.R_ENC_${name}_BOT > .pin2`}
          to="net.GND"
          {...logicTrace}
        />
        <trace
          name={`ENC_${name}_CAP_GND`}
          from={`.C_ENC_${name} > .pin2`}
          to="net.GND"
          {...logicTrace}
        />
      </Fragment>
    ))}

    <trace
      name="ENCODER_SUPPLY"
      from=".J_ENCODER > .pin1"
      to="net.V5"
      schDisplayLabel="5V"
      {...logicTrace}
    />
    <trace
      name="ENCODER_GROUND"
      from=".J_ENCODER > .pin2"
      to="net.GND"
      {...logicTrace}
    />
  </>
)
