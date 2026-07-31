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
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-2.72mm" pcbY="-1.905mm" width="1.94mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="-2.72mm" pcbY="-0.635mm" width="1.94mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin3"]} pcbX="-2.72mm" pcbY="0.635mm" width="1.94mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin4"]} pcbX="-2.72mm" pcbY="1.905mm" width="1.94mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin5"]} pcbX="2.72mm" pcbY="1.905mm" width="1.94mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin6"]} pcbX="2.72mm" pcbY="0.635mm" width="1.94mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin7"]} pcbX="2.72mm" pcbY="-0.635mm" width="1.94mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin8"]} pcbX="2.72mm" pcbY="-1.905mm" width="1.94mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin9", "thermalpad"]} pcbX="0mm" pcbY="0mm" width="2.41mm" height="3.098mm" shape="rect" />
          <silkscreenpath route={[{ x: -2, y: -2.65 }, { x: 2, y: -2.65 }, { x: 2, y: 2.65 }, { x: -2, y: 2.65 }, { x: -2, y: -2.65 }]} />
          <silkscreentext text="{NAME}" pcbX="0mm" pcbY="3.4mm" anchorAlignment="center" fontSize="0.8mm" />
          <courtyardoutline outline={[{ x: -4, y: -3 }, { x: 4, y: -3 }, { x: 4, y: 3 }, { x: -4, y: 3 }, { x: -4, y: -3 }]} />
        </footprint>
      }
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
