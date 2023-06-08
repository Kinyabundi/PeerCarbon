import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios, { AxiosRequestConfig } from "axios";
import Head from "next/head";
import FormControl from "@/components/forms/FormControl";

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
              <FormControl
                labelText="Vehicle Model"
                value={vehicleMakes}
                onChange={(e) => {
                  setvehicleMakes(e.target.value);
                  fetchvehicleModels();
                }}
                variant="input"
                placeholder="Honda"
                required
              />
            </div>
            <div>
              <FormControl
                labelText="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                variant="input"
                placeholder="A3"
                required
              />
            </div>
            <div>
              <FormControl
                labelText="Region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                variant="input"
                placeholder="Germany"
                required
              />
            </div>
            <div>
              <FormControl
                labelText="Registration Number"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                variant="input"
                placeholder="KCA 245B"
                required
              />
            </div>
            <div>
              <FormControl
                labelText="Engine Capacity"
                value={engineCapacity}
                onChange={(e) => setEngineCapacity(e.target.value)}
                variant="input"
                placeholder="1200CC"
                required
              />
            </div>
            <div>
              <FormControl
                labelText="Fuel Type"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                variant="input"
                placeholder="Diesel"
                required
              />
            </div>
            <div>
              <FormControl
                labelText="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                variant="input"
                inputType="datetime-local"
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
