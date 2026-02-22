import propTypes from "prop-types";

interface Arrow {
  className: string;
  imgUrl: string;
  onClick?: () => {};
}

const Arrow = ({ className, imgUrl, onClick }: Arrow) => {
  return (
    <div className={className ? `${className}` : ""} onClick={onClick}>
      <img src={imgUrl} alt={className} />
    </div>
  );
};

Arrow.propTypes = {
  className: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default Arrow;
