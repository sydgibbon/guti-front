import { CartesianScaleTypeRegistry, ScaleOptionsByType } from "chart.js";
import { _DeepPartialObject } from "chart.js/types/utils";
import { ReactNode } from "react";
import { Primitive } from "react-data-table-component/dist/src/DataTable/types";

export type Item = {
  name: string;
  icon: (style: string, size: string) => JSX.Element;
  link: string;
  itemContent?: Item[];
  formLink?: string;
};

export type GridItemType = {
  name: string;
  bgColor: string;
  textColor: string;
  hoverBgColor: string;
  hoverBorderColor: string;
  asset: string;
  path: string;
  icon: (style?: string, size?: string) => ReactNode;
};

export type BarChartType = {
  asset: string;
  itemProp: string;
  title?: string;
  color: string;
};

export interface BarType {
  borderWidth: number;
}

export interface ElementsType {
  bar: BarType;
}

export interface TicksType {
  beginAtZero: boolean | undefined;
}

export interface YAxType {
  ticks: _DeepPartialObject<{
    [key: string]: ScaleOptionsByType<keyof CartesianScaleTypeRegistry>;
  }>;
}

export interface LegendType {
  position:
    | "center"
    | "right"
    | "top"
    | "bottom"
    | "left"
    | "chartArea"
    | _DeepPartialObject<{ [scaleId: string]: number }>
    | undefined;
}

export interface TitleType {
  display: boolean;
  text: string | undefined;
}

export interface PluginsType {
  legend: LegendType;
  title: TitleType;
}

export interface OptionsBarType {
  indexAxis: "x" | "y";
  elements: ElementsType;
  responsive: boolean;
  maintainAspectRatio: boolean;
  scales:
    | _DeepPartialObject<{
        [key: string]: ScaleOptionsByType<keyof CartesianScaleTypeRegistry>;
      }>
    | undefined;
  plugins: PluginsType;
}

export interface DonutType {
  asset: string;
  itemProp: string;
}

export interface Row {
  name: Primitive;
  states: RowProp;
  manufacturers: RowProp;
  serial: Primitive;
  otherserial: Primitive;
  computertypes: RowProp;
  locations: RowProp;
  monitortypes: RowProp;
  contact: Primitive;
  date_mod: Primitive;
  color: Primitive;
  networkequipmenttypes: RowProp;
  peripheraltypes: RowProp;
  peripheralmodels: RowProp;
  printertypes: RowProp;
  printermodels: RowProp;
  cartridgeitemtypes: RowProp;
  consumableitemtypes: RowProp;
  phonetypes: RowProp;
  phonemodels: RowProp;
  cabletypes: RowProp;
  itemtype_endpoint_a: Primitive;
  itemtype_endpoint_b: Primitive;
  sockets_endpoint_a: Primitive;
  sockets_endpoint_b: Primitive;
  users_tech: RowProp;
  ref: Primitive;
  id: Primitive;
}

export interface RowProp {
  name: Primitive;
}

export interface ColumnSearch {
  name: string;
  sortable: boolean;
  selector: ({ computertypes }: Row) => Primitive;
}
