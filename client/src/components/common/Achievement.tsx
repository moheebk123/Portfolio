import propTypes from "prop-types";

interface Achievements {
  imgUrl: string;
  heading: string;
  detail: string;
}

const Achievement = ({ imgUrl, heading, detail }: Achievements) => {
  return (
    <div className="bg-white overflow-hidden md:px-12 md:py-20 mx-4 rounded-4xl flex items-center gap-12 flex-col lg:flex-row">
      <div className="h-72 md:h-96 w-full lg:w-2/3">
        <img
          className="h-full w-full object-contain"
          src={imgUrl}
          alt="Achievement Image"
        />
      </div>
      <div className="text-black w-full lg:w-1/3 p-5 pt-0 md:p-0">
        <h2 className="mb-4 text-2xl">{heading}</h2>
        <p>{detail}</p>
      </div>
    </div>
  );
};

Achievement.propTypes = {
  imgUrl: propTypes.string.isRequired,
  heading: propTypes.string.isRequired,
  detail: propTypes.string.isRequired,
};

export default Achievement;
