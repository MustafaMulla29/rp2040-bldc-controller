import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["cathode", "IO"],
  pin2: ["anode", "GND"]
} as const

export const ESDA25P35_1U1M = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":-0.2,"y":0.14},{"x":-0.2,"y":-0.14}]} strokeColor="#880000" />
          <schematicpath svgPath="M 0 0.12 L -0.2 0 L 0 -0.14 Z" strokeColor="#880000" isFilled fillColor="#880000" />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.5} schY={0} schStemLength={0.3} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="right" schX={0.3} schY={0} schStemLength={0.3} />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C1974707"
  ]
}}
      manufacturerPartNumber="ESDA25P35-1U1M"
      footprint="res_p1.0498mm_pw0.6mm_ph0.9mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1974707.obj?uuid=f410d8974c0443bc9ff656f954d8e306",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1974707.step?uuid=f410d8974c0443bc9ff656f954d8e306",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.0000762000000804619, z: -0.02 },
      }}
      {...props}
    />
  )
}
