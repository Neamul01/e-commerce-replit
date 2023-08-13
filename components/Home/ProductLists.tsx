import React, { useEffect } from "react";
import SingleProduct from "./SingleProduct";
import useAxios from "@/hooks/useAxios";

export default function ProductList() {
  const [productData, setProductData] = React.useState<ProductData[]>();

  useEffect(() => {
    try {
      useAxios.get("/products.json").then((res) => {
        setProductData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="grid md:grid-cols-12 gap-6">
      {productData?.map((item, index) => (
        <div className="col-span-3" key={item.id + index}>
          <SingleProduct item={item} />
        </div>
      ))}
    </div>
  );
}

export type ProductData = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
};
