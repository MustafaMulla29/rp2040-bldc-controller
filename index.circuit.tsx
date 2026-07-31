import { ControllerSection } from "./schematic/ControllerSection"
import { GateDriverSection } from "./schematic/GateDriverSection"
import { PowerSection } from "./schematic/PowerSection"
import { PowerStageSection } from "./schematic/PowerStageSection"
import { SchematicSheets } from "./schematic/SchematicSheets"

export default function Rp2040BldcController() {
  return (
    <board
      width="120mm"
      height="90mm"
      autorouter="auto_local"
    >
      <net name="GND" isGroundNet />
      <net name="V3V3" isPowerNet />
      <net name="V5" isPowerNet />
      <net name="VM" isPowerNet />
      <net name="PHASE_A" />
      <net name="PHASE_B" />
      <net name="PHASE_C" />
      <net name="LS_SOURCE_A" />
      <net name="LS_SOURCE_B" />
      <net name="LS_SOURCE_C" />

      <SchematicSheets />
      <ControllerSection />
      <PowerSection />
      <GateDriverSection />
      <PowerStageSection />

      <copperpour
        name="GND_TOP"
        layer="top"
        connectsTo="net.GND"
        clearance="0.25mm"
        padMargin="0.2mm"
        traceMargin="0.2mm"
        boardEdgeMargin="0.5mm"
        coveredWithSolderMask
      />
      <copperpour
        name="GND_BOTTOM"
        layer="bottom"
        connectsTo="net.GND"
        clearance="0.25mm"
        padMargin="0.2mm"
        traceMargin="0.2mm"
        boardEdgeMargin="0.5mm"
        coveredWithSolderMask
      />

      <hole diameter="3.2mm" pcbX={-56} pcbY={41} />
      <hole diameter="3.2mm" pcbX={56} pcbY={41} />
      <hole diameter="3.2mm" pcbX={-56} pcbY={-41} />
      <hole diameter="3.2mm" pcbX={56} pcbY={-41} />

      <silkscreentext
        text="RP2040 BLDC CONTROLLER"
        fontSize="1.5mm"
        pcbX={9}
        pcbY={41}
      />
      <silkscreentext
        text="12-24V / REV A PROTOTYPE"
        fontSize="1mm"
        pcbX={10}
        pcbY={38}
      />
      <silkscreentext text="POWER" fontSize="1mm" pcbX={-52} pcbY={28} />
      <silkscreentext text="U V W" fontSize="1mm" pcbX={52} pcbY={23} />
    </board>
  )
}
