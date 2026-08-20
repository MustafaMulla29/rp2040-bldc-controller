import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const A_0451005_MRL = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicrect schX={0} schY={0} width={0.52} height={0.12} color="#880000" />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.4} schY={0} schStemLength={0.2} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="right" schX={0.4} schY={0} schStemLength={0.2} />
          <schematicpath points={[{"x":-0.2,"y":0},{"x":0.2,"y":0}]} strokeColor="#8D2323" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C48467"
  ]
}}
      manufacturerPartNumber="0451005.MRL"
      footprint="res_p4.6599mm_pw2.91mm_ph2.9106mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C48467.obj?uuid=ceafb183c74347baabbacc2158b065b9",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C48467.step?uuid=ceafb183c74347baabbacc2158b065b9",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999956566899, y: 0, z: -1.3 },
      }}
      {...props}
    />
  )
}