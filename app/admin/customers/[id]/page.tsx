import CustomerDetails from "@/components/Admin/Customer/CustomerDetails";
import React from "react";

export default function page() {
  return (
    <>
      <CustomerDetails data={data} />
    </>
  );
}

const data = {
  username: "John Doe",
  firstName: "John",
  lastName: "Doe",
  email: "something@fsd.com",
  phone: "1234567890",
  address: "123, abc street",
  city: "New York",
  state: "New York",
};
