import Carousel from "react-multi-carousel";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const FoodSection = (props) => {
  const { data, title, subtitle, bgColor } = props;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const navigate = useNavigate();
  return (
    <div
      className="pt-[70px] pb-[70px]"
      style={{ backgroundColor: `${bgColor ? bgColor : "white"}` }}
    >
      <div className="flex flex-col text-center pl-2 pr-2 font-[Alegreya] items-center">
        <h3 className="text-[32px] mb-[20px] md:text-4xl lg:text-5xl">
          {title ? title : ""}
        </h3>
        <span className="text-[18px] text-center md:text-[17px] lg:text-[18px]">
          {subtitle ? subtitle : ""}
        </span>
        <button className=" text-[18px] mt-[15px] font-bold uppercase  pb-[5px] border-b-[1px] border-black w-fit ">
          View more
        </button>
      </div>
      <div className="mt-14 ">
        <Carousel
          swipeable={true}
          showDots={false}
          arrows={false}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={4000}
          autoPlay={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <div key={item.id}>
                  <NavLink
                    draggable={false}
                    className="flex flex-col gap-2 items-center text-left"
                  >
                    <div className="h-[300px] w-[250px]">
                      <img
                        onClick={() => navigate(`${item.link}`)}
                        draggable={false}
                        className="w-full h-full cursor-pointer rounded-md object-cover"
                        src={item.img}
                      ></img>
                    </div>
                    <span className="mt-[5px] font-[Alegreya] text-xl md:text-2xl lg:text-2xl capitalize">
                      {item.name}
                    </span>
                  </NavLink>
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};

export default FoodSection;
