import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
export default function NewsLetter() {
  return (
    <div className="flex flex-col gap-4 items-center bg-[#f3f2ec] border-2 pt-[30px] pb-[30px] pl-[10px] pr-[10px]  h-[350px] justify-center">
      <div className="text-4xl uppercase md:text-5xl">jon our new setter</div>
      <div className="md:w-[60%]">
        <p className="text-[16px] pl-[30px] pr-[30px] md:text-[20px]">
          Get the freshest Magnolia Bakery updates and offers right to your
          inbox! Plus, enjoy 10% off on your birthday when you share the date
          with us!
        </p>
      </div>
      <div className="w-[60%] relative md:w-[50%] lg:w-[40%]">
        <input
          className="border-[#00211a] border-2 rounded-lg w-full p-[5px] "
          placeholder="Enter your Email here..."
        ></input>
        <MdOutlineArrowRightAlt
          size={20}
          className="absolute right-[10px] top-[26%]"
        />
      </div>
    </div>
  );
}
