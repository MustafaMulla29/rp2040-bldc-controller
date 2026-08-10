import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["BOOT"],
  pin2: ["VIN"],
  pin3: ["EN"],
  pin4: ["pin4"],
  pin5: ["FB"],
  pin6: ["PGOOD"],
  pin7: ["GND"],
  pin8: ["SW"],
  pin9: ["EP"]
} as const

const footprinterPinLabels = {
  ...pinLabels,
  "pin9": [...pinLabels["pin9"], "thermalpad"],
} as const

export const LMR16020PDDAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C190006"
  ]
}}
      manufacturerPartNumber="LMR16020PDDAR"
      footprint="soic8_thermalpad2.41mmx3.098mm_pillpads_w7.3822mm_pw0.602mm_pl1.941mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C190006.obj?uuid=3febf2d495b54c0da7c8bb4287865e8b",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C190006.step?uuid=3febf2d495b54c0da7c8bb4287865e8b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
