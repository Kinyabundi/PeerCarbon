import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect, useMemo } from "react";
import { Toaster, toast } from "react-hot-toast";
import Head from "next/head";
import FormControl from "@/components/forms/FormControl";
import { IVehicle } from "@/types/Vehicle";
import { useAuthStore } from "@/hooks/useAuthStore";
import useDidHydrate from "@/hooks/useDidHydrate";
import useVehicleUtils from "@/hooks/useVehicleUtils";
import axios, { AxiosRequestConfig } from "axios";

const AddVehicle: NextPageWithLayout = () => {
  const [vehicleMakes, setvehicleMakes] = useState<string>("");
  const [makes, setMakes] = useState<string[]>([]);
  const [type, setType] = useState<string>("");
  const [models, setModels] = useState<string[]>([]);
  const [country, setCountry] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user: userData } = useAuthStore();
  const { didHydrate } = useDidHydrate();
  const { fetchVehicleMakesAPI, fetchVehicleModels, saveVehicle } =
    useVehicleUtils();

  const user = useMemo(() => {
    if (didHydrate) {
      return userData;
    }
    return null;
  }, []);

  const resetForm = () => {
    setvehicleMakes("");
    setType("");
    setCountry("");
    setRegistrationNumber("");
    setEngineCapacity("");
    setFuelType("");
    setDate("");
  };

  const getVehicleMakes = async () => {
    const carMakes = await fetchVehicleMakesAPI();

    console.log(carMakes)

    setMakes(carMakes);
  };

 

  const getCarModels = async () => {
    const carModels = await fetchVehicleModels(vehicleMakes);

    setModels(carModels as string[]);
  };

  useEffect(() => {
    getVehicleMakes();
  }, []);

  useEffect(() => {
    getCarModels();
  }, [vehicleMakes]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const vehicleDetails: IVehicle = {
        vehicleMakes,
        type,
        country,
        registrationNumber,
        engineCapacity,
        fuelType,
        date,
        userId: userData?.id as string,
      };

      await saveVehicle(vehicleDetails)
        .then((_) => {
          toast(`Vehicle saved`, {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          resetForm();
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to save vehicle details");
        });
    } catch (err) {
      console.error(err);
      toast.error("Failed to save vehicle details");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Add Vehicle</title>
      </Head>
      <div className="px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12">
        <form onSubmit={handleSubmit}>
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
                labelText="Vehicle Make"
                value={vehicleMakes}
                onChange={(e) => {
                  setvehicleMakes(e.target.value);
                  getCarModels();
                }}
                variant="select"
                placeholder="Select Vehicle Model"
                options={makes}
                required
              />
            </div>
            <div>
              <FormControl
                labelText="Vehicle Model"
                value={type}
                onChange={(e) => setType(e.target.value)}
                variant="select"
                placeholder="Select vehicle model"
                options={models}
                required
              />
            </div>
            <div>
              <FormControl
                labelText="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
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
