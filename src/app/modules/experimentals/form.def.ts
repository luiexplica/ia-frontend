import { Field_I, LayoutRow_I, TextField_I } from "../../core/components/forms/interfaces";

export const formExperimental: LayoutRow_I[] = [
  {
    fields: [
      {
        typeField: 'text',
        props: {
          name: 'name',
          label: 'Nombre',
          placeholder: 'Escribe tu nombre',
          type: "text",
          labelInline: false,
          validation_rules: [
            {
              type: 'required',
              message: 'Requerido field'
            }
          ],
          classes: 'w-full',
        }
      },
      {
        typeField: 'text',
        props: {
          name: 'direction',
          label: 'Dirección',
          placeholder: 'Escribe tu dirección',
          size: "md",
          type: "text",
          validation_rules: [
            {
              type: 'minLength',
              value: 2,
              message: 'Debe tener al menos 2 caracteres'
            }
          ],
          classes: 'w-full'
        }
      },
    ],
    classes: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }
]
