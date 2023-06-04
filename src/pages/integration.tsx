import MainLayout from '@/layouts/MainLayout';
import { NextPageWithLayout } from '@/types/Layout'
import React from 'react'

const Integration: NextPageWithLayout = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12">
      <div>
        <h1 className="text-xl text-gray-900 font-bold">Integrations</h1>
        <p className="text-gray-600 mb-4">
          Add and manage Peercarbon API connections to your fuel retailer's Fuel Card and Telematics for accurate emissions input data.
        </p>
      </div>
      <div className='mt-6'>
        <button type="button" className="py-3 px-6 inline-flex justify-center items-center gap-2  mr-3 rounded-3xl border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
          All
        </button>
        <button type="button" className="py-3 px-8 inline-flex justify-center items-center gap-3 mr-3 rounded-3xl border border-transparent font-semibold bg-white text-gray-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
        Fuel Cards API
        </button>
        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-3 mr-3 rounded-2xl border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:p-5">
          Large
        </button>
      </div>
    </div>
  )
}

Integration.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Integration
