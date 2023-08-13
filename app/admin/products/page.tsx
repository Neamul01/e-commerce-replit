"use client";
import React, { useState } from "react";

import { AiFillEdit } from "react-icons/ai";
import Table from "@/components/Common/Table";
import { Button } from "flowbite-react";
import AddProductModal from "@/components/Product/AddProductModal";

export default function Tables() {
  const [openModal, setOpenModal] = useState<string | undefined>();

  const addData = (data: any) => {
    console.log("addData", data);
    setOpenModal(undefined);
    // window.location.reload();
    tableData.push({
      productList: data.name,
      productCode: data.code,
      quantity: data.quantity,
      price: data.price,
      status: data.status,
      id: tableData.length + 1,
      amount: "$2,500 USD",
      link: `/admin/products/${tableData.length + 1}`,
    });
  };

  const handleOpenModal = () => {
    setOpenModal("add-product");
  };
  return (
    <>
      <div className="rounded-t mb-0 px-4 py-3 border-0 flex justify-between">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className={"font-semibold text-lg text-secondary/80"}>
              Product list
            </h3>
          </div>
        </div>
        <Button onClick={handleOpenModal}>Add a Product</Button>
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
      <AddProductModal
        data={data}
        setOpenModal={setOpenModal}
        openModal={openModal}
        addData={addData}
      />
    </>
  );
}

const data = {
  name: "",
  code: null,
  quantity: null,
  price: null,
  status: "",
};

const tableColumns: Column[] = [
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

const tableData: TableData[] = [
  {
    id: 1,
    productList: "Argon Design System",
    productCode: "ADS-1234567",
    quantity: "1",
    price: "$2,500 USD",
    amount: "$2,500 USD",
    status: "pending",
    link: "/admin/products/1",
  },
  {
    id: 2,
    productList: "Angular Now UI Kit PRO",
    productCode: "ANK-1234567",
    quantity: "2",
    price: "$1,800 USD",
    amount: "$3,600 USD",
    status: "completed",
    link: "/admin/products/2",
  },
];

type Column = {
  id: string | number;
  label: string;
  value?: string;
  content?: (item: any) => JSX.Element;
};

type TableData = {
  id: number | string;
  productList: string;
  productCode: string;
  quantity: string;
  price: string;
  amount: string;
  status: string;
  link: string;
};
