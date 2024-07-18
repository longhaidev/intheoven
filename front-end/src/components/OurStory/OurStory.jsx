import React from "react";
import storyImg1 from "../../assets/Pictures/story1.jpg";
import storyImg2 from "../../assets/Pictures/story2.jpg";
import storyImg3 from "../../assets/Pictures/story3.jpg";
export default function OurStory(props) {
  const { storyImg } = props;
  return (
    <>
      <div className="pt-[50px] pb-[50px] pl-[15px] pr-[15px] md:pl-[25px] md:pr-[25px] md:flex md:flex-row md:gap-[100px] lg:mb-[20px] lg:pr-[40px] lg:pl-[40px]">
        <div className="md:w-[45%] lg:w-[60%]">
          <div className="text-center md:!text-left lg:!text-left">
            <h3 className="text-[32px] mb-6 md:text-4xl lg:text-4xl">
              In the Oven -{" "}
              <span className="text-xl lg:text-3xl">
                <i>Our story</i>
              </span>
            </h3>
          </div>
          <span className="text-[18px] md:text-[17px] lg:text-[18px]">
            <p>Trải nghiệm ẩm thực bánh mì tuyệt vời tại BreadTalk Vietnam!</p>
            <p>
              Hành trình 13 năm hoàn thiện và phát triển. Gần 30 cơ sở phục vụ.
            </p>
            <p>
              “Chúng tôi tự tin dẫn đầu với uy tín và chất lượng, Chúng tôi am
              hiểu ẩm thực bánh và khẩu vị người Việt, Chúng tôi không ngừng đổi
              mới và sáng tạo”.
            </p>
            <p>
              Trải nghiệm ẩm thực bánh tuyệt vời tại thương hiệu bánh mì đến từ
              Singapore ngay hôm nay!
            </p>
          </span>
        </div>
        <div className="hidden md:flex md:gap-7 md:justify-center md:items-center">
          <div className="md:flex md:flex-col md:gap-4 ">
            <img
              className="md:w-[150px] md:h-[100px] lg:w-[200px] lg:h-[150px] h-full w-full object-cover rounded-lg"
              src={storyImg3}
            ></img>
            <img
              className="md:w-[150px] md:h-[100px] lg:w-[200px] lg:h-[150px] h-full w-full object-cover rounded-lg"
              src={storyImg2}
            ></img>
          </div>
          <div>
            <img
              className="md:w-[250px] md:h-[400px] lg:w-[250px] lg:h-[500px] h-full w-full object-cover rounded-lg"
              src={storyImg1}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
