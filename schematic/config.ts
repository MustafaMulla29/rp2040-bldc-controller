export const sheets = {
  controller: "controller",
  hall: "hall",
  encoder: "encoder",
  protection: "protection",
  powerInput: "power_input",
  power: "power",
  motor: "motor",
} as const

export const sections = {
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
} as const

// Low-current logic, sense, and ground branches use tscircuit's default trace
// width. Explicit widths are reserved for connections that actually carry
// switching, supply, or motor current.
export const logicTrace = {} as const
export const senseTrace = {} as const
export const groundTrace = {} as const
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
