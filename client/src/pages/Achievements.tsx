import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/achievement.css";
import { Arrow, Achievement, Header, Wrapper } from "../components";
import { achievements } from "../data/achievements";
import achievement from "../assets/img/achievements/achievements.png";
import prevArrow from "../assets/img/achievements/left-arrow.png";
import nextArrow from "../assets/img/achievements/right-arrow.png";

const carouselSettings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: false,
  lazyLoad: true,
  nextArrow: <Arrow imgUrl={nextArrow} className="next-arrow" />,
  prevArrow: <Arrow imgUrl={prevArrow} className="prev-arrow" />,
};

const Achievements = () => {
  return (
    <Wrapper classes="text-white">
      <Header
        headingOne="Milestones &"
        headingTwo="Achievements"
        imgUrl={achievement}
        alt="Achievement Logo"
        className=""
      />
      <Slider {...carouselSettings}>
        {achievements.map((feature, index) => {
          return (
            <Achievement
              key={index}
              imgUrl={feature.imgUrl}
              heading={feature.heading}
              detail={feature.detail}
            />
          );
        })}
      </Slider>
    </Wrapper>
  );
};

export default Achievements;
