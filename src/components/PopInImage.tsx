import { useEffect, useState } from "react";

type Props = {
  id: string;
  src: string;
};

const PopInImage: React.FC<Props> = ({ id, src }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setPercentage(getPercentage());
  };

  const getPercentage = () => {
    const img = document.getElementById(id);
    const boundingBox = img!.getBoundingClientRect();
    const target = boundingBox.top + (3 * boundingBox.height) / 4;
    const transitionstart = boundingBox.top + (1 * boundingBox.height) / 4;
    const transitionHeight = target - transitionstart;
    return (
      Math.min(
        -Math.min(transitionstart - window.innerHeight, 0) / transitionHeight,
        1
      ) * 100
    );
  };

  return (
    <div className="pop__container">
      <img
        id={id}
        className="pop__image"
        src={src}
        alt="Decoration"
        style={{
          opacity: `${percentage}%`,
        }}
      />
    </div>
  );
};

export default PopInImage;
