type Props = {
  from: "left" | "right";
  src: string;
};

const PopInImage: React.FC<Props> = (props) => {
  return (
    <div className="pop__container">
      <img className="pop__image" src={props.src} alt="Decoration" />
    </div>
  );
};

export default PopInImage;
