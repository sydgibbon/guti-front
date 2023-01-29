export interface Item {
  name: string;
  icon: (style: string, size: string) => JSX.Element;
  link: string;
  itemContent?: Item[];
  formLink?: string;
}
