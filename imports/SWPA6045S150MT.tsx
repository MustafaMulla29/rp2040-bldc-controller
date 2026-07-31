import type { InductorProps } from "@tscircuit/props"

export const SWPA6045S150MT = (
  props: Omit<InductorProps, "inductance">,
) => {
  const { name = "L1", ...restProps } = props

  return (
    <inductor
      name={name}
      inductance="15uH"
      maxCurrentRating="3A"
      supplierPartNumbers={{ jlcpcb: ["C83374"] }}
      manufacturerPartNumber="SWPA6045S150MT"
      footprint="res_p5.206mm_pw2.474mm_ph5.02mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C83374.obj?uuid=38d40b1b5688411c9194395505ca5302",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C83374.step?uuid=38d40b1b5688411c9194395505ca5302",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000025400000026820635,
          y: -0.000025399999913133797,
          z: -0.01,
        },
      }}
      {...restProps}
    />
  )
}
