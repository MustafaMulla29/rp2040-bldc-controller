import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["S1"],
  pin2: ["S2"],
  pin3: ["S3"],
  pin4: ["G"],
  pin5: ["D2"],
  pin6: ["D3"],
  pin7: ["D4"],
  pin8: ["D1"],
} as const

export const STL130N6F7 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{ jlcpcb: ["C501008"] }}
      manufacturerPartNumber="STL130N6F7"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.905mm"
            pcbY="-2.726563mm"
            width="0.6199886mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.635mm"
            pcbY="-2.726563mm"
            width="0.6199886mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.635mm"
            pcbY="-2.726563mm"
            width="0.6199886mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.905mm"
            pcbY="-2.726563mm"
            width="0.6199886mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="0.69342mm"
            width="4.5999908mm"
            height="4.0999918mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.905mm"
            pcbY="2.726563mm"
            width="0.6199886mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.635mm"
            pcbY="2.726563mm"
            width="0.6199886mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.635mm"
            pcbY="2.726563mm"
            width="0.6199886mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.905mm"
            pcbY="2.726563mm"
            width="0.6199886mm"
            height="1.1500104mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.5999693999999636, y: 2.999917800000162 },
              { x: -2.5999693999999636, y: -3.0000701999998682 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.5999694000000773, y: 2.999917800000162 },
              { x: 2.5999694000000773, y: -3.0000701999998682 },
            ]}
          />
          <silkscreencircle
            pcbX="-2.2400006mm"
            pcbY="-3.6600638mm"
            radius="0.127mm"
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0254mm"
            pcbY="4.307842mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.8916000000000395, y: 3.5578420000000506 },
              { x: 2.8407999999999447, y: 3.5578420000000506 },
              { x: 2.8407999999999447, y: -4.028757999999925 },
              { x: -2.8916000000000395, y: -4.028757999999925 },
              { x: -2.8916000000000395, y: 3.5578420000000506 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C501008.obj?uuid=ea5714663bb1438ebe5ab7d43e1d72d2",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C501008.step?uuid=ea5714663bb1438ebe5ab7d43e1d72d2",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0,
          y: 0.00007619999985308823,
          z: -0.2,
        },
      }}
      {...props}
    />
  )
}
