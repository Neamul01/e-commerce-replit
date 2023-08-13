"use client";

import { Card, Rating } from "flowbite-react";
import { useRouter } from "next/navigation";

type item = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
};

export default function ECommerceCard({ item }: { item: item }) {
  const router = useRouter();
  const handleProductClick = () => {
    router.push(`/${item.id}`);
  };
  return (
    <Card
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={item.image}
      className="bg-white dark:bg-white p-4 border-0 shadow-xl rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      onClick={handleProductClick}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight">
          <p>{item.name}</p>
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
        </Rating>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          <p>{item.rating}</p>
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold">${item.price}</span>
        <a
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          href="#"
        >
          <p>Add to cart</p>
        </a>
      </div>
    </Card>
  );
}
