import ApiCard from '@/components/cards/ApiCard';
import MainLayout from '@/layouts/MainLayout';
import { NextPageWithLayout } from '@/types/Layout'
import React from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { VscDebugStart } from 'react-icons/vsc';


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
        <button type="button" className="py-3 px-6 inline-flex justify-center items-center gap-2  mr-3 rounded-3xl border border-gray-200 font-medium bg-white text-gray-800 text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
          All
        </button>
        <button type="button" className="py-3 px-8 inline-flex justify-center items-center gap-3 mr-3 rounded-3xl border border-gray-200 font-medium bg-white text-gray-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
        <BiSearch  size={20}/>
          <span> Fuel Cards API</span>
        </button>
        <button type="button" className="py-3 px-8 inline-flex justify-center items-center gap-3 mr-3 rounded-3xl border border-gray-200 font-medium bg-white text-gray-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
          <AiOutlineShareAlt size={20}/>
        Telematics
        </button>
        <button type="button" className="py-3 px-8 inline-flex justify-center items-center gap-3 mr-3 rounded-3xl border border-gray-200 font-medium bg-white text-gray-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
          <VscDebugStart size = {20}/>
        Manual Data
        </button>
       
      </div>
      <div className='mt-8'>
        <ApiCard 
          image='/images/ola.jpeg'
          title='OLA Africa'
          description="Connect to OLA Africa's fuel cards accounts through our API endpoints for fueling transaction data"
        />
      </div>
    </div>
  )
}

//@ts-ignore
Integration.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Integration
