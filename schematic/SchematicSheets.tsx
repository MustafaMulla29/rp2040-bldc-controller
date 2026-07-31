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
      name={sheets.power}
      displayName="12-24 V Input & Power Supplies"
      sheetIndex={3}
    >
      <schematicsection
        name={sections.inputProtection}
        displayName="Input Protection & Bulk Capacitance"
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
      sheetIndex={4}
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
  </>
)
