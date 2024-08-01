import React, { useState } from "react";
import DefaultButton from "../../../components/Button/DefaultButton";
import UserAddressCard from "../../../components/UserAddressCard/UserAddressCard";
import ModalAddAddress from "../../../components/ModalAddAddress/ModalAddAddress";

export default function UserAddress() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className="lg:w-[60%] bg-white shadow-md rounded-xl p-[14px]">
      <div className="flex flex-row justify-between items-center">
        <h3>My Address</h3>
        <span onClick={handleShowModal}>
          <DefaultButton
            content="+"
            textColor="white"
            styles={{ width: "fit-content", marginBottom: "8px" }}
          ></DefaultButton>
        </span>
      </div>
      <hr></hr>
      <div>
        <UserAddressCard isDefault={false}></UserAddressCard>
        <UserAddressCard isDefault={true}></UserAddressCard>
        <UserAddressCard isDefault={false}></UserAddressCard>
      </div>
      <ModalAddAddress
        show={showModal}
        setShow={setShowModal}
      ></ModalAddAddress>
    </div>
  );
}
