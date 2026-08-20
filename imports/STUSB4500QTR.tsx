import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CC1DB"],
  pin2: ["CC1"],
  pin3: ["NC"],
  pin4: ["CC2"],
  pin5: ["CC2DB"],
  pin6: ["RESET"],
  pin7: ["SCL"],
  pin8: ["SDA"],
  pin9: ["DISCH"],
  pin10: ["GND"],
  pin11: ["ATTACH"],
  pin12: ["ADDR0"],
  pin13: ["ADDR1"],
  pin14: ["POWER_OK3"],
  pin15: ["GPIO"],
  pin16: ["VBUS_EN_SNK"],
  pin17: ["A_B_SIDE"],
  pin18: ["VBUS_VS_DISCH"],
  pin19: ["ALERT"],
  pin20: ["POWER_OK2"],
  pin21: ["VREG_1V2"],
  pin22: ["VSYS"],
  pin23: ["VREG_2V7"],
  pin24: ["VDD"],
  pin25: ["EP"]
} as const

const footprinterPinLabels = {
  ...pinLabels,
  "pin25": [...pinLabels["pin25"], "thermalpad"],
} as const

export const STUSB4500QTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2678061"
  ]
}}
      manufacturerPartNumber="STUSB4500QTR"
      footprint="qfn24_thermalpad2.8mmx2.8mm_pillpads_p0.4999mm_h4.9mm_pw0.28mm_pl0.7mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2678061.obj?uuid=f4a3249710724deb990f62f343cd4553",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2678061.step?uuid=f4a3249710724deb990f62f343cd4553",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: -0.000012700000070253736, z: 0 },
      }}
      {...props}
    />
  )
}