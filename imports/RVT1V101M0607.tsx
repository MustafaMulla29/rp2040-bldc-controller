import type { CapacitorProps } from "@tscircuit/props"

export const RVT1V101M0607 = (props: Omit<CapacitorProps, "capacitance">) => {
  const { name = "C1", ...restProps } = props

  return (
    <capacitor
      name={name}
      capacitance="100uF"
      maxVoltageRating="35V"
      polarized
      supplierPartNumbers={{ jlcpcb: ["C72478"] }}
      manufacturerPartNumber="RVT1V101M0607"
      footprint="cap_p5.3398mm_pw3.5mm_ph1.2mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C72478.obj?uuid=644b78ce0cd64ac4a97304a2c79953d0",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C72478.step?uuid=644b78ce0cd64ac4a97304a2c79953d0",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.001 },
      }}
      {...restProps}
    />
  )
}
