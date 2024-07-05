import React from "react";

export default function BuyNowButton(props) {
  const { bgColor } = props;
  return (
    <div
      className="p-2 w-full flex justify-center rounded-sm cursor-pointer"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div>
        <p className=" w-[10px] h-[10px] border-t-white border-t-[30px] border-r-transparent border-r-[30px] inset-x-[-0.50rem] inset-y-[-0.5rem] absolute t-0  "></p>
        <h4 className="relative m-0">Buy Now</h4>
      </div>
    </div>
  );
}
