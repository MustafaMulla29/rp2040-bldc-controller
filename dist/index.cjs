'use strict';

var jsxRuntime = require('react/jsx-runtime');
var common = require('@tscircuit/common');
var react = require('react');

const sheets = {
    controller: "controller",
    hall: "hall",
    encoder: "encoder",
    protection: "protection",
    power: "power",
    motor: "motor",
};
const sections = {
    hall: "hall_inputs",
    encoder: "encoder_inputs",
    temperature: "temperature_protection",
    inputProtection: "input_protection",
    buck: "five_volt_buck",
    busSense: "bus_current_sense",
    gateDriver: "gate_driver",
    powerStage: "power_stage",
};
const logicTrace = {
    thickness: "0.2mm",
};
const senseTrace = {
    thickness: "0.2mm",
};
const groundTrace = {
    thickness: "0.2mm",
};
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
const ControllerSection = () => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(common.Microcontroller_RP2040, { name: "MCU", connections: {
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
            }, schAutoLayoutEnabled: true, schSheetName: sheets.controller, pcbX: 0, pcbY: -5.25, pcbRotation: 180, schX: -4, schY: 8 }), jsxRuntime.jsx("pinheader", { name: "J_HALL", pinCount: 5, gender: "male", pitch: "2.54mm", pinLabels: ["HALL_5V", "GND", "HALL_A", "HALL_B", "HALL_C"], showSilkscreenPinLabels: true, pcbX: -51, pcbY: -8, pcbRotation: 90, schX: 7, schY: 0, schWidth: 1.2, schSheetName: sheets.hall, schSectionName: sections.hall }), hallChannels.map(({ name, connectorPin, schY }, index) => (jsxRuntime.jsxs(react.Fragment, { children: [jsxRuntime.jsx("resistor", { name: `R_HALL_${name}_TOP`, resistance: "10k", footprint: "0603", pcbX: -47, pcbY: -5 - index * 5, schX: -10, schY: schY, schSheetName: sheets.hall, schSectionName: sections.hall }), jsxRuntime.jsx("resistor", { name: `R_HALL_${name}_BOT`, resistance: "18k", footprint: "0603", pcbX: -43, pcbY: -5 - index * 5, schRotation: 270, schX: -5, schY: schY - 1, schSheetName: sheets.hall, schSectionName: sections.hall }), jsxRuntime.jsx("capacitor", { name: `C_HALL_${name}`, capacitance: "1nF", footprint: "0603", pcbX: -39, pcbY: -5 - index * 5, schRotation: 270, schX: -2, schY: schY - 1, schSheetName: sheets.hall, schSectionName: sections.hall }), jsxRuntime.jsx("trace", { name: `HALL_${name}_INPUT`, from: `.J_HALL > .${connectorPin}`, to: `.R_HALL_${name}_TOP > .pin1`, ...logicTrace }), jsxRuntime.jsx("trace", { name: `HALL_${name}_DIVIDER`, from: `.R_HALL_${name}_TOP > .pin2`, to: `.R_HALL_${name}_BOT > .pin1`, ...logicTrace }), jsxRuntime.jsx("trace", { name: `HALL_${name}_FILTER`, from: `.R_HALL_${name}_TOP > .pin2`, to: `.C_HALL_${name} > .pin1`, ...logicTrace }), jsxRuntime.jsx("trace", { name: `HALL_${name}_GPIO`, from: `.R_HALL_${name}_TOP > .pin2`, to: `net.MCU_HALL_${name}_GPIO`, schDisplayLabel: `HALL_${name}`, ...logicTrace }), jsxRuntime.jsx("trace", { name: `HALL_${name}_PULLDOWN_GND`, from: `.R_HALL_${name}_BOT > .pin2`, to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: `HALL_${name}_CAP_GND`, from: `.C_HALL_${name} > .pin2`, to: "net.GND", ...logicTrace })] }, name))), jsxRuntime.jsx("trace", { name: "HALL_SUPPLY", from: ".J_HALL > .pin1", to: "net.V5", schDisplayLabel: "5V", ...logicTrace }), jsxRuntime.jsx("trace", { name: "HALL_GROUND", from: ".J_HALL > .pin2", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "MCU_GROUND_JOIN", from: ".MCU > .U1 > .GND", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "MCU_3V3_EXPORT", from: ".MCU > .U3 > .VOUT", to: "net.V3V3", schDisplayLabel: "3V3", ...logicTrace }), jsxRuntime.jsx("trace", { name: "MCU_VSYS_5V", from: ".MCU > .U3 > .VIN", to: "net.V5", schDisplayLabel: "5V", ...logicTrace })] }));

const encoderChannels = [
    { name: "A", connectorPin: "pin3", schY: 5 },
    { name: "B", connectorPin: "pin4", schY: 0 },
    { name: "Z", connectorPin: "pin5", schY: -5 },
];
const EncoderSection = () => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("pinheader", { name: "J_ENCODER", pinCount: 5, gender: "male", pitch: "2.54mm", pinLabels: ["ENC_5V", "GND", "ENC_A", "ENC_B", "ENC_Z"], showSilkscreenPinLabels: true, pcbX: -51, pcbY: -23, pcbRotation: 90, schX: 7, schY: 0, schWidth: 1.2, schSheetName: sheets.encoder, schSectionName: sections.encoder }), encoderChannels.map(({ name, connectorPin, schY }, index) => (jsxRuntime.jsxs(react.Fragment, { children: [jsxRuntime.jsx("resistor", { name: `R_ENC_${name}_TOP`, resistance: "10k", footprint: "0603", pcbX: -47, pcbY: -24 - index * 5, schX: -10, schY: schY, schSheetName: sheets.encoder, schSectionName: sections.encoder }), jsxRuntime.jsx("resistor", { name: `R_ENC_${name}_BOT`, resistance: "18k", footprint: "0603", pcbX: -43, pcbY: -24 - index * 5, schRotation: 270, schX: -5, schY: schY - 1, schSheetName: sheets.encoder, schSectionName: sections.encoder }), jsxRuntime.jsx("capacitor", { name: `C_ENC_${name}`, capacitance: "1nF", footprint: "0603", pcbX: -39, pcbY: -24 - index * 5, schRotation: 270, schX: -2, schY: schY - 1, schSheetName: sheets.encoder, schSectionName: sections.encoder }), jsxRuntime.jsx("trace", { name: `ENC_${name}_INPUT`, from: `.J_ENCODER > .${connectorPin}`, to: `.R_ENC_${name}_TOP > .pin1`, ...logicTrace }), jsxRuntime.jsx("trace", { name: `ENC_${name}_DIVIDER`, from: `.R_ENC_${name}_TOP > .pin2`, to: `.R_ENC_${name}_BOT > .pin1`, ...logicTrace }), jsxRuntime.jsx("trace", { name: `ENC_${name}_FILTER`, from: `.R_ENC_${name}_TOP > .pin2`, to: `.C_ENC_${name} > .pin1`, ...logicTrace }), jsxRuntime.jsx("trace", { name: `ENC_${name}_GPIO`, from: `.R_ENC_${name}_TOP > .pin2`, to: `net.MCU_ENC_${name}_GPIO`, schDisplayLabel: `ENC_${name}`, ...logicTrace }), jsxRuntime.jsx("trace", { name: `ENC_${name}_PULLDOWN_GND`, from: `.R_ENC_${name}_BOT > .pin2`, to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: `ENC_${name}_CAP_GND`, from: `.C_ENC_${name} > .pin2`, to: "net.GND", ...logicTrace })] }, name))), jsxRuntime.jsx("trace", { name: "ENCODER_SUPPLY", from: ".J_ENCODER > .pin1", to: "net.V5", schDisplayLabel: "5V", ...logicTrace }), jsxRuntime.jsx("trace", { name: "ENCODER_GROUND", from: ".J_ENCODER > .pin2", to: "net.GND", ...logicTrace })] }));

const pinLabels$8 = {
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
const footprinterPinLabels$1 = {
    ...pinLabels$8,
    "pin41": [...pinLabels$8["pin41"], "thermalpad"],
};
const DRV8323HRTAR = (props) => {
    return (jsxRuntime.jsx("chip", { pinLabels: footprinterPinLabels$1, supplierPartNumbers: {
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
const GateDriverSection = () => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DRV8323HRTAR, { name: "U_GATE", pcbX: 35.5, pcbY: -20, pcbRotation: 90, schX: -8.4, schY: 0, schWidth: 5.2, schHeight: 5.8, schPinArrangement: {
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
            }, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("resistor", { name: "R_GATE_VM_LINK", resistance: "0", footprint: "1206", pcbX: 28.5, pcbY: -28.5, schX: -12, schY: 7.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("capacitor", { name: "C_GATE_VM", capacitance: "100nF", footprint: "0603", pcbX: 34.5, pcbY: -29, schRotation: 270, schX: -9, schY: 7.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("capacitor", { name: "C_GATE_VM_BULK", capacitance: "10uF", footprint: "1206", pcbX: 39.5, pcbY: -30, schRotation: 270, schX: -6, schY: 7.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("capacitor", { name: "C_DVDD", capacitance: "1uF", footprint: "0603", pcbX: 27.5, pcbY: -19, schRotation: 270, schX: -10, schY: -6.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("capacitor", { name: "C_CP", capacitance: "47nF", footprint: "0603", pcbX: 33.5, pcbY: -25.5, pcbRotation: 180, schOrientation: "vertical", schX: -8, schY: 6.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("capacitor", { name: "C_VCP", capacitance: "1uF", footprint: "1206", pcbX: 37.5, pcbY: -26.5, pcbRotation: 90, schOrientation: "vertical", schX: -4, schY: 6.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("resistor", { name: "R_ENABLE_PD", resistance: "100k", footprint: "0603", pcbX: 23, pcbY: -11, schRotation: 270, schX: -13.9, schY: -3.2, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("resistor", { name: "R_FAULT_PU", resistance: "10k", footprint: "0603", pcbX: 29, pcbY: -22, schRotation: 270, schX: -13.25, schY: -1, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("resistor", { name: "R_CAL_PD", resistance: "100k", footprint: "0603", pcbX: 24.5, pcbY: -14.5, schRotation: 270, schX: -13.25, schY: -5.2, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("resistor", { name: "R_GAIN", resistance: "47k", footprint: "0603", pcbX: 32, pcbY: -13.5, pcbRotation: 90, schRotation: 270, schX: -8, schY: -8.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("resistor", { name: "R_IDRIVE", resistance: "75k", footprint: "0603", pcbX: 35, pcbY: -11.5, pcbRotation: 90, schRotation: 270, schX: -5, schY: -8.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("resistor", { name: "R_VDS", resistance: "0", footprint: "0603", pcbX: 38, pcbY: -11, pcbRotation: 90, schRotation: 270, schX: -2, schY: -8.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("resistor", { name: "R_VREF_TOP", resistance: "10k", footprint: "0603", pcbX: 28, pcbY: -12.6, pcbRotation: 270, schX: -7.6, schY: -5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("resistor", { name: "R_VREF_BOT", resistance: "10k", footprint: "0603", pcbX: 28, pcbY: -16, pcbRotation: 270, schRotation: 270, schX: -5, schY: -5.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), jsxRuntime.jsx("capacitor", { name: "C_VREF", capacitance: "1uF", footprint: "0402", maxDecouplingTraceLength: "5.5mm", pcbX: 30.91, pcbY: -19.1, pcbRotation: 180, schRotation: 270, schX: -2, schY: -5.5, schSheetName: sheets.motor, schSectionName: sections.gateDriver }), pwmChannels.map(([gpio, driverPin], index) => (jsxRuntime.jsx(react.Fragment, { children: jsxRuntime.jsx("trace", { name: `PWM_${driverPin}`, from: `net.MCU_PWM_${driverPin}`, to: `.U_GATE > .${driverPin}`, schDisplayLabel: driverPin, ...logicTrace }) }, driverPin))), jsxRuntime.jsx("trace", { name: "GATE_ENABLE_PD", from: ".R_ENABLE_PD > .pin1", to: ".U_GATE > .ENABLE", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GATE_ENABLE_PD_GND", from: ".R_ENABLE_PD > .pin2", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GATE_FAULT", from: ".U_GATE > .nFAULT", to: "net.MCU_GATE_FAULT", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GATE_FAULT_PULLUP", from: ".R_FAULT_PU > .pin1", to: "net.V3V3", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GATE_FAULT_PULLUP_SIGNAL", from: ".R_FAULT_PU > .pin2", to: ".U_GATE > .nFAULT", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GATE_CAL", from: "net.MCU_GATE_CAL", to: ".U_GATE > .CAL", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GATE_CAL_PD", from: ".R_CAL_PD > .pin1", to: ".U_GATE > .CAL", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GATE_CAL_PD_GND", from: ".R_CAL_PD > .pin2", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GATE_VM_LINK_INPUT", from: "net.VM", to: ".R_GATE_VM_LINK > .pin1", schDisplayLabel: "VM", ...powerTrace }), jsxRuntime.jsx("trace", { name: "GATE_VM_LINK_OUTPUT", from: ".R_GATE_VM_LINK > .pin2", to: ".U_GATE > .VM", ...driverTrace }), jsxRuntime.jsx("trace", { name: "GATE_VDRAIN", from: ".U_GATE > .VDRAIN", to: ".R_GATE_VM_LINK > .pin2", ...driverTrace }), jsxRuntime.jsx("trace", { name: "GATE_VM_DECOUPLE", from: ".C_GATE_VM > .pin1", to: ".R_GATE_VM_LINK > .pin2", ...driverTrace }), jsxRuntime.jsx("trace", { name: "GATE_VM_DECOUPLE_GND", from: ".C_GATE_VM > .pin2", to: "net.GND", ...groundTrace }), jsxRuntime.jsx("trace", { name: "GATE_VM_BULK", from: ".C_GATE_VM_BULK > .pin1", to: ".R_GATE_VM_LINK > .pin2", ...driverTrace }), jsxRuntime.jsx("trace", { name: "GATE_VM_BULK_GND", from: ".C_GATE_VM_BULK > .pin2", to: "net.GND", ...groundTrace }), jsxRuntime.jsx("trace", { name: "CHARGE_PUMP_HIGH", from: ".C_CP > .pin1", to: ".U_GATE > .CPH", schDisplayLabel: "CPH", ...driverTrace }), jsxRuntime.jsx("trace", { name: "CHARGE_PUMP_LOW", from: ".C_CP > .pin2", to: ".U_GATE > .CPL", schDisplayLabel: "CPL", ...driverTrace }), jsxRuntime.jsx("trace", { name: "VCP_CAP_HIGH", from: ".C_VCP > .pin1", to: ".U_GATE > .VCP", schDisplayLabel: "VCP", ...driverTrace }), jsxRuntime.jsx("trace", { name: "VCP_CAP_VM", from: ".C_VCP > .pin2", to: ".R_GATE_VM_LINK > .pin2", ...driverTrace }), jsxRuntime.jsx("trace", { name: "DVDD_DECOUPLE", from: ".C_DVDD > .pin1", to: ".U_GATE > .DVDD", schDisplayLabel: "DVDD", ...driverTrace }), jsxRuntime.jsx("trace", { name: "DVDD_DECOUPLE_GND", from: ".C_DVDD > .pin2", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "MODE_6PWM", from: ".U_GATE > .MODE", to: "net.GND", schDisplayLabel: "6PWM", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GAIN_CONFIG", from: ".U_GATE > .GAIN", to: ".R_GAIN > .pin1", schDisplayLabel: "GAIN_SET", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GAIN_CONFIG_GND", from: ".R_GAIN > .pin2", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "IDRIVE_CONFIG", from: ".U_GATE > .IDRIVE", to: ".R_IDRIVE > .pin1", schDisplayLabel: "IDRIVE_SET", ...logicTrace }), jsxRuntime.jsx("trace", { name: "IDRIVE_CONFIG_GND", from: ".R_IDRIVE > .pin2", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "VDS_CONFIG", from: ".U_GATE > .VDS", to: ".R_VDS > .pin1", schDisplayLabel: "VDS_OCP", ...logicTrace }), jsxRuntime.jsx("trace", { name: "VDS_CONFIG_GND", from: ".R_VDS > .pin2", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "VREF_TOP_3V3", from: ".R_VREF_TOP > .pin1", to: "net.V3V3", ...logicTrace }), jsxRuntime.jsx("trace", { name: "VREF_MID", from: ".R_VREF_TOP > .pin2", to: ".R_VREF_BOT > .pin1", schDisplayLabel: "VREF_1V65", ...senseTrace }), jsxRuntime.jsx("trace", { name: "VREF_DRIVER", from: ".R_VREF_TOP > .pin2", to: ".U_GATE > .VREF", schDisplayLabel: "VREF_1V65", ...senseTrace }), jsxRuntime.jsx("trace", { name: "VREF_CAP", from: ".C_VREF > .pin1", to: ".U_GATE > .VREF", schDisplayLabel: "VREF_1V65", ...senseTrace }), jsxRuntime.jsx("trace", { name: "VREF_BOTTOM_GND", from: ".R_VREF_BOT > .pin2", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "VREF_CAP_GND", from: ".C_VREF > .pin2", to: ".U_GATE > .AGND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GATE_AGND", from: ".U_GATE > .AGND", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GATE_PGND", from: ".U_GATE > .PGND", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "GATE_EP_GND", from: ".U_GATE > .EP", to: "net.GND", ...logicTrace })] }));

const pinLabels$7 = {
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
    return (jsxRuntime.jsx("chip", { pinLabels: pinLabels$7, supplierPartNumbers: {
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

const pinLabels$6 = {
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
const footprinterPinLabels = {
    ...pinLabels$6,
    "pin9": [...pinLabels$6["pin9"], "thermalpad"],
};
const LMR16020PDDAR = (props) => {
    return (jsxRuntime.jsx("chip", { pinLabels: footprinterPinLabels, supplierPartNumbers: {
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

const RVT1V101M0607 = (props) => {
    const { name = "C1", ...restProps } = props;
    return (jsxRuntime.jsx("capacitor", { name: name, capacitance: "100uF", maxVoltageRating: "35V", polarized: true, supplierPartNumbers: { jlcpcb: ["C72478"] }, manufacturerPartNumber: "RVT1V101M0607", footprint: "cap_p5.3398mm_pw3.5mm_ph1.2mm", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C72478.obj?uuid=644b78ce0cd64ac4a97304a2c79953d0",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C72478.step?uuid=644b78ce0cd64ac4a97304a2c79953d0",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: 0, y: 0, z: -1e-3 },
        }, ...restProps }));
};

const SMBJ33A = (props) => {
    const { name = "D1", ...restProps } = props;
    return (jsxRuntime.jsx("diode", { name: name, supplierPartNumbers: { jlcpcb: ["C173526"] }, manufacturerPartNumber: "SMBJ33A", footprint: "res_p4.7214mm_pw2.0475mm_ph2.1924mm", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C173526.obj?uuid=892cc756ed79448ab4afad0e5bfcdfa6",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C173526.step?uuid=892cc756ed79448ab4afad0e5bfcdfa6",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: 0, y: 0, z: -0.1 },
        }, ...restProps }));
};

const pinLabels$5 = {
    pin1: ["cathode", "neg"],
    pin2: ["anode", "pos"]
};
const SS36 = (props) => {
    const { name = "D1", ...restProps } = props;
    return (jsxRuntime.jsx("diode", { name: name, pinLabels: pinLabels$5, supplierPartNumbers: {
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
    return (jsxRuntime.jsx("inductor", { name: name, inductance: "15uH", maxCurrentRating: "3A", supplierPartNumbers: { jlcpcb: ["C83374"] }, manufacturerPartNumber: "SWPA6045S150MT", footprint: "res_p5.206mm_pw2.474mm_ph5.02mm", cadModel: {
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

const pinLabels$4 = {
    pin1: ["pin1"],
    pin2: ["pin2"]
};
const WJ500V_5_08_2P = (props) => {
    return (jsxRuntime.jsx("connector", { pinLabels: pinLabels$4, supplierPartNumbers: {
            "jlcpcb": [
                "C8465"
            ]
        }, manufacturerPartNumber: "WJ500V_5_08_2P", footprint: "radial_p5.08mm_od2mm_id1.3mm", cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C8465.obj?uuid=d60ef5d423934d3393dc75fa0a07b6bd",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C8465.step?uuid=d60ef5d423934d3393dc75fa0a07b6bd",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: -2.5399878999999967, y: 0, z: -6999999999646178e-21 },
        }, ...props }));
};

const PowerSection = () => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(WJ500V_5_08_2P, { name: "J_POWER", pcbX: -52, pcbY: 28, pcbRotation: 90, schX: -12.12, schY: 5, schSheetName: sheets.power, schSectionName: sections.inputProtection }), jsxRuntime.jsx("fuse", { name: "F_INPUT", currentRating: "5A", voltageRating: "32V", schShowRatings: true, footprint: "1812", pcbX: -43, pcbY: 28, schX: -8.88, schY: 5, schSheetName: sheets.power, schSectionName: sections.inputProtection }), jsxRuntime.jsx("resistor", { name: "R_BUS_SHUNT", resistance: "5m", footprint: "2512", manufacturerPartNumber: "RLP25FEGMR005", supplierPartNumbers: { jlcpcb: ["C393074"] }, pcbX: -35, pcbY: 28, schX: -8, schY: -1, schSheetName: sheets.power, schSectionName: sections.busSense }), jsxRuntime.jsx(SMBJ33A, { name: "D_TVS", pcbX: -29, pcbY: 29, pcbRotation: 90, schRotation: 270, schX: -2, schY: 2, schSheetName: sheets.power, schSectionName: sections.inputProtection }), jsxRuntime.jsx(RVT1V101M0607, { name: "C_VM_BULK1", pcbX: -23, pcbY: 27, schRotation: 270, schX: 0.5, schY: 2, schSheetName: sheets.power, schSectionName: sections.inputProtection }), jsxRuntime.jsx(RVT1V101M0607, { name: "C_VM_BULK2", pcbX: -16, pcbY: 30, schRotation: 270, schX: 3, schY: 2, schSheetName: sheets.power, schSectionName: sections.inputProtection }), jsxRuntime.jsx("capacitor", { name: "C_VM_HF", capacitance: "1uF", footprint: "1206", pcbX: -9.5, pcbY: 27, schRotation: 270, schX: 5.5, schY: 2, schSheetName: sheets.power, schSectionName: sections.inputProtection }), jsxRuntime.jsx(INA240A1PWR, { name: "U_BUS_SENSE", noConnect: ["NC"], pcbX: -35, pcbY: 21, schX: -8, schY: -4, schWidth: 2.15, schHeight: 2.8, schPinArrangement: {
                leftSide: [1, 2, 3, 4],
                rightSide: [8, 7, 6, 5],
            }, schSheetName: sheets.power, schSectionName: sections.busSense }), jsxRuntime.jsx("capacitor", { name: "C_BUS_SENSE", capacitance: "100nF", footprint: "0402", maxDecouplingTraceLength: "1.7mm", pcbX: -34.35, pcbY: 25.5, pcbRotation: 180, schRotation: 270, schX: -5, schY: -6, schSheetName: sheets.power, schSectionName: sections.busSense }), jsxRuntime.jsx(LMR16020PDDAR, { name: "U_BUCK", noConnect: ["pin4"], pcbX: -26, pcbY: 16, pcbRotation: 270, schX: 0.35, schY: -4, schWidth: 2.2, schHeight: 2.6, schPinArrangement: {
                leftSide: [2, 3, 5],
                rightSide: [8, 6],
                topSide: [1],
                bottomSide: [7, 9],
            }, schSheetName: sheets.power, schSectionName: sections.buck }), jsxRuntime.jsx(SWPA6045S150MT, { name: "L_BUCK", pcbX: -17, pcbY: 16, schX: 5, schY: -4, schSheetName: sheets.power, schSectionName: sections.buck }), jsxRuntime.jsx(SS36, { name: "D_BUCK", pcbX: -19, pcbY: 9, pcbRotation: 90, schRotation: 270, schX: 5, schY: -7, schSheetName: sheets.power, schSectionName: sections.buck }), jsxRuntime.jsx("capacitor", { name: "C_BOOT_BUCK", capacitance: "100nF", footprint: "0603", pcbX: -26, pcbY: 20, pcbRotation: 0, schOrientation: "vertical", schX: 1.65, schY: -7, schSheetName: sheets.power, schSectionName: sections.buck }), jsxRuntime.jsx("capacitor", { name: "C_BUCK_IN", capacitance: "4.7uF", footprint: "1206", maxDecouplingTraceLength: "5mm", pcbX: -26, pcbY: 11.85, pcbRotation: 0, schRotation: 270, schX: -2, schY: -6, schSheetName: sheets.power, schSectionName: sections.buck }), jsxRuntime.jsx("capacitor", { name: "C_5V_BULK", capacitance: "47uF", footprint: "1210", pcbX: -11, pcbY: 16, schRotation: 270, schX: 10, schY: -6, schSheetName: sheets.power, schSectionName: sections.buck }), jsxRuntime.jsx("capacitor", { name: "C_5V_HF", capacitance: "100nF", footprint: "0603", pcbX: -12, pcbY: 12, schRotation: 270, schX: 12, schY: -6, schSheetName: sheets.power, schSectionName: sections.buck }), jsxRuntime.jsx("resistor", { name: "R_BUCK_EN", resistance: "100k", footprint: "0603", pcbX: -22, pcbY: 10.5, schX: -1, schY: -2, schSheetName: sheets.power, schSectionName: sections.buck }), jsxRuntime.jsx("resistor", { name: "R_FB_TOP", resistance: "56.2k", footprint: "0603", pcbX: -18, pcbY: 21, pcbRotation: 180, schX: 8, schY: -2, schSheetName: sheets.power, schSectionName: sections.buck }), jsxRuntime.jsx("resistor", { name: "R_FB_BOT", resistance: "10k", footprint: "0603", pcbX: -15, pcbY: 21, pcbRotation: 180, schRotation: 270, schX: 10, schY: -3, schSheetName: sheets.power, schSectionName: sections.buck }), jsxRuntime.jsx("resistor", { name: "R_PGOOD", resistance: "10k", footprint: "0603", pcbX: -21, pcbY: 21, pcbRotation: 180, schX: 4, schY: -1, schSheetName: sheets.power, schSectionName: sections.buck }), jsxRuntime.jsx("trace", { name: "POWER_INPUT_POS", from: ".J_POWER > .pin1", to: ".F_INPUT > .pin1", ...highCurrentTrace }), jsxRuntime.jsx("trace", { name: "POWER_INPUT_FUSED", from: ".F_INPUT > .pin2", to: ".R_BUS_SHUNT > .pin1", schDisplayLabel: "VIN_FUSED", ...highCurrentTrace }), jsxRuntime.jsx("trace", { name: "POWER_INPUT_NEG", from: ".J_POWER > .pin2", to: "net.GND", ...groundTrace }), jsxRuntime.jsx("trace", { name: "MOTOR_BUS", from: ".R_BUS_SHUNT > .pin2", to: "net.VM", schDisplayLabel: "VM", ...highCurrentTrace }), jsxRuntime.jsx("trace", { name: "TVS_VM", from: ".D_TVS > .cathode", to: "net.VM", ...highCurrentTrace }), jsxRuntime.jsx("trace", { name: "TVS_GND", from: ".D_TVS > .anode", to: "net.GND", ...groundTrace }), ["C_VM_BULK1", "C_VM_BULK2", "C_VM_HF"].map((name) => {
            const capacitorTrace = name === "C_VM_HF" ? powerTrace : motorTrace;
            return (jsxRuntime.jsxs(react.Fragment, { children: [jsxRuntime.jsx("trace", { name: `${name}_VM`, from: `.${name} > .pin1`, to: "net.VM", ...capacitorTrace }), jsxRuntime.jsx("trace", { name: `${name}_GND`, from: `.${name} > .pin2`, to: "net.GND", ...groundTrace })] }, name));
        }), jsxRuntime.jsx("trace", { name: "BUS_SENSE_POS", from: ".U_BUS_SENSE > .IN_POS", to: ".R_BUS_SHUNT > .pin1", ...senseTrace }), jsxRuntime.jsx("trace", { name: "BUS_SENSE_NEG", from: ".U_BUS_SENSE > .IN_NEG", to: ".R_BUS_SHUNT > .pin2", ...senseTrace }), jsxRuntime.jsx("trace", { name: "BUS_SENSE_SUPPLY", from: ".U_BUS_SENSE > .VS", to: "net.V3V3", ...logicTrace }), jsxRuntime.jsx("trace", { name: "BUS_SENSE_GND", from: ".U_BUS_SENSE > .GND", to: "net.GND", ...groundTrace }), jsxRuntime.jsx("trace", { name: "BUS_SENSE_REF1", from: ".U_BUS_SENSE > .REF1", to: "net.GND", ...groundTrace }), jsxRuntime.jsx("trace", { name: "BUS_SENSE_REF2", from: ".U_BUS_SENSE > .REF2", to: "net.GND", ...groundTrace }), jsxRuntime.jsx("trace", { name: "BUS_SENSE_OUT", from: ".U_BUS_SENSE > .OUT", to: "net.MCU_BUS_CURRENT", schDisplayLabel: "BUS_CURRENT", ...senseTrace }), jsxRuntime.jsx("trace", { name: "BUS_SENSE_DECOUPLE", from: ".C_BUS_SENSE > .pin1", to: ".U_BUS_SENSE > .VS", ...logicTrace }), jsxRuntime.jsx("trace", { name: "BUS_SENSE_DECOUPLE_GND", from: ".C_BUS_SENSE > .pin2", to: ".U_BUS_SENSE > .REF2", ...groundTrace }), jsxRuntime.jsx("trace", { name: "BUCK_INPUT", from: ".U_BUCK > .VIN", to: "net.VM", ...powerTrace }), jsxRuntime.jsx("trace", { name: "BUCK_ENABLE", from: ".U_BUCK > .EN", to: ".R_BUCK_EN > .pin1", ...logicTrace }), jsxRuntime.jsx("trace", { name: "BUCK_ENABLE_VM", from: ".R_BUCK_EN > .pin2", to: "net.VM", ...logicTrace }), jsxRuntime.jsx("trace", { name: "BUCK_INPUT_CAP", from: ".C_BUCK_IN > .pin1", to: ".U_BUCK > .VIN", ...powerTrace }), jsxRuntime.jsx("trace", { name: "BUCK_INPUT_CAP_GND", from: ".C_BUCK_IN > .pin2", to: ".U_BUCK > .EP", ...groundTrace }), jsxRuntime.jsx("trace", { name: "BUCK_SWITCH", from: ".U_BUCK > .SW", to: ".L_BUCK > .pin1", ...powerTrace }), jsxRuntime.jsx("trace", { name: "BUCK_DIODE_SW", from: ".D_BUCK > .cathode", to: ".U_BUCK > .SW", ...powerTrace }), jsxRuntime.jsx("trace", { name: "BUCK_DIODE_GND", from: ".D_BUCK > .anode", to: "net.GND", ...groundTrace }), jsxRuntime.jsx("trace", { name: "BUCK_BOOT_HIGH", from: ".C_BOOT_BUCK > .pin1", to: ".U_BUCK > .BOOT", ...logicTrace }), jsxRuntime.jsx("trace", { name: "BUCK_BOOT_SW", from: ".C_BOOT_BUCK > .pin2", to: ".U_BUCK > .SW", ...logicTrace }), jsxRuntime.jsx("trace", { name: "FIVE_VOLT_RAIL", from: ".L_BUCK > .pin2", to: "net.V5", schDisplayLabel: "5V", ...powerTrace }), jsxRuntime.jsx("trace", { name: "BUCK_FB_TOP_5V", from: ".R_FB_TOP > .pin1", to: "net.V5", ...logicTrace }), jsxRuntime.jsx("trace", { name: "BUCK_FB_NODE", from: ".R_FB_TOP > .pin2", to: ".U_BUCK > .FB", ...logicTrace }), jsxRuntime.jsx("trace", { name: "BUCK_FB_BOTTOM", from: ".R_FB_BOT > .pin1", to: ".U_BUCK > .FB", ...logicTrace }), jsxRuntime.jsx("trace", { name: "BUCK_FB_GND", from: ".R_FB_BOT > .pin2", to: "net.GND", ...groundTrace }), jsxRuntime.jsx("trace", { name: "BUCK_GROUND", from: ".U_BUCK > .GND", to: "net.GND", ...groundTrace }), jsxRuntime.jsx("trace", { name: "BUCK_EP_GROUND", from: ".U_BUCK > .EP", to: "net.GND", ...groundTrace }), jsxRuntime.jsx("trace", { name: "PGOOD_PULLUP", from: ".R_PGOOD > .pin1", to: "net.V3V3", ...logicTrace }), jsxRuntime.jsx("trace", { name: "PGOOD_SIGNAL", from: ".R_PGOOD > .pin2", to: ".U_BUCK > .PGOOD", ...logicTrace }), jsxRuntime.jsx("trace", { name: "PGOOD_MCU", from: ".U_BUCK > .PGOOD", to: "net.MCU_POWER_GOOD", schDisplayLabel: "POWER_GOOD", ...logicTrace }), ["C_5V_BULK", "C_5V_HF"].map((name) => (jsxRuntime.jsxs(react.Fragment, { children: [jsxRuntime.jsx("trace", { name: `${name}_5V`, from: `.${name} > .pin1`, to: "net.V5", ...powerTrace }), jsxRuntime.jsx("trace", { name: `${name}_GND`, from: `.${name} > .pin2`, to: "net.GND", ...groundTrace })] }, name)))] }));

const pinLabels$3 = {
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
    return (jsxRuntime.jsx("chip", { pinLabels: pinLabels$3, supplierPartNumbers: {
            "jlcpcb": [
                "C86513"
            ]
        }, manufacturerPartNumber: "CSD18540Q5B", footprint: jsxRuntime.jsxs("footprint", { children: [jsxRuntime.jsx("smtpad", { portHints: ["pin1"], pcbX: "-1.902968mm", pcbY: "-2.9324935mm", width: "0.6999986mm", height: "1.27mm", shape: "rect" }), jsxRuntime.jsx("smtpad", { portHints: ["pin2"], pcbX: "-0.635mm", pcbY: "-2.9324935mm", width: "0.6999986mm", height: "1.27mm", shape: "rect" }), jsxRuntime.jsx("smtpad", { portHints: ["pin3"], pcbX: "0.637032mm", pcbY: "-2.9324935mm", width: "0.6999986mm", height: "1.27mm", shape: "rect" }), jsxRuntime.jsx("smtpad", { portHints: ["pin4"], pcbX: "1.907032mm", pcbY: "-2.9324935mm", width: "0.6999986mm", height: "1.27mm", shape: "rect" }), jsxRuntime.jsx("smtpad", { portHints: ["pin8"], pcbX: "0mm", pcbY: "0.4573905mm", width: "4.8999902mm", height: "4.499991mm", shape: "rect" }), jsxRuntime.jsx("smtpad", { portHints: ["pin9"], pcbX: "-1.905mm", pcbY: "3.0674945mm", width: "0.6999986mm", height: "0.999998mm", shape: "rect" }), jsxRuntime.jsx("smtpad", { portHints: ["pin7"], pcbX: "-0.635mm", pcbY: "3.0674945mm", width: "0.6999986mm", height: "0.999998mm", shape: "rect" }), jsxRuntime.jsx("smtpad", { portHints: ["pin6"], pcbX: "0.635mm", pcbY: "3.0674945mm", width: "0.6999986mm", height: "0.999998mm", shape: "rect" }), jsxRuntime.jsx("smtpad", { portHints: ["pin5"], pcbX: "1.905mm", pcbY: "3.0674945mm", width: "0.6999986mm", height: "0.999998mm", shape: "rect" }), jsxRuntime.jsx("silkscreenpath", { route: [{ "x": 2.60101080000004, "y": 3.067494500000066 }, { "x": 2.60101080000004, "y": -2.932493499999964 }] }), jsxRuntime.jsx("silkscreenpath", { route: [{ "x": -2.5989788000000544, "y": 3.067494500000066 }, { "x": -2.5989788000000544, "y": -2.932493499999964 }] }), jsxRuntime.jsx("silkscreenpath", { route: [{ "x": -2.5420828000001165, "y": -3.3935034999999516 }, { "x": -2.545657248970656, "y": -3.420654135469249 }, { "x": -2.556137003092317, "y": -3.4459544999999707 }, { "x": -2.5728078844401807, "y": -3.4676804155599257 }, { "x": -2.5945338000001357, "y": -3.484351296907789 }, { "x": -2.6198341645308574, "y": -3.4948310510294505 }, { "x": -2.646984800000155, "y": -3.49840549999999 }, { "x": -2.674135435469452, "y": -3.4948310510294505 }, { "x": -2.6994358000000602, "y": -3.484351296907789 }, { "x": -2.721161715560129, "y": -3.4676804155599257 }, { "x": -2.7378325969079924, "y": -3.4459544999999707 }, { "x": -2.7483123510294263, "y": -3.420654135469249 }, { "x": -2.7518868000000793, "y": -3.3935034999999516 }, { "x": -2.7483123510294263, "y": -3.366352864530654 }, { "x": -2.7378325969079924, "y": -3.3410524999999325 }, { "x": -2.721161715560129, "y": -3.3193265844399775 }, { "x": -2.6994358000000602, "y": -3.302655703092114 }, { "x": -2.674135435469452, "y": -3.29217594897068 }, { "x": -2.646984800000155, "y": -3.288601500000027 }, { "x": -2.6198341645308574, "y": -3.29217594897068 }, { "x": -2.5945338000001357, "y": -3.302655703092114 }, { "x": -2.5728078844401807, "y": -3.3193265844399775 }, { "x": -2.556137003092317, "y": -3.3410524999999325 }, { "x": -2.545657248970656, "y": -3.366352864530654 }, { "x": -2.5420828000001165, "y": -3.3935034999999516 }] }), jsxRuntime.jsx("silkscreentext", { text: "{NAME}", pcbX: "-0.0635mm", pcbY: "4.5727005mm", anchorAlignment: "center", fontSize: "1mm" }), jsxRuntime.jsx("courtyardoutline", { outline: [{ "x": -2.9932000000001153, "y": 3.8227005000002237 }, { "x": 2.8661999999999352, "y": 3.8227005000002237 }, { "x": 2.8661999999999352, "y": -3.814699499999847 }, { "x": -2.9932000000001153, "y": -3.814699499999847 }, { "x": -2.9932000000001153, "y": 3.8227005000002237 }] })] }), cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C86513.obj?uuid=ed84f5dd80b4414bacf3798e6484c98f",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C86513.step?uuid=ed84f5dd80b4414bacf3798e6484c98f",
            pcbRotationOffset: 90,
            modelOriginPosition: { x: -0.06750050000005103, y: 0.001015999999935957, z: 0 },
        }, ...props }));
};

const pinLabels$2 = {
    pin1: ["pin1"],
    pin2: ["pin2"],
    pin3: ["pin3"]
};
const WJ500V_5_08_03P_14_00A = (props) => {
    return (jsxRuntime.jsx("connector", { pinLabels: pinLabels$2, supplierPartNumbers: {
            "jlcpcb": [
                "C72334"
            ]
        }, manufacturerPartNumber: "WJ500V_5_08_03P_14_00A", footprint: jsxRuntime.jsxs("footprint", { children: [jsxRuntime.jsx("platedhole", { portHints: ["pin3"], pcbX: "5.08mm", pcbY: "0mm", outerDiameter: "1.999996mm", holeDiameter: "1.3000228mm", shape: "circle" }), jsxRuntime.jsx("platedhole", { portHints: ["pin2"], pcbX: "0mm", pcbY: "0mm", outerDiameter: "1.999996mm", holeDiameter: "1.3000228mm", shape: "circle" }), jsxRuntime.jsx("platedhole", { portHints: ["pin1"], pcbX: "-5.08mm", pcbY: "0mm", outerDiameter: "1.999996mm", holeDiameter: "1.3000228mm", shape: "circle" }), jsxRuntime.jsx("silkscreenpath", { route: [{ "x": 7.646162000000004, "y": -5.499988999999999 }, { "x": -7.593837999999991, "y": -5.499988999999999 }] }), jsxRuntime.jsx("silkscreenpath", { route: [{ "x": 7.599984800000016, "y": 3.099993800000007 }, { "x": -7.6400151999999935, "y": 3.099993800000007 }] }), jsxRuntime.jsx("silkscreenpath", { route: [{ "x": 7.646162000000004, "y": 4.499990999999994 }, { "x": -7.593837999999991, "y": 4.499990999999994 }] }), jsxRuntime.jsx("silkscreenpath", { route: [{ "x": -7.593837999999991, "y": -5.532374000000004 }, { "x": -7.593837999999991, "y": 4.467605999999989 }] }), jsxRuntime.jsx("silkscreenpath", { route: [{ "x": 6.034430400000019, "y": -5.499988999999999 }, { "x": 6.034430400000019, "y": -2.529966999999999 }, { "x": 3.972102800000016, "y": -2.529966999999999 }, { "x": 3.972102800000016, "y": -5.499988999999999 }] }), jsxRuntime.jsx("silkscreenpath", { route: [{ "x": -4.1618661999999915, "y": -5.499988999999999 }, { "x": -4.1618661999999915, "y": -2.529966999999999 }, { "x": -6.224193799999995, "y": -2.529966999999999 }, { "x": -6.224193799999995, "y": -5.499988999999999 }] }), jsxRuntime.jsx("silkscreenpath", { route: [{ "x": 0.8999982000000273, "y": -5.499988999999999 }, { "x": 0.8999982000000273, "y": -2.529966999999999 }, { "x": -1.1623293999999902, "y": -2.529966999999999 }, { "x": -1.1623293999999902, "y": -5.499988999999999 }] }), jsxRuntime.jsx("silkscreenpath", { route: [{ "x": 7.646162000000004, "y": -5.5224680000000035 }, { "x": 7.646162000000004, "y": 4.47751199999999 }] }), jsxRuntime.jsx("silkscreentext", { text: "{NAME}", pcbX: "0.28956mm", pcbY: "5.499102mm", anchorAlignment: "center", fontSize: "1mm" }), jsxRuntime.jsx("courtyardoutline", { outline: [{ "x": -7.897939999999991, "y": 4.749102000000008 }, { "x": 8.477060000000009, "y": 4.749102000000008 }, { "x": 8.477060000000009, "y": -5.7838979999999935 }, { "x": -7.897939999999991, "y": -5.7838979999999935 }, { "x": -7.897939999999991, "y": 4.749102000000008 }] })] }), cadModel: {
            objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C72334.obj?uuid=3ce8efb5088242eb9ba049a12326c3b5",
            stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C72334.step?uuid=3ce8efb5088242eb9ba049a12326c3b5",
            pcbRotationOffset: 0,
            modelOriginPosition: { x: 0.000013299999995108891, y: 0.5160009999999886, z: -9000000000369823e-21 },
        }, ...props }));
};

const sourcePins = ["S1", "S2", "S3"];
const drainPins = ["D1", "D3", "D4", "D5", "pin8_alt1"];
const phaseConfig = [
    {
        phase: "A",
        motorLabel: "U",
        pcbX: 22,
        schX: 3.8,
        senseSchXPos: -5.9,
        senseSchXNeg: -1.5,
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
        schX: 8.7,
        senseSchXPos: 3,
        senseSchXNeg: 6.65,
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
        pcbX: 49,
        schX: 13.2,
        senseSchXPos: 11.15,
        senseSchXNeg: 15.4,
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
    const phaseNet = `net.${motorLabel}`;
    const sourceNet = `net.LS_${phase}`;
    const phaseLocalGateTrace = {
        thickness: "0.2mm",
    };
    const phaseHighGateDriveTrace = {
        thickness: "0.2mm",
    };
    const phaseLowGateDriveTrace = {
        thickness: "0.2mm",
    };
    const phaseSwitchTrace = {
        thickness: "0.2mm",
    };
    const sensePosLinkPlacement = {
        pcbX: pcbX - 3.5,
        pcbY: -8.5,
        pcbRotation: 180,
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(CSD18540Q5B, { name: qHigh, pcbX: pcbX, pcbY: 22, pcbRotation: 270, schX: schX, schY: 5.5, schWidth: 1.6, schHeight: 2, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsxRuntime.jsx(CSD18540Q5B, { name: qLow, pcbX: pcbX, pcbY: 8, pcbRotation: 270, schX: schX, schY: -1, schWidth: 1.6, schHeight: 2, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsxRuntime.jsx("resistor", { name: gateHigh, resistance: "10", footprint: "0603", pcbX: pcbX - 5.5, pcbY: 22, schX: schX - 2.8, schY: 7.2, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsxRuntime.jsx("resistor", { name: gateLow, resistance: "10", footprint: "0603", pcbX: pcbX - 5.5, pcbY: 8, schX: schX - 2.8, schY: -2.7, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsxRuntime.jsx("resistor", { name: gateHighPd, resistance: "100k", footprint: "0603", pcbX: pcbX - 5.5, pcbY: 17, schRotation: 270, schX: schX, schY: 2.3, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsxRuntime.jsx("resistor", { name: gateLowPd, resistance: "100k", footprint: "0603", pcbX: pcbX - 5.5, pcbY: 3, schRotation: 270, schX: schX, schY: -7, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsxRuntime.jsx("resistor", { name: shunt, resistance: "5m", footprint: "2512", manufacturerPartNumber: "RLP25FEGMR005", supplierPartNumbers: { jlcpcb: ["C393074"] }, pcbX: pcbX, pcbY: -3, schRotation: 270, schX: schX, schY: -9, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsxRuntime.jsx("resistor", { name: switchLink, resistance: "0", footprint: "1206", pcbX: pcbX, pcbY: 15, pcbRotation: 90, schRotation: 270, schX: schX + 2.6, schY: 4, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsxRuntime.jsx("resistor", { name: sensePosLink, resistance: "0", footprint: "0603", ...sensePosLinkPlacement, schX: senseSchXPos, schY: -12.5, schSheetName: sheets.motor, schSectionName: sections.powerStage }), jsxRuntime.jsx("resistor", { name: senseNegLink, resistance: "0", footprint: "0603", pcbX: pcbX + 3.5, pcbY: -8.5, pcbRotation: 180, schX: senseSchXNeg, schY: -12.5, schSheetName: sheets.motor, schSectionName: sections.powerStage }), drainPins.map((pin) => (jsxRuntime.jsx(react.Fragment, { children: jsxRuntime.jsx("trace", { name: `${qHigh}_${pin}_VM`, from: `.${qHigh} > .${pin}`, to: "net.VM", ...motorTrace }) }, `${qHigh}-${pin}`))), sourcePins.map((pin) => (jsxRuntime.jsx(react.Fragment, { children: jsxRuntime.jsx("trace", { name: `${qHigh}_${pin}_PHASE`, from: `.${qHigh} > .${pin}`, to: phaseNet, ...motorTrace }) }, `${qHigh}-${pin}`))), drainPins.map((pin) => (jsxRuntime.jsx(react.Fragment, { children: jsxRuntime.jsx("trace", { name: `${qLow}_${pin}_PHASE`, from: `.${qLow} > .${pin}`, to: phaseNet, ...motorTrace }) }, `${qLow}-${pin}`))), sourcePins.map((pin) => (jsxRuntime.jsx(react.Fragment, { children: jsxRuntime.jsx("trace", { name: `${qLow}_${pin}_SHUNT`, from: `.${qLow} > .${pin}`, to: sourceNet, ...motorTrace }) }, `${qLow}-${pin}`))), jsxRuntime.jsx("trace", { name: `${phase}_HIGH_GATE_DRIVE`, from: `.U_GATE > .${highGate}`, to: `.${gateHigh} > .pin1`, ...phaseHighGateDriveTrace }), jsxRuntime.jsx("trace", { name: `${phase}_HIGH_GATE`, from: `.${gateHigh} > .pin2`, to: `.${qHigh} > .G`, ...phaseLocalGateTrace }), jsxRuntime.jsx("trace", { name: `${phase}_HIGH_GATE_PD`, from: `.${gateHighPd} > .pin1`, to: `.${qHigh} > .G`, ...phaseLocalGateTrace }), jsxRuntime.jsx("trace", { name: `${phase}_HIGH_GATE_PD_PHASE`, from: `.${gateHighPd} > .pin2`, to: phaseNet, ...logicTrace }), jsxRuntime.jsx("trace", { name: `${phase}_LOW_GATE_DRIVE`, from: `.U_GATE > .${lowGate}`, to: `.${gateLow} > .pin1`, ...phaseLowGateDriveTrace }), jsxRuntime.jsx("trace", { name: `${phase}_LOW_GATE`, from: `.${gateLow} > .pin2`, to: `.${qLow} > .G`, ...phaseLocalGateTrace }), jsxRuntime.jsx("trace", { name: `${phase}_LOW_GATE_PD`, from: `.${gateLowPd} > .pin1`, to: `.${qLow} > .G`, ...phaseLocalGateTrace }), jsxRuntime.jsx("trace", { name: `${phase}_LOW_GATE_PD_SOURCE`, from: `.${gateLowPd} > .pin2`, to: sourceNet, ...logicTrace }), jsxRuntime.jsx("trace", { name: `${phase}_SWITCH_NODE_POWER`, from: phaseNet, to: `.${switchLink} > .pin1`, ...motorTrace }), jsxRuntime.jsx("trace", { name: `${phase}_SWITCH_NODE_DRIVER`, from: `.${switchLink} > .pin2`, to: `.U_GATE > .${switchNode}`, ...phaseSwitchTrace }), jsxRuntime.jsx("trace", { name: `${phase}_MOTOR_OUTPUT`, from: phaseNet, to: `.J_MOTOR > .${connectorPin}`, schDisplayLabel: motorLabel, ...highCurrentTrace }), jsxRuntime.jsx("trace", { name: `${phase}_SHUNT_HIGH`, from: sourceNet, to: `.${shunt} > .pin1`, schDisplayLabel: `LS_${phase}`, ...highCurrentTrace }), jsxRuntime.jsx("trace", { name: `${phase}_SHUNT_GND`, from: `.${shunt} > .pin2`, to: "net.GND", ...groundTrace }), jsxRuntime.jsx("trace", { name: `${phase}_SHUNT_SENSE_POS_KELVIN`, from: `.${shunt} > .pin1`, to: `.${sensePosLink} > .pin1`, ...senseTrace }), jsxRuntime.jsx("trace", { name: `${phase}_SHUNT_SENSE_POS_DRIVER`, from: `.${sensePosLink} > .pin2`, to: `.U_GATE > .${sensePos}`, ...senseTrace }), jsxRuntime.jsx("trace", { name: `${phase}_SHUNT_SENSE_NEG_KELVIN`, from: `.${shunt} > .pin2`, to: `.${senseNegLink} > .pin1`, ...groundTrace }), jsxRuntime.jsx("trace", { name: `${phase}_SHUNT_SENSE_NEG_DRIVER`, from: `.${senseNegLink} > .pin2`, to: `.U_GATE > .${senseNeg}`, ...senseTrace }), jsxRuntime.jsx("trace", { name: `${phase}_CURRENT_ADC`, from: `.U_GATE > .${senseOut}`, to: `net.MCU_${phase}_CURRENT_ADC`, ...senseTrace })] }));
};
const PowerStageSection = () => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(WJ500V_5_08_03P_14_00A, { name: "J_MOTOR", pcbX: 35.5, pcbY: 34, pcbRotation: 180, schX: 9, schY: 9, schWidth: 1.2, schHeight: 2, schPinArrangement: { leftSide: [1, 2, 3] }, schSheetName: sheets.motor, schSectionName: sections.powerStage }), phaseConfig.map((config) => (jsxRuntime.jsx(PowerStagePhase, { ...config }, config.phase)))] }));

const pinLabels$1 = {
    pin1: ["A"],
    pin2: ["B"],
    pin3: ["GND"],
    pin4: ["Y"],
    pin5: ["VCC"]
};
const SN74LVC1G08DBVR = (props) => {
    return (jsxRuntime.jsx("chip", { pinLabels: pinLabels$1, supplierPartNumbers: {
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

const pinLabels = {
    pin1: ["SCL"],
    pin2: ["GND"],
    pin3: ["ALERT"],
    pin4: ["ADD0"],
    pin5: ["V_POS"],
    pin6: ["SDA"]
};
const TMP102AIDRLR = (props) => {
    return (jsxRuntime.jsx("chip", { pinLabels: pinLabels, supplierPartNumbers: {
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

const ProtectionSection = () => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(TMP102AIDRLR, { name: "U_TEMP", pcbX: 51, pcbY: -18, schX: 2, schY: 0, schWidth: 2.4, schHeight: 3, schPinArrangement: {
                leftSide: [1, 6, 3],
                rightSide: [5, 4, 2],
            }, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsxRuntime.jsx("capacitor", { name: "C_TEMP", capacitance: "100nF", footprint: "0402", maxDecouplingTraceLength: "2mm", pcbX: 51, pcbY: -19.8, pcbRotation: 0, schRotation: 270, schX: 6, schY: 2, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsxRuntime.jsx("resistor", { name: "R_TEMP_SCL", resistance: "4.7k", footprint: "0603", pcbX: 16, pcbY: -14, pcbRotation: 90, schRotation: 270, schX: -6, schY: 3, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsxRuntime.jsx("resistor", { name: "R_TEMP_SDA", resistance: "4.7k", footprint: "0603", pcbX: 16, pcbY: -18, pcbRotation: 90, schRotation: 270, schX: -4, schY: 3, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsxRuntime.jsx("resistor", { name: "R_TEMP_ALERT", resistance: "10k", footprint: "0603", pcbX: 16, pcbY: -22, pcbRotation: 90, schRotation: 270, schX: -2, schY: 3, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsxRuntime.jsx(SN74LVC1G08DBVR, { name: "U_ENABLE_AND", pcbX: 18, pcbY: -28, schX: 10, schY: 0, schWidth: 2, schHeight: 2.4, schPinArrangement: { leftSide: [1, 2], rightSide: [4], topSide: [5], bottomSide: [3] }, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsxRuntime.jsx("capacitor", { name: "C_ENABLE_AND", capacitance: "100nF", footprint: "0402", maxDecouplingTraceLength: "3.5mm", pcbX: 18, pcbY: -30.3, pcbRotation: 0, schRotation: 270, schX: 10, schY: -3, schSheetName: sheets.protection, schSectionName: sections.temperature }), jsxRuntime.jsx("trace", { name: "TEMP_3V3", from: ".U_TEMP > .V_POS", to: "net.V3V3", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_GND", from: ".U_TEMP > .GND", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_ADDRESS_GND", from: ".U_TEMP > .ADD0", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_DECOUPLE", from: ".C_TEMP > .pin1", to: ".U_TEMP > .V_POS", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_DECOUPLE_GND", from: ".C_TEMP > .pin2", to: ".U_TEMP > .GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_SCL_PULLUP", from: ".R_TEMP_SCL > .pin1", to: "net.V3V3", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_SCL", from: ".R_TEMP_SCL > .pin2", to: ".U_TEMP > .SCL", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_SCL_MCU", from: ".U_TEMP > .SCL", to: "net.MCU_TEMP_SCL", schDisplayLabel: "TEMP_SCL", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_SDA_PULLUP", from: ".R_TEMP_SDA > .pin1", to: "net.V3V3", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_SDA", from: ".R_TEMP_SDA > .pin2", to: ".U_TEMP > .SDA", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_SDA_MCU", from: ".U_TEMP > .SDA", to: "net.MCU_TEMP_SDA", schDisplayLabel: "TEMP_SDA", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_ALERT_PULLUP", from: ".R_TEMP_ALERT > .pin1", to: "net.V3V3", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_ALERT", from: ".R_TEMP_ALERT > .pin2", to: ".U_TEMP > .ALERT", ...logicTrace }), jsxRuntime.jsx("trace", { name: "TEMP_ALERT_MCU", from: ".U_TEMP > .ALERT", to: "net.MCU_TEMP_ALERT_n", schDisplayLabel: "TEMP_ALERT_n", ...logicTrace }), jsxRuntime.jsx("trace", { name: "ENABLE_AND_3V3", from: ".U_ENABLE_AND > .VCC", to: "net.V3V3", ...logicTrace }), jsxRuntime.jsx("trace", { name: "ENABLE_AND_GND", from: ".U_ENABLE_AND > .GND", to: "net.GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "ENABLE_AND_DECOUPLE", from: ".C_ENABLE_AND > .pin1", to: ".U_ENABLE_AND > .VCC", ...logicTrace }), jsxRuntime.jsx("trace", { name: "ENABLE_AND_DECOUPLE_GND", from: ".C_ENABLE_AND > .pin2", to: ".U_ENABLE_AND > .GND", ...logicTrace }), jsxRuntime.jsx("trace", { name: "ENABLE_AND_MCU_COMMAND", from: "net.MCU_GATE_ENABLE_CMD", to: ".U_ENABLE_AND > .A", schDisplayLabel: "GATE_ENABLE_CMD", ...logicTrace }), jsxRuntime.jsx("trace", { name: "ENABLE_AND_TEMP_OK", from: ".U_TEMP > .ALERT", to: ".U_ENABLE_AND > .B", schDisplayLabel: "TEMP_OK", ...logicTrace }), jsxRuntime.jsx("trace", { name: "ENABLE_AND_OUTPUT", from: ".U_ENABLE_AND > .Y", to: ".U_GATE > .ENABLE", ...logicTrace })] }));

const SchematicSheets = () => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("schematicsheet", { name: sheets.controller, displayName: "RP2040 Control, USB & Debug", sheetIndex: 1 }), jsxRuntime.jsx("schematicsheet", { name: sheets.hall, displayName: "5 V Hall Sensor Inputs", sheetIndex: 2, children: jsxRuntime.jsx("schematicsection", { name: sections.hall, displayName: "Filtered Hall Sensor Inputs" }) }), jsxRuntime.jsx("schematicsheet", { name: sheets.encoder, displayName: "Optional Quadrature Encoder", sheetIndex: 3, children: jsxRuntime.jsx("schematicsection", { name: sections.encoder, displayName: "Filtered 5 V Encoder Inputs" }) }), jsxRuntime.jsxs("schematicsheet", { name: sheets.power, displayName: "12-24 V Input & Power Supplies", sheetIndex: 4, children: [jsxRuntime.jsx("schematicsection", { name: sections.inputProtection, displayName: "Input Protection & Bulk Capacitance" }), jsxRuntime.jsx("schematicsection", { name: sections.busSense, displayName: "DC Bus Current Sense" }), jsxRuntime.jsx("schematicsection", { name: sections.buck, displayName: "5 V Buck Regulator" })] }), jsxRuntime.jsxs("schematicsheet", { name: sheets.motor, displayName: "Three-Phase BLDC Power Stage", sheetIndex: 5, children: [jsxRuntime.jsx("schematicsection", { name: sections.gateDriver, displayName: "DRV8323H Gate Driver & Current Sense" }), jsxRuntime.jsx("schematicsection", { name: sections.powerStage, displayName: "Six-MOSFET Inverter & Motor Output" })] }), jsxRuntime.jsx("schematicsheet", { name: sheets.protection, displayName: "Temperature & Hardware Protection", sheetIndex: 6, children: jsxRuntime.jsx("schematicsection", { name: sections.temperature, displayName: "Power-Stage Temperature Interlock" }) })] }));

function Rp2040BldcController() {
    return (jsxRuntime.jsxs("board", { width: "110mm", height: "80mm", minViaHoleDiameter: "0.3mm", minViaPadDiameter: "0.45mm", layers: 2, children: [jsxRuntime.jsx("net", { name: "GND", isGroundNet: true }), jsxRuntime.jsx("net", { name: "V3V3", isPowerNet: true }), jsxRuntime.jsx("net", { name: "V5", isPowerNet: true }), jsxRuntime.jsx("net", { name: "VM", isPowerNet: true }), jsxRuntime.jsx("net", { name: "U" }), jsxRuntime.jsx("net", { name: "V" }), jsxRuntime.jsx("net", { name: "W" }), jsxRuntime.jsx("net", { name: "LS_A" }), jsxRuntime.jsx("net", { name: "LS_B" }), jsxRuntime.jsx("net", { name: "LS_C" }), jsxRuntime.jsx(SchematicSheets, {}), jsxRuntime.jsx(ControllerSection, {}), jsxRuntime.jsx(EncoderSection, {}), jsxRuntime.jsx(PowerSection, {}), jsxRuntime.jsx(GateDriverSection, {}), jsxRuntime.jsx(ProtectionSection, {}), jsxRuntime.jsx(PowerStageSection, {}), jsxRuntime.jsx("copperpour", { name: "GND_TOP", layer: "top", connectsTo: "net.GND", clearance: "0.35mm", padMargin: "0.5mm", traceMargin: "0.5mm", boardEdgeMargin: "0.5mm", coveredWithSolderMask: true }), jsxRuntime.jsx("copperpour", { name: "GND_BOTTOM", layer: "bottom", connectsTo: "net.GND", clearance: "0.35mm", padMargin: "0.5mm", traceMargin: "0.5mm", boardEdgeMargin: "0.5mm", coveredWithSolderMask: true }), jsxRuntime.jsx("hole", { diameter: "3.2mm", pcbX: -51, pcbY: 36 }), jsxRuntime.jsx("hole", { diameter: "3.2mm", pcbX: 51, pcbY: 36 }), jsxRuntime.jsx("hole", { diameter: "3.2mm", pcbX: -51, pcbY: -36 }), jsxRuntime.jsx("hole", { diameter: "3.2mm", pcbX: 51, pcbY: -36 }), jsxRuntime.jsx("silkscreentext", { text: "RP2040 BLDC CONTROLLER", fontSize: "1.5mm", pcbX: 0, pcbY: 37 }), jsxRuntime.jsx("silkscreentext", { text: "12-24V / REV A PROTOTYPE", fontSize: "1mm", pcbX: 0, pcbY: 34.5 }), jsxRuntime.jsx("silkscreentext", { text: "12-24V POWER", fontSize: "1mm", pcbX: -47, pcbY: 21 }), jsxRuntime.jsx("silkscreentext", { text: "HALL", fontSize: "0.9mm", pcbX: -48, pcbY: -16 }), jsxRuntime.jsx("silkscreentext", { text: "ENCODER", fontSize: "0.9mm", pcbX: -47, pcbY: -35 }), jsxRuntime.jsx("silkscreentext", { text: "ONE MOTOR: U V W", fontSize: "1mm", pcbX: 35.5, pcbY: 27 })] }));
}

module.exports = Rp2040BldcController;
