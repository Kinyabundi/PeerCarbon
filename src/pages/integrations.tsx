import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";
import React from "react";
import { LuSearch } from "react-icons/lu";

const Integrations: NextPageWithLayout = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12 pr-3">
      <h2 className="text-2xl font-semibold">Integrations</h2>
      <h3 className="mt-3 text-lg text-gray-500">
        Add and manage Peercarbon API connections to your fuel retailer's Fuel
        Card and Telematics for accurate emissions input data.
      </h3>

      <div className="mt-8">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            className="py-3 px-6 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          >
            All
          </button>
          <button
            type="button"
            className="py-3 px-6 inline-flex justify-center items-center gap-2 rounded-full border shadow-sm font-semibold bg-white text-gray-900 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-xs border-gray-200"
          >
            <LuSearch className="w-4 h-4" />
            Fuel API
          </button>
        </div>
      </div>
    </div>
  );
};

Integrations.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Integrations;
