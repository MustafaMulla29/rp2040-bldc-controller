import { ControllerSection } from "./schematic/ControllerSection";
import { EncoderSection } from "./schematic/EncoderSection";
import { GateDriverSection } from "./schematic/GateDriverSection";
import { PowerSection } from "./schematic/PowerSection";
import { PowerStageSection } from "./schematic/PowerStageSection";
import { ProtectionSection } from "./schematic/ProtectionSection";
import { SchematicSheets } from "./schematic/SchematicSheets";
import { UsbPdPowerSection } from "./schematic/UsbPdPowerSection";

export default function Rp2040BldcController() {
  return (
    <board
      width="109mm"
      height="78mm"
      minViaHoleDiameter="0.3mm"
      minViaPadDiameter="0.45mm"
      layers={2}
    >
      <net name="GND" isGroundNet />
      <net name="V3V3" isPowerNet />
      <net name="V5" isPowerNet />
      <net name="VM" isPowerNet />
      <net name="PD_VBUS_RAW" isPowerNet />
      <net name="PD_CONTRACT" isPowerNet />
      <net name="BARREL_RAW" isPowerNet />
      <net name="VIN_SELECTED" isPowerNet />
      <net name="PD_CC1" />
      <net name="PD_CC2" />
      <net name="PD_VBUS_SENSE" />
      <net name="PD_SWITCH_GATE" />
      <net name="MCU_TEMP_SCL" />
      <net name="MCU_TEMP_SDA" />
      <net name="PD_VSYS_3V3" />
      <net name="PHASE_U" />
      <net name="PHASE_V" />
      <net name="PHASE_W" />
      <net name="LS_A" />
      <net name="LS_B" />
      <net name="LS_C" />

      <SchematicSheets />
      <ControllerSection />
      <EncoderSection />
      <UsbPdPowerSection />
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

      <hole diameter="3.2mm" pcbX={-50.5} pcbY={35} />
      <hole diameter="3.2mm" pcbX={50.5} pcbY={35} />
      <hole diameter="3.2mm" pcbX={-50.5} pcbY={-35} />
      <hole diameter="3.2mm" pcbX={50.5} pcbY={-35} />

      <silkscreentext
        text="RP2040 BLDC CONTROLLER"
        fontSize="1.5mm"
        pcbX={0}
        pcbY={37}
      />
      <silkscreentext
        text="12-24V / REV A PROTOTYPE"
        fontSize="0.8mm"
        pcbX={34}
        pcbY={37.5}
      />
      <silkscreentext text="USB-C PD 12V" fontSize="0.8mm" pcbX={-29} pcbY={37.5} />
      <silkscreentext text="BARREL 12-24V" fontSize="0.8mm" pcbX={-49} pcbY={10.5} />
      <silkscreentext text="HALL" fontSize="0.9mm" pcbX={-48} pcbY={-16} />
      <silkscreentext text="ENCODER" fontSize="0.9mm" pcbX={-47} pcbY={-35} />
      <silkscreentext text="ONE MOTOR: U V W" fontSize="1mm" pcbX={35.5} pcbY={27} />
    </board>
  );
}
