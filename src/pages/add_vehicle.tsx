import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios, { AxiosRequestConfig } from "axios";
import Head from "next/head";

const AddVehicle: NextPageWithLayout = () => {
  const [vehicleMakes, setvehicleMakes] = useState<string>("");
  const [makes, setMakes] = useState<string[]>([]);
  const [type, setType] = useState<string>("");
  const [models, setModels] = useState<string[]>([]);
  const [region, setRegion] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setvehicleMakes("");
    setType("");
    setRegion("");
    setRegistrationNumber("");
    setEngineCapacity("");
    setFuelType("");
    setDate("");
  };

  const fetchVehicleMakes = async () => {
    const options = {
      method: "GET",
      url: "https://carbonsutra1.p.rapidapi.com/vehicle_makes",
      headers: {
        "X-RapidAPI-Key": "538126673fmsh53c90aa3149fc0ap167699jsna536e221fdff",
        "X-RapidAPI-Host": "carbonsutra1.p.rapidapi.com",
      },
    } as AxiosRequestConfig;
    try {
      const response = await axios.request(options);

      if (response.status === 200) {
        setMakes(response.data.data.map((make: any) => make.make));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVehicleMakes();
  }, []);

  const fetchvehicleModels = async () => {
    if (!vehicleMakes) {
      console.log("no make");
      setModels([]);
      return;
    }

    console.log(vehicleMakes);
    const url = `https://carbonsutra1.p.rapidapi.com/vehicle_makes/${vehicleMakes}/vehicle_models`;

    const options = {
      method: "GET",
      url: url,
      headers: {
        "X-RapidAPI-Key": "538126673fmsh53c90aa3149fc0ap167699jsna536e221fdff",
        "X-RapidAPI-Host": "carbonsutra1.p.rapidapi.com",
      },
    } as AxiosRequestConfig;
    try {
      const response = await axios.request(options);
      console.log(response.data.data);

      if (response.status === 200) {
        setModels(response.data.data.map((model: any) => model.model));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchvehicleModels();
  }, [vehicleMakes]);

  return (
    <>
      <Head>
        <title>Add Vehicle</title>
      </Head>
      <div className="px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12">
        <form>
          <div>
            <h1 className="text-center mb-2 text-3xl text-gray-900 font-bold">
              Vehicle
            </h1>
            <p className="text-center text-gray-600 mb-6">
              Create and manage fleet vehicles
            </p>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-md font-medium text-gray-900 "
              >
                Vehicle Model:
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Honda"
                value={vehicleMakes}
                onChange={(e) => {
                  setvehicleMakes(e.target.value);
                  fetchvehicleModels();
                }}
                required
              >
                <option value="">Select Model</option>
                {makes.map((make, i) => (
                  <option key={i} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-md font-medium text-gray-900 "
              >
                Type:
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="A3"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="">Select Type</option>
                {models.map((model, i) => (
                  <option key={i} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="Region"
                className="block mb-2 text-md font-medium text-gray-900 "
              >
                Region:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Germany"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="RegistrationNumber"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Registration Number:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="KCA 245B"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="Capacity"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Engine Capacity:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="1200CC"
                value={engineCapacity}
                onChange={(e) => setEngineCapacity(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="FuelType"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Fuel Type:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Diesel"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block mb-2 text-md font-medium text-gray-900 "
              >
                Date:
              </label>
              <input
                type="datetime-local"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? "Saving..." : "Add Vehicle"}
          </button>
        </form>
        <Toaster />
      </div>
    </>
  );
};

AddVehicle.getLayout = (page) => <MainLayout>{page} </MainLayout>;

export default AddVehicle;
