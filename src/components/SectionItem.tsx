type Props = {
  id: string;
  children?: React.ReactNode;
  image?: string;
};

export const VItem: React.FC<Props> = (props) => {
  return (
    <div className="vitem full-height">
      {/* {props.image && (
        <div>
          <img className="vitem__image" src={props.image} alt="Decoration" />
        </div>
      )} */}
      <div id={props.id} className="vitem__text">
        {props.children}
      </div>
    </div>
  );
};

export const HItem: React.FC<Props> = (props) => {
  return (
    <div className="hitem">
      {props.image && (
        <div>
          <img className="hitem__image" src={props.image} alt="Decoration" />
        </div>
      )}
      <div id={props.id} className="hitem__text">
        {props.children}
      </div>
    </div>
  );
};
