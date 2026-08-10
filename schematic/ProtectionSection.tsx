import { SN74LVC1G08DBVR } from "../imports/SN74LVC1G08DBVR"
import { TMP102AIDRLR } from "../imports/TMP102AIDRLR"
import { logicTrace, sections, sheets } from "./config"

export const ProtectionSection = () => (
  <>
    <TMP102AIDRLR
      name="U_TEMP"
      pcbX={4}
      pcbY={-20}
      schX={2}
      schY={0}
      schWidth={2.4}
      schHeight={3}
      schPinArrangement={{
        leftSide: [1, 6, 3],
        rightSide: [5, 4, 2],
      }}
      schSheetName={sheets.protection}
      schSectionName={sections.temperature}
    />
    <capacitor
      name="C_TEMP"
      capacitance="100nF"
      footprint="0603"
      pcbX={4}
      pcbY={-20}
      pcbRotation={180}
      layer="bottom"
      schRotation={270}
      schX={6}
      schY={2}
      schSheetName={sheets.protection}
      schSectionName={sections.temperature}
    />
    <resistor
      name="R_TEMP_SCL"
      resistance="4.7k"
      footprint="0603"
      pcbX={0}
      pcbY={-16}
      schRotation={270}
      schX={-6}
      schY={3}
      schSheetName={sheets.protection}
      schSectionName={sections.temperature}
    />
    <resistor
      name="R_TEMP_SDA"
      resistance="4.7k"
      footprint="0603"
      pcbX={4}
      pcbY={-16}
      schRotation={270}
      schX={-4}
      schY={3}
      schSheetName={sheets.protection}
      schSectionName={sections.temperature}
    />
    <resistor
      name="R_TEMP_ALERT"
      resistance="10k"
      footprint="0603"
      pcbX={8}
      pcbY={-16}
      schRotation={270}
      schX={-2}
      schY={3}
      schSheetName={sheets.protection}
      schSectionName={sections.temperature}
    />

    <SN74LVC1G08DBVR
      name="U_ENABLE_AND"
      pcbX={-4}
      pcbY={-20}
      schX={10}
      schY={0}
      schWidth={2}
      schHeight={2.4}
      schPinArrangement={{ leftSide: [1, 2], rightSide: [4], topSide: [5], bottomSide: [3] }}
      schSheetName={sheets.protection}
      schSectionName={sections.temperature}
    />
    <capacitor
      name="C_ENABLE_AND"
      capacitance="100nF"
      footprint="0603"
      pcbX={-4}
      pcbY={-20}
      pcbRotation={216}
      layer="bottom"
      schRotation={270}
      schX={10}
      schY={-3}
      schSheetName={sheets.protection}
      schSectionName={sections.temperature}
    />

    <trace name="TEMP_3V3" from=".U_TEMP > .V_POS" to="net.V3V3" {...logicTrace} />
    <trace name="TEMP_GND" from=".U_TEMP > .GND" to="net.GND" {...logicTrace} />
    <trace
      name="TEMP_ADDRESS_GND"
      from=".U_TEMP > .ADD0"
      to="net.GND"
      {...logicTrace}
    />
    <trace
      name="TEMP_DECOUPLE"
      from=".C_TEMP > .pin1"
      to=".U_TEMP > .V_POS"
      {...logicTrace}
    />
    <trace name="TEMP_DECOUPLE_GND" from=".C_TEMP > .pin2" to="net.GND" {...logicTrace} />

    <trace name="TEMP_SCL_PULLUP" from=".R_TEMP_SCL > .pin1" to="net.V3V3" {...logicTrace} />
    <trace
      name="TEMP_SCL"
      from=".R_TEMP_SCL > .pin2"
      to=".U_TEMP > .SCL"
      {...logicTrace}
    />
    <trace
      name="TEMP_SCL_MCU"
      from=".U_TEMP > .SCL"
      to="net.MCU_TEMP_SCL"
      schDisplayLabel="TEMP_SCL"
      {...logicTrace}
    />
    <trace name="TEMP_SDA_PULLUP" from=".R_TEMP_SDA > .pin1" to="net.V3V3" {...logicTrace} />
    <trace
      name="TEMP_SDA"
      from=".R_TEMP_SDA > .pin2"
      to=".U_TEMP > .SDA"
      {...logicTrace}
    />
    <trace
      name="TEMP_SDA_MCU"
      from=".U_TEMP > .SDA"
      to="net.MCU_TEMP_SDA"
      schDisplayLabel="TEMP_SDA"
      {...logicTrace}
    />
    <trace name="TEMP_ALERT_PULLUP" from=".R_TEMP_ALERT > .pin1" to="net.V3V3" {...logicTrace} />
    <trace
      name="TEMP_ALERT"
      from=".R_TEMP_ALERT > .pin2"
      to=".U_TEMP > .ALERT"
      {...logicTrace}
    />
    <trace
      name="TEMP_ALERT_MCU"
      from=".U_TEMP > .ALERT"
      to="net.MCU_TEMP_ALERT_n"
      schDisplayLabel="TEMP_ALERT_n"
      {...logicTrace}
    />

    <trace name="ENABLE_AND_3V3" from=".U_ENABLE_AND > .VCC" to="net.V3V3" {...logicTrace} />
    <trace name="ENABLE_AND_GND" from=".U_ENABLE_AND > .GND" to="net.GND" {...logicTrace} />
    <trace
      name="ENABLE_AND_DECOUPLE"
      from=".C_ENABLE_AND > .pin1"
      to=".U_ENABLE_AND > .VCC"
      {...logicTrace}
    />
    <trace name="ENABLE_AND_DECOUPLE_GND" from=".C_ENABLE_AND > .pin2" to="net.GND" {...logicTrace} />
    <trace
      name="ENABLE_AND_MCU_COMMAND"
      from="net.MCU_GATE_ENABLE_CMD"
      to=".U_ENABLE_AND > .A"
      schDisplayLabel="GATE_ENABLE_CMD"
      {...logicTrace}
    />
    <trace
      name="ENABLE_AND_TEMP_OK"
      from=".U_TEMP > .ALERT"
      to=".U_ENABLE_AND > .B"
      schDisplayLabel="TEMP_OK"
      {...logicTrace}
    />
    <trace
      name="ENABLE_AND_OUTPUT"
      from=".U_ENABLE_AND > .Y"
      to=".U_GATE > .ENABLE"
      {...logicTrace}
    />
  </>
)
