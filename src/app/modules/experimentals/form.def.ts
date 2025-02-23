import { Field_I, LayoutRow_I, TextField_I } from "../../core/components/forms/interfaces";


const field1: Field_I<TextField_I> = {
  typeField: 'text',
  props: {
    name: 'Dirección',
    label: 'Dirección',
    placeholder: 'Escribe tu dirección',
    value: '',
    size: "md",
    type: "text",
    validation_rules: [],
    field_class: 'w-full'
  }
}

export const formExperimental: LayoutRow_I[] = [
  {
    fields: [

      {
        typeField: 'text',
        props: {

        }
      }
    ],
    classes: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'
  }
]


formExperimental[0].fields[0].props = {

}