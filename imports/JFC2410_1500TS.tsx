import type { FuseProps } from "@tscircuit/props"

export const JFC2410_1500TS = (
  props: Omit<FuseProps, "currentRating" | "voltageRating">,
) => {
  const { name = "F1", ...restProps } = props

  return (
    <fuse
      name={name}
      currentRating="5A"
      voltageRating="250V"
      supplierPartNumbers={{ jlcpcb: ["C136387"] }}
      manufacturerPartNumber="JFC2410-1500TS"
      footprint="res_p4.9997mm_pw2mm_ph3.2mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C136387.obj?uuid=cd3db3e1d3b64f5ca7c2783f591eebee",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C136387.step?uuid=cd3db3e1d3b64f5ca7c2783f591eebee",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: -1.35 },
      }}
      {...restProps}
    />
  )
}
