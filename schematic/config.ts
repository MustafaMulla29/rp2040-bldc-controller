export const sheets = {
  controller: "controller",
  hall: "hall",
  power: "power",
  motor: "motor",
} as const

export const sections = {
  hall: "hall_inputs",
  inputProtection: "input_protection",
  buck: "five_volt_buck",
  busSense: "bus_current_sense",
  gateDriver: "gate_driver",
  powerStage: "power_stage",
} as const

export const logicTrace = { thickness: "0.2mm" } as const
export const senseTrace = { thickness: "0.2mm" } as const
export const powerTrace = { thickness: "0.8mm" } as const
export const motorTrace = { thickness: "1.5mm" } as const
