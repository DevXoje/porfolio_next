import { Display, Orientation } from "./Common";
import { Variant } from "@mui/material/styles/createTypography";

export type Link = {
  icon?: JSX.Element;
  text: string;

  route: string;
  variant?: Variant;
};
export type LinkProps = {
  props: Link;
};
export type LinkListProps = {
  anchorOrigin?: Orientation;
  transformOrigin?: Orientation;
  links: LinkProps[];
  id: string;
  anchorEl: null | Element;
  onClose: any;
  customStyles?: {
    mt?: string;
    display?: Display;
  };
};
