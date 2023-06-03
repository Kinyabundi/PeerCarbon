import MainLayout from '@/layouts/MainLayout';
import { NextPageWithLayout } from '@/types/Layout'
import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const AddVehicle: NextPageWithLayout = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12'>
      <form>

        <div>
          <h1 className="text-center mb-2 text-3xl text-gray-900 font-bold">Vehicle</h1>
          <p className='text-center text-gray-600 mb-6'>Create and manage fleet vehicles</p>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Vehicle Model:</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Honda" required />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-md font-medium text-gray-900 ">Type:</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Audi" required />
          </div>
          <div>
            <label htmlFor="company" className="block mb-2 text-md font-medium text-gray-900 ">Region:</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Germany" required />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-md font-medium text-gray-900">Registration Number:</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-md font-medium text-gray-900">Engine Capacity:</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1200CC" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-md font-medium text-gray-900">Fuel Type:</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Diesel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
          </div>
          <div>
            <label htmlFor="date" className="block mb-2 text-md font-medium text-gray-900 ">Date:</label>
            <DatePicker
              id="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              selected={null} // Provide the selected date value
              onChange={null} // Handle the date change event
              placeholderText="Select date"
              required
            />
          </div>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Vehicle</button>
      </form>

    </div>
  )
}

AddVehicle.getLayout = (page) => <MainLayout>{page} </MainLayout>;


export default AddVehicle
