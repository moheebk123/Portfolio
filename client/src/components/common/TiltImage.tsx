import { useLayoutEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import propTypes from "prop-types";

interface TiltImage {
  imgUrl: string;
  alt: string;
  className?: string;
}
const TiltImage = ({ imgUrl, alt, className='' }: TiltImage) => {
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    VanillaTilt.init(imgRef.current);
  });

    return (
      <img
        style={{
          perspective: "500px",
        }}
        ref={imgRef}
        src={imgUrl}
        alt={alt}
        className={`${className ? className : ""} hover:scale-110`}
      />
    );
};

TiltImage.propTypes = {
  imgUrl: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  className: propTypes.string,
};

export default TiltImage;
