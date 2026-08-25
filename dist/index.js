import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Microcontroller_RP2040 } from '@tscircuit/common';
import { Fragment as Fragment$1 } from 'react';

const sheets = {
    controller: "controller",
    hall: "hall",
    encoder: "encoder",
    protection: "protection",
    powerInput: "power_input",
    power: "power",
    motor: "motor",
};
const sections = {
    hall: "hall_inputs",
    encoder: "encoder_inputs",
    temperature: "temperature_protection",
    usbPd: "usb_pd_input",
    inputSelection: "input_selection",
    inputProtection: "input_protection",
    buck: "five_volt_buck",
    busSense: "bus_current_sense",
    gateDriver: "gate_driver",
    powerStage: "power_stage",
};
// Low-current logic, sense, and ground branches use tscircuit's default trace
// width. Explicit widths are reserved for connections that actually carry
// switching, supply, or motor current.
const logicTrace = {};
const senseTrace = {};
const groundTrace = {};
const driverTrace = {
    thickness: "0.4mm",
};
const powerTrace = {
    thickness: "0.8mm",
};
const highCurrentTrace = {
    thickness: "1.5mm",
};
const motorTrace = {
    thickness: "1.5mm",
};

const hallChannels = [
    { name: "A", connectorPin: "pin3", schY: 5 },
    { name: "B", connectorPin: "pin4", schY: 0 },
    { name: "C", connectorPin: "pin5", schY: -5 },
];
const ControllerSection = () => (jsxs(Fragment, { children: [jsx(Microcontroller_RP2040, { name: "MCU", connections: {
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
            }, schAutoLayoutEnabled: true, schSheetName: sheets.controller, pcbX: 0, pcbY: -4.25, pcbRotation: 180, schX: -4, schY: 8 }), jsx("pinheader", { name: "J_HALL", doNotPlace: true, pinCount: 5, gender: "male", pitch: "2.54mm", pinLabels: ["HALL_5V", "GND", "HALL_A", "HALL_B", "HALL_C"], showSilkscreenPinLabels: true, pcbX: -51, pcbY: -8, pcbRotation: 90, schX: 7, schY: 0, schWidth: 1.2, schSheetName: sheets.hall, schSectionName: sections.hall }), hallChannels.map(({ name, connectorPin, schY }, index) => (jsxs(Fragment$1, { children: [jsx("resistor", { name: `R_HALL_${name}_TOP`, resistance: "10k", footprint: "0603", pcbX: -47, pcbY: -5 - index * 5, schX: -10, schY: schY, schSheetName: sheets.hall, schSectionName: sections.hall }), jsx("resistor", { name: `R_HALL_${name}_BOT`, resistance: "18k", footprint: "0603", pcbX: -41, pcbY: -5 - index * 5, schRotation: 270, schX: -5, schY: schY - 1, schSheetName: sheets.hall, schSectionName: sections.hall }), jsx("capacitor", { name: `C_HALL_${name}`, capacitance: "1nF", footprint: "0603", pcbX: -35, pcbY: -5 - index * 5, schRotation: 270, schX: -2, schY: schY - 1, schSheetName: sheets.hall, schSectionName: sections.hall }), jsx("trace", { name: `HALL_${name}_INPUT`, from: `.J_HALL > .${connectorPin}`, to: `.R_HALL_${name}_TOP > .pin1`, ...logicTrace }), jsx("trace", { name: `HALL_${name}_DIVIDER`, from: `.R_HALL_${name}_TOP > .pin2`, to: `.R_HALL_${name}_BOT > .pin1`, ...logicTrace }), jsx("trace", { name: `HALL_${name}_FILTER`, from: `.R_HALL_${name}_TOP > .pin2`, to: `.C_HALL_${name} > .pin1`, ...logicTrace }), jsx("trace", { name: `HALL_${name}_GPIO`, from: `.R_HALL_${name}_TOP > .pin2`, to: `net.MCU_HALL_${name}_GPIO`, schDisplayLabel: `HALL_${name}`, ...logicTrace }), jsx("trace", { name: `HALL_${name}_PULLDOWN_GND`, from: `.R_HALL_${name}_BOT > .pin2`, to: "net.GND", ...logicTrace }), jsx("trace", { name: `HALL_${name}_CAP_GND`, from: `.C_HALL_${name} > .pin2`, to: "net.GND", ...logicTrace })] }, name))), jsx("trace", { name: "HALL_SUPPLY", from: ".J_HALL > .pin1", to: "net.V5", schDisplayLabel: "5V", ...logicTrace }), jsx("trace", { name: "HALL_GROUND", from: ".J_HALL > .pin2", to: "net.GND", ...logicTrace }), jsx("trace", { name: "MCU_GROUND_JOIN", from: ".MCU > .U1 > .GND", to: "net.GND", ...logicTrace }), jsx("trace", { name: "MCU_3V3_EXPORT", from: ".MCU > .U3 > .VOUT", to: "net.V3V3", schDisplayLabel: "3V3", ...logicTrace }), jsx("trace", { name: "MCU_VSYS_5V", from: ".MCU > .U3 > .VIN", to: "net.V5", schDisplayLabel: "5V", ...logicTrace })] }));

const encoderChannels = [
    { name: "A", connectorPin: "pin3", schY: 5 },
    { name: "B", connectorPin: "pin4", schY: 0 },
    { name: "Z", connectorPin: "pin5", schY: -5 },
];
const EncoderSection = () => (jsxs(Fragment, { children: [jsx("pinheader", { name: "J_ENCODER", doNotPlace: true, pinCount: 5, gender: "male", pitch: "2.54mm", pinLabels: ["ENC_5V", "GND", "ENC_A", "ENC_B", "ENC_Z"], showSilkscreenPinLabels: true, pcbX: -51, pcbY: -23, pcbRotation: 90, schX: 7, schY: 0, schWidth: 1.2, schSheetName: sheets.encoder, schSectionName: sections.encoder }), encoderChannels.map(({ name, connectorPin, schY }, index) => (jsxs(Fragment$1, { children: [jsx("resistor", { name: `R_ENC_${name}_TOP`, resistance: "10k", footprint: "0603", pcbX: -47, pcbY: -24 - index * 5, schX: -10, schY: schY, schSheetName: sheets.encoder, schSectionName: sections.encoder }), jsx("resistor", { name: `R_ENC_${name}_BOT`, resistance: "18k", footprint: "0603", pcbX: -41, pcbY: -24 - index * 5, schRotation: 270, schX: -5, schY: schY - 1, schSheetName: sheets.encoder, schSectionName: sections.encoder }), jsx("capacitor", { name: `C_ENC_${name}`, capacitance: "1nF", footprint: "0603", pcbX: -35, pcbY: -24 - index * 5, schRotation: 270, schX: -2, schY: schY - 1, schSheetName: sheets.encoder, schSectionName: sections.encoder }), jsx("trace", { name: `ENC_${name}_INPUT`, from: `.J_ENCODER > .${connectorPin}`, to: `.R_ENC_${name}_TOP > .pin1`, ...logicTrace }), jsx("trace", { name: `ENC_${name}_DIVIDER`, from: `.R_ENC_${name}_TOP > .pin2`, to: `.R_ENC_${name}_BOT > .pin1`, ...logicTrace }), jsx("trace", { name: `ENC_${name}_FILTER`, from: `.R_ENC_${name}_TOP > .pin2`, to: `.C_ENC_${name} > .pin1`, ...logicTrace }), jsx("trace", { name: `ENC_${name}_GPIO`, from: `.R_ENC_${name}_TOP > .pin2`, to: `net.MCU_ENC_${name}_GPIO`, schDisplayLabel: `ENC_${name}`, ...logicTrace }), jsx("trace", { name: `ENC_${name}_PULLDOWN_GND`, from: `.R_ENC_${name}_BOT > .pin2`, to: "net.GND", ...logicTrace }), jsx("trace", { name: `ENC_${name}_CAP_GND`, from: `.C_ENC_${name} > .pin2`, to: "net.GND", ...logicTrace })] }, name))), jsx("trace", { name: "ENCODER_SUPPLY", from: ".J_ENCODER > .pin1", to: "net.V5", schDisplayLabel: "5V", ...logicTrace }), jsx("trace", { name: "ENCODER_GROUND", from: ".J_ENCODER > .pin2", to: "net.GND", ...logicTrace })] }));

const pinLabels$h = {
    pin1: ["CPL"],
    pin2: ["CPH"],
    pin3: ["VCP"],
    pin4: ["VM"],
    pin5: ["VDRAIN"],
    pin6: ["GHA"],
    pin7: ["SHA"],
    pin8: ["GLA"],
    pin9: ["SPA"],
    pin10: ["SNA"],
    pin11: ["SNB"],
    pin12: ["SPB"],
    pin13: ["GLB"],
    pin14: ["SHB"],
    pin15: ["GHB"],
    pin16: ["GHC"],
    pin17: ["SHC"],
    pin18: ["GLC"],
    pin19: ["SPC"],
    pin20: ["SNC"],
    pin21: ["SOC"],
    pin22: ["SOB"],
    pin23: ["SOA"],
    pin24: ["VREF"],
    pin25: ["nFAULT"],
    pin26: ["MODE"],
    pin27: ["IDRIVE"],
    pin28: ["VDS"],
    pin29: ["GAIN"],
    pin30: ["ENABLE"],
    pin31: ["CAL"],
    pin32: ["AGND"],
    pin33: ["DVDD"],
    pin34: ["INHA"],
    pin35: ["INLA"],
    pin36: ["INHB"],
    pin37: ["INLB"],
    pin38: ["INHC"],
    pin39: ["INLC"],
    pin40: ["PGND"],
    pin41: ["EP"]
};
const footprinterPinLabels$2 = {
    ...pinLabels$h,
    "pin41": [...pinLabels$h["pin41"], "thermalpad"],
};
const DRV8323HRTAR = (props) => {
    return (jsx("chip", { pinLabels: footprinterPinLabels$2, supplierPartNumbers: {
            "jlcpcb": [
                "C701783"
            ]
        }, manufacturerPartNumber: "DRV8323HRTAR", footprint: "qfn40_thermalpad4.5mmx4.5mm_p0.4999mm_h6.8mm_pl0.7mm_pin1location(bottomside,left)", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C701783.obj?uuid=ab4e73ac40ec480c89b4e1b10281a8c0",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C701783.step?uuid=ab4e73ac40ec480c89b4e1b10281a8c0",
            pcbRotationOffset: 90,
            modelOriginPosition: { x: -8889999992334197e-20, y: -889000000370288e-19, z: 0.01 },
        }, ...props }));
};

const pwmChannels = [
    ["GPIO0", "INHA"],
    ["GPIO1", "INLA"],
    ["GPIO2", "INHB"],
    ["GPIO3", "INLB"],
    ["GPIO4", "INHC"],
    ["GPIO5", "INLC"],
];
const GateDriverSection = () => (jsxs(Fragment, { children: [jsx(DRV8323HRTAR, { name: "U_GATE", pcbX: 35.5, pcbY: -20, pcbRotation: 90, schX: -8, schY: 0, schWidth: 5.2, schHeight: 5.8, schPinArrangement: {
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
            }, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("resistor", { name: "R_GATE_VM_LINK", resistance: "0", footprint: "1206", pcbX: 28.5, pcbY: -28.5, schX: -12, schY: 6.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("capacitor", { name: "C_GATE_VM", capacitance: "100nF", footprint: "0603", pcbX: 34.5, pcbY: -29, schRotation: 270, schX: -9, schY: 6.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("capacitor", { name: "C_GATE_VM_BULK", capacitance: "10uF", footprint: "1206", pcbX: 39.5, pcbY: -30, schRotation: 270, schX: -6, schY: 6.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("capacitor", { name: "C_DVDD", capacitance: "1uF", footprint: "0603", pcbX: 32.5, pcbY: -25, pcbRotation: 180, schRotation: 270, schX: -10, schY: -6.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("capacitor", { name: "C_CP", capacitance: "47nF", footprint: "0603", pcbX: 41, pcbY: -22, pcbRotation: 270, schOrientation: "vertical", schX: -8, schY: 5.7, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("capacitor", { name: "C_VCP", capacitance: "1uF", footprint: "1206", pcbX: 37.5, pcbY: -26.5, pcbRotation: 270, schOrientation: "vertical", schX: -4, schY: 5.7, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("resistor", { name: "R_ENABLE_PD", resistance: "100k", footprint: "0603", pcbX: 23, pcbY: -11, schRotation: 270, schX: -12.5, schY: -3.2, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("resistor", { name: "R_FAULT_PU", resistance: "10k", footprint: "0603", pcbX: 30.3, pcbY: -17.5, schRotation: 270, schX: -12.5, schY: -1, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("resistor", { name: "R_CAL_PD", resistance: "100k", footprint: "0603", pcbX: 24.5, pcbY: -14.5, schRotation: 270, schX: -12.5, schY: -5.2, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("resistor", { name: "R_GAIN", resistance: "47k", footprint: "0603", pcbX: 29.5, pcbY: -13.5, pcbRotation: 90, schRotation: 270, schX: -8, schY: -8.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("resistor", { name: "R_IDRIVE", resistance: "75k", footprint: "0603", pcbX: 30.35, pcbY: -20.75, pcbRotation: 180, schRotation: 270, schX: -5, schY: -8.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("resistor", { name: "R_VDS", resistance: "0", footprint: "0603", pcbX: 31.2, pcbY: -13.5, pcbRotation: 90, schRotation: 270, schX: -2, schY: -8.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("resistor", { name: "R_VREF_TOP", resistance: "10k", footprint: "0603", pcbX: 28, pcbY: -12.6, pcbRotation: 270, schX: -7.6, schY: -5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("resistor", { name: "R_VREF_BOT", resistance: "10k", footprint: "0603", pcbX: 28, pcbY: -16, pcbRotation: 270, schRotation: 270, schX: -5, schY: -5.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsx("capacitor", { name: "C_VREF", capacitance: "1uF", footprint: "0402", maxDecouplingTraceLength: "5.5mm", pcbX: 30.91, pcbY: -19.1, pcbRotation: 180, schRotation: 270, schX: -2, schY: -5.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), pwmChannels.map(([gpio, driverPin], index) => (jsx(Fragment$1, { children: jsx("trace", { name: `PWM_${driverPin}`, from: `net.MCU_PWM_${driverPin}`, to: `.U_GATE > .${driverPin}`, schDisplayLabel: driverPin, ...logicTrace }) }, driverPin))), jsx("trace", { name: "GATE_ENABLE_PD", from: ".R_ENABLE_PD > .pin1", to: ".U_ENABLE_AND > .Y", ...logicTrace }), jsx("trace", { name: "GATE_ENABLE_PD_GND", from: ".R_ENABLE_PD > .pin2", to: "net.GND", ...logicTrace }), jsx("trace", { name: "GATE_FAULT", from: ".U_GATE > .nFAULT", to: "net.MCU_GATE_FAULT", ...logicTrace }), jsx("trace", { name: "GATE_FAULT_PULLUP", from: ".R_FAULT_PU > .pin1", to: "net.V3V3", ...logicTrace }), jsx("trace", { name: "GATE_FAULT_PULLUP_SIGNAL", from: ".R_FAULT_PU > .pin2", to: ".U_GATE > .nFAULT", ...logicTrace }), jsx("trace", { name: "GATE_CAL", from: "net.MCU_GATE_CAL", to: ".U_GATE > .CAL", ...logicTrace }), jsx("trace", { name: "GATE_CAL_PD", from: ".R_CAL_PD > .pin1", to: ".U_GATE > .CAL", ...logicTrace }), jsx("trace", { name: "GATE_CAL_PD_GND", from: ".R_CAL_PD > .pin2", to: "net.GND", ...logicTrace }), jsx("trace", { name: "GATE_VM_LINK_INPUT", from: "net.VM", to: ".R_GATE_VM_LINK > .pin1", schDisplayLabel: "VM", ...powerTrace }), jsx("trace", { name: "GATE_VM_LINK_OUTPUT", from: ".R_GATE_VM_LINK > .pin2", to: ".U_GATE > .VM", ...driverTrace }), jsx("trace", { name: "GATE_VDRAIN", from: ".U_GATE > .VDRAIN", to: ".R_GATE_VM_LINK > .pin2", ...driverTrace }), jsx("trace", { name: "GATE_VM_DECOUPLE", from: ".C_GATE_VM > .pin1", to: ".R_GATE_VM_LINK > .pin2", ...driverTrace }), jsx("trace", { name: "GATE_VM_DECOUPLE_GND", from: ".C_GATE_VM > .pin2", to: "net.GND", ...groundTrace }), jsx("trace", { name: "GATE_VM_BULK", from: ".C_GATE_VM_BULK > .pin1", to: ".R_GATE_VM_LINK > .pin2", ...driverTrace }), jsx("trace", { name: "GATE_VM_BULK_GND", from: ".C_GATE_VM_BULK > .pin2", to: "net.GND", ...groundTrace }), jsx("trace", { name: "CHARGE_PUMP_HIGH", from: ".C_CP > .pin1", to: ".U_GATE > .CPH", schDisplayLabel: "CPH", ...driverTrace }), jsx("trace", { name: "CHARGE_PUMP_LOW", from: ".C_CP > .pin2", to: ".U_GATE > .CPL", schDisplayLabel: "CPL", ...driverTrace }), jsx("trace", { name: "VCP_CAP_HIGH", from: ".C_VCP > .pin1", to: ".U_GATE > .VCP", schDisplayLabel: "VCP", ...driverTrace }), jsx("trace", { name: "VCP_CAP_VM", from: ".C_VCP > .pin2", to: ".R_GATE_VM_LINK > .pin2", ...driverTrace }), jsx("trace", { name: "DVDD_DECOUPLE", from: ".C_DVDD > .pin1", to: ".U_GATE > .DVDD", schDisplayLabel: "DVDD", ...driverTrace }), jsx("trace", { name: "DVDD_DECOUPLE_GND", from: ".C_DVDD > .pin2", to: "net.GND", ...logicTrace }), jsx("trace", { name: "MODE_6PWM", from: ".U_GATE > .MODE", to: "net.GND", schDisplayLabel: "6PWM", ...logicTrace }), jsx("trace", { name: "GAIN_CONFIG", from: ".U_GATE > .GAIN", to: ".R_GAIN > .pin1", schDisplayLabel: "GAIN_SET", ...logicTrace }), jsx("trace", { name: "GAIN_CONFIG_GND", from: ".R_GAIN > .pin2", to: "net.GND", ...logicTrace }), jsx("trace", { name: "IDRIVE_CONFIG", from: ".U_GATE > .IDRIVE", to: ".R_IDRIVE > .pin1", schDisplayLabel: "IDRIVE_SET", ...logicTrace }), jsx("trace", { name: "IDRIVE_CONFIG_GND", from: ".R_IDRIVE > .pin2", to: "net.GND", ...logicTrace }), jsx("trace", { name: "VDS_CONFIG", from: ".U_GATE > .VDS", to: ".R_VDS > .pin1", schDisplayLabel: "VDS_OCP", ...logicTrace }), jsx("trace", { name: "VDS_CONFIG_GND", from: ".R_VDS > .pin2", to: "net.GND", ...logicTrace }), jsx("trace", { name: "VREF_TOP_3V3", from: ".R_VREF_TOP > .pin1", to: "net.V3V3", ...logicTrace }), jsx("trace", { name: "VREF_MID", from: ".R_VREF_TOP > .pin2", to: ".R_VREF_BOT > .pin1", schDisplayLabel: "VREF_1V65", ...senseTrace }), jsx("trace", { name: "VREF_DRIVER", from: ".R_VREF_TOP > .pin2", to: ".U_GATE > .VREF", schDisplayLabel: "VREF_1V65", ...senseTrace }), jsx("trace", { name: "VREF_CAP", from: ".C_VREF > .pin1", to: ".U_GATE > .VREF", schDisplayLabel: "VREF_1V65", ...senseTrace }), jsx("trace", { name: "VREF_BOTTOM_GND", from: ".R_VREF_BOT > .pin2", to: "net.GND", ...logicTrace }), jsx("trace", { name: "VREF_CAP_GND", from: ".C_VREF > .pin2", to: ".U_GATE > .AGND", ...logicTrace }), jsx("trace", { name: "GATE_AGND", from: ".U_GATE > .AGND", to: "net.GND", ...logicTrace }), jsx("trace", { name: "GATE_PGND", from: ".U_GATE > .PGND", to: "net.GND", ...logicTrace }), jsx("trace", { name: "GATE_EP_GND", from: ".U_GATE > .EP", to: "net.GND", ...logicTrace })] }));

const pinLabels$g = {
    pin1: ["NC"],
    pin2: ["IN_POS"],
    pin3: ["IN_NEG"],
    pin4: ["GND"],
    pin5: ["VS"],
    pin6: ["REF2"],
    pin7: ["REF1"],
    pin8: ["OUT"]
};
const INA240A1PWR = (props) => {
    return (jsx("chip", { pinLabels: pinLabels$g, supplierPartNumbers: {
            "jlcpcb": [
                "C93965"
            ]
        }, manufacturerPartNumber: "INA240A1PWR", footprint: "dfn8_pillpads_p0.65mm_w7.3082mm_pw0.353mm_pl1.454mm_pin1location(leftside,bottom)", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C93965.obj?uuid=2d0fd2703afb4f81a9dfc54e2181a624",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C93965.step?uuid=2d0fd2703afb4f81a9dfc54e2181a624",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: 0, y: 0, z: 0 },
        }, ...props }));
};

const pinLabels$f = {
    pin1: ["pin1"],
    pin2: ["pin2"]
};
const A_0451005_MRL = (props) => {
    return (jsx("chip", { pinLabels: pinLabels$f, symbol: jsxs("symbol", { children: [jsx("schematicrect", { schX: 0, schY: 0, width: 0.52, height: 0.12, color: "#880000" }), jsx("port", { name: "pin1", pinNumber: 1, aliases: ["1"], direction: "left", schX: -0.4, schY: 0, schStemLength: 0.2 }), jsx("port", { name: "pin2", pinNumber: 2, aliases: ["2"], direction: "right", schX: 0.4, schY: 0, schStemLength: 0.2 }), jsx("schematicpath", { points: [{ "x": -0.2, "y": 0 }, { "x": 0.2, "y": 0 }], strokeColor: "#8D2323" })] }), supplierPartNumbers: {
            "jlcpcb": [
                "C48467"
            ]
        }, manufacturerPartNumber: "0451005.MRL", footprint: "res_p4.6599mm_pw2.91mm_ph2.9106mm", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C48467.obj?uuid=ceafb183c74347baabbacc2158b065b9",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C48467.step?uuid=ceafb183c74347baabbacc2158b065b9",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: 0.000012699999956566899, y: 0, z: -1.3 },
        }, ...props }));
};

const pinLabels$e = {
    pin1: ["BOOT"],
    pin2: ["VIN"],
    pin3: ["EN"],
    pin4: ["pin4"],
    pin5: ["FB"],
    pin6: ["PGOOD"],
    pin7: ["GND"],
    pin8: ["SW"],
    pin9: ["EP"]
};
const footprinterPinLabels$1 = {
    ...pinLabels$e,
    "pin9": [...pinLabels$e["pin9"], "thermalpad"],
};
const LMR16020PDDAR = (props) => {
    return (jsx("chip", { pinLabels: footprinterPinLabels$1, supplierPartNumbers: {
            "jlcpcb": [
                "C190006"
            ]
        }, manufacturerPartNumber: "LMR16020PDDAR", footprint: "soic8_thermalpad2.41mmx3.098mm_pillpads_w7.3822mm_pw0.602mm_pl1.941mm_pin1location(leftside,bottom)", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C190006.obj?uuid=3febf2d495b54c0da7c8bb4287865e8b",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C190006.step?uuid=3febf2d495b54c0da7c8bb4287865e8b",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: -12700000070253736e-21, y: 0, z: 0 },
        }, ...props }));
};

const RVT1H101M0607 = (props) => {
    const { name = "C1", ...restProps } = props;
    return (jsx("capacitor", { name: name, capacitance: "100uF", maxVoltageRating: "50V", polarized: true, symbol: jsxs("symbol", { children: [jsx("schematicpath", { points: [{ "x": -0.04, "y": 0.14 }, { "x": -0.04, "y": -0.14 }], strokeColor: "#880000" }), jsx("port", { name: "pin1", pinNumber: 1, aliases: ["1"], direction: "left", schX: -0.4, schY: 0, schStemLength: 0.2 }), jsx("port", { name: "pin2", pinNumber: 2, aliases: ["2"], direction: "right", schX: 0.4, schY: 0, schStemLength: 0.2 }), jsx("schematicpath", { points: [{ "x": -0.2, "y": 0 }, { "x": -0.04, "y": 0 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": 0.04, "y": 0 }, { "x": 0.2, "y": 0 }], strokeColor: "#880000" }), jsx("schematicpath", { svgPath: "M 0.0888 -0.138 A 0.2 0.2 0 0 0 0.0906 0.1406", strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.18, "y": 0.1 }, { "x": -0.1, "y": 0.1 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.14, "y": 0.14 }, { "x": -0.14, "y": 0.06 }], strokeColor: "#880000" })] }), supplierPartNumbers: {
            "jlcpcb": [
                "C3151829"
            ]
        }, manufacturerPartNumber: "RVT1H101M0607", footprint: "cap_p5.3398mm_pw3.5mm_ph1.2mm", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3151829.obj?uuid=6cd4a279654c490abad9d43c172323ed",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3151829.step?uuid=6cd4a279654c490abad9d43c172323ed",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: 0, y: 0, z: -0.02 },
        }, ...restProps }));
};

const pinLabels$d = {
    pin1: ["C"],
    pin2: ["A"]
};
const SMBJ30A = (props) => {
    return (jsx("chip", { pinLabels: pinLabels$d, symbol: jsxs("symbol", { children: [jsx("port", { name: "pin2", pinNumber: 2, aliases: ["A"], direction: "right", schX: 0.4, schY: 0, schStemLength: 0.3 }), jsx("port", { name: "pin1", pinNumber: 1, aliases: ["C"], direction: "left", schX: -0.4, schY: 0, schStemLength: 0.3 }), jsx("schematicpath", { points: [{ "x": -0.18, "y": 0.18 }, { "x": -0.1, "y": 0.1 }, { "x": -0.1, "y": -0.1 }, { "x": -0.02, "y": -0.18 }], strokeColor: "#880000" }), jsx("schematicpath", { svgPath: "M 0.1 -0.12 L -0.1 0 L 0.1 0.14 Z", strokeColor: "#880000" })] }), supplierPartNumbers: {
            "jlcpcb": [
                "C113998"
            ]
        }, manufacturerPartNumber: "SMBJ30A", footprint: "res_p4.7214mm_pw2.0475mm_ph2.1924mm", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C113998.obj?uuid=892cc756ed79448ab4afad0e5bfcdfa6",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C113998.step?uuid=892cc756ed79448ab4afad0e5bfcdfa6",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: 0, y: 0, z: -0.1 },
        }, ...props }));
};

const pinLabels$c = {
    pin1: ["cathode", "neg"],
    pin2: ["anode", "pos"]
};
const SS36 = (props) => {
    const { name = "D1", ...restProps } = props;
    return (jsx("diode", { name: name, pinLabels: pinLabels$c, supplierPartNumbers: {
            "jlcpcb": [
                "C16015"
            ]
        }, manufacturerPartNumber: "SS36", footprint: "res_p4.3998mm_pw2mm_ph2mm", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C16015.obj?uuid=e3551acb3c5a4975a5e9d36087fe1fa2",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C16015.step?uuid=e3551acb3c5a4975a5e9d36087fe1fa2",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: -12699999842880061e-21, y: 0, z: -0.1 },
        }, ...restProps }));
};

const SWPA6045S150MT = (props) => {
    const { name = "L1", ...restProps } = props;
    return (jsx("inductor", { name: name, inductance: "15uH", maxCurrentRating: "3A", supplierPartNumbers: { jlcpcb: ["C83374"] }, manufacturerPartNumber: "SWPA6045S150MT", footprint: "res_p5.206mm_pw2.474mm_ph5.02mm", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C83374.obj?uuid=38d40b1b5688411c9194395505ca5302",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C83374.step?uuid=38d40b1b5688411c9194395505ca5302",
            pcbRotationOffset: 90,
            modelOriginPosition: {
                x: -25400000026820635e-21,
                y: -25399999913133797e-21,
                z: -0.01,
            },
        }, ...restProps }));
};

const PowerSection = () => (jsxs(Fragment, { children: [jsx(A_0451005_MRL, { name: "F_INPUT", pcbX: -13, pcbY: 28, schX: -10, schY: 4, schSheetName: sheets.power, schSectionName: sections.inputProtection }), jsx("resistor", { name: "R_BUS_SHUNT", resistance: "5m", footprint: "2512", manufacturerPartNumber: "RLP25FEGMR005", supplierPartNumbers: { jlcpcb: ["C393074"] }, pcbX: -4.8, pcbY: 34.5, schX: -7, schY: -1, schSheetName: sheets.power, schSectionName: sections.busSense }), jsx(SMBJ30A, { name: "D_TVS", pcbX: 2, pcbY: 34, pcbRotation: 90, schRotation: 270, schX: -2, schY: 2, schSheetName: sheets.power, schSectionName: sections.inputProtection }), jsx(RVT1H101M0607, { name: "C_VM_BULK1", pcbX: 9, pcbY: 34.5, schRotation: 270, schX: 0.5, schY: 2, schSheetName: sheets.power, schSectionName: sections.inputProtection }), jsx(RVT1H101M0607, { name: "C_VM_BULK2", pcbX: 19, pcbY: 34.5, schRotation: 270, schX: 3, schY: 2, schSheetName: sheets.power, schSectionName: sections.inputProtection }), jsx("capacitor", { name: "C_VM_HF", capacitance: "1uF", footprint: "1206", pcbX: 23.5, pcbY: 29.5, schRotation: 270, schX: 5.5, schY: 2, schSheetName: sheets.power, schSectionName: sections.inputProtection }), jsx(INA240A1PWR, { name: "U_BUS_SENSE", noConnect: ["NC"], pcbX: 10, pcbY: 19, schX: -7, schY: -4, schWidth: 2.15, schHeight: 2.8, schPinArrangement: {
                leftSide: [1, 2, 3, 4],
                rightSide: [8, 7, 6, 5],
            }, schSheetName: sheets.power, schSectionName: sections.busSense }), jsx("capacitor", { name: "C_BUS_SENSE", capacitance: "100nF", footprint: "0402", maxDecouplingTraceLength: "2.5mm", pcbX: 11.015, pcbY: 23.5, pcbRotation: 0, schRotation: 270, schX: -5, schY: -6, schSheetName: sheets.power, schSectionName: sections.busSense }), jsx(LMR16020PDDAR, { name: "U_BUCK", noConnect: ["pin4"], pcbX: -26, pcbY: 16, pcbRotation: 270, schX: 0.35, schY: -4, schWidth: 2.2, schHeight: 2.6, schPinArrangement: {
                leftSide: [2, 3, 5],
                rightSide: [8, 6],
                topSide: [1],
                bottomSide: [7, 9],
            }, schSheetName: sheets.power, schSectionName: sections.buck }), jsx(SWPA6045S150MT, { name: "L_BUCK", pcbX: -17, pcbY: 16, schX: 5, schY: -4, schSheetName: sheets.power, schSectionName: sections.buck }), jsx(SS36, { name: "D_BUCK", pcbX: -19, pcbY: 9, pcbRotation: 90, schRotation: 270, schX: 5, schY: -7, schSheetName: sheets.power, schSectionName: sections.buck }), jsx("capacitor", { name: "C_BOOT_BUCK", capacitance: "100nF", footprint: "0603", pcbX: -26, pcbY: 20, pcbRotation: 0, schOrientation: "vertical", schX: 1.65, schY: -7, schSheetName: sheets.power, schSectionName: sections.buck }), jsx("capacitor", { name: "C_BUCK_IN", capacitance: "4.7uF", footprint: "1206", maxDecouplingTraceLength: "5mm", pcbX: -26, pcbY: 11.85, pcbRotation: 0, schRotation: 270, schX: -2, schY: -6, schSheetName: sheets.power, schSectionName: sections.buck }), jsx("capacitor", { name: "C_5V_BULK", capacitance: "47uF", footprint: "1210", pcbX: -10.6, pcbY: 16, schRotation: 270, schX: 10, schY: -6, schSheetName: sheets.power, schSectionName: sections.buck }), jsx("capacitor", { name: "C_5V_HF", capacitance: "100nF", footprint: "0603", pcbX: -11.6, pcbY: 12, schRotation: 270, schX: 12, schY: -6, schSheetName: sheets.power, schSectionName: sections.buck }), jsx("resistor", { name: "R_BUCK_EN", resistance: "100k", footprint: "0603", pcbX: -22, pcbY: 10.5, schX: -1, schY: -2, schSheetName: sheets.power, schSectionName: sections.buck }), jsx("resistor", { name: "R_FB_TOP", resistance: "56.2k", footprint: "0603", pcbX: -18, pcbY: 21, pcbRotation: 180, schX: 8, schY: -2, schSheetName: sheets.power, schSectionName: sections.buck }), jsx("resistor", { name: "R_FB_BOT", resistance: "10k", footprint: "0603", pcbX: -15, pcbY: 21, pcbRotation: 180, schRotation: 270, schX: 10, schY: -3, schSheetName: sheets.power, schSectionName: sections.buck }), jsx("resistor", { name: "R_PGOOD", resistance: "10k", footprint: "0603", pcbX: -16, pcbY: 10, pcbRotation: 90, schX: 4, schY: -1, schSheetName: sheets.power, schSectionName: sections.buck }), jsx("trace", { name: "POWER_INPUT_POS", from: "net.VIN_SELECTED", to: ".F_INPUT > .pin1", ...highCurrentTrace }), jsx("trace", { name: "POWER_INPUT_FUSED", from: ".F_INPUT > .pin2", to: ".R_BUS_SHUNT > .pin1", schDisplayLabel: "VIN_FUSED", ...highCurrentTrace }), jsx("trace", { name: "MOTOR_BUS", from: ".R_BUS_SHUNT > .pin2", to: "net.VM", schDisplayLabel: "VM", ...highCurrentTrace }), jsx("trace", { name: "TVS_VM", from: ".D_TVS > .C", to: "net.VM", ...highCurrentTrace }), jsx("trace", { name: "TVS_GND", from: ".D_TVS > .A", to: "net.GND", ...groundTrace }), ["C_VM_BULK1", "C_VM_BULK2", "C_VM_HF"].map((name) => {
            const capacitorTrace = name === "C_VM_HF" ? powerTrace : motorTrace;
            return (jsxs(Fragment$1, { children: [jsx("trace", { name: `${name}_VM`, from: `.${name} > .pin1`, to: "net.VM", ...capacitorTrace }), jsx("trace", { name: `${name}_GND`, from: `.${name} > .pin2`, to: "net.GND", ...groundTrace })] }, name));
        }), jsx("trace", { name: "BUS_SENSE_POS", from: ".U_BUS_SENSE > .IN_POS", to: ".R_BUS_SHUNT > .pin1", ...senseTrace }), jsx("trace", { name: "BUS_SENSE_NEG", from: ".U_BUS_SENSE > .IN_NEG", to: ".R_BUS_SHUNT > .pin2", ...senseTrace }), jsx("trace", { name: "BUS_SENSE_SUPPLY", from: ".U_BUS_SENSE > .VS", to: "net.V3V3", ...logicTrace }), jsx("trace", { name: "BUS_SENSE_GND", from: ".U_BUS_SENSE > .GND", to: "net.GND", ...groundTrace }), jsx("trace", { name: "BUS_SENSE_REF1", from: ".U_BUS_SENSE > .REF1", to: ".C_BUS_SENSE > .pin1", ...logicTrace }), jsx("trace", { name: "BUS_SENSE_REF2", from: ".U_BUS_SENSE > .REF2", to: "net.GND", ...groundTrace }), jsx("trace", { name: "BUS_SENSE_OUT", from: ".U_BUS_SENSE > .OUT", to: "net.MCU_BUS_CURRENT", schDisplayLabel: "BUS_CURRENT", ...senseTrace }), jsx("trace", { name: "BUS_SENSE_DECOUPLE", from: ".C_BUS_SENSE > .pin1", to: ".U_BUS_SENSE > .VS", ...logicTrace }), jsx("trace", { name: "BUS_SENSE_DECOUPLE_GND", from: ".C_BUS_SENSE > .pin2", to: ".U_BUS_SENSE > .REF2", ...groundTrace }), jsx("trace", { name: "BUCK_INPUT", from: ".U_BUCK > .VIN", to: "net.VM", ...powerTrace }), jsx("trace", { name: "BUCK_ENABLE", from: ".U_BUCK > .EN", to: ".R_BUCK_EN > .pin1", ...logicTrace }), jsx("trace", { name: "BUCK_ENABLE_VM", from: ".R_BUCK_EN > .pin2", to: "net.VM", ...logicTrace }), jsx("trace", { name: "BUCK_INPUT_CAP", from: ".C_BUCK_IN > .pin1", to: ".U_BUCK > .VIN", ...powerTrace }), jsx("trace", { name: "BUCK_INPUT_CAP_GND", from: ".C_BUCK_IN > .pin2", to: ".U_BUCK > .EP", ...groundTrace }), jsx("trace", { name: "BUCK_SWITCH", from: ".U_BUCK > .SW", to: ".L_BUCK > .pin1", ...powerTrace }), jsx("trace", { name: "BUCK_DIODE_SW", from: ".D_BUCK > .cathode", to: ".U_BUCK > .SW", ...powerTrace }), jsx("trace", { name: "BUCK_DIODE_GND", from: ".D_BUCK > .anode", to: "net.GND", ...groundTrace }), jsx("trace", { name: "BUCK_BOOT_HIGH", from: ".C_BOOT_BUCK > .pin1", to: ".U_BUCK > .BOOT", ...logicTrace }), jsx("trace", { name: "BUCK_BOOT_SW", from: ".C_BOOT_BUCK > .pin2", to: ".U_BUCK > .SW", ...logicTrace }), jsx("trace", { name: "FIVE_VOLT_RAIL", from: ".L_BUCK > .pin2", to: "net.V5", schDisplayLabel: "5V", ...powerTrace }), jsx("trace", { name: "BUCK_FB_TOP_5V", from: ".R_FB_TOP > .pin1", to: "net.V5", ...logicTrace }), jsx("trace", { name: "BUCK_FB_NODE", from: ".R_FB_TOP > .pin2", to: ".U_BUCK > .FB", ...logicTrace }), jsx("trace", { name: "BUCK_FB_BOTTOM", from: ".R_FB_BOT > .pin1", to: ".U_BUCK > .FB", ...logicTrace }), jsx("trace", { name: "BUCK_FB_GND", from: ".R_FB_BOT > .pin2", to: "net.GND", ...groundTrace }), jsx("trace", { name: "BUCK_GROUND", from: ".U_BUCK > .GND", to: "net.GND", ...groundTrace }), jsx("trace", { name: "BUCK_EP_GROUND", from: ".U_BUCK > .EP", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PGOOD_PULLUP", from: ".R_PGOOD > .pin1", to: "net.V3V3", ...logicTrace }), jsx("trace", { name: "PGOOD_SIGNAL", from: ".R_PGOOD > .pin2", to: ".U_BUCK > .PGOOD", ...logicTrace }), jsx("trace", { name: "PGOOD_MCU", from: ".U_BUCK > .PGOOD", to: "net.MCU_POWER_GOOD", schDisplayLabel: "POWER_GOOD", ...logicTrace }), ["C_5V_BULK", "C_5V_HF"].map((name) => (jsxs(Fragment$1, { children: [jsx("trace", { name: `${name}_5V`, from: `.${name} > .pin1`, to: "net.V5", ...powerTrace }), jsx("trace", { name: `${name}_GND`, from: `.${name} > .pin2`, to: "net.GND", ...groundTrace })] }, name)))] }));

const pinLabels$b = {
    pin1: ["S1"],
    pin2: ["S2"],
    pin3: ["S3"],
    pin4: ["G"],
    pin5: ["D5"],
    pin6: ["D4"],
    pin7: ["D3"],
    pin8: ["D1"],
    pin9: ["pin8_alt1"],
};
const CSD18540Q5B = (props) => {
    return (jsx("chip", { pinLabels: pinLabels$b, supplierPartNumbers: {
            "jlcpcb": [
                "C86513"
            ]
        }, manufacturerPartNumber: "CSD18540Q5B", footprint: jsxs("footprint", { children: [jsx("smtpad", { portHints: ["pin1"], pcbX: "-1.902968mm", pcbY: "-2.9324935mm", width: "0.6999986mm", height: "1.27mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin2"], pcbX: "-0.635mm", pcbY: "-2.9324935mm", width: "0.6999986mm", height: "1.27mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin3"], pcbX: "0.637032mm", pcbY: "-2.9324935mm", width: "0.6999986mm", height: "1.27mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin4"], pcbX: "1.907032mm", pcbY: "-2.9324935mm", width: "0.6999986mm", height: "1.27mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin8"], pcbX: "0mm", pcbY: "0.4573905mm", width: "4.8999902mm", height: "4.499991mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin9"], pcbX: "-1.905mm", pcbY: "3.0674945mm", width: "0.6999986mm", height: "0.999998mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin7"], pcbX: "-0.635mm", pcbY: "3.0674945mm", width: "0.6999986mm", height: "0.999998mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin6"], pcbX: "0.635mm", pcbY: "3.0674945mm", width: "0.6999986mm", height: "0.999998mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin5"], pcbX: "1.905mm", pcbY: "3.0674945mm", width: "0.6999986mm", height: "0.999998mm", shape: "rect" }), jsx("silkscreenpath", { route: [{ "x": 2.60101080000004, "y": 3.067494500000066 }, { "x": 2.60101080000004, "y": -2.932493499999964 }] }), jsx("silkscreenpath", { route: [{ "x": -2.5989788000000544, "y": 3.067494500000066 }, { "x": -2.5989788000000544, "y": -2.932493499999964 }] }), jsx("silkscreenpath", { route: [{ "x": -2.5420828000001165, "y": -3.3935034999999516 }, { "x": -2.545657248970656, "y": -3.420654135469249 }, { "x": -2.556137003092317, "y": -3.4459544999999707 }, { "x": -2.5728078844401807, "y": -3.4676804155599257 }, { "x": -2.5945338000001357, "y": -3.484351296907789 }, { "x": -2.6198341645308574, "y": -3.4948310510294505 }, { "x": -2.646984800000155, "y": -3.49840549999999 }, { "x": -2.674135435469452, "y": -3.4948310510294505 }, { "x": -2.6994358000000602, "y": -3.484351296907789 }, { "x": -2.721161715560129, "y": -3.4676804155599257 }, { "x": -2.7378325969079924, "y": -3.4459544999999707 }, { "x": -2.7483123510294263, "y": -3.420654135469249 }, { "x": -2.7518868000000793, "y": -3.3935034999999516 }, { "x": -2.7483123510294263, "y": -3.366352864530654 }, { "x": -2.7378325969079924, "y": -3.3410524999999325 }, { "x": -2.721161715560129, "y": -3.3193265844399775 }, { "x": -2.6994358000000602, "y": -3.302655703092114 }, { "x": -2.674135435469452, "y": -3.29217594897068 }, { "x": -2.646984800000155, "y": -3.288601500000027 }, { "x": -2.6198341645308574, "y": -3.29217594897068 }, { "x": -2.5945338000001357, "y": -3.302655703092114 }, { "x": -2.5728078844401807, "y": -3.3193265844399775 }, { "x": -2.556137003092317, "y": -3.3410524999999325 }, { "x": -2.545657248970656, "y": -3.366352864530654 }, { "x": -2.5420828000001165, "y": -3.3935034999999516 }] }), jsx("silkscreentext", { text: "{NAME}", pcbX: "-0.0635mm", pcbY: "4.5727005mm", anchorAlignment: "center", fontSize: "1mm" }), jsx("courtyardoutline", { outline: [{ "x": -2.9932000000001153, "y": 3.8227005000002237 }, { "x": 2.8661999999999352, "y": 3.8227005000002237 }, { "x": 2.8661999999999352, "y": -3.814699499999847 }, { "x": -2.9932000000001153, "y": -3.814699499999847 }, { "x": -2.9932000000001153, "y": 3.8227005000002237 }] })] }), cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C86513.obj?uuid=ed84f5dd80b4414bacf3798e6484c98f",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C86513.step?uuid=ed84f5dd80b4414bacf3798e6484c98f",
            pcbRotationOffset: 90,
            modelOriginPosition: { x: -0.06750050000005103, y: 0.001015999999935957, z: 0 },
        }, ...props }));
};

const pinLabels$a = {
    pin1: ["pin1"],
    pin2: ["pin2"],
    pin3: ["pin3"]
};
const WJ500V_5_08_03P_14_00A = (props) => {
    return (jsx("connector", { pinLabels: pinLabels$a, supplierPartNumbers: {
            "jlcpcb": [
                "C72334"
            ]
        }, manufacturerPartNumber: "WJ500V_5_08_03P_14_00A", footprint: jsxs("footprint", { children: [jsx("platedhole", { portHints: ["pin3"], pcbX: "5.08mm", pcbY: "0mm", outerDiameter: "1.999996mm", holeDiameter: "1.3000228mm", shape: "circle" }), jsx("platedhole", { portHints: ["pin2"], pcbX: "0mm", pcbY: "0mm", outerDiameter: "1.999996mm", holeDiameter: "1.3000228mm", shape: "circle" }), jsx("platedhole", { portHints: ["pin1"], pcbX: "-5.08mm", pcbY: "0mm", outerDiameter: "1.999996mm", holeDiameter: "1.3000228mm", shape: "circle" }), jsx("silkscreenpath", { route: [{ "x": 7.646162000000004, "y": -5.499988999999999 }, { "x": -7.593837999999991, "y": -5.499988999999999 }] }), jsx("silkscreenpath", { route: [{ "x": 7.599984800000016, "y": 3.099993800000007 }, { "x": -7.6400151999999935, "y": 3.099993800000007 }] }), jsx("silkscreenpath", { route: [{ "x": 7.646162000000004, "y": 4.499990999999994 }, { "x": -7.593837999999991, "y": 4.499990999999994 }] }), jsx("silkscreenpath", { route: [{ "x": -7.593837999999991, "y": -5.532374000000004 }, { "x": -7.593837999999991, "y": 4.467605999999989 }] }), jsx("silkscreenpath", { route: [{ "x": 6.034430400000019, "y": -5.499988999999999 }, { "x": 6.034430400000019, "y": -2.529966999999999 }, { "x": 3.972102800000016, "y": -2.529966999999999 }, { "x": 3.972102800000016, "y": -5.499988999999999 }] }), jsx("silkscreenpath", { route: [{ "x": -4.1618661999999915, "y": -5.499988999999999 }, { "x": -4.1618661999999915, "y": -2.529966999999999 }, { "x": -6.224193799999995, "y": -2.529966999999999 }, { "x": -6.224193799999995, "y": -5.499988999999999 }] }), jsx("silkscreenpath", { route: [{ "x": 0.8999982000000273, "y": -5.499988999999999 }, { "x": 0.8999982000000273, "y": -2.529966999999999 }, { "x": -1.1623293999999902, "y": -2.529966999999999 }, { "x": -1.1623293999999902, "y": -5.499988999999999 }] }), jsx("silkscreenpath", { route: [{ "x": 7.646162000000004, "y": -5.5224680000000035 }, { "x": 7.646162000000004, "y": 4.47751199999999 }] }), jsx("silkscreentext", { text: "{NAME}", pcbX: "0.28956mm", pcbY: "5.499102mm", anchorAlignment: "center", fontSize: "1mm" }), jsx("courtyardoutline", { outline: [{ "x": -7.897939999999991, "y": 4.749102000000008 }, { "x": 8.477060000000009, "y": 4.749102000000008 }, { "x": 8.477060000000009, "y": -5.7838979999999935 }, { "x": -7.897939999999991, "y": -5.7838979999999935 }, { "x": -7.897939999999991, "y": 4.749102000000008 }] })] }), cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C72334.obj?uuid=3ce8efb5088242eb9ba049a12326c3b5",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C72334.step?uuid=3ce8efb5088242eb9ba049a12326c3b5",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: 0.000013299999995108891, y: 0.5160009999999886, z: -9000000000369823e-21 },
        }, ...props }));
};

const sourcePins = ["S1", "S2", "S3"];
const drainPins = ["D1", "D3", "D4", "D5", "pin8_alt1"];
// Keep the driver side of each Kelvin-sense link at the DRV8323. This gives
// the adjacent 0.5 mm-pitch amplifier inputs short, parallel pad escapes; the
// phase side of each link then runs independently to its shunt.
const senseLinkPlacementByPhase = {
    A: {
        positive: { pcbX: 42, pcbY: -18.5, pcbRotation: 180 },
        negative: { pcbX: 42, pcbY: -17.4, pcbRotation: 180 },
    },
    B: {
        positive: { pcbX: 37.15, pcbY: -13, pcbRotation: 270 },
        negative: { pcbX: 38.15, pcbY: -13, pcbRotation: 270 },
    },
    C: {
        positive: { pcbX: 33.9, pcbY: -13, pcbRotation: 270 },
        negative: { pcbX: 32.9, pcbY: -13, pcbRotation: 270 },
    },
};
const phaseConfig = [
    {
        phase: "A",
        motorLabel: "U",
        pcbX: 49,
        schX: 3.8,
        senseSchXPos: 2.2,
        senseSchXNeg: 4.4,
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
        pcbX: 35.5,
        schX: 8.2,
        senseSchXPos: 6.6,
        senseSchXNeg: 8.8,
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
        pcbX: 22,
        schX: 12.5,
        senseSchXPos: 10,
        senseSchXNeg: 12,
        connectorPin: "pin3",
        highGate: "GHC",
        switchNode: "SHC",
        lowGate: "GLC",
        sensePos: "SPC",
        senseNeg: "SNC",
        senseOut: "SOC",
        adc: "GPIO28_ADC2",
    },
];
const PowerStagePhase = ({ phase, motorLabel, pcbX, schX, senseSchXPos, senseSchXNeg, connectorPin, highGate, switchNode, lowGate, sensePos, senseNeg, senseOut, adc, }) => {
    const qHigh = `Q_H${phase}`;
    const qLow = `Q_L${phase}`;
    const gateHigh = `R_GH${phase}`;
    const gateLow = `R_GL${phase}`;
    const gateHighPd = `R_GH${phase}_PD`;
    const gateLowPd = `R_GL${phase}_PD`;
    const shunt = `R_SHUNT_${phase}`;
    const switchLink = `R_SH${phase}_LINK`;
    const sensePosLink = `R_CS${phase}_P_LINK`;
    const senseNegLink = `R_CS${phase}_N_LINK`;
    const phaseNet = `net.PHASE_${motorLabel}`;
    const sourceNet = `net.LS_${phase}`;
    const phaseLocalGateTrace = logicTrace;
    const phaseHighGateDriveTrace = logicTrace;
    const phaseLowGateDriveTrace = logicTrace;
    const phaseSwitchTrace = logicTrace;
    // Package pins neck down only for the short pad escapes, then join the
    // 1.5 mm phase/bus/shunt trunks. The large exposed D1 pad keeps the full
    // motor-trace width; the auxiliary drain pins and three parallel source
    // pins use the default local breakout width.
    const senseLinkPlacement = senseLinkPlacementByPhase[phase];
    return (jsxs(Fragment, { children: [jsx(CSD18540Q5B, { name: qHigh, pcbX: pcbX, pcbY: 22, pcbRotation: 0, schX: schX, schY: 5.5, schWidth: 1.6, schHeight: 2, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsx(CSD18540Q5B, { name: qLow, pcbX: pcbX, pcbY: 8, pcbRotation: 0, schX: schX, schY: -1, schWidth: 1.6, schHeight: 2, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsx("resistor", { name: gateHigh, resistance: "10", footprint: "0603", pcbX: pcbX + 4, pcbY: 19, pcbRotation: 90, schX: schX - 2.8, schY: 7.2, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsx("resistor", { name: gateLow, resistance: "10", footprint: "0603", pcbX: pcbX + 4, pcbY: 5, pcbRotation: 90, schX: schX - 2.8, schY: -2.7, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsx("resistor", { name: gateHighPd, resistance: "100k", footprint: "0603", pcbX: pcbX + 3.5, pcbY: 16, pcbRotation: 90, schRotation: 270, schX: schX, schY: 2.3, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsx("resistor", { name: gateLowPd, resistance: "100k", footprint: "0603", pcbX: pcbX + 3.5, pcbY: 2, pcbRotation: 90, schRotation: 270, schX: schX, schY: -5.8, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsx("resistor", { name: shunt, resistance: "5m", footprint: "2512", manufacturerPartNumber: "RLP25FEGMR005", supplierPartNumbers: { jlcpcb: ["C393074"] }, pcbX: pcbX, pcbY: -3, pcbRotation: 90, schRotation: 270, schX: schX, schY: -7.7, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsx("resistor", { name: switchLink, resistance: "0", footprint: "1206", pcbX: pcbX, pcbY: 15, pcbRotation: 90, schRotation: 270, schX: schX + 1.8, schY: 4, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsx("resistor", { name: sensePosLink, resistance: "0", footprint: "0402", ...senseLinkPlacement.positive, schX: senseSchXPos, schY: -9.7, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsx("resistor", { name: senseNegLink, resistance: "0", footprint: "0402", ...senseLinkPlacement.negative, schX: senseSchXNeg, schY: -9.7, schSheetName: sheets.motor, schSectionName: sections.powerStage }), drainPins.map((pin) => (jsx(Fragment$1, { children: jsx("trace", { name: `${qHigh}_${pin}_VM`, from: `.${qHigh} > .${pin}`, to: "net.VM", ...(pin === "D1" ? motorTrace : logicTrace) }) }, `${qHigh}-${pin}`))), sourcePins.map((pin) => (jsx(Fragment$1, { children: jsx("trace", { name: `${qHigh}_${pin}_PHASE`, from: `.${qHigh} > .${pin}`, to: phaseNet, ...logicTrace }) }, `${qHigh}-${pin}`))), drainPins.map((pin) => (jsx(Fragment$1, { children: jsx("trace", { name: `${qLow}_${pin}_PHASE`, from: `.${qLow} > .${pin}`, to: phaseNet, ...(pin === "D1" ? motorTrace : logicTrace) }) }, `${qLow}-${pin}`))), sourcePins.map((pin) => (jsx(Fragment$1, { children: jsx("trace", { name: `${qLow}_${pin}_SHUNT`, from: `.${qLow} > .${pin}`, to: sourceNet, ...logicTrace }) }, `${qLow}-${pin}`))), jsx("trace", { name: `${phase}_HIGH_GATE_DRIVE`, from: `.U_GATE > .${highGate}`, to: `.${gateHigh} > .pin1`, schDisplayLabel: `${highGate}_DRV`, ...phaseHighGateDriveTrace }), jsx("trace", { name: `${phase}_HIGH_GATE`, from: `.${gateHigh} > .pin2`, to: `.${qHigh} > .G`, ...phaseLocalGateTrace }), jsx("trace", { name: `${phase}_HIGH_GATE_PD`, from: `.${gateHighPd} > .pin1`, to: `.${qHigh} > .G`, ...phaseLocalGateTrace }), jsx("trace", { name: `${phase}_HIGH_GATE_PD_PHASE`, from: `.${gateHighPd} > .pin2`, to: phaseNet, ...logicTrace }), jsx("trace", { name: `${phase}_LOW_GATE_DRIVE`, from: `.U_GATE > .${lowGate}`, to: `.${gateLow} > .pin1`, schDisplayLabel: `${lowGate}_DRV`, ...phaseLowGateDriveTrace }), jsx("trace", { name: `${phase}_LOW_GATE`, from: `.${gateLow} > .pin2`, to: `.${qLow} > .G`, ...phaseLocalGateTrace }), jsx("trace", { name: `${phase}_LOW_GATE_PD`, from: `.${gateLowPd} > .pin1`, to: `.${qLow} > .G`, ...phaseLocalGateTrace }), jsx("trace", { name: `${phase}_LOW_GATE_PD_SOURCE`, from: `.${gateLowPd} > .pin2`, to: sourceNet, ...logicTrace }), jsx("trace", { name: `${phase}_SWITCH_NODE_POWER`, from: phaseNet, to: `.${switchLink} > .pin1`, ...motorTrace }), jsx("trace", { name: `${phase}_SWITCH_NODE_DRIVER`, from: `.${switchLink} > .pin2`, to: `.U_GATE > .${switchNode}`, schDisplayLabel: `${switchNode}_SENSE`, ...phaseSwitchTrace }), jsx("trace", { name: `${phase}_MOTOR_OUTPUT`, from: phaseNet, to: `.J_MOTOR > .${connectorPin}`, schDisplayLabel: motorLabel, ...highCurrentTrace }), jsx("trace", { name: `${phase}_SHUNT_HIGH`, from: sourceNet, to: `.${shunt} > .pin1`, schDisplayLabel: `LS_${phase}`, ...highCurrentTrace }), jsx("trace", { name: `${phase}_SHUNT_GND`, from: `.${shunt} > .pin2`, to: "net.GND", ...groundTrace }), jsx("trace", { name: `${phase}_SHUNT_SENSE_POS_KELVIN`, from: `.${shunt} > .pin1`, to: `.${sensePosLink} > .pin1`, ...senseTrace }), jsx("trace", { name: `${phase}_SHUNT_SENSE_POS_DRIVER`, from: `.${sensePosLink} > .pin2`, to: `.U_GATE > .${sensePos}`, schDisplayLabel: `CS${phase}_P`, ...senseTrace }), jsx("trace", { name: `${phase}_SHUNT_SENSE_NEG_KELVIN`, from: `.${shunt} > .pin2`, to: `.${senseNegLink} > .pin1`, ...groundTrace }), jsx("trace", { name: `${phase}_SHUNT_SENSE_NEG_DRIVER`, from: `.${senseNegLink} > .pin2`, to: `.U_GATE > .${senseNeg}`, schDisplayLabel: `CS${phase}_N`, ...senseTrace }), jsx("trace", { name: `${phase}_CURRENT_ADC`, from: `.U_GATE > .${senseOut}`, to: `net.MCU_${phase}_CURRENT_ADC`, ...senseTrace })] }));
};
const PowerStageSection = () => (jsxs(Fragment, { children: [jsx(WJ500V_5_08_03P_14_00A, { name: "J_MOTOR", pcbX: 35.5, pcbY: 34, pcbRotation: 180, schX: 14.2, schY: 8.2, schWidth: 1.2, schHeight: 2, schPinArrangement: { leftSide: [1, 2, 3] }, schSheetName: sheets.motor, schSectionName: sections.powerStage }), phaseConfig.map((config) => (jsx(PowerStagePhase, { ...config }, config.phase)))] }));

const pinLabels$9 = {
    pin1: ["A"],
    pin2: ["B"],
    pin3: ["GND"],
    pin4: ["Y"],
    pin5: ["VCC"]
};
const SN74LVC1G08DBVR = (props) => {
    return (jsx("chip", { pinLabels: pinLabels$9, supplierPartNumbers: {
            "jlcpcb": [
                "C7666"
            ]
        }, manufacturerPartNumber: "SN74LVC1G08DBVR", footprint: "dfn6_missing(5)_p0.95mm_w3.7002mm_pl1.1mm_pin1location(rightside,bottom)", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7666.obj?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7666.step?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
            pcbRotationOffset: 180,
            modelOriginPosition: { x: 0, y: -12700000070253736e-21, z: -0.049083 },
        }, ...props }));
};

const pinLabels$8 = {
    pin1: ["SCL"],
    pin2: ["GND"],
    pin3: ["ALERT"],
    pin4: ["ADD0"],
    pin5: ["V_POS"],
    pin6: ["SDA"]
};
const TMP102AIDRLR = (props) => {
    return (jsx("chip", { pinLabels: pinLabels$8, supplierPartNumbers: {
            "jlcpcb": [
                "C99269"
            ]
        }, manufacturerPartNumber: "TMP102AIDRLR", footprint: "sot563_p0.4999mm_pw0.3mm_pl0.6mm_pin1location(rightside,bottom)", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C99269.obj?uuid=ec2270bac0544bf5afe06b24e8356512",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C99269.step?uuid=ec2270bac0544bf5afe06b24e8356512",
            pcbRotationOffset: 180,
            modelOriginPosition: { x: -5079999999679785e-20, y: 0.029921200000003978, z: 0 },
        }, ...props }));
};

const ProtectionSection = () => (jsxs(Fragment, { children: [jsx(TMP102AIDRLR, { name: "U_TEMP", pcbX: 51, pcbY: -18, schX: 2, schY: 0, schWidth: 2.4, schHeight: 3, schPinArrangement: {
                leftSide: [1, 6, 3],
                rightSide: [5, 4, 2],
            }, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsx("capacitor", { name: "C_TEMP", capacitance: "100nF", footprint: "0402", maxDecouplingTraceLength: "2mm", pcbX: 51, pcbY: -19.8, pcbRotation: 0, schRotation: 270, schX: 6, schY: 2, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsx("resistor", { name: "R_TEMP_SCL", resistance: "4.7k", footprint: "0603", pcbX: 16, pcbY: -14, pcbRotation: 90, schRotation: 270, schX: -6, schY: 3, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsx("resistor", { name: "R_TEMP_SDA", resistance: "4.7k", footprint: "0603", pcbX: 16, pcbY: -18, pcbRotation: 90, schRotation: 270, schX: -4, schY: 3, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsx("resistor", { name: "R_TEMP_ALERT", resistance: "10k", footprint: "0603", pcbX: 16, pcbY: -22, pcbRotation: 90, schRotation: 270, schX: -2, schY: 3, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsx(SN74LVC1G08DBVR, { name: "U_ENABLE_AND", pcbX: 18, pcbY: -28, schX: 10, schY: 0, schWidth: 2, schHeight: 2.4, schPinArrangement: { leftSide: [1, 2], rightSide: [4], topSide: [5], bottomSide: [3] }, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsx("capacitor", { name: "C_ENABLE_AND", capacitance: "100nF", footprint: "0402", maxDecouplingTraceLength: "3.5mm", pcbX: 18, pcbY: -30.3, pcbRotation: 0, schRotation: 270, schX: 10, schY: -3, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsx("trace", { name: "TEMP_3V3", from: ".U_TEMP > .V_POS", to: "net.V3V3", ...logicTrace }), jsx("trace", { name: "TEMP_GND", from: ".U_TEMP > .GND", to: "net.GND", ...logicTrace }), jsx("trace", { name: "TEMP_ADDRESS_GND", from: ".U_TEMP > .ADD0", to: "net.GND", ...logicTrace }), jsx("trace", { name: "TEMP_DECOUPLE", from: ".C_TEMP > .pin1", to: ".U_TEMP > .V_POS", ...logicTrace }), jsx("trace", { name: "TEMP_DECOUPLE_GND", from: ".C_TEMP > .pin2", to: ".U_TEMP > .GND", ...logicTrace }), jsx("trace", { name: "TEMP_SCL_PULLUP", from: ".R_TEMP_SCL > .pin1", to: "net.V3V3", ...logicTrace }), jsx("trace", { name: "TEMP_SCL", from: ".R_TEMP_SCL > .pin2", to: ".U_TEMP > .SCL", ...logicTrace }), jsx("trace", { name: "TEMP_SCL_MCU", from: ".U_TEMP > .SCL", to: "net.MCU_TEMP_SCL", schDisplayLabel: "TEMP_SCL", ...logicTrace }), jsx("trace", { name: "TEMP_SDA_PULLUP", from: ".R_TEMP_SDA > .pin1", to: "net.V3V3", ...logicTrace }), jsx("trace", { name: "TEMP_SDA", from: ".R_TEMP_SDA > .pin2", to: ".U_TEMP > .SDA", ...logicTrace }), jsx("trace", { name: "TEMP_SDA_MCU", from: ".U_TEMP > .SDA", to: "net.MCU_TEMP_SDA", schDisplayLabel: "TEMP_SDA", ...logicTrace }), jsx("trace", { name: "TEMP_ALERT_PULLUP", from: ".R_TEMP_ALERT > .pin1", to: "net.V3V3", ...logicTrace }), jsx("trace", { name: "TEMP_ALERT", from: ".R_TEMP_ALERT > .pin2", to: ".U_TEMP > .ALERT", ...logicTrace }), jsx("trace", { name: "TEMP_ALERT_MCU", from: ".U_TEMP > .ALERT", to: "net.MCU_TEMP_ALERT_n", schDisplayLabel: "TEMP_ALERT_n", ...logicTrace }), jsx("trace", { name: "ENABLE_AND_3V3", from: ".U_ENABLE_AND > .VCC", to: "net.V3V3", ...logicTrace }), jsx("trace", { name: "ENABLE_AND_GND", from: ".U_ENABLE_AND > .GND", to: "net.GND", ...logicTrace }), jsx("trace", { name: "ENABLE_AND_DECOUPLE", from: ".C_ENABLE_AND > .pin1", to: ".U_ENABLE_AND > .VCC", ...logicTrace }), jsx("trace", { name: "ENABLE_AND_DECOUPLE_GND", from: ".C_ENABLE_AND > .pin2", to: ".U_ENABLE_AND > .GND", ...logicTrace }), jsx("trace", { name: "ENABLE_AND_MCU_COMMAND", from: "net.MCU_GATE_ENABLE_CMD", to: ".U_ENABLE_AND > .A", schDisplayLabel: "GATE_ENABLE_CMD", ...logicTrace }), jsx("trace", { name: "ENABLE_AND_TEMP_OK", from: ".U_TEMP > .ALERT", to: ".U_ENABLE_AND > .B", schDisplayLabel: "TEMP_OK", ...logicTrace }), jsx("trace", { name: "ENABLE_AND_OUTPUT", from: ".U_ENABLE_AND > .Y", to: ".U_GATE > .ENABLE", ...logicTrace })] }));

const SchematicSheets = () => (jsxs(Fragment, { children: [jsx("schematicsheet", { name: sheets.controller, displayName: "RP2040 Control, USB & Debug", sheetIndex: 1 }), jsx("schematicsheet", { name: sheets.hall, displayName: "5 V Hall Sensor Inputs", sheetIndex: 2, children: jsx("schematicsection", { name: sections.hall, displayName: "Filtered Hall Sensor Inputs" }) }), jsx("schematicsheet", { name: sheets.encoder, displayName: "Optional Quadrature Encoder", sheetIndex: 3, children: jsx("schematicsection", { name: sections.encoder, displayName: "Filtered 5 V Encoder Inputs" }) }), jsxs("schematicsheet", { name: sheets.powerInput, displayName: "USB-C PD & Barrel Power Input", sheetIndex: 4, children: [jsx("schematicsection", { name: sections.usbPd, displayName: "USB-C PD 12 V Sink" }), jsx("schematicsection", { name: sections.inputSelection, displayName: "Barrel Input & Reverse-Blocking ORing" })] }), jsxs("schematicsheet", { name: sheets.power, displayName: "Input Protection, Bus Sense & 5 V Power", sheetIndex: 5, children: [jsx("schematicsection", { name: sections.inputProtection, displayName: "Selected Input Protection & Bulk Capacitance" }), jsx("schematicsection", { name: sections.busSense, displayName: "DC Bus Current Sense" }), jsx("schematicsection", { name: sections.buck, displayName: "5 V Buck Regulator" })] }), jsxs("schematicsheet", { name: sheets.motor, displayName: "Three-Phase BLDC Power Stage", sheetIndex: 6, children: [jsx("schematicsection", { name: sections.gateDriver, displayName: "DRV8323H Gate Driver & Current Sense" }), jsx("schematicsection", { name: sections.powerStage, displayName: "Six-MOSFET Inverter & Motor Output" })] }), jsx("schematicsheet", { name: sheets.protection, displayName: "Temperature & Hardware Protection", sheetIndex: 7, children: jsx("schematicsection", { name: sections.temperature, displayName: "Power-Stage Temperature Interlock" }) })] }));

const pinLabels$7 = {
    pin1: ["cathode", "neg"],
    pin2: ["anode", "pos"]
};
const B5819W_SL = (props) => {
    const { name = "D1", ...restProps } = props;
    return (jsx("diode", { name: name, pinLabels: pinLabels$7, supplierPartNumbers: {
            "jlcpcb": [
                "C8598"
            ]
        }, manufacturerPartNumber: "B5819W SL", footprint: "res_p3.4mm_pw1.2mm_ph0.95mm", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C8598.obj?uuid=e9d505c99b6c436aaf827a29c5ba4f84",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C8598.step?uuid=e9d505c99b6c436aaf827a29c5ba4f84",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: 0, y: 0.000012699999999199463, z: -0.6 },
        }, ...restProps }));
};

const pinLabels$6 = {
    pin1: ["G"],
    pin2: ["D"],
    pin3: ["S"]
};
const A_30P06 = (props) => {
    return (jsx("chip", { pinLabels: pinLabels$6, symbol: jsxs("symbol", { children: [jsx("schematicpath", { points: [{ "x": 0, "y": 0 }, { "x": -0.12, "y": 0.04 }, { "x": -0.12, "y": -0.04 }, { "x": 0, "y": 0 }], strokeColor: "#880000", isFilled: true, fillColor: "#880000" }), jsx("schematicpath", { points: [{ "x": 0.2, "y": -0.04 }, { "x": 0.26, "y": 0.06 }, { "x": 0.14, "y": 0.06 }, { "x": 0.2, "y": -0.04 }], strokeColor: "#880000", isFilled: true, fillColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.2, "y": 0.14 }, { "x": 0, "y": 0.14 }, { "x": 0, "y": 0.2 }, { "x": 0.2, "y": 0.2 }, { "x": 0.2, "y": 0.04 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.2, "y": 0 }, { "x": 0, "y": 0 }, { "x": 0, "y": -0.2 }, { "x": 0.2, "y": -0.2 }, { "x": 0.2, "y": 0 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": 0, "y": -0.14 }, { "x": -0.2, "y": -0.14 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.24, "y": 0.18 }, { "x": -0.24, "y": -0.18 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.2, "y": 0.18 }, { "x": -0.2, "y": 0.1 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.2, "y": -0.04 }, { "x": -0.2, "y": 0.04 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.2, "y": -0.18 }, { "x": -0.2, "y": -0.1 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.4, "y": 0 }, { "x": -0.24, "y": 0 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": 0.12, "y": -0.06 }, { "x": 0.16, "y": -0.04 }, { "x": 0.24, "y": -0.04 }, { "x": 0.28, "y": -0.02 }], strokeColor: "#880000" }), jsx("port", { name: "pin2", pinNumber: 2, aliases: ["D"], direction: "up", schX: 0, schY: 0.4, schStemLength: 0.2 }), jsx("port", { name: "pin1", pinNumber: 1, aliases: ["G"], direction: "left", schX: -0.6, schY: 0, schStemLength: 0.2 }), jsx("port", { name: "pin3", pinNumber: 3, aliases: ["S"], direction: "down", schX: 0, schY: -0.4, schStemLength: 0.2 })] }), supplierPartNumbers: {
            "jlcpcb": [
                "C18164395"
            ]
        }, manufacturerPartNumber: "30P06", footprint: "dpak_pin1location(rightside,bottom)", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C18164395.obj?uuid=5cc2a31718c943a193855315af1a2fab",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C18164395.step?uuid=5cc2a31718c943a193855315af1a2fab",
            pcbRotationOffset: 90,
            modelOriginPosition: { x: 2.3, y: 4.746065699999893, z: 0 },
        }, ...props }));
};

const pinLabels$5 = {
    pin1: ["TIP", "POSITIVE"],
    pin2: ["SLEEVE", "NEGATIVE"],
    pin3: ["SWITCH"]
};
const DC_012A_5A_2_0 = (props) => {
    return (jsx("chip", { pinLabels: pinLabels$5, symbol: jsxs("symbol", { children: [jsx("schematicpath", { points: [{ "x": 0.2, "y": 0.2 }, { "x": 0.08, "y": 0.2 }], strokeColor: "#880000" }), jsx("schematicrect", { schX: 0.04, schY: 0.2, width: 0.08, height: 0.24, color: "#880000" }), jsx("schematicpath", { points: [{ "x": 0, "y": 0.28 }, { "x": -0.4, "y": 0.28 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": 0, "y": 0.12 }, { "x": -0.4, "y": 0.12 }], strokeColor: "#880000" }), jsx("schematicpath", { svgPath: "M -0.4 0.12 A 0.08 0.08 0 1 0 -0.4 0.28", strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": 0.2, "y": -0.2 }, { "x": -0.38, "y": -0.2 }, { "x": -0.42, "y": -0.12 }, { "x": -0.46, "y": -0.2 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": 0.2, "y": 0 }, { "x": -0.14, "y": 0 }, { "x": -0.14, "y": -0.2 }, { "x": -0.16, "y": -0.1 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.14, "y": -0.2 }, { "x": -0.12, "y": -0.1 }], strokeColor: "#880000" }), jsx("port", { name: "pin3", pinNumber: 3, aliases: ["3"], direction: "right", schX: 0.6, schY: 0, schStemLength: 0.4 }), jsx("port", { name: "pin1", pinNumber: 1, aliases: ["1"], direction: "right", schX: 0.6, schY: 0.2, schStemLength: 0.4 }), jsx("port", { name: "pin2", pinNumber: 2, aliases: ["2"], direction: "right", schX: 0.6, schY: -0.2, schStemLength: 0.4 })] }), supplierPartNumbers: {
            "jlcpcb": [
                "C388626"
            ]
        }, manufacturerPartNumber: "DC-012A-5A-2.0", footprint: jsxs("footprint", { children: [jsx("platedhole", { portHints: ["pin3"], pcbX: "2.850007mm", pcbY: "-0.299974mm", holeWidth: "2.999994mm", holeHeight: "0.999998mm", outerWidth: "3.7999924mm", outerHeight: "1.7999964mm", shape: "pill" }), jsx("platedhole", { portHints: ["pin2"], pcbX: "0.499999mm", pcbY: "-2.70002mm", holeWidth: "2.999994mm", holeHeight: "0.999998mm", outerWidth: "3.7999924mm", outerHeight: "1.7999964mm", shape: "pill" }), jsx("platedhole", { portHints: ["pin1"], pcbX: "-2.850007mm", pcbY: "2.70002mm", holeWidth: "0.999998mm", holeHeight: "2.999994mm", outerWidth: "1.7999964mm", outerHeight: "3.7999924mm", shape: "pill" }), jsx("silkscreenpath", { route: [{ "x": -3.0500065999999606, "y": 0.5867400000000771 }, { "x": -3.0500065999999606, "y": -3.799966999999924 }] }), jsx("silkscreenpath", { route: [{ "x": -3.0500065999999606, "y": 7.200011000000018 }, { "x": -3.0500065999999606, "y": 4.813300000000027 }] }), jsx("silkscreenpath", { route: [{ "x": 6.749973800000134, "y": 7.200011000000018 }, { "x": 6.749973800000134, "y": -3.799966999999924 }] }), jsx("silkscreenpath", { route: [{ "x": -3.0500065999999606, "y": 7.200011000000018 }, { "x": 6.749973800000134, "y": 7.200011000000018 }] }), jsx("silkscreenpath", { route: [{ "x": -3.0500065999999606, "y": -3.799966999999924 }, { "x": 6.749973800000134, "y": -3.799966999999924 }] }), jsx("silkscreenpath", { route: [{ "x": 3.1073089999999866, "y": 2.700019999999995 }, { "x": 3.064467541393242, "y": 2.374606814592539 }, { "x": 2.9388627401782514, "y": 2.0713700000000017 }, { "x": 2.7390543559858997, "y": 1.8109746440140952 }, { "x": 2.478659000000107, "y": 1.6111662598217436 }, { "x": 2.175422185407456, "y": 1.4855614586067531 }, { "x": 1.850009, "y": 1.4427200000000084 }, { "x": 1.524595814592658, "y": 1.4855614586067531 }, { "x": 1.2213590000000067, "y": 1.6111662598217436 }, { "x": 0.960963644014214, "y": 1.8109746440140952 }, { "x": 0.7611552598218623, "y": 2.0713700000000017 }, { "x": 0.6355504586067582, "y": 2.374606814592539 }, { "x": 0.5927090000001272, "y": 2.700019999999995 }, { "x": 0.6355504586067582, "y": 3.025433185407337 }, { "x": 0.7611552598218623, "y": 3.3286699999998746 }, { "x": 0.960963644014214, "y": 3.589065355985781 }, { "x": 1.2213590000000067, "y": 3.7888737401781327 }, { "x": 1.524595814592658, "y": 3.914478541393123 }, { "x": 1.850009, "y": 3.9573199999999815 }, { "x": 2.175422185407456, "y": 3.914478541393123 }, { "x": 2.478659000000107, "y": 3.7888737401781327 }, { "x": 2.7390543559858997, "y": 3.589065355985781 }, { "x": 2.9388627401782514, "y": 3.3286699999998746 }, { "x": 3.064467541393242, "y": 3.025433185407337 }, { "x": 3.1073089999999866, "y": 2.700019999999995 }] }), jsx("silkscreenpath", { route: [{ "x": 4.337151600000084, "y": 0.6865874000000076 }, { "x": 4.564811938915, "y": 0.5828883366071977 }, { "x": 4.783675921481517, "y": 0.46172199310126416 }, { "x": 4.992405934479848, "y": 0.3238288919790193 }, { "x": 5.18972629964901, "y": 0.17005178330293802 }, { "x": 5.374431070146102, "y": 0.0013304941331853115 }, { "x": 5.545391400831932, "y": -0.18130381533558193 }, { "x": 5.701562447344486, "y": -0.3767349538336475 }, { "x": 5.841989751787651, "y": -0.5837685207501409 }, { "x": 5.9658150760145645, "y": -0.8011392058562024 }, { "x": 6.072281646852275, "y": -1.0275185223970311 }, { "x": 6.1607387812098295, "y": -1.2615229262971752 }, { "x": 6.230645862806796, "y": -1.5017222718539642 }, { "x": 6.2815756462124455, "y": -1.7466485522440962 }, { "x": 6.313216868007316, "y": -1.9948048714194329 }, { "x": 6.325376149107342, "y": -2.2446745925673213 }, { "x": 6.317979176622089, "y": -2.494730607215047 }, { "x": 6.291071158027307, "y": -2.743444668334746 }, { "x": 6.244816544873856, "y": -2.989296730407432 }, { "x": 6.179498027722843, "y": -3.230784239361128 }, { "x": 6.095514808448343, "y": -3.4664313156080198 }, { "x": 5.9933801604678365, "y": -3.694797774058543 }, { "x": 5.873718291810974, "y": -3.914487925983849 }, { "x": 5.737260530197773, "y": -4.12415910893219 }, { "x": 5.58484085344287, "y": -4.322529892570515 }, { "x": 5.417390792500328, "y": -4.508387910298325 }, { "x": 5.235933738302265, "y": -4.6805972687695885 }, { "x": 5.041578687183119, "y": -4.838105490040562 }, { "x": 4.83551346311765, "y": -4.979949943912516 }, { "x": 4.61899745819278, "y": -5.105263731161926 }, { "x": 4.393353935683876, "y": -5.213280981696812 }, { "x": 4.159961942773521, "y": -5.303341535263826 }, { "x": 3.9202478823419824, "y": -5.374894976094879 }, { "x": 3.675676795335221, "y": -5.427503996839732 }, { "x": 3.427743406994182, "y": -5.460847071220542 }, { "x": 3.1779629916638896, "y": -5.474720419078835 }, { "x": 2.927862112013713, "y": -5.469039251801746 }, { "x": 2.678969289269162, "y": -5.443838290517874 }, { "x": 2.43280566147223, "y": -5.399271553894323 }, { "x": 2.1908756868662067, "y": -5.335611416834695 }, { "x": 1.9546579492196088, "y": -5.253246945825936 }, { "x": 1.725596121287026, "y": -5.152681521113436 }, { "x": 1.5050901416309443, "y": -5.0345297602325445 }, { "x": 1.294487658730759, "y": -4.899513761700177 }, { "x": 1.095075794669924, "y": -4.748458691824453 }, { "x": 0.9080732787355146, "y": -4.582287741602613 }, { "x": 0.7346229990102984, "y": -4.402016484529895 }, { "x": 0.5757850174757095, "y": -4.208746669800689 }, { "x": 0.432530091317858, "y": -4.0036594888385935 }, { "x": 0.30573374002983655, "y": -3.788008356304317 }, { "x": 0.19617089456892245, "y": -3.563111249702388 }, { "x": 0.10451116127615023, "y": -3.330342654406195 }, { "x": 0.031314729495875326, "y": -3.0911251633274333 }, { "x": -0.02297105208697303, "y": -2.8469207825696685 }, { "x": -0.058014409471752515, "y": -2.599221996204733 }, { "x": -0.07360117101870856, "y": -2.3495426447800583 }, { "x": -0.06963607638340363, "y": -2.0994086733010136 }, { "x": -0.04614335871281128, "y": -1.850348805237445 }, { "x": -0.0032665965404703456, "y": -1.603885199548813 }, { "x": 0.058732163709919405, "y": -1.3615241478288453 }, { "x": 0.1394740092524671, "y": -1.1247468684251771 }, { "x": 0.23846547671041662, "y": -0.8950004537983887 }, { "x": 0.3551015679751117, "y": -0.673689026443526 }, { "x": 0.4886694477245328, "y": -0.4621651574294674 }, { "x": 0.6383528000001206, "y": -0.2617216000001008 }] }), jsx("silkscreentext", { text: "{NAME}", pcbX: "1.839087mm", pcbY: "8.265924mm", anchorAlignment: "center", fontSize: "1mm" }), jsx("courtyardoutline", { outline: [{ "x": -3.440112999999883, "y": 7.515924000000041 }, { "x": 7.118287000000009, "y": 7.515924000000041 }, { "x": 7.118287000000009, "y": -4.083875999999918 }, { "x": -3.440112999999883, "y": -4.083875999999918 }, { "x": -3.440112999999883, "y": 7.515924000000041 }] })] }), ...props }));
};

const pinLabels$4 = {
    pin1: ["cathode", "IO"],
    pin2: ["anode", "GND"]
};
const ESDA25P35_1U1M = (props) => {
    return (jsx("chip", { pinLabels: pinLabels$4, symbol: jsxs("symbol", { children: [jsx("schematicpath", { points: [{ "x": -0.2, "y": 0.14 }, { "x": -0.2, "y": -0.14 }], strokeColor: "#880000" }), jsx("schematicpath", { svgPath: "M 0 0.12 L -0.2 0 L 0 -0.14 Z", strokeColor: "#880000", isFilled: true, fillColor: "#880000" }), jsx("port", { name: "pin1", pinNumber: 1, aliases: ["1"], direction: "left", schX: -0.5, schY: 0, schStemLength: 0.3 }), jsx("port", { name: "pin2", pinNumber: 2, aliases: ["2"], direction: "right", schX: 0.3, schY: 0, schStemLength: 0.3 })] }), supplierPartNumbers: {
            "jlcpcb": [
                "C1974707"
            ]
        }, manufacturerPartNumber: "ESDA25P35-1U1M", footprint: "res_p1.0498mm_pw0.6mm_ph0.9mm", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1974707.obj?uuid=f410d8974c0443bc9ff656f954d8e306",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1974707.step?uuid=f410d8974c0443bc9ff656f954d8e306",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: 0, y: 0.0000762000000804619, z: -0.02 },
        }, ...props }));
};

const pinLabels$3 = {
    pin13: ["GND6"],
    pin14: ["GND3"],
    pin15: ["GND5"],
    pin16: ["GND4"],
    pin17: ["B1A12"],
    pin18: ["B4A9"],
    pin19: ["A4B9"],
    pin20: ["A1B12"],
    pin21: ["B5"],
    pin22: ["A8"],
    pin23: ["B6"],
    pin24: ["A7"],
    pin25: ["A6"],
    pin26: ["B7"],
    pin27: ["A5"],
    pin28: ["B8"]
};
const HX_TYPE_C_16PIN_5A_143 = (props) => {
    return (jsx("chip", { pinLabels: pinLabels$3, supplierPartNumbers: {
            "jlcpcb": [
                "C19189138"
            ]
        }, manufacturerPartNumber: "HX TYPE-C 16PIN 5A 143", footprint: jsxs("footprint", { children: [jsx("hole", { pcbX: "2.875026mm", pcbY: "1.0149396mm", diameter: "0.649986mm" }), jsx("hole", { pcbX: "-2.875026mm", pcbY: "1.0149396mm", diameter: "0.649986mm" }), jsx("platedhole", { portHints: ["pin14"], pcbX: "4.320032mm", pcbY: "1.5150656mm", holeWidth: "0.5999988mm", holeHeight: "1.6999966mm", outerWidth: "0.999998mm", outerHeight: "2.0999958mm", shape: "pill" }), jsx("platedhole", { portHints: ["pin16"], pcbX: "4.320032mm", pcbY: "-2.6650124mm", holeWidth: "0.5999988mm", holeHeight: "1.3999972mm", outerWidth: "0.999998mm", outerHeight: "1.7999964mm", shape: "pill" }), jsx("platedhole", { portHints: ["pin15"], pcbX: "-4.320032mm", pcbY: "-2.6650124mm", holeWidth: "0.5999988mm", holeHeight: "1.3999972mm", outerWidth: "0.999998mm", outerHeight: "1.7999964mm", shape: "pill" }), jsx("platedhole", { portHints: ["pin13"], pcbX: "-4.320032mm", pcbY: "1.5150656mm", holeWidth: "0.5999988mm", holeHeight: "1.6999966mm", outerWidth: "0.999998mm", outerHeight: "2.0999958mm", shape: "pill" }), jsx("smtpad", { portHints: ["pin17"], pcbX: "3.200146mm", pcbY: "2.1150136mm", width: "0.5999988mm", height: "1.1999976mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin18"], pcbX: "2.400046mm", pcbY: "2.1150136mm", width: "0.5999988mm", height: "1.1999976mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin19"], pcbX: "-2.400046mm", pcbY: "2.1150136mm", width: "0.5999988mm", height: "1.1999976mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin20"], pcbX: "-3.199892mm", pcbY: "2.1150136mm", width: "0.5999988mm", height: "1.1999976mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin21"], pcbX: "1.75006mm", pcbY: "2.1150136mm", width: "0.2999994mm", height: "1.1999976mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin22"], pcbX: "1.24968mm", pcbY: "2.1150136mm", width: "0.2999994mm", height: "1.1999976mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin23"], pcbX: "0.750062mm", pcbY: "2.1150136mm", width: "0.2999994mm", height: "1.1999976mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin24"], pcbX: "0.249936mm", pcbY: "2.1150136mm", width: "0.2999994mm", height: "1.1999976mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin25"], pcbX: "-0.249936mm", pcbY: "2.1150136mm", width: "0.2999994mm", height: "1.1999976mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin26"], pcbX: "-0.750062mm", pcbY: "2.1150136mm", width: "0.2999994mm", height: "1.1999976mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin27"], pcbX: "-1.249934mm", pcbY: "2.1150136mm", width: "0.2999994mm", height: "1.1999976mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin28"], pcbX: "-1.75006mm", pcbY: "2.1150136mm", width: "0.2999994mm", height: "1.1999976mm", shape: "rect" }), jsx("silkscreenpath", { route: [{ "x": 4.330649199999925, "y": -1.5338742000000138 }, { "x": 4.330649199999925, "y": 0.23396579999996447 }] }), jsx("silkscreenpath", { route: [{ "x": 4.330649199999925, "y": -5.2349082000000635 }, { "x": 4.330649199999925, "y": -3.795998200000099 }] }), jsx("silkscreenpath", { route: [{ "x": -4.316018799999938, "y": -5.2349082000000635 }, { "x": 4.330649199999925, "y": -5.2349082000000635 }] }), jsx("silkscreenpath", { route: [{ "x": -4.316018799999938, "y": -3.796049000000039 }, { "x": -4.316018799999938, "y": -5.2349082000000635 }] }), jsx("silkscreenpath", { route: [{ "x": -4.316018799999938, "y": 0.233889599999884 }, { "x": -4.316018799999938, "y": -1.5337979999999334 }] }), jsx("silkscreentext", { text: "{NAME}", pcbX: "0.007874mm", pcbY: "3.7187716mm", anchorAlignment: "center", fontSize: "1mm" }), jsx("courtyardoutline", { outline: [{ "x": -5.06812600000012, "y": 2.9687715999998545 }, { "x": 5.083873999999923, "y": 2.9687715999998545 }, { "x": 5.083873999999923, "y": -5.532228400000122 }, { "x": -5.06812600000012, "y": -5.532228400000122 }, { "x": -5.06812600000012, "y": 2.9687715999998545 }] })] }), cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C19189138.obj?uuid=b818f955ebd74f4c8407b3a215b5f0a7",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C19189138.step?uuid=b818f955ebd74f4c8407b3a215b5f0a7",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: 0.000025399999913133797, y: 1.3149210000000857, z: -29999999999752447e-22 },
        }, ...props }));
};

const pinLabels$2 = {
    pin1: ["VCAP"],
    pin2: ["GND"],
    pin3: ["EN"],
    pin4: ["CATHODE"],
    pin5: ["GATE"],
    pin6: ["ANODE"]
};
const LM74700QDBVRQ1 = (props) => {
    return (jsx("chip", { pinLabels: pinLabels$2, supplierPartNumbers: {
            "jlcpcb": [
                "C2941042"
            ]
        }, manufacturerPartNumber: "LM74700QDBVRQ1", footprint: jsxs("footprint", { children: [jsx("smtpad", { portHints: ["pin1"], pcbX: "-0.94996mm", pcbY: "-1.149096mm", width: "0.532003mm", height: "1.072007mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin2"], pcbX: "0mm", pcbY: "-1.149096mm", width: "0.532003mm", height: "1.072007mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin3"], pcbX: "0.94996mm", pcbY: "-1.149096mm", width: "0.532003mm", height: "1.072007mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin4"], pcbX: "0.94996mm", pcbY: "1.149096mm", width: "0.532003mm", height: "1.072007mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin5"], pcbX: "0mm", pcbY: "1.149096mm", width: "0.532003mm", height: "1.072007mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin6"], pcbX: "-0.94996mm", pcbY: "1.149096mm", width: "0.532003mm", height: "1.072007mm", shape: "rect" }), jsx("silkscreenpath", { route: [{ "x": 1.5391891999998961, "y": -0.8892031999998835 }, { "x": 1.5391891999998961, "y": 0.8892031999999972 }] }), jsx("silkscreenpath", { route: [{ "x": -1.5391892000000098, "y": -0.8892031999998835 }, { "x": -1.5391892000000098, "y": 0.8892031999999972 }] }), jsx("silkscreenpath", { route: [{ "x": -1.518158000000085, "y": -1.3014960000000428 }, { "x": -1.5232730105126393, "y": -1.3403483621364103 }, { "x": -1.538269462536391, "y": -1.3765529999999444 }, { "x": -1.5621253726490067, "y": -1.4076426273509242 }, { "x": -1.5932150000001002, "y": -1.4314985374635398 }, { "x": -1.6294196378635206, "y": -1.4464949894874053 }, { "x": -1.6682720000001154, "y": -1.451609999999846 }, { "x": -1.7071243621367103, "y": -1.4464949894874053 }, { "x": -1.7433290000001307, "y": -1.4314985374635398 }, { "x": -1.7744186273511104, "y": -1.4076426273509242 }, { "x": -1.7982745374637261, "y": -1.3765529999999444 }, { "x": -1.8132709894875916, "y": -1.3403483621364103 }, { "x": -1.818386000000146, "y": -1.3014960000000428 }, { "x": -1.8132709894875916, "y": -1.2626436378633343 }, { "x": -1.7982745374637261, "y": -1.226438999999914 }, { "x": -1.7744186273511104, "y": -1.1953493726489341 }, { "x": -1.7433290000001307, "y": -1.1714934625363185 }, { "x": -1.7071243621367103, "y": -1.156497010512453 }, { "x": -1.6682720000001154, "y": -1.1513819999998987 }, { "x": -1.6294196378635206, "y": -1.156497010512453 }, { "x": -1.5932150000001002, "y": -1.1714934625363185 }, { "x": -1.5621253726490067, "y": -1.1953493726489341 }, { "x": -1.538269462536391, "y": -1.226438999999914 }, { "x": -1.5232730105126393, "y": -1.2626436378633343 }, { "x": -1.518158000000085, "y": -1.3014960000000428 }] }), jsx("silkscreentext", { text: "{NAME}", pcbX: "-0.1524mm", pcbY: "2.6764mm", anchorAlignment: "center", fontSize: "1mm" }), jsx("courtyardoutline", { outline: [{ "x": -2.078800000000001, "y": 1.9264000000000578 }, { "x": 1.7739999999998872, "y": 1.9264000000000578 }, { "x": 1.7739999999998872, "y": -2.0279999999999063 }, { "x": -2.078800000000001, "y": -2.0279999999999063 }, { "x": -2.078800000000001, "y": 1.9264000000000578 }] })] }), cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2941042.obj?uuid=229b69761e2c45dba6a83d8866dec72d",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2941042.step?uuid=229b69761e2c45dba6a83d8866dec72d",
            pcbRotationOffset: 90,
            modelOriginPosition: { x: -12700000070253736e-21, y: 0.000012700000070253736, z: -0.048939 },
        }, ...props }));
};

const pinLabels$1 = {
    pin1: ["G"],
    pin2: ["D"],
    pin3: ["S"]
};
const MS50N06 = (props) => {
    return (jsx("chip", { pinLabels: pinLabels$1, symbol: jsxs("symbol", { children: [jsx("schematicpath", { points: [{ "x": -0.2, "y": 0 }, { "x": -0.08, "y": -0.04 }, { "x": -0.08, "y": 0.04 }, { "x": -0.2, "y": 0 }], strokeColor: "#880000", isFilled: true, fillColor: "#880000" }), jsx("schematicpath", { points: [{ "x": 0.2, "y": 0.04 }, { "x": 0.14, "y": -0.06 }, { "x": 0.26, "y": -0.06 }, { "x": 0.2, "y": 0.04 }], strokeColor: "#880000", isFilled: true, fillColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.2, "y": 0.14 }, { "x": 0, "y": 0.14 }, { "x": 0, "y": 0.2 }, { "x": 0.2, "y": 0.2 }, { "x": 0.2, "y": 0.2 }, { "x": 0.2, "y": 0.04 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.2, "y": 0 }, { "x": 0, "y": 0 }, { "x": 0, "y": -0.2 }, { "x": 0, "y": -0.2 }, { "x": 0, "y": -0.2 }, { "x": 0, "y": -0.2 }, { "x": 0, "y": -0.2 }, { "x": 0.2, "y": -0.2 }, { "x": 0.2, "y": -0.06 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": 0, "y": -0.14 }, { "x": -0.2, "y": -0.14 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.24, "y": 0.18 }, { "x": -0.24, "y": -0.18 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.2, "y": 0.18 }, { "x": -0.2, "y": 0.1 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.2, "y": -0.04 }, { "x": -0.2, "y": 0.04 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.2, "y": -0.18 }, { "x": -0.2, "y": -0.1 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": -0.4, "y": 0 }, { "x": -0.24, "y": 0 }], strokeColor: "#880000" }), jsx("schematicpath", { points: [{ "x": 0.28, "y": 0.04 }, { "x": 0.24, "y": 0.04 }, { "x": 0.16, "y": 0.04 }, { "x": 0.12, "y": 0.04 }], strokeColor: "#880000" }), jsx("port", { name: "pin2", pinNumber: 2, aliases: ["D"], direction: "up", schX: 0, schY: 0.4, schStemLength: 0.2 }), jsx("port", { name: "pin1", pinNumber: 1, aliases: ["G"], direction: "left", schX: -0.6, schY: 0, schStemLength: 0.2 }), jsx("port", { name: "pin3", pinNumber: 3, aliases: ["S"], direction: "down", schX: 0, schY: -0.4, schStemLength: 0.2 })] }), supplierPartNumbers: {
            "jlcpcb": [
                "C2902884"
            ]
        }, manufacturerPartNumber: "MS50N06", footprint: jsxs("footprint", { children: [jsx("smtpad", { portHints: ["pin2"], pcbX: "-2.3670895mm", pcbY: "0mm", width: "6.5000124mm", height: "5.999988mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin1"], pcbX: "4.2170985mm", pcbY: "-2.284984mm", width: "2.7999944mm", height: "1.2999974mm", shape: "rect" }), jsx("smtpad", { portHints: ["pin3"], pcbX: "4.2170985mm", pcbY: "2.284984mm", width: "2.7999944mm", height: "1.2999974mm", shape: "rect" }), jsx("silkscreenpath", { route: [{ "x": -3.245091299999899, "y": 3.2999426000000085 }, { "x": 2.1548979000000372, "y": 3.2999426000000085 }, { "x": 2.1548979000000372, "y": -3.300044200000002 }, { "x": -3.245091299999899, "y": -3.300044200000002 }] }), jsx("silkscreentext", { text: "{NAME}", pcbX: "-0.0120015mm", pcbY: "4.291078mm", anchorAlignment: "center", fontSize: "1mm" }), jsx("courtyardoutline", { outline: [{ "x": -5.875401499999839, "y": 3.541078000000198 }, { "x": 5.851398500000073, "y": 3.541078000000198 }, { "x": 5.851398500000073, "y": -3.5883219999999483 }, { "x": -5.875401499999839, "y": -3.5883219999999483 }, { "x": -5.875401499999839, "y": 3.541078000000198 }] })] }), cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2902884.obj?uuid=9aa7a0eadfaa4b8eac48494dee2e6800",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2902884.step?uuid=9aa7a0eadfaa4b8eac48494dee2e6800",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: 0.9000254999999244, y: 0.00012700000002041634, z: -0.05 },
        }, ...props }));
};

const pinLabels = {
    pin1: ["CC1DB"],
    pin2: ["CC1"],
    pin3: ["NC"],
    pin4: ["CC2"],
    pin5: ["CC2DB"],
    pin6: ["RESET"],
    pin7: ["SCL"],
    pin8: ["SDA"],
    pin9: ["DISCH"],
    pin10: ["GND"],
    pin11: ["ATTACH"],
    pin12: ["ADDR0"],
    pin13: ["ADDR1"],
    pin14: ["POWER_OK3"],
    pin15: ["GPIO"],
    pin16: ["VBUS_EN_SNK"],
    pin17: ["A_B_SIDE"],
    pin18: ["VBUS_VS_DISCH"],
    pin19: ["ALERT"],
    pin20: ["POWER_OK2"],
    pin21: ["VREG_1V2"],
    pin22: ["VSYS"],
    pin23: ["VREG_2V7"],
    pin24: ["VDD"],
    pin25: ["EP"]
};
const footprinterPinLabels = {
    ...pinLabels,
    "pin25": [...pinLabels["pin25"], "thermalpad"],
};
const STUSB4500QTR = (props) => {
    return (jsx("chip", { pinLabels: footprinterPinLabels, supplierPartNumbers: {
            "jlcpcb": [
                "C2678061"
            ]
        }, manufacturerPartNumber: "STUSB4500QTR", footprint: "qfn24_thermalpad2.8mmx2.8mm_pillpads_p0.4999mm_h4.9mm_pw0.28mm_pl0.7mm_pin1location(bottomside,left)", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2678061.obj?uuid=f4a3249710724deb990f62f343cd4553",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2678061.step?uuid=f4a3249710724deb990f62f343cd4553",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: -12699999842880061e-21, y: -12700000070253736e-21, z: 0 },
        }, ...props }));
};

const IdealDiodePath = ({ id, inputNet, pcbX, pcbY, schX, schY, }) => (jsxs(Fragment, { children: [jsx(LM74700QDBVRQ1, { name: `U_${id}_OR`, pcbX: pcbX, pcbY: pcbY, schX: schX, schY: schY, schWidth: 2.2, schHeight: 3, schPinArrangement: {
                leftSide: [6, 3, 1],
                rightSide: [4, 5],
                bottomSide: [2],
            }, schSheetName: sheets.powerInput, schSectionName: sections.inputSelection }), jsx(MS50N06, { name: `Q_${id}_OR`, pcbX: pcbX + 7.8, pcbY: id === "BARREL" ? pcbY : pcbY + 1.5, pcbRotation: 180, schX: schX + 4.5, schY: schY, schSheetName: sheets.powerInput, schSectionName: sections.inputSelection }), jsx("capacitor", { name: `C_${id}_VCAP`, capacitance: "100nF", footprint: "0603", pcbX: id === "BARREL" ? pcbX : pcbX + 0.3, pcbY: id === "BARREL" ? pcbY + 4 : pcbY + 3.5, schRotation: 270, schX: schX - 2.5, schY: schY + 1.2, schSheetName: sheets.powerInput, schSectionName: sections.inputSelection }), jsx("capacitor", { name: `C_${id}_INPUT`, capacitance: "100nF", footprint: "0603", pcbX: id === "BARREL" ? pcbX : pcbX + 0.7, pcbY: id === "BARREL" ? pcbY - 4 : pcbY - 3.5, schRotation: 270, schX: schX - 2.5, schY: schY - 1.5, schSheetName: sheets.powerInput, schSectionName: sections.inputSelection }), jsx("trace", { name: `${id}_OR_FET_SOURCE`, from: `.Q_${id}_OR > .S`, to: inputNet, ...highCurrentTrace }), jsx("trace", { name: `${id}_OR_FET_DRAIN`, from: `.Q_${id}_OR > .D`, to: "net.VIN_SELECTED", ...highCurrentTrace }), jsx("trace", { name: `${id}_OR_ANODE_SENSE`, from: `.U_${id}_OR > .ANODE`, to: inputNet, ...logicTrace }), jsx("trace", { name: `${id}_OR_CATHODE_SENSE`, from: `.U_${id}_OR > .CATHODE`, to: "net.VIN_SELECTED", ...logicTrace }), jsx("trace", { name: `${id}_OR_GATE`, from: `.U_${id}_OR > .GATE`, to: `.Q_${id}_OR > .G`, ...logicTrace }), jsx("trace", { name: `${id}_OR_ENABLE`, from: `.U_${id}_OR > .EN`, to: inputNet, ...logicTrace }), jsx("trace", { name: `${id}_OR_GROUND`, from: `.U_${id}_OR > .GND`, to: "net.GND", ...groundTrace }), jsx("trace", { name: `${id}_OR_VCAP`, from: `.U_${id}_OR > .VCAP`, to: `.C_${id}_VCAP > .pin1`, ...logicTrace }), jsx("trace", { name: `${id}_OR_VCAP_RETURN`, from: `.C_${id}_VCAP > .pin2`, to: inputNet, ...logicTrace }), jsx("trace", { name: `${id}_INPUT_BYPASS`, from: `.C_${id}_INPUT > .pin1`, to: inputNet, ...logicTrace }), jsx("trace", { name: `${id}_INPUT_BYPASS_GND`, from: `.C_${id}_INPUT > .pin2`, to: "net.GND", ...groundTrace })] }));
const UsbPdPowerSection = () => (jsxs(Fragment, { children: [jsx(HX_TYPE_C_16PIN_5A_143, { name: "J_PD", noConnect: ["pin22", "pin23", "pin24", "pin25", "pin26", "pin28"], pcbX: -42, pcbY: 35.2, pcbRotation: 180, schX: -10, schY: 6.3, schWidth: 2.8, schHeight: 5.5, schPinArrangement: {
                leftSide: [27, 21, 22, 23, 24, 25, 26, 28],
                topSide: [18, 19],
                bottomSide: [17, 20, 13, 14, 15, 16],
            }, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx(STUSB4500QTR, { name: "U_PD", noConnect: [
                "NC",
                "DISCH",
                "ATTACH",
                "POWER_OK3",
                "GPIO",
                "VBUS_EN_SNK",
                "A_B_SIDE",
                "ALERT",
            ], pcbX: -39, pcbY: 25.5, pcbRotation: 180, schX: 0, schY: 5.3, schWidth: 4, schHeight: 6, schPinArrangement: {
                leftSide: [1, 2, 5, 4, 6, 7, 8, 12, 13],
                rightSide: [24, 18, 20, 14, 11, 15, 16, 17, 19, 9],
                topSide: [23, 21, 22],
                bottomSide: [10, 25, 3],
            }, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx(ESDA25P35_1U1M, { name: "D_PD_CC1", pcbX: -37.8, pcbY: 31.1, pcbRotation: 90, schRotation: 270, schX: -5.5, schY: 1, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx(ESDA25P35_1U1M, { name: "D_PD_CC2", pcbX: -39.5, pcbY: 31.1, pcbRotation: 90, schRotation: 270, schX: -3, schY: 1, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx(ESDA25P35_1U1M, { name: "D_PD_VBUS", pcbX: -45.5, pcbY: 26.5, pcbRotation: 90, schRotation: 270, schX: 10, schY: 7.5, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("capacitor", { name: "C_PD_VDD", capacitance: "1uF", footprint: "0603", maxDecouplingTraceLength: "3mm", pcbX: -34.5, pcbY: 27.6, schRotation: 270, schX: 7, schY: 8, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("capacitor", { name: "C_PD_VSYS", capacitance: "100nF", footprint: "0402", maxDecouplingTraceLength: "3mm", pcbX: -34.8, pcbY: 23.8, schRotation: 270, schX: 3, schY: 8.5, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("capacitor", { name: "C_PD_1V2", capacitance: "1uF", footprint: "0402", maxDecouplingTraceLength: "3mm", pcbX: -35.2, pcbY: 22.6, schRotation: 270, schX: -2, schY: 8.5, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("capacitor", { name: "C_PD_2V7", capacitance: "1uF", footprint: "0402", maxDecouplingTraceLength: "3mm", pcbX: -34.8, pcbY: 26.1, schRotation: 270, schX: 0.5, schY: 8.5, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("resistor", { name: "R_PD_VSYS_FILTER", resistance: "10", footprint: "0402", pcbX: -33.8, pcbY: 24.9, pcbRotation: 180, schX: 3, schY: 10, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("resistor", { name: "R_PD_SCL_SER", resistance: "22", footprint: "0402", pcbX: -43.5, pcbY: 26.75, pcbRotation: 180, schX: -1, schY: 1.5, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("resistor", { name: "R_PD_SDA_SER", resistance: "22", footprint: "0402", pcbX: -43.5, pcbY: 25.75, pcbRotation: 180, schX: 2, schY: 1.5, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("resistor", { name: "R_PD_RESET", resistance: "10k", footprint: "0402", pcbX: -42.8, pcbY: 28, pcbRotation: 180, schRotation: 270, schX: -7, schY: 3, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx(B5819W_SL, { name: "D_PD_SENSE", pcbX: -29.5, pcbY: 24.5, schX: 7, schY: 3, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("resistor", { name: "R_PD_SENSE_CHARGE", resistance: "470", footprint: "0603", pcbX: -30.2, pcbY: 27.6, pcbRotation: 0, schX: 7, schY: 2, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("resistor", { name: "R_PD_SENSE_LIMIT", resistance: "1k", footprint: "0603", pcbX: -32, pcbY: 22.5, schX: 10, schY: 2, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("capacitor", { name: "C_PD_SENSE", capacitance: "1uF", footprint: "0603", pcbX: -29, pcbY: 22.5, schRotation: 270, schX: 8.5, schY: 0, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx(A_30P06, { name: "Q_PD_SWITCH", pcbX: -31.7, pcbY: 34.4, pcbRotation: 180, schX: 12.8, schY: 6, schWidth: 2.5, schHeight: 4, schPinArrangement: {
                leftSide: [1, 2, 3, 4],
                rightSide: [5, 6, 7, 8, 9, 10, 11],
            }, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("resistor", { name: "R_PD_GATE_DRIVE", resistance: "22k", footprint: "0603", pcbX: -27.5, pcbY: 26.7, pcbRotation: 90, schX: 10, schY: 4, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("resistor", { name: "R_PD_GATE_PULLUP", resistance: "100k", footprint: "0603", pcbX: -25.5, pcbY: 23.5, schRotation: 270, schX: 11.8, schY: 9, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx("capacitor", { name: "C_PD_GATE", capacitance: "100nF", footprint: "0603", pcbX: -22.5, pcbY: 25.5, schRotation: 270, schX: 14.3, schY: 9, schSheetName: sheets.powerInput, schSectionName: sections.usbPd }), jsx(DC_012A_5A_2_0, { name: "J_BARREL", noConnect: ["SWITCH"], pcbX: -50, pcbY: 6, schX: -12, schY: -7, schSheetName: sheets.powerInput, schSectionName: sections.inputSelection }), jsx(IdealDiodePath, { id: "PD", inputNet: "net.PD_CONTRACT", pcbX: -22.7, pcbY: 32, schX: -5, schY: -3 }), jsx(IdealDiodePath, { id: "BARREL", inputNet: "net.BARREL_RAW", pcbX: -40, pcbY: 1, schX: -5, schY: -7 }), jsx("capacitor", { name: "C_VIN_SELECTED", capacitance: "1uF", footprint: "1206", pcbX: -16, pcbY: 24, schRotation: 270, schX: 3, schY: -5, schSheetName: sheets.powerInput, schSectionName: sections.inputSelection }), [18, 19].map((pin) => (jsx(Fragment$1, { children: jsx("trace", { name: `PD_VBUS_${pin}`, from: `.J_PD > .pin${pin}`, to: "net.PD_VBUS_RAW", ...powerTrace }) }, `PD_VBUS_${pin}`))), [17, 20].map((pin) => (jsx(Fragment$1, { children: jsx("trace", { name: `PD_GND_${pin}`, from: `.J_PD > .pin${pin}`, to: "net.GND", ...groundTrace }) }, `PD_GND_${pin}`))), [13, 14, 15, 16].map((pin) => (jsx(Fragment$1, { children: jsx("trace", { name: `PD_SHELL_${pin}`, from: `.J_PD > .pin${pin}`, to: "net.GND", ...groundTrace }) }, `PD_SHELL_${pin}`))), jsx("trace", { name: "PD_CONNECTOR_CC1", from: ".J_PD > .pin27", to: "net.PD_CC1", ...logicTrace }), jsx("trace", { name: "PD_CONNECTOR_CC2", from: ".J_PD > .pin21", to: "net.PD_CC2", ...logicTrace }), jsx("trace", { name: "PD_CONTROLLER_CC1", from: ".U_PD > .CC1", to: "net.PD_CC1", ...logicTrace }), jsx("trace", { name: "PD_CONTROLLER_CC2", from: ".U_PD > .CC2", to: "net.PD_CC2", ...logicTrace }), jsx("trace", { name: "PD_DEAD_BATTERY_CC1", from: ".U_PD > .CC1DB", to: "net.PD_CC1", ...logicTrace }), jsx("trace", { name: "PD_DEAD_BATTERY_CC2", from: ".U_PD > .CC2DB", to: "net.PD_CC2", ...logicTrace }), jsx("trace", { name: "PD_CC1_ESD", from: ".D_PD_CC1 > .IO", to: "net.PD_CC1", ...logicTrace }), jsx("trace", { name: "PD_CC1_ESD_GND", from: ".D_PD_CC1 > .GND", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_CC2_ESD", from: ".D_PD_CC2 > .IO", to: "net.PD_CC2", ...logicTrace }), jsx("trace", { name: "PD_CC2_ESD_GND", from: ".D_PD_CC2 > .GND", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_VBUS_ESD", from: ".D_PD_VBUS > .IO", to: "net.PD_VBUS_RAW", ...powerTrace }), jsx("trace", { name: "PD_VBUS_ESD_GND", from: ".D_PD_VBUS > .GND", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_VDD", from: ".U_PD > .VDD", to: "net.PD_VBUS_RAW", ...logicTrace }), jsx("trace", { name: "PD_VDD_DECOUPLE", from: ".C_PD_VDD > .pin1", to: ".U_PD > .VDD", ...logicTrace }), jsx("trace", { name: "PD_VDD_DECOUPLE_GND", from: ".C_PD_VDD > .pin2", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_VSYS_FILTER_INPUT", from: "net.V3V3", to: ".R_PD_VSYS_FILTER > .pin1", ...logicTrace }), jsx("trace", { name: "PD_VSYS_FILTER_OUTPUT", from: ".R_PD_VSYS_FILTER > .pin2", to: "net.PD_VSYS_3V3", ...logicTrace }), jsx("trace", { name: "PD_VSYS", from: ".U_PD > .VSYS", to: "net.PD_VSYS_3V3", ...logicTrace }), jsx("trace", { name: "PD_VSYS_DECOUPLE", from: ".C_PD_VSYS > .pin1", to: "net.PD_VSYS_3V3", ...logicTrace }), jsx("trace", { name: "PD_VSYS_DECOUPLE_GND", from: ".C_PD_VSYS > .pin2", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_1V2_DECOUPLE", from: ".C_PD_1V2 > .pin1", to: ".U_PD > .VREG_1V2", ...logicTrace }), jsx("trace", { name: "PD_1V2_DECOUPLE_GND", from: ".C_PD_1V2 > .pin2", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_2V7_DECOUPLE", from: ".C_PD_2V7 > .pin1", to: ".U_PD > .VREG_2V7", ...logicTrace }), jsx("trace", { name: "PD_2V7_DECOUPLE_GND", from: ".C_PD_2V7 > .pin2", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_GROUND", from: ".U_PD > .GND", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_EP_GROUND", from: ".U_PD > .EP", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_RESET_PULLDOWN", from: ".U_PD > .RESET", to: ".R_PD_RESET > .pin1", ...logicTrace }), jsx("trace", { name: "PD_RESET_GROUND", from: ".R_PD_RESET > .pin2", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_ADDR0", from: ".U_PD > .ADDR0", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_ADDR1", from: ".U_PD > .ADDR1", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_I2C_SCL_LOCAL", from: ".U_PD > .SCL", to: ".R_PD_SCL_SER > .pin1", ...logicTrace }), jsx("trace", { name: "PD_I2C_SCL", from: ".R_PD_SCL_SER > .pin2", to: "net.MCU_TEMP_SCL", ...logicTrace }), jsx("trace", { name: "PD_I2C_SDA_LOCAL", from: ".U_PD > .SDA", to: ".R_PD_SDA_SER > .pin1", ...logicTrace }), jsx("trace", { name: "PD_I2C_SDA", from: ".R_PD_SDA_SER > .pin2", to: "net.MCU_TEMP_SDA", ...logicTrace }), jsx("trace", { name: "PD_SENSE_DIODE_INPUT", from: ".D_PD_SENSE > .anode", to: "net.PD_VBUS_RAW", ...logicTrace }), jsx("trace", { name: "PD_SENSE_DIODE_OUTPUT", from: ".D_PD_SENSE > .cathode", to: "net.PD_VBUS_SENSE", ...logicTrace }), jsx("trace", { name: "PD_SENSE_CHARGE_INPUT", from: ".R_PD_SENSE_CHARGE > .pin1", to: "net.PD_VBUS_RAW", ...logicTrace }), jsx("trace", { name: "PD_SENSE_CHARGE_OUTPUT", from: ".R_PD_SENSE_CHARGE > .pin2", to: "net.PD_VBUS_SENSE", ...logicTrace }), jsx("trace", { name: "PD_SENSE_LIMIT_INPUT", from: ".R_PD_SENSE_LIMIT > .pin1", to: "net.PD_VBUS_SENSE", ...logicTrace }), jsx("trace", { name: "PD_SENSE_LIMIT_OUTPUT", from: ".R_PD_SENSE_LIMIT > .pin2", to: ".U_PD > .VBUS_VS_DISCH", ...logicTrace }), jsx("trace", { name: "PD_SENSE_CAP", from: ".C_PD_SENSE > .pin1", to: "net.PD_VBUS_SENSE", ...logicTrace }), jsx("trace", { name: "PD_SENSE_CAP_GND", from: ".C_PD_SENSE > .pin2", to: "net.GND", ...groundTrace }), jsx("trace", { name: "PD_SWITCH_SOURCE", from: ".Q_PD_SWITCH > .S", to: "net.PD_VBUS_RAW", ...highCurrentTrace }), jsx("trace", { name: "PD_SWITCH_DRAIN", from: ".Q_PD_SWITCH > .D", to: "net.PD_CONTRACT", ...highCurrentTrace }), jsx("trace", { name: "PD_SWITCH_GATE_FET", from: ".Q_PD_SWITCH > .G", to: "net.PD_SWITCH_GATE", ...logicTrace }), jsx("trace", { name: "PD_SWITCH_GATE_DRIVE", from: ".U_PD > .POWER_OK2", to: ".R_PD_GATE_DRIVE > .pin1", ...logicTrace }), jsx("trace", { name: "PD_SWITCH_GATE_DRIVE_OUT", from: ".R_PD_GATE_DRIVE > .pin2", to: "net.PD_SWITCH_GATE", ...logicTrace }), jsx("trace", { name: "PD_SWITCH_GATE_PULLUP_SOURCE", from: ".R_PD_GATE_PULLUP > .pin1", to: "net.PD_VBUS_RAW", ...logicTrace }), jsx("trace", { name: "PD_SWITCH_GATE_PULLUP_GATE", from: ".R_PD_GATE_PULLUP > .pin2", to: "net.PD_SWITCH_GATE", ...logicTrace }), jsx("trace", { name: "PD_SWITCH_GATE_CAP_SOURCE", from: ".C_PD_GATE > .pin1", to: "net.PD_VBUS_RAW", ...logicTrace }), jsx("trace", { name: "PD_SWITCH_GATE_CAP_GATE", from: ".C_PD_GATE > .pin2", to: "net.PD_SWITCH_GATE", ...logicTrace }), jsx("trace", { name: "BARREL_INPUT", from: ".J_BARREL > .TIP", to: "net.BARREL_RAW", ...highCurrentTrace }), jsx("trace", { name: "BARREL_GROUND", from: ".J_BARREL > .SLEEVE", to: "net.GND", ...groundTrace }), jsx("trace", { name: "VIN_SELECTED_BYPASS", from: ".C_VIN_SELECTED > .pin1", to: "net.VIN_SELECTED", ...powerTrace }), jsx("trace", { name: "VIN_SELECTED_BYPASS_GND", from: ".C_VIN_SELECTED > .pin2", to: "net.GND", ...groundTrace })] }));

function Rp2040BldcController() {
    return (jsxs("board", { width: "109mm", height: "78mm", minViaHoleDiameter: "0.3mm", minViaPadDiameter: "0.45mm", layers: 2, children: [jsx("net", { name: "GND", isGroundNet: true }), jsx("net", { name: "V3V3", isPowerNet: true }), jsx("net", { name: "V5", isPowerNet: true }), jsx("net", { name: "VM", isPowerNet: true }), jsx("net", { name: "PD_VBUS_RAW", isPowerNet: true }), jsx("net", { name: "PD_CONTRACT", isPowerNet: true }), jsx("net", { name: "BARREL_RAW", isPowerNet: true }), jsx("net", { name: "VIN_SELECTED", isPowerNet: true }), jsx("net", { name: "PD_CC1" }), jsx("net", { name: "PD_CC2" }), jsx("net", { name: "PD_VBUS_SENSE" }), jsx("net", { name: "PD_SWITCH_GATE" }), jsx("net", { name: "MCU_TEMP_SCL" }), jsx("net", { name: "MCU_TEMP_SDA" }), jsx("net", { name: "PD_VSYS_3V3" }), jsx("net", { name: "PHASE_U" }), jsx("net", { name: "PHASE_V" }), jsx("net", { name: "PHASE_W" }), jsx("net", { name: "LS_A" }), jsx("net", { name: "LS_B" }), jsx("net", { name: "LS_C" }), jsx(SchematicSheets, {}), jsx(ControllerSection, {}), jsx(EncoderSection, {}), jsx(UsbPdPowerSection, {}), jsx(PowerSection, {}), jsx(GateDriverSection, {}), jsx(ProtectionSection, {}), jsx(PowerStageSection, {}), jsx("copperpour", { name: "GND_TOP", layer: "top", connectsTo: "net.GND", clearance: "0.35mm", padMargin: "0.5mm", traceMargin: "0.5mm", boardEdgeMargin: "0.5mm", coveredWithSolderMask: true }), jsx("copperpour", { name: "GND_BOTTOM", layer: "bottom", connectsTo: "net.GND", clearance: "0.35mm", padMargin: "0.5mm", traceMargin: "0.5mm", boardEdgeMargin: "0.5mm", coveredWithSolderMask: true }), jsx("hole", { diameter: "3.2mm", pcbX: -50.5, pcbY: 35 }), jsx("hole", { diameter: "3.2mm", pcbX: 50.5, pcbY: 35 }), jsx("hole", { diameter: "3.2mm", pcbX: -50.5, pcbY: -35 }), jsx("hole", { diameter: "3.2mm", pcbX: 50.5, pcbY: -35 }), jsx("silkscreentext", { text: "RP2040 BLDC CONTROLLER", fontSize: "1.5mm", pcbX: 0, pcbY: 37 }), jsx("silkscreentext", { text: "12-24V / REV A PROTOTYPE", fontSize: "0.8mm", pcbX: 34, pcbY: 37.5 }), jsx("silkscreentext", { text: "USB-C PD 12V", fontSize: "0.8mm", pcbX: -29, pcbY: 37.5 }), jsx("silkscreentext", { text: "BARREL 12-24V", fontSize: "0.8mm", pcbX: -49, pcbY: 10.5 }), jsx("silkscreentext", { text: "HALL", fontSize: "0.9mm", pcbX: -48, pcbY: -16 }), jsx("silkscreentext", { text: "ENCODER", fontSize: "0.9mm", pcbX: -47, pcbY: -35 }), jsx("silkscreentext", { text: "ONE MOTOR: U V W", fontSize: "1mm", pcbX: 35.5, pcbY: 27 })] }));
}

export { Rp2040BldcController as default };
