type Props = {
  children?: React.ReactNode;
};

export const VSection: React.FC<Props> = (props) => {
  return <div>{props.children}</div>;
};

export const HSection: React.FC<Props> = (props) => {
  return <div className="hsection">{props.children}</div>;
};
