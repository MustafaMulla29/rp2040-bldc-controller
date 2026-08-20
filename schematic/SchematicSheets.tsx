import { sections, sheets } from "./config"

export const SchematicSheets = () => (
  <>
    <schematicsheet
      name={sheets.controller}
      displayName="RP2040 Control, USB & Debug"
      sheetIndex={1}
    />

    <schematicsheet
      name={sheets.hall}
      displayName="5 V Hall Sensor Inputs"
      sheetIndex={2}
    >
      <schematicsection
        name={sections.hall}
        displayName="Filtered Hall Sensor Inputs"
      />
    </schematicsheet>

    <schematicsheet
      name={sheets.encoder}
      displayName="Optional Quadrature Encoder"
      sheetIndex={3}
    >
      <schematicsection
        name={sections.encoder}
        displayName="Filtered 5 V Encoder Inputs"
      />
    </schematicsheet>

    <schematicsheet
      name={sheets.powerInput}
      displayName="USB-C PD & Barrel Power Input"
      sheetIndex={4}
    >
      <schematicsection
        name={sections.usbPd}
        displayName="USB-C PD 12 V Sink"
      />
      <schematicsection
        name={sections.inputSelection}
        displayName="Barrel Input & Reverse-Blocking ORing"
      />
    </schematicsheet>

    <schematicsheet
      name={sheets.power}
      displayName="Input Protection, Bus Sense & 5 V Power"
      sheetIndex={5}
    >
      <schematicsection
        name={sections.inputProtection}
        displayName="Selected Input Protection & Bulk Capacitance"
      />
      <schematicsection
        name={sections.busSense}
        displayName="DC Bus Current Sense"
      />
      <schematicsection
        name={sections.buck}
        displayName="5 V Buck Regulator"
      />
    </schematicsheet>

    <schematicsheet
      name={sheets.motor}
      displayName="Three-Phase BLDC Power Stage"
      sheetIndex={6}
    >
      <schematicsection
        name={sections.gateDriver}
        displayName="DRV8323H Gate Driver & Current Sense"
      />
      <schematicsection
        name={sections.powerStage}
        displayName="Six-MOSFET Inverter & Motor Output"
      />
    </schematicsheet>

    <schematicsheet
      name={sheets.protection}
      displayName="Temperature & Hardware Protection"
      sheetIndex={7}
    >
      <schematicsection
        name={sections.temperature}
        displayName="Power-Stage Temperature Interlock"
      />
    </schematicsheet>
  </>
)
