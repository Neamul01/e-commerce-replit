import CardProfile from "@/components/Admin/CardProfile";
import CardSettings from "@/components/Admin/CustomerDetails";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-wrap bg-white">
      <div className="w-full lg:w-8/12 px-4">
        <CardSettings />
      </div>
      <div className="w-full lg:w-4/12 px-4">
        <CardProfile />
      </div>
    </div>
  );
}
