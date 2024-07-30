import React from "react";
import { useParams } from "react-router-dom";
export default function UserOrdered() {
  const params = useParams();
  const orderStatus = params.status;
  return <div>UserOrdered: {orderStatus}</div>;
}
