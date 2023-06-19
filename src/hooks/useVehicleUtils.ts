import { vehicleCollection } from "@/helpers/firebaseDBHelpers";
import { IVehicle } from "@/types/Vehicle";
import axios, { AxiosRequestConfig } from "axios";
import { FirebaseError } from "firebase/app";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { useCallback } from "react";

const useVehicleUtils = () => {
  const saveVehicle = useCallback(async (vehicleDetails: IVehicle) => {
    try {
      const docRef = await addDoc(vehicleCollection, vehicleDetails);
      return docRef.id;
    } catch (err) {
      console.error("Error saving vehicle:", err);
      throw err as FirebaseError;
    }
  }, []);

  const fetchVehicleMakesAPI = async () => {
    const options = {
      method: "GET",
      url: "https://carbonsutra1.p.rapidapi.com/vehicle_makes",
      headers: {
        "X-RapidAPI-Key": "72de31fa46msh46063e45e489db7p1f35b0jsna510d69c84f1",
        "X-RapidAPI-Host": "carbonsutra1.p.rapidapi.com",
      },
    } as AxiosRequestConfig;
    try {
      const response = await axios.request(options);
      console.log(response.data.data);

      if (response.status === 200) {
       return response.data.data.map((make: any) => make.make) as string[];
      }

    } catch (error) {
      console.error(error);
      return [] as string[];
    }
  };

  const fetchVehicleModels = async (vehicleMake: string) => {
    if (!vehicleMake) {
      return [] as string[];
    }

    const url = `https://carbonsutra1.p.rapidapi.com/vehicle_makes/${vehicleMake}/vehicle_models`;

    const options = {
      method: "GET",
      url: url,
      headers: {
        "X-RapidAPI-Key": "72de31fa46msh46063e45e489db7p1f35b0jsna510d69c84f1",
        "X-RapidAPI-Host": "carbonsutra1.p.rapidapi.com",
      },
    } as AxiosRequestConfig;
    try {
      const response = await axios.request(options);
      console.log(response.data.data);

      if (response.status === 200) {
        return response.data.data.map((model: any) => model.model) as string[];
      }
    } catch (error) {
      console.error(error);
      return [] as string[];
    }
  };

  const getMyVehicles = useCallback(async (userId: string) => {
    const q = query(vehicleCollection, where("userId", "==", userId));

    const querySnapshot = await getDocs(q);

    const vehicles = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      } as IVehicle;
    });

    return vehicles;
  }, []);

  return {
    saveVehicle,
    fetchVehicleModels,
    fetchVehicleMakesAPI,
    getMyVehicles,
  };
};

export default useVehicleUtils;
