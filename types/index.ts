import { MouseEventHandler } from "react";

export interface ButtonProps {
  slug?: string;
  icon: boolean;
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SectionHeading {
  slug?: string;
  tag: string;
  headingDark: string;
  headingGrey: string;
}