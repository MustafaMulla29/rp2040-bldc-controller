import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["G"],
  pin2: ["D"],
  pin3: ["S"]
} as const

export const A_30P06 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":0,"y":0},{"x":-0.12,"y":0.04},{"x":-0.12,"y":-0.04},{"x":0,"y":0}]} strokeColor="#880000" isFilled fillColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":-0.04},{"x":0.26,"y":0.06},{"x":0.14,"y":0.06},{"x":0.2,"y":-0.04}]} strokeColor="#880000" isFilled fillColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":0.14},{"x":0,"y":0.14},{"x":0,"y":0.2},{"x":0.2,"y":0.2},{"x":0.2,"y":0.04}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":0},{"x":0,"y":0},{"x":0,"y":-0.2},{"x":0.2,"y":-0.2},{"x":0.2,"y":0}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0,"y":-0.14},{"x":-0.2,"y":-0.14}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.24,"y":0.18},{"x":-0.24,"y":-0.18}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":0.18},{"x":-0.2,"y":0.1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":-0.04},{"x":-0.2,"y":0.04}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":-0.18},{"x":-0.2,"y":-0.1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.4,"y":0},{"x":-0.24,"y":0}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.12,"y":-0.06},{"x":0.16,"y":-0.04},{"x":0.24,"y":-0.04},{"x":0.28,"y":-0.02}]} strokeColor="#880000" />
          <port name="pin2" pinNumber={2} aliases={["D"]} direction="up" schX={0} schY={0.4} schStemLength={0.2} />
          <port name="pin1" pinNumber={1} aliases={["G"]} direction="left" schX={-0.6} schY={0} schStemLength={0.2} />
          <port name="pin3" pinNumber={3} aliases={["S"]} direction="down" schX={0} schY={-0.4} schStemLength={0.2} />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C18164395"
  ]
}}
      manufacturerPartNumber="30P06"
      footprint="dpak_pin1location(rightside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C18164395.obj?uuid=5cc2a31718c943a193855315af1a2fab",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C18164395.step?uuid=5cc2a31718c943a193855315af1a2fab",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 2.3, y: 4.746065699999893, z: 0 },
      }}
      {...props}
    />
  )
}