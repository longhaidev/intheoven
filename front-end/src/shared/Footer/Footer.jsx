import React from "react";
import Logo from "../../assets/Pictures/Logo.png";
import { NavLink } from "react-router-dom";
export default function Footer() {
  const footerContent = [
    {
      id: 1,
      title: "bakery",
      items: [
        {
          id: 1,
          name: "bread",
          direction: "/",
        },
        {
          id: 2,
          name: "cake",
          direction: "/",
        },
        {
          id: 3,
          name: "pastry",
          direction: "/",
        },
      ],
    },
    {
      id: 2,
      title: "beverages",
      items: [
        {
          id: 1,
          name: "coffee",
          direction: "/",
        },
        {
          id: 2,
          name: "tea & more",
          direction: "/",
        },
      ],
    },
    {
      id: 3,
      title: "company",
      items: [
        {
          id: 1,
          name: "home",
          direction: "/",
        },
        {
          id: 2,
          name: "our story",
          direction: "/",
        },
        {
          id: 3,
          name: "contact us",
          direction: "/",
        },
        {
          id: 4,
          name: "Privacy Policy",
          direction: "/",
        },
      ],
    },
  ];
  const callHover = () => {
    console.log("Check >>> hover");
  };
  return (
    <div className="h-full" style={{ backgroundColor: "rgb(241, 218, 178)" }}>
      <div className="top-8 left-8 flex flex-col  gap-[10px] pt-3 pb-3 pl-5 pr-5">
        <div className="max-w-[300px] h-[150px] ml-auto mr-auto md:ml-0 md:mr-0">
          <img className="w-full h-full object-scale-down" src={Logo}></img>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-[150px] lg:gap-[350px] ">
          {footerContent &&
            footerContent.length > 0 &&
            footerContent.map((section) => {
              return (
                <div key={section.id} className="flex flex-col mb-3">
                  <h4 className="font-semibold uppercase mb-2 text-1xl">
                    {section.title}
                  </h4>
                  {section.items &&
                    section.items.length > 0 &&
                    section.items.map((item) => {
                      return (
                        <NavLink
                          key={item.id}
                          to={item.direction}
                          className="text-[20px] mb-1 no-underline text-black capitalize cursor-pointer"
                          onMouseEnter={() => callHover()}
                        >
                          {item.name}
                        </NavLink>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
