import { ReactElement } from "react";
import { ItemProps } from "./SectionItem";

type VSectionProps = {
  children: ReactElement<ItemProps> | ReactElement<ItemProps>[];
};
export const VSection: React.FC<VSectionProps> = (props) => {
  return <div className="bg-gray">{props.children}</div>;
};

type HSectionProps = {
  children: React.ReactNode;
};

export const HSection: React.FC<HSectionProps> = (props) => {
  return <div id="hsection__scroller">{props.children}</div>;
};
