import React, { useEffect } from "react";
import abImg from "../../assets/Pictures/aboutus-img1.jpg";
import abImg2 from "../../assets/Pictures/aboutus-img2.jpg";
import abImg3 from "../../assets/Pictures/aboutus-img3.jpg";
import abImg4 from "../../assets/Pictures/aboutus-img4.jpg";
import abPd1 from "../../assets/Pictures/bread-img1.jpg";
import abPd2 from "../../assets/Pictures/pastry1.jpg";
import abPd3 from "../../assets/Pictures/coffee1.jpg";
import abPd4 from "../../assets/Pictures/cakes1.jpeg";
import abPd5 from "../../assets/Pictures/sandwich1.jpg";
import abPd6 from "../../assets/Pictures/blended1.jpg";
import abKc from "../../assets/Pictures/kittchen-ab-img.jpg";
export default function AboutUs() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const aboutusText =
    "With a team of young and dynamic employees. With a passion for learning, always aiming for perfection. We always put customer satisfaction as the center for smoothness in the service process. With 10 years of experience in the field of Internet business marketing. Ads Agency is confident in bringing the best quality of service to customers because that is the success and joy of our Ads Agency.";
  const storyText =
    "Since 1996, Magnolia Bakery has been one of America’s most-cherished bakeshops and set the standard for tried-and-true desserts and baked goods. Learn more about our journey from neighborhood gem to sweet success.";
  return (
    <div className=" text-[#fffd00]">
      <div className="p-0 md:m-0">
        <div className="title p-[15px] bg-[#50350a] ">
          <h1 className="uppercase text-[38px] pl-[20px] border-l border-[#fffd00] mb-3">
            about us
          </h1>
        </div>
        <div className="about p-[15px] bg-[#50350a] md:p-[25px]">
          <h4 className="text-[#fffd00] text-[32px]">In the Oven</h4>
          <p className="text-white text-justify mb-4  text-[18px]">
            {aboutusText}
          </p>

          <div className="img-containter flex flex-row items-center gap-3 mb-3">
            <div className="left flex flex-col gap-3">
              <img className="object-cover" src={abImg}></img>
              <img className="object-cover" src={abImg2}></img>
            </div>
            <div className="right">
              <img className="object-cover" src={abImg3}></img>
            </div>
          </div>
        </div>
        <div className="story p-[15px] pb-[15px] bg-[#50350a]">
          <h4 className="text-[#fffd00] text-left text-[32px]">Our Story</h4>
          <p className="text-white text-justify m-0  text-[18px]">
            {storyText}
          </p>
        </div>
        <div className="mb-3 bg-white">
          <img src={abImg4}></img>
        </div>
        <div className="product bg-white p-[15px]">
          <h4 className="text-black text-center text-[32px]">Our Product</h4>
          <p className="text-black mb-4 text-center  text-[18px]">
            {storyText}
          </p>
          <div className="w-full h-[300px] relative">
            <div className="w-[70px] h-[70px] absolute top-[10%] left-[5%]">
              <img
                src={abPd1}
                className="w-full h-full rounded-full object-cover"
              ></img>
            </div>
            <div className="w-[110px] h-[110px] absolute right-0">
              <img
                src={abPd2}
                className="w-full h-full rounded-full object-cover"
              ></img>
            </div>
            <div className="w-[150px] h-[150px] absolute right-[50%] top-[40%] md:w-[200px] md:h-[200px] md:right-[70%] ">
              <img
                src={abPd3}
                className="w-full h-full rounded-full object-cover"
              ></img>
            </div>
            <div className="w-[70px] h-[70px] absolute right-[43%] top-[15%] md:right-[50%] md:w-[120px] md:h-[120px] ">
              <img
                src={abPd4}
                className="w-full h-full rounded-full object-cover"
              ></img>
            </div>
            <div className="w-[100px] h-[100px] absolute bottom-0 right-0">
              <img
                src={abPd5}
                className="w-full h-full rounded-full object-cover"
              ></img>
            </div>
            <div className="w-[70px] h-[70px] absolute bottom-[40%] right-[25%] md:w-[170px] md:h-[170px] md:bottom-[10%]">
              <img
                src={abPd6}
                className="w-full h-full rounded-full object-cover"
              ></img>
            </div>
          </div>
        </div>
        <div className="product bg-white p-[15px]">
          <h4 className="text-black text-center text-[32px]">Our Kittchen</h4>
          <p className="text-black mb-4 text-justify text-[18px]">
            {storyText}
          </p>
        </div>
        <div>
          <img src={abKc}></img>
        </div>
      </div>
    </div>
  );
}
