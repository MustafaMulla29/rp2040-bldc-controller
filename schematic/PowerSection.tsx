import { INA240A1PWR } from "../imports/INA240A1PWR";
import { A_0451005_MRL } from "../imports/A_0451005_MRL";
import { EMZR500ARA101MF80G } from "../imports/EMZR500ARA101MF80G";
import { Fragment } from "react";
import { LMR16020PDDAR } from "../imports/LMR16020PDDAR";
import { SMBJ30A } from "../imports/SMBJ30A";
import { SS36 } from "../imports/SS36";
import { SWPA6045S150MT } from "../imports/SWPA6045S150MT";
import {
  groundTrace,
  highCurrentTrace,
  logicTrace,
  motorTrace,
  powerTrace,
  sections,
  senseTrace,
  sheets,
} from "./config";

export const PowerSection = () => (
  <>
    <A_0451005_MRL
      name="F_INPUT"
      pcbX={-13}
      pcbY={27}
      schX={-10}
      schY={4}
      schSheetName={sheets.power}
      schSectionName={sections.inputProtection}
    />
    <resistor
      name="R_BUS_SHUNT"
      resistance="5m"
      footprint="2512"
      manufacturerPartNumber="RLP25FEGMR005"
      supplierPartNumbers={{ jlcpcb: ["C393074"] }}
      pcbX={-4.8}
      pcbY={33.5}
      schX={-7}
      schY={-1}
      schSheetName={sheets.power}
      schSectionName={sections.busSense}
    />
    <SMBJ30A
      name="D_TVS"
      pcbX={2}
      pcbY={33}
      pcbRotation={90}
      schRotation={270}
      schX={-2}
      schY={2}
      schSheetName={sheets.power}
      schSectionName={sections.inputProtection}
    />
    <EMZR500ARA101MF80G
      name="C_VM_BULK1"
      pcbX={9}
      pcbY={33.5}
      schRotation={270}
      schX={0.5}
      schY={2}
      schSheetName={sheets.power}
      schSectionName={sections.inputProtection}
    />
    <EMZR500ARA101MF80G
      name="C_VM_BULK2"
      pcbX={19}
      pcbY={33.5}
      schRotation={270}
      schX={3}
      schY={2}
      schSheetName={sheets.power}
      schSectionName={sections.inputProtection}
    />
    <capacitor
      name="C_VM_HF"
      capacitance="1uF"
      footprint="1206"
      pcbX={22}
      pcbY={28.5}
      schRotation={270}
      schX={5.5}
      schY={2}
      schSheetName={sheets.power}
      schSectionName={sections.inputProtection}
    />

    <INA240A1PWR
      name="U_BUS_SENSE"
      noConnect={["NC"]}
      pcbX={10}
      pcbY={19}
      schX={-7}
      schY={-4}
      schWidth={2.15}
      schHeight={2.8}
      schPinArrangement={{
        leftSide: [1, 2, 3, 4],
        rightSide: [8, 7, 6, 5],
      }}
      schSheetName={sheets.power}
      schSectionName={sections.busSense}
    />
    <capacitor
      name="C_BUS_SENSE"
      capacitance="100nF"
      footprint="0402"
      maxDecouplingTraceLength="2.5mm"
      pcbX={11.015}
      pcbY={23.8}
      pcbRotation={0}
      schRotation={270}
      schX={-4}
      schY={-7}
      schSheetName={sheets.power}
      schSectionName={sections.busSense}
    />

    <LMR16020PDDAR
      name="U_BUCK"
      noConnect={["pin4"]}
      pcbX={-26}
      pcbY={16}
      pcbRotation={270}
      schX={0.35}
      schY={-4}
      schWidth={2.2}
      schHeight={2.6}
      schPinArrangement={{
        leftSide: [2, 3, 5],
        rightSide: [8, 6],
        topSide: [1],
        bottomSide: [7, 9],
      }}
      schSheetName={sheets.power}
      schSectionName={sections.buck}
    />
    <SWPA6045S150MT
      name="L_BUCK"
      pcbX={-17}
      pcbY={16}
      schX={5}
      schY={-4}
      schSheetName={sheets.power}
      schSectionName={sections.buck}
    />
    <SS36
      name="D_BUCK"
      pcbX={-19}
      pcbY={9}
      pcbRotation={90}
      schRotation={270}
      schX={5}
      schY={-7}
      schSheetName={sheets.power}
      schSectionName={sections.buck}
    />
    <capacitor
      name="C_BOOT_BUCK"
      capacitance="100nF"
      footprint="0603"
      pcbX={-26}
      pcbY={20}
      pcbRotation={0}
      schOrientation="vertical"
      schX={1.65}
      schY={-7}
      schSheetName={sheets.power}
      schSectionName={sections.buck}
    />
    <capacitor
      name="C_BUCK_IN"
      capacitance="4.7uF"
      footprint="1206"
      maxDecouplingTraceLength="5mm"
      pcbX={-26}
      pcbY={11.85}
      pcbRotation={0}
      schRotation={270}
      schX={-2}
      schY={-6}
      schSheetName={sheets.power}
      schSectionName={sections.buck}
    />
    <capacitor
      name="C_5V_BULK"
      capacitance="47uF"
      maxVoltageRating="10V"
      footprint="1210"
      manufacturerPartNumber="GRM32ER71A476KE15L"
      supplierPartNumbers={{ jlcpcb: ["C84494"] }}
      pcbX={-10.6}
      pcbY={16}
      schRotation={270}
      schX={10}
      schY={-6}
      schSheetName={sheets.power}
      schSectionName={sections.buck}
    />
    <capacitor
      name="C_5V_HF"
      capacitance="100nF"
      footprint="0603"
      pcbX={-11.6}
      pcbY={12}
      schRotation={270}
      schX={12}
      schY={-6}
      schSheetName={sheets.power}
      schSectionName={sections.buck}
    />
    <resistor
      name="R_BUCK_EN"
      resistance="100k"
      footprint="0603"
      pcbX={-22}
      pcbY={10.5}
      schX={-1}
      schY={-2}
      schSheetName={sheets.power}
      schSectionName={sections.buck}
    />
    <resistor
      name="R_FB_TOP"
      resistance="56.2k"
      footprint="0603"
      pcbX={-18}
      pcbY={21}
      pcbRotation={180}
      schX={8}
      schY={-2}
      schSheetName={sheets.power}
      schSectionName={sections.buck}
    />
    <resistor
      name="R_FB_BOT"
      resistance="10k"
      footprint="0603"
      pcbX={-15}
      pcbY={21}
      pcbRotation={180}
      schRotation={270}
      schX={10}
      schY={-3}
      schSheetName={sheets.power}
      schSectionName={sections.buck}
    />
    <resistor
      name="R_PGOOD"
      resistance="10k"
      footprint="0603"
      pcbX={-16}
      pcbY={10}
      pcbRotation={90}
      schX={4}
      schY={-1}
      schSheetName={sheets.power}
      schSectionName={sections.buck}
    />

    <trace
      name="POWER_INPUT_POS"
      from="net.VIN_SELECTED"
      to=".F_INPUT > .pin1"
      {...highCurrentTrace}
    />
    <trace
      name="POWER_INPUT_FUSED"
      from=".F_INPUT > .pin2"
      to=".R_BUS_SHUNT > .pin1"
      schDisplayLabel="VIN_FUSED"
      {...highCurrentTrace}
    />
    <trace
      name="MOTOR_BUS"
      from=".R_BUS_SHUNT > .pin2"
      to="net.VM"
      schDisplayLabel="VM"
      {...highCurrentTrace}
    />
    <trace name="TVS_VM" from=".D_TVS > .C" to="net.VM" {...highCurrentTrace} />
    <trace name="TVS_GND" from=".D_TVS > .A" to="net.GND" {...groundTrace} />
    {["C_VM_BULK1", "C_VM_BULK2", "C_VM_HF"].map((name) => {
      const capacitorTrace = name === "C_VM_HF" ? powerTrace : motorTrace;

      return (
        <Fragment key={name}>
          <trace
            name={`${name}_VM`}
            from={`.${name} > .pin1`}
            to="net.VM"
            {...capacitorTrace}
          />
          <trace
            name={`${name}_GND`}
            from={`.${name} > .pin2`}
            to="net.GND"
            {...groundTrace}
          />
        </Fragment>
      );
    })}

    <trace
      name="BUS_SENSE_POS"
      from=".U_BUS_SENSE > .IN_POS"
      to=".R_BUS_SHUNT > .pin1"
      {...senseTrace}
    />
    <trace
      name="BUS_SENSE_NEG"
      from=".U_BUS_SENSE > .IN_NEG"
      to=".R_BUS_SHUNT > .pin2"
      {...senseTrace}
    />
    <trace
      name="BUS_SENSE_SUPPLY"
      from=".U_BUS_SENSE > .VS"
      to="net.V3V3"
      {...logicTrace}
    />
    <trace
      name="BUS_SENSE_GND"
      from=".U_BUS_SENSE > .GND"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="BUS_SENSE_REF1"
      from=".U_BUS_SENSE > .REF1"
      to=".C_BUS_SENSE > .pin1"
      {...logicTrace}
    />
    <trace
      name="BUS_SENSE_REF2"
      from=".U_BUS_SENSE > .REF2"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="BUS_SENSE_OUT"
      from=".U_BUS_SENSE > .OUT"
      to="net.MCU_BUS_CURRENT"
      schDisplayLabel="BUS_CURRENT"
      {...senseTrace}
    />
    <trace
      name="BUS_SENSE_DECOUPLE"
      from=".C_BUS_SENSE > .pin1"
      to=".U_BUS_SENSE > .VS"
      {...logicTrace}
    />
    <trace
      name="BUS_SENSE_DECOUPLE_GND"
      from=".C_BUS_SENSE > .pin2"
      to=".U_BUS_SENSE > .REF2"
      {...groundTrace}
    />

    <trace
      name="BUCK_INPUT"
      from=".U_BUCK > .VIN"
      to="net.VM"
      {...powerTrace}
    />
    <trace
      name="BUCK_ENABLE"
      from=".U_BUCK > .EN"
      to=".R_BUCK_EN > .pin1"
      {...logicTrace}
    />
    <trace
      name="BUCK_ENABLE_VM"
      from=".R_BUCK_EN > .pin2"
      to="net.VM"
      {...logicTrace}
    />
    <trace
      name="BUCK_INPUT_CAP"
      from=".C_BUCK_IN > .pin1"
      to=".U_BUCK > .VIN"
      {...powerTrace}
    />
    <trace
      name="BUCK_INPUT_CAP_GND"
      from=".C_BUCK_IN > .pin2"
      to=".U_BUCK > .EP"
      {...groundTrace}
    />
    <trace
      name="BUCK_SWITCH"
      from=".U_BUCK > .SW"
      to=".L_BUCK > .pin1"
      {...powerTrace}
    />
    <trace
      name="BUCK_DIODE_SW"
      from=".D_BUCK > .cathode"
      to=".U_BUCK > .SW"
      {...powerTrace}
    />
    <trace
      name="BUCK_DIODE_GND"
      from=".D_BUCK > .anode"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="BUCK_BOOT_HIGH"
      from=".C_BOOT_BUCK > .pin1"
      to=".U_BUCK > .BOOT"
      {...logicTrace}
    />
    <trace
      name="BUCK_BOOT_SW"
      from=".C_BOOT_BUCK > .pin2"
      to=".U_BUCK > .SW"
      {...logicTrace}
    />
    <trace
      name="FIVE_VOLT_RAIL"
      from=".L_BUCK > .pin2"
      to="net.V5"
      schDisplayLabel="5V"
      {...powerTrace}
    />
    <trace
      name="BUCK_FB_TOP_5V"
      from=".R_FB_TOP > .pin1"
      to="net.V5"
      {...logicTrace}
    />
    <trace
      name="BUCK_FB_NODE"
      from=".R_FB_TOP > .pin2"
      to=".U_BUCK > .FB"
      {...logicTrace}
    />
    <trace
      name="BUCK_FB_BOTTOM"
      from=".R_FB_BOT > .pin1"
      to=".U_BUCK > .FB"
      {...logicTrace}
    />
    <trace
      name="BUCK_FB_GND"
      from=".R_FB_BOT > .pin2"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="BUCK_GROUND"
      from=".U_BUCK > .GND"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="BUCK_EP_GROUND"
      from=".U_BUCK > .EP"
      to="net.GND"
      {...groundTrace}
    />
    <trace
      name="PGOOD_PULLUP"
      from=".R_PGOOD > .pin1"
      to="net.V3V3"
      {...logicTrace}
    />
    <trace
      name="PGOOD_SIGNAL"
      from=".R_PGOOD > .pin2"
      to=".U_BUCK > .PGOOD"
      {...logicTrace}
    />
    <trace
      name="PGOOD_MCU"
      from=".U_BUCK > .PGOOD"
      to="net.MCU_POWER_GOOD"
      schDisplayLabel="POWER_GOOD"
      {...logicTrace}
    />
    {["C_5V_BULK", "C_5V_HF"].map((name) => (
      <Fragment key={name}>
        <trace
          name={`${name}_5V`}
          from={`.${name} > .pin1`}
          to="net.V5"
          {...powerTrace}
        />
        <trace
          name={`${name}_GND`}
          from={`.${name} > .pin2`}
          to="net.GND"
          {...groundTrace}
        />
      </Fragment>
    ))}
  </>
);
