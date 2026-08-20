import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["S3", "SOURCE3"],
  pin2: ["S2", "SOURCE2"],
  pin3: ["S1", "SOURCE1"],
  pin4: ["G", "GATE"],
  pin5: ["D7", "DRAIN7"],
  pin6: ["D6", "DRAIN6"],
  pin7: ["D5", "DRAIN5"],
  pin8: ["D4", "DRAIN4"],
  pin9: ["D1", "DRAIN1"],
  pin10: ["D2", "DRAIN2"],
  pin11: ["D3", "DRAIN3"]
} as const

export const STL6P3LLH6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C457492"
  ]
}}
      manufacturerPartNumber="STL6P3LLH6"
      footprint={<footprint>
        <smtpad portHints={["pin9"]} pcbX="1.399921mm" pcbY="-0.06003925mm" width="0.5599938mm" height="0.3999992mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.399921mm" pcbY="-0.06003925mm" width="0.5599938mm" height="0.3999992mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.010033mm" pcbY="0.23993475mm" width="2.6500074mm" height="1.999996mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.974979mm" pcbY="1.49012275mm" width="0.3999992mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.324993mm" pcbY="1.49012275mm" width="0.3999992mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.324993mm" pcbY="1.49012275mm" width="0.3999992mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.974979mm" pcbY="1.49012275mm" width="0.3999992mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.974979mm" pcbY="-1.51012525mm" width="0.3999992mm" height="0.5599938mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.324993mm" pcbY="-1.51012525mm" width="0.3999992mm" height="0.5599938mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.324993mm" pcbY="-1.51012525mm" width="0.3999992mm" height="0.5599938mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-0.974979mm" pcbY="-1.51012525mm" width="0.3999992mm" height="0.5599938mm" shape="rect" />
<silkscreenpath route={[{"x":1.5999714000000722,"y":-0.4911534500000698},{"x":1.5999714000000722,"y":-1.540021050000064}]} />
<silkscreenpath route={[{"x":1.5999714000000722,"y":1.4899957499999346},{"x":1.5999714000000722,"y":0.3711257500000329}]} />
<silkscreenpath route={[{"x":-1.6000221999998985,"y":-0.49107725000010305},{"x":-1.6000221999998985,"y":-1.540021050000064}]} />
<silkscreenpath route={[{"x":-1.6000221999998985,"y":1.4899957499999346},{"x":-1.6000221999998985,"y":0.37117655000008654}]} />
<silkscreenpath route={[{"x":-0.9137650000000122,"y":-2.1199792500000285},{"x":-0.916361452036881,"y":-2.139701261236837},{"x":-0.9239738642315842,"y":-2.1580792500000143},{"x":-0.9360834632736896,"y":-2.1738607867264363},{"x":-0.951864999999998,"y":-2.185970385768428},{"x":-0.9702429887632888,"y":-2.193582797963245},{"x":-0.9899649999999838,"y":-2.19617925},{"x":-1.0096870112367924,"y":-2.193582797963245},{"x":-1.0280650000000833,"y":-2.185970385768428},{"x":-1.0438465367265053,"y":-2.1738607867264363},{"x":-1.0559561357682696,"y":-2.1580792500000143},{"x":-1.0635685479632002,"y":-2.139701261236837},{"x":-1.066165000000069,"y":-2.1199792500000285},{"x":-1.0635685479632002,"y":-2.10025723876322},{"x":-1.0559561357682696,"y":-2.0818792500000427},{"x":-1.0438465367265053,"y":-2.0660977132737344},{"x":-1.0280650000000833,"y":-2.0539881142317427},{"x":-1.0096870112367924,"y":-2.046375702036812},{"x":-0.9899649999999838,"y":-2.043779250000057},{"x":-0.9702429887632888,"y":-2.046375702036812},{"x":-0.951864999999998,"y":-2.0539881142317427},{"x":-0.9360834632736896,"y":-2.0660977132737344},{"x":-0.9239738642315842,"y":-2.0818792500000427},{"x":-0.916361452036881,"y":-2.10025723876322},{"x":-0.9137650000000122,"y":-2.1199792500000285}]} />
<silkscreentext text="{NAME}" pcbX="-0.010033mm" pcbY="2.78933475mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.9872329999999465,"y":2.0393347499999663},{"x":1.9671670000000177,"y":2.0393347499999663},{"x":1.9671670000000177,"y":-2.4484652500000266},{"x":-1.9872329999999465,"y":-2.4484652500000266},{"x":-1.9872329999999465,"y":2.0393347499999663}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C457492.obj?uuid=5e356709876c4d42b241cc6537481906",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C457492.step?uuid=5e356709876c4d42b241cc6537481906",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.010115550000023177, z: 0 },
      }}
      {...props}
    />
  )
}
