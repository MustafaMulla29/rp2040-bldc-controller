import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NC"],
  pin2: ["IN_POS"],
  pin3: ["IN_NEG"],
  pin4: ["GND"],
  pin5: ["VS"],
  pin6: ["REF2"],
  pin7: ["REF1"],
  pin8: ["OUT"]
} as const

export const INA240A1PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C93965"
  ]
}}
      manufacturerPartNumber="INA240A1PWR"
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-2.9271mm" pcbY="-0.975mm" width="1.454mm" height="0.353mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="-2.9271mm" pcbY="-0.325mm" width="1.454mm" height="0.353mm" shape="rect" />
          <smtpad portHints={["pin3"]} pcbX="-2.9271mm" pcbY="0.325mm" width="1.454mm" height="0.353mm" shape="rect" />
          <smtpad portHints={["pin4"]} pcbX="-2.9271mm" pcbY="0.975mm" width="1.454mm" height="0.353mm" shape="rect" />
          <smtpad portHints={["pin5"]} pcbX="2.9271mm" pcbY="0.975mm" width="1.454mm" height="0.353mm" shape="rect" />
          <smtpad portHints={["pin6"]} pcbX="2.9271mm" pcbY="0.325mm" width="1.454mm" height="0.353mm" shape="rect" />
          <smtpad portHints={["pin7"]} pcbX="2.9271mm" pcbY="-0.325mm" width="1.454mm" height="0.353mm" shape="rect" />
          <smtpad portHints={["pin8"]} pcbX="2.9271mm" pcbY="-0.975mm" width="1.454mm" height="0.353mm" shape="rect" />
          <silkscreenpath route={[{ x: -2.2, y: -1.7 }, { x: 2.2, y: -1.7 }, { x: 2.2, y: 1.7 }, { x: -2.2, y: 1.7 }, { x: -2.2, y: -1.7 }]} />
          <silkscreentext text="{NAME}" pcbX="0mm" pcbY="2.4mm" anchorAlignment="center" fontSize="0.8mm" />
          <courtyardoutline outline={[{ x: -4.1, y: -2 }, { x: 4.1, y: -2 }, { x: 4.1, y: 2 }, { x: -4.1, y: 2 }, { x: -4.1, y: -2 }]} />
        </footprint>
      }
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C93965.obj?uuid=2d0fd2703afb4f81a9dfc54e2181a624",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C93965.step?uuid=2d0fd2703afb4f81a9dfc54e2181a624",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
