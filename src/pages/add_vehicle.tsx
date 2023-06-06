import MainLayout from '@/layouts/MainLayout';
import { NextPageWithLayout } from '@/types/Layout'
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';


const AddVehicle: NextPageWithLayout = () => {
  const [vehicleModel, setVehicleModel] = useState('');
  const [type, setType] = useState('');
  const [region, setRegion] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setVehicleModel('');
    setType('');
    setRegion('');
    setRegistrationNumber('');
    setEngineCapacity('');
    setFuelType('');
    setDate('');
  };

  useEffect(() => {
    fetchVehicleModels();
  }, []);

  const fetchVehicleModels = async () => {
    const options = {
      method: 'GET',
      url: 'https://carbonsutra1.p.rapidapi.com/vehicle_makes',
      headers: {
        'X-RapidAPI-Key': '538126673fmsh53c90aa3149fc0ap167699jsna536e221fdff',
        'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data.data[0].make);
      const makes = response.data.data.map((vehicle: any) => vehicle.make);
      console.log(makes);
      setVehicleModel(makes);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12'>
      <form >

        <div>
          <h1 className="text-center mb-2 text-3xl text-gray-900 font-bold">Vehicle</h1>
          <p className='text-center text-gray-600 mb-6'>Create and manage fleet vehicles</p>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Vehicle Model:</label>
            <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Honda" value={vehicleModel} onChange={(e) => setVehicleModel(e.target.value)} required >

            <option value="">Select Model</option>
              {Array.isArray(vehicleModel) && vehicleModel.length > 0 &&vehicleModel.map(({model}: any) => (
                <option  value={model}>
                  {model}
                </option>
              ))}
              </select>
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-md font-medium text-gray-900 ">Type:</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Audi" value={type} onChange={(e) => setType(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="Region" className="block mb-2 text-md font-medium text-gray-900 ">Region:</label>
            <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Germany" value={region} onChange={(e) => setRegion(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="RegistrationNumber" className="block mb-2 text-md font-medium text-gray-900">Registration Number:</label>
            <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="KCA 245B" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="Capacity" className="block mb-2 text-md font-medium text-gray-900">Engine Capacity:</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1200CC" value={engineCapacity} onChange={(e) => setEngineCapacity(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="FuelType" className="block mb-2 text-md font-medium text-gray-900">Fuel Type:</label>
            <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Diesel" value={fuelType} onChange={(e) => setFuelType(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="date" className="block mb-2 text-md font-medium text-gray-900 ">Date:</label>
            <input type="datetime-local" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={date} onChange={(e) => setDate(e.target.value)}   required />
          </div>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {isLoading ? 'Saving...' : 'Add Vehicle'}
        </button>
      </form>
      <Toaster />
    </div>
  )
}

AddVehicle.getLayout = (page) => <MainLayout>{page} </MainLayout>;


export default AddVehicle
