import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="container mx-auto py-8 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left section - Product Image */}
        <div className="mb-4 md:mb-0 h-[400px] w-[640px] relative">
          <Image
            src="https://e-commerce-luxify.vercel.app/_next/image?url=https%3A%2F%2Fswiperjs.com%2Fdemos%2Fimages%2Fnature-1.jpg&w=1920&q=75"
            alt="Product"
            fill
            className="w-full h-auto"
          />
        </div>

        {/* Right section - Product Description */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">Product Name</h1>
          <p className="text-gray-600 mb-4">Product Description...</p>

          {/* Product Tabs */}
          <div className="border-b border-gray-300 mb-4">
            <div className="flex">
              <button className="py-2 px-4 font-semibold border-b-2 border-transparent hover:border-blue-500 focus:outline-none">
                Description
              </button>
              <button className="py-2 px-4 font-semibold border-b-2 border-transparent hover:border-blue-500 focus:outline-none">
                Specifications
              </button>
              <button className="py-2 px-4 font-semibold border-b-2 border-transparent hover:border-blue-500 focus:outline-none">
                Reviews
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {/* Description Tab */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600">Detailed product description...</p>
            </div>

            {/* Specifications Tab */}
            <div className="hidden">
              <h2 className="text-lg font-semibold mb-2">Specifications</h2>
              {/* Add specifications content here */}
            </div>

            {/* Reviews Tab */}
            <div className="hidden">
              <h2 className="text-lg font-semibold mb-2">Reviews</h2>
              {/* Add reviews content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
