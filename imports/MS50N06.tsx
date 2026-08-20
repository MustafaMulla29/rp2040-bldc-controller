import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["G"],
  pin2: ["D"],
  pin3: ["S"]
} as const

export const MS50N06 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":-0.2,"y":0},{"x":-0.08,"y":-0.04},{"x":-0.08,"y":0.04},{"x":-0.2,"y":0}]} strokeColor="#880000" isFilled fillColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":0.04},{"x":0.14,"y":-0.06},{"x":0.26,"y":-0.06},{"x":0.2,"y":0.04}]} strokeColor="#880000" isFilled fillColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":0.14},{"x":0,"y":0.14},{"x":0,"y":0.2},{"x":0.2,"y":0.2},{"x":0.2,"y":0.2},{"x":0.2,"y":0.04}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":0},{"x":0,"y":0},{"x":0,"y":-0.2},{"x":0,"y":-0.2},{"x":0,"y":-0.2},{"x":0,"y":-0.2},{"x":0,"y":-0.2},{"x":0.2,"y":-0.2},{"x":0.2,"y":-0.06}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0,"y":-0.14},{"x":-0.2,"y":-0.14}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.24,"y":0.18},{"x":-0.24,"y":-0.18}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":0.18},{"x":-0.2,"y":0.1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":-0.04},{"x":-0.2,"y":0.04}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":-0.18},{"x":-0.2,"y":-0.1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.4,"y":0},{"x":-0.24,"y":0}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.28,"y":0.04},{"x":0.24,"y":0.04},{"x":0.16,"y":0.04},{"x":0.12,"y":0.04}]} strokeColor="#880000" />
          <port name="pin2" pinNumber={2} aliases={["D"]} direction="up" schX={0} schY={0.4} schStemLength={0.2} />
          <port name="pin1" pinNumber={1} aliases={["G"]} direction="left" schX={-0.6} schY={0} schStemLength={0.2} />
          <port name="pin3" pinNumber={3} aliases={["S"]} direction="down" schX={0} schY={-0.4} schStemLength={0.2} />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C2902884"
  ]
}}
      manufacturerPartNumber="MS50N06"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="-2.3670895mm" pcbY="0mm" width="6.5000124mm" height="5.999988mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="4.2170985mm" pcbY="-2.284984mm" width="2.7999944mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="4.2170985mm" pcbY="2.284984mm" width="2.7999944mm" height="1.2999974mm" shape="rect" />
<silkscreenpath route={[{"x":-3.245091299999899,"y":3.2999426000000085},{"x":2.1548979000000372,"y":3.2999426000000085},{"x":2.1548979000000372,"y":-3.300044200000002},{"x":-3.245091299999899,"y":-3.300044200000002}]} />
<silkscreentext text="{NAME}" pcbX="-0.0120015mm" pcbY="4.291078mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.875401499999839,"y":3.541078000000198},{"x":5.851398500000073,"y":3.541078000000198},{"x":5.851398500000073,"y":-3.5883219999999483},{"x":-5.875401499999839,"y":-3.5883219999999483},{"x":-5.875401499999839,"y":3.541078000000198}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2902884.obj?uuid=9aa7a0eadfaa4b8eac48494dee2e6800",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2902884.step?uuid=9aa7a0eadfaa4b8eac48494dee2e6800",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.9000254999999244, y: 0.00012700000002041634, z: -0.05 },
      }}
      {...props}
    />
  )
}