import Image from "next/image";
import React from "react";

export default function SocialLogins({
  variant,
}: {
  variant: "signin" | "register";
}) {
  return (
    <div className="rounded-t mb-0 px-6 py-6">
      <div className="text-center mb-3">
        <h6 className="text-blueGray-500 text-sm font-bold">
          Sign {variant === "signin" ? "in" : "up"} with
        </h6>
      </div>
      <div className="btn-wrapper text-center">
        <button
          className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
          type="button"
          disabled
        >
          <div className="w-5 h-5 mr-1 relative">
            <Image src="/img/github.svg" fill alt="..." />
          </div>
          Github
        </button>
        <button
          className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
          type="button"
          disabled
        >
          <div className="w-5 h-5 mr-1 relative">
            <Image src="/img/google.svg" fill alt="..." />
          </div>
          Google
        </button>
      </div>
      <hr className="mt-6 border-b-1 border-blueGray-300" />
    </div>
  );
}
