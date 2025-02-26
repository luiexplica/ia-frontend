import { FieldStatus_Type } from './../interfaces';
import { Validations_Type } from "../interfaces";



export const is_required = (rule: Validations_Type) => {

  // rule.type === "required" || rule.type === 'select_multi_required' || rule.type === 'select_single_required' || rule.type === 'conditional_select_multi_required'

  return rule === "required" || rule === 'select_multi_required' || rule === 'select_single_required' || rule === 'conditional_select_multi_required';

}

export const get_fieldStatusColor = (status: FieldStatus_Type) => {

  switch (status) {
    case status = 'info':
      return "text-slate-400";
      break;
    case status = 'error':
      return "text-rose-400";
      break;
    case status = 'success':
      return "text-emerald-400";
      break;
    case status = 'warning':
      return "text-yellow-400";
      break;
    default:
      return "text-slate-400";
  }

}



      // "text-rose-400"
      // "text-emerald-400"