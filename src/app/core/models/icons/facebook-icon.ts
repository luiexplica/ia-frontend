
import { Icon_I, SourceIcon_Type } from "@interfaces/globals.interface"

export const Facebook_Icon = (type: SourceIcon_Type = 'html') => {

  const value = "<i class='bx bxl-facebook'></i>"
  const icon: Icon_I = {
    type: 'html',
    value: value

  }
  return icon;

}