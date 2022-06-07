type Props = {
  id: string;
  src: string;
};

const PopInImage: React.FC<Props> = ({ id, src }) => {
  return (
    <div className="pop__container">
      <img id={id} className="pop__image" src={src} alt="" />
    </div>
  );
};

export default PopInImage;
