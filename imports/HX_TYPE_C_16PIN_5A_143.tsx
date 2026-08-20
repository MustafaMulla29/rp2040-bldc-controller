import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin13: ["GND6"],
  pin14: ["GND3"],
  pin15: ["GND5"],
  pin16: ["GND4"],
  pin17: ["B1A12"],
  pin18: ["B4A9"],
  pin19: ["A4B9"],
  pin20: ["A1B12"],
  pin21: ["B5"],
  pin22: ["A8"],
  pin23: ["B6"],
  pin24: ["A7"],
  pin25: ["A6"],
  pin26: ["B7"],
  pin27: ["A5"],
  pin28: ["B8"]
} as const

export const HX_TYPE_C_16PIN_5A_143 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C19189138"
  ]
}}
      manufacturerPartNumber="HX TYPE-C 16PIN 5A 143"
      footprint={<footprint>
        <hole pcbX="2.875026mm" pcbY="1.0149396mm" diameter="0.649986mm" />
<hole pcbX="-2.875026mm" pcbY="1.0149396mm" diameter="0.649986mm" />
<platedhole  portHints={["pin14"]} pcbX="4.320032mm" pcbY="1.5150656mm" holeWidth="0.5999988mm" holeHeight="1.6999966mm" outerWidth="0.999998mm" outerHeight="2.0999958mm" shape="pill" />
<platedhole  portHints={["pin16"]} pcbX="4.320032mm" pcbY="-2.6650124mm" holeWidth="0.5999988mm" holeHeight="1.3999972mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin15"]} pcbX="-4.320032mm" pcbY="-2.6650124mm" holeWidth="0.5999988mm" holeHeight="1.3999972mm" outerWidth="0.999998mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin13"]} pcbX="-4.320032mm" pcbY="1.5150656mm" holeWidth="0.5999988mm" holeHeight="1.6999966mm" outerWidth="0.999998mm" outerHeight="2.0999958mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="3.200146mm" pcbY="2.1150136mm" width="0.5999988mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="2.400046mm" pcbY="2.1150136mm" width="0.5999988mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-2.400046mm" pcbY="2.1150136mm" width="0.5999988mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-3.199892mm" pcbY="2.1150136mm" width="0.5999988mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="1.75006mm" pcbY="2.1150136mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="1.24968mm" pcbY="2.1150136mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="0.750062mm" pcbY="2.1150136mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="0.249936mm" pcbY="2.1150136mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-0.249936mm" pcbY="2.1150136mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-0.750062mm" pcbY="2.1150136mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-1.249934mm" pcbY="2.1150136mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-1.75006mm" pcbY="2.1150136mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<silkscreenpath route={[{"x":4.330649199999925,"y":-1.5338742000000138},{"x":4.330649199999925,"y":0.23396579999996447}]} />
<silkscreenpath route={[{"x":4.330649199999925,"y":-5.2349082000000635},{"x":4.330649199999925,"y":-3.795998200000099}]} />
<silkscreenpath route={[{"x":-4.316018799999938,"y":-5.2349082000000635},{"x":4.330649199999925,"y":-5.2349082000000635}]} />
<silkscreenpath route={[{"x":-4.316018799999938,"y":-3.796049000000039},{"x":-4.316018799999938,"y":-5.2349082000000635}]} />
<silkscreenpath route={[{"x":-4.316018799999938,"y":0.233889599999884},{"x":-4.316018799999938,"y":-1.5337979999999334}]} />
<silkscreentext text="{NAME}" pcbX="0.007874mm" pcbY="3.7187716mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.06812600000012,"y":2.9687715999998545},{"x":5.083873999999923,"y":2.9687715999998545},{"x":5.083873999999923,"y":-5.532228400000122},{"x":-5.06812600000012,"y":-5.532228400000122},{"x":-5.06812600000012,"y":2.9687715999998545}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C19189138.obj?uuid=b818f955ebd74f4c8407b3a215b5f0a7",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C19189138.step?uuid=b818f955ebd74f4c8407b3a215b5f0a7",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000025399999913133797, y: 1.3149210000000857, z: -0.0000029999999999752447 },
      }}
      {...props}
    />
  )
}