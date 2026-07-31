import type { ConnectorProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const WJ500V_5_08_03P_14_00A = (props: ConnectorProps) => {
  return (
    <connector
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C72334"
  ]
}}
      manufacturerPartNumber="WJ500V_5_08_03P_14_00A"
      footprint={<footprint>
        <platedhole  portHints={["pin3"]} pcbX="5.08mm" pcbY="0mm" outerDiameter="1.999996mm" holeDiameter="1.3000228mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.999996mm" holeDiameter="1.3000228mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-5.08mm" pcbY="0mm" outerDiameter="1.999996mm" holeDiameter="1.3000228mm" shape="circle" />
<silkscreenpath route={[{"x":7.646162000000004,"y":-5.499988999999999},{"x":-7.593837999999991,"y":-5.499988999999999}]} />
<silkscreenpath route={[{"x":7.599984800000016,"y":3.099993800000007},{"x":-7.6400151999999935,"y":3.099993800000007}]} />
<silkscreenpath route={[{"x":7.646162000000004,"y":4.499990999999994},{"x":-7.593837999999991,"y":4.499990999999994}]} />
<silkscreenpath route={[{"x":-7.593837999999991,"y":-5.532374000000004},{"x":-7.593837999999991,"y":4.467605999999989}]} />
<silkscreenpath route={[{"x":6.034430400000019,"y":-5.499988999999999},{"x":6.034430400000019,"y":-2.529966999999999},{"x":3.972102800000016,"y":-2.529966999999999},{"x":3.972102800000016,"y":-5.499988999999999}]} />
<silkscreenpath route={[{"x":-4.1618661999999915,"y":-5.499988999999999},{"x":-4.1618661999999915,"y":-2.529966999999999},{"x":-6.224193799999995,"y":-2.529966999999999},{"x":-6.224193799999995,"y":-5.499988999999999}]} />
<silkscreenpath route={[{"x":0.8999982000000273,"y":-5.499988999999999},{"x":0.8999982000000273,"y":-2.529966999999999},{"x":-1.1623293999999902,"y":-2.529966999999999},{"x":-1.1623293999999902,"y":-5.499988999999999}]} />
<silkscreenpath route={[{"x":7.646162000000004,"y":-5.5224680000000035},{"x":7.646162000000004,"y":4.47751199999999}]} />
<silkscreentext text="{NAME}" pcbX="0.28956mm" pcbY="5.499102mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-7.897939999999991,"y":4.749102000000008},{"x":8.477060000000009,"y":4.749102000000008},{"x":8.477060000000009,"y":-5.7838979999999935},{"x":-7.897939999999991,"y":-5.7838979999999935},{"x":-7.897939999999991,"y":4.749102000000008}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C72334.obj?uuid=3ce8efb5088242eb9ba049a12326c3b5",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C72334.step?uuid=3ce8efb5088242eb9ba049a12326c3b5",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000013299999995108891, y: 0.5160009999999886, z: -0.000009000000000369823 },
      }}
      {...props}
    />
  )
}
