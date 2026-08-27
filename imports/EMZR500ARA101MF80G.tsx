import type { CapacitorProps } from "@tscircuit/props"

export const EMZR500ARA101MF80G = (props: Omit<CapacitorProps, "capacitance">) => {
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
    "C962164"
  ]
}}
      manufacturerPartNumber="EMZR500ARA101MF80G"
      footprint="cap_p5.3398mm_pw3.5mm_ph1.2mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C962164.obj?uuid=19c047b38b814d5099587d6a780dd6ee",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C962164.step?uuid=19c047b38b814d5099587d6a780dd6ee",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: -0.0001015999999935957, y: -0.0001778000000740576, z: -0.02 },
      }}
      {...restProps}
    />
  )
}
