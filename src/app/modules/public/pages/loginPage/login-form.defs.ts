
import { LayoutRow_I } from "@components/forms/interfaces";

export interface LoginForm_I {
  email: string;
  password: string;
}

export const loginFormDef: LayoutRow_I[] = [
  {
    fields: [
      {
        typeField: "text",
        props: {
          type: 'email',
          name: "email",
          label: "Correo electrónico",
          placeholder: "Escribe tu correo electrónico",
          classes: 'w-full',
          validation_rules: [
            {
              type: 'required',
              layer: 'field',
              message: 'Correo electrónico requerido'
            },
            {
              type: 'email',
              layer: 'field',
              message: 'Formato de correo no válido'
            }
          ],
        },
      },
      {
        typeField: 'text',
        props: {
          type: 'password',
          name: "password",
          label: "Contraseña",
          classes: 'w-full',
          placeholder: "Escribe tu contraseña",
          validation_rules: [
            {
              type: 'required',
              layer: 'field',
              message: 'Contraseña requerida'
            },
            {
              type: "password",
              layer: "field",
              message: 'Formato de contraseña no válido',
            },
          ],
        }
      },

    ],
    classes: 'grid-cols-1'
  }
]