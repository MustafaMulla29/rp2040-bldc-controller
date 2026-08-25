import { B5819W_SL } from "../imports/B5819W_SL";
import { A_30P06 } from "../imports/A_30P06";
import { DC_012A_5A_2_0 } from "../imports/DC_012A_5A_2_0";
import { ESDA25P35_1U1M } from "../imports/ESDA25P35_1U1M";
import { HX_TYPE_C_16PIN_5A_143 } from "../imports/HX_TYPE_C_16PIN_5A_143";
import { LM74700QDBVRQ1 } from "../imports/LM74700QDBVRQ1";
import { MS50N06 } from "../imports/MS50N06";
import { STUSB4500QTR } from "../imports/STUSB4500QTR";
import { Fragment } from "react";
import {
  groundTrace,
  highCurrentTrace,
  logicTrace,
  powerTrace,
  sections,
  sheets,
} from "./config";

type IdealDiodePathProps = {
  id: "PD" | "BARREL";
  inputNet: "net.PD_CONTRACT" | "net.BARREL_RAW";
  pcbX: number;
  pcbY: number;
  schX: number;
  schY: number;
};

const IdealDiodePath = ({
  id,
  inputNet,
  pcbX,
  pcbY,
  schX,
  schY,
}: IdealDiodePathProps) => (
  <>
    <LM74700QDBVRQ1
      name={`U_${id}_OR`}
      pcbX={pcbX}
      pcbY={pcbY}
      schX={schX}
      schY={schY}
      schWidth={2.2}
      schHeight={3}
      schPinArrangement={{
        leftSide: [6, 3, 1],
        rightSide: [4, 5],
        bottomSide: [2],
      }}
      schSheetName={sheets.powerInput}
      schSectionName={sections.inputSelection}
    />
    <MS50N06
      name={`Q_${id}_OR`}
      pcbX={pcbX + 7.8}
      pcbY={id === "BARREL" ? pcbY : pcbY + 1.5}
      pcbRotation={180}
      schX={schX + 4.5}
      schY={schY}
      schSheetName={sheets.powerInput}
      schSectionName={sections.inputSelection}
    />
    <capacitor
      name={`C_${id}_VCAP`}
      capacitance="100nF"
      footprint="0603"
      pcbX={id === "BARREL" ? pcbX : pcbX + 0.3}
      pcbY={id === "BARREL" ? pcbY + 4 : pcbY + 3.5}
      schRotation={270}
      schX={schX - 2.5}
      schY={schY + 1.2}
      schSheetName={sheets.powerInput}
      schSectionName={sections.inputSelection}
    />
    <capacitor
      name={`C_${id}_INPUT`}
      capacitance="100nF"
      footprint="0603"
      pcbX={id === "BARREL" ? pcbX : pcbX + 0.7}
      pcbY={id === "BARREL" ? pcbY - 4 : pcbY - 3.5}
      schRotation={270}
      schX={schX - 2.5}
      schY={schY - 1.5}
      schSheetName={sheets.powerInput}
      schSectionName={sections.inputSelection}
    />

    <trace
      name={`${id}_OR_FET_SOURCE`}
      from={`.Q_${id}_OR > .S`}
      to={inputNet}
      {...highCurrentTrace}
    />
    <trace
      name={`${id}_OR_FET_DRAIN`}
      from={`.Q_${id}_OR > .D`}
      to="net.VIN_SELECTED"
      {...highCurrentTrace}
    />
    <trace
      name={`${id}_OR_ANODE_SENSE`}
      from={`.U_${id}_OR > .ANODE`}
      to={inputNet}
      {...logicTrace}
    />
    <trace
      name={`${id}_OR_CATHODE_SENSE`}
      from={`.U_${id}_OR > .CATHODE`}
      to="net.VIN_SELECTED"
      {...logicTrace}
    />
    <trace
      name={`${id}_OR_GATE`}
      from={`.U_${id}_OR > .GATE`}
      to={`.Q_${id}_OR > .G`}
      {...logicTrace}
    />
    <trace
      name={`${id}_OR_ENABLE`}
      from={`.U_${id}_OR > .EN`}
      to={inputNet}
      {...logicTrace}
    />
    <trace
      name={`${id}_OR_GROUND`}
      from={`.U_${id}_OR > .GND`}
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name={`${id}_OR_VCAP`}
      from={`.U_${id}_OR > .VCAP`}
      to={`.C_${id}_VCAP > .pin1`}
      {...logicTrace}
    />
    <trace
      name={`${id}_OR_VCAP_RETURN`}
      from={`.C_${id}_VCAP > .pin2`}
      to={inputNet}
      {...logicTrace}
    />
    <trace
      name={`${id}_INPUT_BYPASS`}
      from={`.C_${id}_INPUT > .pin1`}
      to={inputNet}
      {...logicTrace}
    />
    <trace
      name={`${id}_INPUT_BYPASS_GND`}
      from={`.C_${id}_INPUT > .pin2`}
      to="net.GND"
      {...groundTrace}
    />
  </>
);

export const UsbPdPowerSection = () => (
  <>
    <HX_TYPE_C_16PIN_5A_143
      name="J_PD"
      noConnect={["pin22", "pin23", "pin24", "pin25", "pin26", "pin28"]}
      pcbX={-42}
      pcbY={35.2}
      pcbRotation={180}
      schX={-10}
      schY={6.3}
      schWidth={2.8}
      schHeight={5.5}
      schPinArrangement={{
        leftSide: [27, 21, 22, 23, 24, 25, 26, 28],
        topSide: [18, 19],
        bottomSide: [17, 20, 13, 14, 15, 16],
      }}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <STUSB4500QTR
      name="U_PD"
      noConnect={[
        "NC",
        "DISCH",
        "ATTACH",
        "POWER_OK3",
        "GPIO",
        "VBUS_EN_SNK",
        "A_B_SIDE",
        "ALERT",
      ]}
      pcbX={-39}
      pcbY={25.5}
      pcbRotation={180}
      schX={0}
      schY={5.3}
      schWidth={4}
      schHeight={6}
      schPinArrangement={{
        leftSide: [1, 2, 5, 4, 6, 7, 8, 12, 13],
        rightSide: [24, 18, 20, 14, 11, 15, 16, 17, 19, 9],
        topSide: [23, 21, 22],
        bottomSide: [10, 25, 3],
      }}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <ESDA25P35_1U1M
      name="D_PD_CC1"
      pcbX={-37.8}
      pcbY={31.1}
      pcbRotation={90}
      schRotation={270}
      schX={-5.5}
      schY={1}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <ESDA25P35_1U1M
      name="D_PD_CC2"
      pcbX={-39.5}
      pcbY={31.1}
      pcbRotation={90}
      schRotation={270}
      schX={-3}
      schY={1}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <ESDA25P35_1U1M
      name="D_PD_VBUS"
      pcbX={-45.5}
      pcbY={26.5}
      pcbRotation={90}
      schRotation={270}
      schX={10}
      schY={7.5}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <capacitor
      name="C_PD_VDD"
      capacitance="1uF"
      footprint="0603"
      maxDecouplingTraceLength="3mm"
      pcbX={-34.5}
      pcbY={27.6}
      schRotation={270}
      schX={7}
      schY={8}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <capacitor
      name="C_PD_VSYS"
      capacitance="100nF"
      footprint="0402"
      maxDecouplingTraceLength="3mm"
      pcbX={-34.8}
      pcbY={23.8}
      schRotation={270}
      schX={3}
      schY={8.5}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <capacitor
      name="C_PD_1V2"
      capacitance="1uF"
      footprint="0402"
      maxDecouplingTraceLength="3mm"
      pcbX={-35.2}
      pcbY={22.6}
      schRotation={270}
      schX={-2}
      schY={8.5}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <capacitor
      name="C_PD_2V7"
      capacitance="1uF"
      footprint="0402"
      maxDecouplingTraceLength="3mm"
      pcbX={-34.8}
      pcbY={26.1}
      schRotation={270}
      schX={0.5}
      schY={8.5}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <resistor
      name="R_PD_VSYS_FILTER"
      resistance="10"
      footprint="0402"
      pcbX={-33.8}
      pcbY={24.9}
      pcbRotation={180}
      schX={3}
      schY={10}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <resistor
      name="R_PD_SCL_SER"
      resistance="22"
      footprint="0402"
      pcbX={-43.5}
      pcbY={26.75}
      pcbRotation={180}
      schX={-1}
      schY={1.5}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <resistor
      name="R_PD_SDA_SER"
      resistance="22"
      footprint="0402"
      pcbX={-43.5}
      pcbY={25.75}
      pcbRotation={180}
      schX={2}
      schY={1.5}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <resistor
      name="R_PD_RESET"
      resistance="10k"
      footprint="0402"
      pcbX={-42.8}
      pcbY={28}
      pcbRotation={180}
      schRotation={270}
      schX={-7}
      schY={3}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />

    <B5819W_SL
      name="D_PD_SENSE"
      pcbX={-29.5}
      pcbY={24.5}
      schX={7}
      schY={3}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <resistor
      name="R_PD_SENSE_CHARGE"
      resistance="470"
      footprint="0603"
      pcbX={-30.2}
      pcbY={27.6}
      pcbRotation={0}
      schX={7}
      schY={2}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <resistor
      name="R_PD_SENSE_LIMIT"
      resistance="1k"
      footprint="0603"
      pcbX={-32}
      pcbY={22.5}
      schX={10}
      schY={2}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <capacitor
      name="C_PD_SENSE"
      capacitance="1uF"
      footprint="0603"
      pcbX={-29}
      pcbY={22.5}
      schRotation={270}
      schX={8.5}
      schY={0}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />

    <A_30P06
      name="Q_PD_SWITCH"
      pcbX={-31.7}
      pcbY={34.4}
      pcbRotation={180}
      schX={12.8}
      schY={6}
      schWidth={2.5}
      schHeight={4}
      schPinArrangement={{
        leftSide: [1, 2, 3, 4],
        rightSide: [5, 6, 7, 8, 9, 10, 11],
      }}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <resistor
      name="R_PD_GATE_DRIVE"
      resistance="22k"
      footprint="0603"
      pcbX={-27.5}
      pcbY={26.7}
      pcbRotation={90}
      schX={10}
      schY={4}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <resistor
      name="R_PD_GATE_PULLUP"
      resistance="100k"
      footprint="0603"
      pcbX={-25.5}
      pcbY={23.5}
      schRotation={270}
      schX={11.8}
      schY={9}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />
    <capacitor
      name="C_PD_GATE"
      capacitance="100nF"
      footprint="0603"
      pcbX={-22.5}
      pcbY={25.5}
      schRotation={270}
      schX={14.3}
      schY={9}
      schSheetName={sheets.powerInput}
      schSectionName={sections.usbPd}
    />

    <DC_012A_5A_2_0
      name="J_BARREL"
      noConnect={["SWITCH"]}
      pcbX={-50}
      pcbY={6}
      schX={-12}
      schY={-7}
      schSheetName={sheets.powerInput}
      schSectionName={sections.inputSelection}
    />

    <IdealDiodePath
      id="PD"
      inputNet="net.PD_CONTRACT"
      pcbX={-22.7}
      pcbY={32}
      schX={-5}
      schY={-3}
    />
    <IdealDiodePath
      id="BARREL"
      inputNet="net.BARREL_RAW"
      pcbX={-40}
      pcbY={1}
      schX={-5}
      schY={-7}
    />
    <capacitor
      name="C_VIN_SELECTED"
      capacitance="1uF"
      footprint="1206"
      pcbX={-16}
      pcbY={24}
      schRotation={270}
      schX={3}
      schY={-5}
      schSheetName={sheets.powerInput}
      schSectionName={sections.inputSelection}
    />

    {([18, 19] as const).map((pin) => (
      <Fragment key={`PD_VBUS_${pin}`}>
        <trace
          name={`PD_VBUS_${pin}`}
          from={`.J_PD > .pin${pin}`}
          to="net.PD_VBUS_RAW"
          {...powerTrace}
        />
      </Fragment>
    ))}
    {([17, 20] as const).map((pin) => (
      <Fragment key={`PD_GND_${pin}`}>
        <trace
          name={`PD_GND_${pin}`}
          from={`.J_PD > .pin${pin}`}
          to="net.GND"
          {...groundTrace}
        />
      </Fragment>
    ))}
    {([13, 14, 15, 16] as const).map((pin) => (
      <Fragment key={`PD_SHELL_${pin}`}>
        <trace
          name={`PD_SHELL_${pin}`}
          from={`.J_PD > .pin${pin}`}
          to="net.GND"
          {...groundTrace}
        />
      </Fragment>
    ))}

    <trace
      name="PD_CONNECTOR_CC1"
      from=".J_PD > .pin27"
      to="net.PD_CC1"
      {...logicTrace}
    />
    <trace
      name="PD_CONNECTOR_CC2"
      from=".J_PD > .pin21"
      to="net.PD_CC2"
      {...logicTrace}
    />
    <trace
      name="PD_CONTROLLER_CC1"
      from=".U_PD > .CC1"
      to="net.PD_CC1"
      {...logicTrace}
    />
    <trace
      name="PD_CONTROLLER_CC2"
      from=".U_PD > .CC2"
      to="net.PD_CC2"
      {...logicTrace}
    />
    <trace
      name="PD_DEAD_BATTERY_CC1"
      from=".U_PD > .CC1DB"
      to="net.PD_CC1"
      {...logicTrace}
    />
    <trace
      name="PD_DEAD_BATTERY_CC2"
      from=".U_PD > .CC2DB"
      to="net.PD_CC2"
      {...logicTrace}
    />
    <trace
      name="PD_CC1_ESD"
      from=".D_PD_CC1 > .IO"
      to="net.PD_CC1"
      {...logicTrace}
    />
    <trace
      name="PD_CC1_ESD_GND"
      from=".D_PD_CC1 > .GND"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="PD_CC2_ESD"
      from=".D_PD_CC2 > .IO"
      to="net.PD_CC2"
      {...logicTrace}
    />
    <trace
      name="PD_CC2_ESD_GND"
      from=".D_PD_CC2 > .GND"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="PD_VBUS_ESD"
      from=".D_PD_VBUS > .IO"
      to="net.PD_VBUS_RAW"
      {...powerTrace}
    />
    <trace
      name="PD_VBUS_ESD_GND"
      from=".D_PD_VBUS > .GND"
      to="net.GND"
      {...groundTrace}
    />

    <trace
      name="PD_VDD"
      from=".U_PD > .VDD"
      to="net.PD_VBUS_RAW"
      {...logicTrace}
    />
    <trace
      name="PD_VDD_DECOUPLE"
      from=".C_PD_VDD > .pin1"
      to=".U_PD > .VDD"
      {...logicTrace}
    />
    <trace
      name="PD_VDD_DECOUPLE_GND"
      from=".C_PD_VDD > .pin2"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="PD_VSYS_FILTER_INPUT"
      from="net.V3V3"
      to=".R_PD_VSYS_FILTER > .pin1"
      {...logicTrace}
    />
    <trace
      name="PD_VSYS_FILTER_OUTPUT"
      from=".R_PD_VSYS_FILTER > .pin2"
      to="net.PD_VSYS_3V3"
      {...logicTrace}
    />
    <trace
      name="PD_VSYS"
      from=".U_PD > .VSYS"
      to="net.PD_VSYS_3V3"
      {...logicTrace}
    />
    <trace
      name="PD_VSYS_DECOUPLE"
      from=".C_PD_VSYS > .pin1"
      to="net.PD_VSYS_3V3"
      {...logicTrace}
    />
    <trace
      name="PD_VSYS_DECOUPLE_GND"
      from=".C_PD_VSYS > .pin2"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="PD_1V2_DECOUPLE"
      from=".C_PD_1V2 > .pin1"
      to=".U_PD > .VREG_1V2"
      {...logicTrace}
    />
    <trace
      name="PD_1V2_DECOUPLE_GND"
      from=".C_PD_1V2 > .pin2"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="PD_2V7_DECOUPLE"
      from=".C_PD_2V7 > .pin1"
      to=".U_PD > .VREG_2V7"
      {...logicTrace}
    />
    <trace
      name="PD_2V7_DECOUPLE_GND"
      from=".C_PD_2V7 > .pin2"
      to="net.GND"
      {...groundTrace}
    />
    <trace name="PD_GROUND" from=".U_PD > .GND" to="net.GND" {...groundTrace} />
    <trace
      name="PD_EP_GROUND"
      from=".U_PD > .EP"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="PD_RESET_PULLDOWN"
      from=".U_PD > .RESET"
      to=".R_PD_RESET > .pin1"
      {...logicTrace}
    />
    <trace
      name="PD_RESET_GROUND"
      from=".R_PD_RESET > .pin2"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="PD_ADDR0"
      from=".U_PD > .ADDR0"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="PD_ADDR1"
      from=".U_PD > .ADDR1"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="PD_I2C_SCL_LOCAL"
      from=".U_PD > .SCL"
      to=".R_PD_SCL_SER > .pin1"
      {...logicTrace}
    />
    <trace
      name="PD_I2C_SCL"
      from=".R_PD_SCL_SER > .pin2"
      to="net.MCU_TEMP_SCL"
      {...logicTrace}
    />
    <trace
      name="PD_I2C_SDA_LOCAL"
      from=".U_PD > .SDA"
      to=".R_PD_SDA_SER > .pin1"
      {...logicTrace}
    />
    <trace
      name="PD_I2C_SDA"
      from=".R_PD_SDA_SER > .pin2"
      to="net.MCU_TEMP_SDA"
      {...logicTrace}
    />

    <trace
      name="PD_SENSE_DIODE_INPUT"
      from=".D_PD_SENSE > .anode"
      to="net.PD_VBUS_RAW"
      {...logicTrace}
    />
    <trace
      name="PD_SENSE_DIODE_OUTPUT"
      from=".D_PD_SENSE > .cathode"
      to="net.PD_VBUS_SENSE"
      {...logicTrace}
    />
    <trace
      name="PD_SENSE_CHARGE_INPUT"
      from=".R_PD_SENSE_CHARGE > .pin1"
      to="net.PD_VBUS_RAW"
      {...logicTrace}
    />
    <trace
      name="PD_SENSE_CHARGE_OUTPUT"
      from=".R_PD_SENSE_CHARGE > .pin2"
      to="net.PD_VBUS_SENSE"
      {...logicTrace}
    />
    <trace
      name="PD_SENSE_LIMIT_INPUT"
      from=".R_PD_SENSE_LIMIT > .pin1"
      to="net.PD_VBUS_SENSE"
      {...logicTrace}
    />
    <trace
      name="PD_SENSE_LIMIT_OUTPUT"
      from=".R_PD_SENSE_LIMIT > .pin2"
      to=".U_PD > .VBUS_VS_DISCH"
      {...logicTrace}
    />
    <trace
      name="PD_SENSE_CAP"
      from=".C_PD_SENSE > .pin1"
      to="net.PD_VBUS_SENSE"
      {...logicTrace}
    />
    <trace
      name="PD_SENSE_CAP_GND"
      from=".C_PD_SENSE > .pin2"
      to="net.GND"
      {...groundTrace}
    />

    <trace
      name="PD_SWITCH_SOURCE"
      from=".Q_PD_SWITCH > .S"
      to="net.PD_VBUS_RAW"
      {...highCurrentTrace}
    />
    <trace
      name="PD_SWITCH_DRAIN"
      from=".Q_PD_SWITCH > .D"
      to="net.PD_CONTRACT"
      {...highCurrentTrace}
    />
    <trace
      name="PD_SWITCH_GATE_FET"
      from=".Q_PD_SWITCH > .G"
      to="net.PD_SWITCH_GATE"
      {...logicTrace}
    />
    <trace
      name="PD_SWITCH_GATE_DRIVE"
      from=".U_PD > .POWER_OK2"
      to=".R_PD_GATE_DRIVE > .pin1"
      {...logicTrace}
    />
    <trace
      name="PD_SWITCH_GATE_DRIVE_OUT"
      from=".R_PD_GATE_DRIVE > .pin2"
      to="net.PD_SWITCH_GATE"
      {...logicTrace}
    />
    <trace
      name="PD_SWITCH_GATE_PULLUP_SOURCE"
      from=".R_PD_GATE_PULLUP > .pin1"
      to="net.PD_VBUS_RAW"
      {...logicTrace}
    />
    <trace
      name="PD_SWITCH_GATE_PULLUP_GATE"
      from=".R_PD_GATE_PULLUP > .pin2"
      to="net.PD_SWITCH_GATE"
      {...logicTrace}
    />
    <trace
      name="PD_SWITCH_GATE_CAP_SOURCE"
      from=".C_PD_GATE > .pin1"
      to="net.PD_VBUS_RAW"
      {...logicTrace}
    />
    <trace
      name="PD_SWITCH_GATE_CAP_GATE"
      from=".C_PD_GATE > .pin2"
      to="net.PD_SWITCH_GATE"
      {...logicTrace}
    />

    <trace
      name="BARREL_INPUT"
      from=".J_BARREL > .TIP"
      to="net.BARREL_RAW"
      {...highCurrentTrace}
    />
    <trace
      name="BARREL_GROUND"
      from=".J_BARREL > .SLEEVE"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="VIN_SELECTED_BYPASS"
      from=".C_VIN_SELECTED > .pin1"
      to="net.VIN_SELECTED"
      {...powerTrace}
    />
    <trace
      name="VIN_SELECTED_BYPASS_GND"
      from=".C_VIN_SELECTED > .pin2"
      to="net.GND"
      {...groundTrace}
    />
  </>
);
