import React from "react";
import SingleProduct from "./SingleProduct";

export default function ProductList() {
  return (
    <div className="grid md:grid-cols-12 gap-6">
      {products.map((item, index) => (
        <div className="col-span-3" key={item.id + index}>
          <SingleProduct item={item} />
        </div>
      ))}
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    rating: 5,
    image: "./products/apple-watch.png",
  },
  {
    id: 2,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    rating: 5,
    image: "./products/apple-watch.png",
  },
  {
    id: 3,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    rating: 5,
    image: "./products/apple-watch.png",
  },
  {
    id: 4,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    rating: 5,
    image: "./products/apple-watch.png",
  },
  {
    id: 5,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    rating: 5,
    image: "./products/apple-watch.png",
  },
];
