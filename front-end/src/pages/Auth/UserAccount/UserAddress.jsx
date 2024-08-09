import React, { useState } from "react";
import DefaultButton from "components/Button/DefaultButton";
import UserAddressCard from "components/User/UserAddressCard";
import ModalAddAddress from "components/ModalBox/ModalAddAddress";
import CustomButton from "components/Button/CustomButton";
//
import { v4 as uuidv4 } from "uuid";
export default function UserAddress() {
  const [showModal, setShowModal] = useState(false);
  // const [userAddressList, setUserAddressList] = useState([]);
  // dummy address data
  const userAddressList = [
    {
      id: uuidv4(),
      username: "name1",
      phone: "09090909090909",
      address: "123 abc bakery hcm citrker",
      city: "HCM",
      isDefault: true,
    },
    {
      id: uuidv4(),
      username: "name1",
      phone: "09090909090909",
      address: "123 abc bakery hcm citrker",
      city: "HCM",
      isDefault: false,
    },
    {
      id: uuidv4(),
      username: "name1",
      phone: "09090909090909",
      address: "123 abc bakery hcm citrker",
      city: "HCM",
      isDefault: false,
    },
    {
      id: uuidv4(),
      username: "name1",
      phone: "09090909090909",
      address: "123 abc bakery hcm citrker",
      city: "HCM",
      isDefault: false,
    },
    {
      id: uuidv4(),
      username: "name1",
      phone: "09090909090909",
      address: "123 abc bakery hcm citrker",
      city: "HCM",
      isDefault: false,
    },
    {
      id: uuidv4(),
      username: "name1",
      phone: "09090909090909",
      address: "123 abc bakery hcm citrker",
      city: "HCM",
      isDefault: false,
    },
    {
      id: uuidv4(),
      username: "name1",
      phone: "09090909090909",
      address: "123 abc bakery hcm citrker",
      city: "HCM",
      isDefault: false,
    },
    {
      id: uuidv4(),
      username: "name1",
      phone: "09090909090909",
      address: "123 abc bakery hcm citrker",
      city: "HCM",
      isDefault: false,
    },
    {
      id: uuidv4(),
      username: "name1",
      phone: "09090909090909",
      address: "123 abc bakery hcm citrker",
      city: "HCM",
      isDefault: false,
    },
    {
      id: uuidv4(),
      username: "name1",
      phone: "09090909090909",
      address: "123 abc bakery hcm citrker",
      city: "HCM",
      isDefault: false,
    },
    {
      id: uuidv4(),
      username: "name1",
      phone: "09090909090909",
      address: "123 abc bakery hcm citrker",
      city: "HCM",
      isDefault: false,
    },
  ];
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className="border border-gray-300 rounded-md w-full p-[14px]">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-section-sub-heading">My Address</h3>
        <span onClick={handleShowModal}>
          <CustomButton
            type="primary"
            content="+ Add more address"
          ></CustomButton>
        </span>
      </div>
      <hr></hr>
      <div className="md:h-[410px] md:overflow-scroll">
        {userAddressList && userAddressList.length > 0 ? (
          userAddressList.map((address) => {
            return <UserAddressCard addressDetail={address}></UserAddressCard>;
          })
        ) : (
          <div>
            <p className="font-text-primary">
              No address founded.{" "}
              <a
                className="!underline italic cursor-pointer"
                onClick={handleShowModal}
              >
                Create one
              </a>
            </p>
          </div>
        )}
      </div>
      <ModalAddAddress
        show={showModal}
        setShow={setShowModal}
      ></ModalAddAddress>
    </div>
  );
}
