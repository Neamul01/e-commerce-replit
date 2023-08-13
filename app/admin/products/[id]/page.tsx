"use client";
import { Carousel, Rating, Tabs } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default function page() {
  return (
    <div className="container mx-auto py-8 min-h-screen flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left section - Product Image */}
        <div className="mb-4 md:mb-0 h-[400px] w-[640px] relative">
          {/* <Image
            src="https://e-commerce-luxify.vercel.app/_next/image?url=https%3A%2F%2Fswiperjs.com%2Fdemos%2Fimages%2Fnature-1.jpg&w=1920&q=75"
            alt="Product"
            fill
            className="w-full h-auto"
          /> */}
          <Carousel>
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            />
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            />
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            />
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            />
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            />
          </Carousel>
        </div>

        {/* Right section - Product Description */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold mb-2">Fashionable Watch</h1>
          <div className="text-3xl font-bold">$46</div>
          <div className="flex gap-4">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <span className="text-gray-600 ml-2">(3.5)</span>
            </Rating>
            <p className="">(1)Reviews</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="">
                Available Items: <span className="font-bold">34</span>{" "}
              </p>
              <p className="">
                Sold: <span className="font-bold">22</span>{" "}
              </p>
            </div>
            <div>
              <p className="">
                Comission given: <span className="font-bold">$2</span>{" "}
              </p>
              <p className="">
                Ordered: <span className="font-bold">34</span>{" "}
              </p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus
            adipiscing.
          </p>
        </div>
      </div>
      <Tabs.Group aria-label="Default tabs" style="default">
        <Tabs.Item active icon={HiUserCircle} title="Description">
          <p>
            This is
            <span className="font-medium text-gray-800">
              Profile tab&apos;s associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </Tabs.Item>
        <Tabs.Item icon={MdDashboard} title="Information">
          <p>
            This is
            <span className="font-medium text-gray-800">
              Dashboard tab&apos;s associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </Tabs.Item>
        <Tabs.Item icon={HiAdjustments} title="Reviews">
          <p>
            This is
            <span className="font-medium text-gray-800">
              Settings tab&apos;s associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}
