import { ControllerSection } from "./schematic/ControllerSection";
import { EncoderSection } from "./schematic/EncoderSection";
import { GateDriverSection } from "./schematic/GateDriverSection";
import { PowerSection } from "./schematic/PowerSection";
import { PowerStageSection } from "./schematic/PowerStageSection";
import { ProtectionSection } from "./schematic/ProtectionSection";
import { SchematicSheets } from "./schematic/SchematicSheets";

export default function Rp2040BldcController() {
  return (
    <board
      width="120mm"
      height="90mm"
      layers={2}
      minViaHoleDiameter="0.3mm"
      minViaPadDiameter="0.45mm"
    >
      <net name="GND" isGroundNet />
      <net name="V3V3" isPowerNet />
      <net name="V5" isPowerNet />
      <net name="VM" isPowerNet />
      <net name="U" />
      <net name="V" />
      <net name="W" />
      <net name="LS_A" />
      <net name="LS_B" />
      <net name="LS_C" />

      <SchematicSheets />
      <ControllerSection />
      <EncoderSection />
      <PowerSection />
      <GateDriverSection />
      <ProtectionSection />
      <PowerStageSection />

      <copperpour
        name="GND_TOP"
        layer="top"
        connectsTo="net.GND"
        clearance="0.35mm"
        padMargin="0.5mm"
        traceMargin="0.5mm"
        boardEdgeMargin="0.5mm"
        coveredWithSolderMask
      />
      <copperpour
        name="GND_BOTTOM"
        layer="bottom"
        connectsTo="net.GND"
        clearance="0.35mm"
        padMargin="0.5mm"
        traceMargin="0.5mm"
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
  );
}
