export type ItemProps = {
  id: string;
  children?: React.ReactNode;
  image?: string;
};

export const VItem: React.FC<ItemProps> = ({ id, children }) => {
  return (
    <div className="vitem full-height">
      <div id={id} className="vitem__text">
        {children}
      </div>
    </div>
  );
};

export const HItem: React.FC<ItemProps> = ({ id, children, image }) => {
  return (
    <div className="hitem">
      {image && (
        <div>
          <img className="hitem__image" src={image} alt="" />
        </div>
      )}
      <div id={id}>{children}</div>
    </div>
  );
};
