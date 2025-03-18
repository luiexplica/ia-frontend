
import { LayoutRow_I } from "@components/forms/interfaces";

export interface RegisterForm_I {

  name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirm: string;
  terms_conditions: boolean;

 }

export const registerFormDef: LayoutRow_I[] = [
  {
    fields: [
      {
        typeField: "text",
        props: {
          type: 'text',
          name: "name",
          label: "Nombre",
          placeholder: "Escribe tu nombre",
          classes: 'w-full',
          validation_rules: [
            {
              type: 'required',
              layer: 'field',
              message: 'El nombre es requerido'
            },
            {
              type: 'min_length',
              layer: 'field',
              value: 3,
              message: 'El nombre debe tener al menos 3 caracteres'
            }
          ],
        },
      },
      {
        typeField: "text",
        props: {
          type: 'text',
          name: "last_name",
          label: "Apellido",
          placeholder: "Escribe tu apellido",
          classes: 'w-full',
          validation_rules: [
            {
              type: 'required',
              layer: 'field',
              message: 'El apellido es requerido'
            },
            {
              type: 'min_length',
              layer: 'field',
              value: 3,
              message: 'El apellido debe tener al menos 3 caracteres'
            }
          ],
        },
      },
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
      {
        typeField: 'text',
        props: {
          type: 'password',
          name: "password_confirm",
          label: "Contraseña",
          classes: 'w-full',
          placeholder: "Confirma tu contraseña",
          validation_rules: [
            {
              type: 'required',
              layer: 'field',
              message: 'Confirmación de contraseña requerida'
            },
                {
              type: "password",
              layer: "field",
              message: 'Formato de contraseña no válido',
            },
          ],
        }
      },
      {
        typeField: 'checkbox',
        props: {
          label: `
          Acepto los <a
        class="block pl-1 font-sans text-sm antialiased font-medium leading-normal underline text-blue-gray-900">Términos y Condiciones</a>
          `,
          classes: "w-full",
          validation_rules: [
            {
              type: 'required_true',
              layer: 'field',
              message: 'Debes aceptar los términos y condiciones'
            }
          ],
          name: "terms_conditions",
        }
      }
    ],
    classes: 'grid-cols-1'
  }
]