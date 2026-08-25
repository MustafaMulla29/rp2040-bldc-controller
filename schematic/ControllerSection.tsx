import { Microcontroller_RP2040 } from "@tscircuit/common"
import { Fragment } from "react"
import { logicTrace, sections, sheets } from "./config"

const hallChannels = [
  { name: "A", connectorPin: "pin3", schY: 5 },
  { name: "B", connectorPin: "pin4", schY: 0 },
  { name: "C", connectorPin: "pin5", schY: -5 },
] as const

export const ControllerSection = () => (
  <>
    <Microcontroller_RP2040
      name="MCU"
      connections={{
        GPIO0: "net.MCU_PWM_INHA",
        GPIO1: "net.MCU_PWM_INLA",
        GPIO2: "net.MCU_PWM_INHB",
        GPIO3: "net.MCU_PWM_INLB",
        GPIO4: "net.MCU_PWM_INHC",
        GPIO5: "net.MCU_PWM_INLC",
        GPIO6: "net.MCU_GATE_ENABLE_CMD",
        GPIO7: "net.MCU_GATE_FAULT",
        GPIO8: "net.MCU_GATE_CAL",
        GPIO9: "net.MCU_HALL_A_GPIO",
        GPIO10: "net.MCU_HALL_B_GPIO",
        GPIO11: "net.MCU_HALL_C_GPIO",
        GPIO12: "net.MCU_POWER_GOOD",
        GPIO13: "net.MCU_ENC_A_GPIO",
        GPIO14: "net.MCU_ENC_B_GPIO",
        GPIO15: "net.MCU_ENC_Z_GPIO",
        GPIO16: "net.MCU_TEMP_SDA",
        GPIO17: "net.MCU_TEMP_SCL",
        GPIO18: "net.MCU_TEMP_ALERT_n",
        GPIO26_ADC0: "net.MCU_A_CURRENT_ADC",
        GPIO27_ADC1: "net.MCU_B_CURRENT_ADC",
        GPIO28_ADC2: "net.MCU_C_CURRENT_ADC",
        GPIO29_ADC3: "net.MCU_BUS_CURRENT",
      }}
      schAutoLayoutEnabled
      schSheetName={sheets.controller}
      pcbX={0}
      pcbY={-4.25}
      pcbRotation={180}
      schX={-4}
      schY={8}
    />

    <pinheader
      name="J_HALL"
      doNotPlace
      pinCount={5}
      gender="male"
      pitch="2.54mm"
      pinLabels={["HALL_5V", "GND", "HALL_A", "HALL_B", "HALL_C"]}
      showSilkscreenPinLabels
      pcbX={-51}
      pcbY={-8}
      pcbRotation={90}
      schX={7}
      schY={0}
      schWidth={1.2}
      schSheetName={sheets.hall}
      schSectionName={sections.hall}
    />

    {hallChannels.map(({ name, connectorPin, schY }, index) => (
      <Fragment key={name}>
        <resistor
          name={`R_HALL_${name}_TOP`}
          resistance="10k"
          footprint="0603"
          pcbX={-47}
          pcbY={-5 - index * 5}
          schX={-10}
          schY={schY}
          schSheetName={sheets.hall}
          schSectionName={sections.hall}
        />
        <resistor
          name={`R_HALL_${name}_BOT`}
          resistance="18k"
          footprint="0603"
          pcbX={-41}
          pcbY={-5 - index * 5}
          schRotation={270}
          schX={-5}
          schY={schY - 1}
          schSheetName={sheets.hall}
          schSectionName={sections.hall}
        />
        <capacitor
          name={`C_HALL_${name}`}
          capacitance="1nF"
          footprint="0603"
          pcbX={-35}
          pcbY={-5 - index * 5}
          schRotation={270}
          schX={-2}
          schY={schY - 1}
          schSheetName={sheets.hall}
          schSectionName={sections.hall}
        />
        <trace
          name={`HALL_${name}_INPUT`}
          from={`.J_HALL > .${connectorPin}`}
          to={`.R_HALL_${name}_TOP > .pin1`}
          {...logicTrace}
        />
        <trace
          name={`HALL_${name}_DIVIDER`}
          from={`.R_HALL_${name}_TOP > .pin2`}
          to={`.R_HALL_${name}_BOT > .pin1`}
          {...logicTrace}
        />
        <trace
          name={`HALL_${name}_FILTER`}
          from={`.R_HALL_${name}_TOP > .pin2`}
          to={`.C_HALL_${name} > .pin1`}
          {...logicTrace}
        />
        <trace
          name={`HALL_${name}_GPIO`}
          from={`.R_HALL_${name}_TOP > .pin2`}
          to={`net.MCU_HALL_${name}_GPIO`}
          schDisplayLabel={`HALL_${name}`}
          {...logicTrace}
        />
        <trace
          name={`HALL_${name}_PULLDOWN_GND`}
          from={`.R_HALL_${name}_BOT > .pin2`}
          to="net.GND"
          {...logicTrace}
        />
        <trace
          name={`HALL_${name}_CAP_GND`}
          from={`.C_HALL_${name} > .pin2`}
          to="net.GND"
          {...logicTrace}
        />
      </Fragment>
    ))}

    <trace
      name="HALL_SUPPLY"
      from=".J_HALL > .pin1"
      to="net.V5"
      schDisplayLabel="5V"
      {...logicTrace}
    />
    <trace
      name="HALL_GROUND"
      from=".J_HALL > .pin2"
      to="net.GND"
      {...logicTrace}
    />
    <trace
      name="MCU_GROUND_JOIN"
      from=".MCU > .U1 > .GND"
      to="net.GND"
      {...logicTrace}
    />
    <trace
      name="MCU_3V3_EXPORT"
      from=".MCU > .U3 > .VOUT"
      to="net.V3V3"
      schDisplayLabel="3V3"
      {...logicTrace}
    />
    <trace
      name="MCU_VSYS_5V"
      from=".MCU > .U3 > .VIN"
      to="net.V5"
      schDisplayLabel="5V"
      {...logicTrace}
    />
  </>
)
