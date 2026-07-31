import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CPL"],
  pin2: ["CPH"],
  pin3: ["VCP"],
  pin4: ["VM"],
  pin5: ["VDRAIN"],
  pin6: ["GHA"],
  pin7: ["SHA"],
  pin8: ["GLA"],
  pin9: ["SPA"],
  pin10: ["SNA"],
  pin11: ["SNB"],
  pin12: ["SPB"],
  pin13: ["GLB"],
  pin14: ["SHB"],
  pin15: ["GHB"],
  pin16: ["GHC"],
  pin17: ["SHC"],
  pin18: ["GLC"],
  pin19: ["SPC"],
  pin20: ["SNC"],
  pin21: ["SOC"],
  pin22: ["SOB"],
  pin23: ["SOA"],
  pin24: ["VREF"],
  pin25: ["nFAULT"],
  pin26: ["MODE"],
  pin27: ["IDRIVE"],
  pin28: ["VDS"],
  pin29: ["GAIN"],
  pin30: ["ENABLE"],
  pin31: ["CAL"],
  pin32: ["AGND"],
  pin33: ["DVDD"],
  pin34: ["INHA"],
  pin35: ["INLA"],
  pin36: ["INHB"],
  pin37: ["INLB"],
  pin38: ["INHC"],
  pin39: ["INLC"],
  pin40: ["PGND"],
  pin41: ["EP"]
} as const

const footprinterPinLabels = {
  ...pinLabels,
  "pin41": [...pinLabels["pin41"], "thermalpad"],
} as const

export const DRV8323HRTAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C701783"
  ]
}}
      manufacturerPartNumber="DRV8323HRTAR"
      footprint="qfn40_thermalpad4.5mmx4.5mm_p0.4999mm_h6.8mm_pl0.7mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C701783.obj?uuid=ab4e73ac40ec480c89b4e1b10281a8c0",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C701783.step?uuid=ab4e73ac40ec480c89b4e1b10281a8c0",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00008889999992334197, y: -0.0000889000000370288, z: 0.01 },
      }}
      {...props}
    />
  )
}