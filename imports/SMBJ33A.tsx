import type { DiodeProps } from "@tscircuit/props"

export const SMBJ33A = (props: DiodeProps) => {
  const { name = "D1", ...restProps } = props

  return (
    <diode
      name={name}
      supplierPartNumbers={{ jlcpcb: ["C173526"] }}
      manufacturerPartNumber="SMBJ33A"
      footprint="res_p4.7214mm_pw2.0475mm_ph2.1924mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C173526.obj?uuid=892cc756ed79448ab4afad0e5bfcdfa6",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C173526.step?uuid=892cc756ed79448ab4afad0e5bfcdfa6",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.1 },
      }}
      {...restProps}
    />
  )
}
