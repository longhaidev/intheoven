import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../assets/Pictures/Banner1.jpg";
import videoBaking from "../../assets/videos/baking.mp4";
import "./Banner.scss";
const Banner = () => {
  return (
    <>
      <div className="relative z-[-1]">
        <p className="overlay-banner"></p>
        <p className="font-[Alegreya] text-3xl text-center absolute text-white top-[51%] left-[17%] sm:left-[32%] md:left-[36%] md:text-5xl lg:left-[40%] lg:text-6xl">
          In The Oven
          <p className="text-xl text-center uppercase mt-3 b">
            Freshly baked, everyday
          </p>
        </p>
        <video
          className="w-full h-[300px] md:h-[350px] lg:h-[450px] object-cover"
          loop
          muted
          autoPlay="autoplay"
        >
          <source src={videoBaking} type="video/mp4"></source>
        </video>
      </div>
    </>
  );
};
export default Banner;
