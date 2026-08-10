export const sheets = {
  controller: "controller",
  hall: "hall",
  encoder: "encoder",
  protection: "protection",
  power: "power",
  motor: "motor",
} as const

export const sections = {
  hall: "hall_inputs",
  encoder: "encoder_inputs",
  temperature: "temperature_protection",
  inputProtection: "input_protection",
  buck: "five_volt_buck",
  busSense: "bus_current_sense",
  gateDriver: "gate_driver",
  powerStage: "power_stage",
} as const

export const logicTrace = {
  thickness: "0.2mm",
} as const
export const senseTrace = {
  thickness: "0.2mm",
} as const
export const groundTrace = {
  thickness: "0.2mm",
} as const
export const driverTrace = {
  thickness: "0.4mm",
} as const
export const powerTrace = {
  thickness: "0.8mm",
} as const
export const highCurrentTrace = {
  thickness: "1.5mm",
} as const
export const motorTrace = {
  thickness: "1.5mm",
} as const
