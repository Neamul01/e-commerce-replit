"use client";
import React from "react";

import CardTable from "@/components/Admin/Cards/CardTable";
import Admin from "@/components/Layouts/Admin";
import { AiFillEdit } from "react-icons/ai";
import Table from "@/components/Common/Table";

export default function Tables() {
  return (
    <>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className={"font-semibold text-lg text-secondary/80"}>
              Product list
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          {/* <CardTable color="dark" /> */}
          <Table columns={tableColumns} data={tableData} />
        </div>
      </div>
    </>
  );
}

const tableColumns = [
  {
    id: 1,
    label: "Product list",
    value: "productList",
  },
  {
    id: 2,
    label: "Product code",
    value: "productCode",
  },
  {
    id: 3,
    label: "Quantity",
    value: "quantity",
  },
  {
    id: 4,
    label: "Price",
    value: "price",
  },
  {
    id: 5,
    label: "Amount",
    value: "amount",
  },
  {
    id: 6,
    label: "Status",
    value: "status",
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
    productList: "Argon Design System",
    productCode: "ADS-1234567",
    quantity: "1",
    price: "$2,500 USD",
    amount: "$2,500 USD",
    status: "pending",
  },
  {
    id: 2,
    productList: "Angular Now UI Kit PRO",
    productCode: "ANK-1234567",
    quantity: "2",
    price: "$1,800 USD",
    amount: "$3,600 USD",
    status: "completed",
  },
];

type Column<T> = {
  id: string | number;
  label: string;
  value: keyof T; // Use keyof T to ensure 'value' refers to a valid property of T
  content?: (item: T) => JSX.Element;
};

type TableData<T> = {
  id: string | number;
  productList: string;
  productCode: string;
  quantity: string;
  price: string;
  amount: string;
  status: string;
};
