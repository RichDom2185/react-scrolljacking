import { useCallback, useEffect, useState } from "react";

type Props = {
  id: string;
  src: string;
};

const PopInImage: React.FC<Props> = ({ id, src }) => {
  const [opacity, setOpacity] = useState(0);

  const getPercentage = useCallback(() => {
    const boundingBox = document.getElementById(id)!.getBoundingClientRect();

    const start = boundingBox.top + boundingBox.height * (1 / 4);
    const end = boundingBox.top + boundingBox.height * (3 / 4);
    const transitionHeight = end - start;

    const startFromBottom = window.innerHeight - start;

    return Math.min(Math.max(startFromBottom, 0) / transitionHeight, 1) * 100;
  }, [id]);

  useEffect(() => {
    const handleScroll = () => setOpacity(getPercentage());
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [getPercentage]);

  return (
    <div className="pop__container">
      <img
        id={id}
        className="pop__image"
        src={src}
        alt="Decoration"
        style={{
          opacity: `${opacity}%`,
        }}
      />
    </div>
  );
};

export default PopInImage;
