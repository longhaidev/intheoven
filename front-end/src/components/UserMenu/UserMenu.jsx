import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// styles
import "./UserMenu.scss";
// UI
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Tooltip,
  Typography,
  MenuItem,
  Menu,
  Settings,
  PersonAdd,
  Divider,
} from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { CiMenuBurger } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { PiBreadBold } from "react-icons/pi";

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    window.scroll(0, 0);
    setAnchorEl(null);
  };
  const accountOptions = [
    {
      id: 1,
      name: "Profile",
      link: "/user/account/profile",
    },
    {
      id: 2,
      name: "Favorite",
      link: "/user/account/favorite",
    },
    {
      id: 3,
      name: "Address",
      link: "/user/account/address",
    },
    {
      id: 4,
      name: "Change password",
      link: "/user/account/change-password",
    },
  ];
  const ordersOptions = [
    {
      id: 1,
      name: "All",
      link: "/user/order/all",
    },
    {
      id: 2,
      name: "Pending",
      link: "/user/order/pending",
    },
    {
      id: 3,
      name: "Delivering",
      link: "/user/order/delivering",
    },
    {
      id: 4,
      name: "Delivered",
      link: "/user/order/delivered",
    },
    {
      id: 5,
      name: "Completed",
      link: "/user/order/completed",
    },
    {
      id: 6,
      name: "Canceled",
      link: "/user/order/canceled",
    },
  ];
  return (
    <>
      <div className="toggle-user-menu !text-[16px]">
        <Avatar
          sx={{
            borderRadius: "none",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          <CiMenuBurger onClick={handleClick}></CiMenuBurger>
        </Avatar>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Accordion
          sx={{
            border: "none",
            boxShadow: "none",
            marginBottom: "0px!important",
          }}
          defaultExpanded
        >
          <AccordionSummary>
            <MenuItem className="w-full flex flex-row gap-2 justify-center items-center">
              <FaRegUserCircle></FaRegUserCircle>
              <p className="m-0 text-[18px]">Account</p>
            </MenuItem>
          </AccordionSummary>
          <AccordionDetails>
            {accountOptions &&
              accountOptions.map((option) => {
                return (
                  <NavLink
                    key={option.id}
                    to={option.link}
                    onClick={handleClose}
                  >
                    <p className="pl-[25px] pr-[14px] pb-[5px] m-0 hover:!text-[#ff6d00]">
                      {option.name}
                    </p>
                  </NavLink>
                );
              })}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ border: "none", boxShadow: "none", marginTop: "0px!important" }}
        >
          <AccordionSummary>
            <MenuItem className="w-full flex flex-row gap-2 justify-center items-center">
              <PiBreadBold></PiBreadBold>
              <p className="m-0 text-[18px]">My Orders</p>
            </MenuItem>
          </AccordionSummary>
          <AccordionDetails>
            {ordersOptions &&
              ordersOptions.map((option) => {
                return (
                  <NavLink
                    key={option.id}
                    to={option.link}
                    onClick={handleClose}
                  >
                    <p className="pl-[25px] pr-[14px] pb-[5px] m-0 hover:!text-[#ff6d00]">
                      {option.name}
                    </p>
                  </NavLink>
                );
              })}
          </AccordionDetails>
        </Accordion>
      </Menu>
    </>
  );
}
