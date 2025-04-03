import { Icon_I } from "./globals.interface";

interface MenuItemActive_I {
  type: 'boolean' | 'router'
  value: string | boolean;

}

export interface MenuItem_I {
  id: string;
  title: string;
  active?: boolean;
  icon?: Icon_I;
  action: (item: MenuItem_I) => void;
  divider?: {
    up?: boolean;
    bottom?: boolean;
  },
  collapsed?: boolean;
  items?: MenuItem_I[];

}
