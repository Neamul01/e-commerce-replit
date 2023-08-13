"use client";
import CustomerDetails from "@/components/Admin/CustomerDetails";
import Table from "@/components/Common/Table";
import { Button } from "flowbite-react";
import React from "react";
import { AiFillEdit } from "react-icons/ai";

export default function page() {
  return (
    <div className=" bg-white">
      <div className="rounded-t mb-0 px-4 py-3 border-0 flex justify-between">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className={"font-semibold text-lg text-secondary/80"}>
              Customer List
            </h3>
          </div>
        </div>
        <Button>Add a Customer</Button>
      </div>
      <Table columns={tableColumns} data={tableData} />
      {/* <div className="w-full lg:w-8/12 px-4">
        <CustomerDetails />
      </div>
      <div className="w-full lg:w-4/12 px-4">
        <CardProfile />
      </div> */}
    </div>
  );
}

const tableColumns = [
  {
    id: 1,
    label: "Customer name",
    value: "customerName",
  },
  {
    id: 2,
    label: "Email",
    value: "email",
  },
  {
    id: 3,
    label: "Phone",
    value: "phone",
  },
  {
    id: 4,
    label: "Address",
    value: "address",
  },
  {
    id: 5,
    label: "City",
    value: "city",
  },
  {
    id: 6,
    label: "State",
    value: "state",
  },
  {
    id: 7,
    label: "Action",
    content: (item: any) => {
      return (
        <div>
          <AiFillEdit onClick={() => console.log(item)} />
        </div>
      );
    },
  },
];

const tableData = [
  {
    id: 1,
    customerName: "John Doe",
    email: "something@fsd.com",
    phone: "1234567890",
    address: "123, abc street",
    city: "New York",
    state: "New York",
    link: "/admin/customers/1",
  },
  {
    id: 2,
    customerName: "John Doe",
    email: "new@ga.com",
    phone: "1234567890",
    address: "123, abc street",
    city: "New York",
    state: "New York",
    link: "/admin/customers/2",
  },
  {
    id: 3,
    customerName: "John Doe",
    email: "email@sdf.com",
    phone: "1234567890",
    address: "123, abc street",
    city: "New York",
    state: "New York",
    link: "/admin/customers/3",
  },
];
