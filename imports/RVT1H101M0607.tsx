import type { CapacitorProps } from "@tscircuit/props"

export const RVT1H101M0607 = (props: Omit<CapacitorProps, "capacitance">) => {
  const { name = "C1", ...restProps } = props

  return (
    <capacitor
      name={name}
      capacitance="100uF"
      maxVoltageRating="50V"
      polarized
      symbol={
        <symbol>
          <schematicpath points={[{"x":-0.04,"y":0.14},{"x":-0.04,"y":-0.14}]} strokeColor="#880000" />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.4} schY={0} schStemLength={0.2} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="right" schX={0.4} schY={0} schStemLength={0.2} />
          <schematicpath points={[{"x":-0.2,"y":0},{"x":-0.04,"y":0}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.04,"y":0},{"x":0.2,"y":0}]} strokeColor="#880000" />
          <schematicpath svgPath="M 0.0888 -0.138 A 0.2 0.2 0 0 0 0.0906 0.1406" strokeColor="#880000" />
          <schematicpath points={[{"x":-0.18,"y":0.1},{"x":-0.1,"y":0.1}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.14,"y":0.14},{"x":-0.14,"y":0.06}]} strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C3151829"
  ]
}}
      manufacturerPartNumber="RVT1H101M0607"
      footprint="cap_p5.3398mm_pw3.5mm_ph1.2mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3151829.obj?uuid=6cd4a279654c490abad9d43c172323ed",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3151829.step?uuid=6cd4a279654c490abad9d43c172323ed",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...restProps}
    />
  )
}
