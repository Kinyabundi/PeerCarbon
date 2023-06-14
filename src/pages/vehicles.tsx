import React, { useEffect, useState } from "react";
import { IVehicle } from "@/types/Vehicle";
import useUserUtils from "@/hooks/useUserUtils";
import { firebaseAuth } from "@/lib/firebase";
import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/MainLayout";



const VehicleTable: NextPageWithLayout = () => {

    const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const { getUserVehicles } = useUserUtils();

  
  useEffect(() => {
    const fetchUserVehicles = async () => {
      // Get the currently logged-in user's ID
      const userId = firebaseAuth.currentUser?.uid;

      if (userId) {
        try {
          const userVehicles = await getUserVehicles(userId);
          setVehicles(userVehicles);
          console.log(vehicles);

        } catch (error) {
          console.error("Error fetching user vehicles:", error);
        }
      }
    };

    fetchUserVehicles();
  }, [getUserVehicles]);


  return (
   <div className="px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Vehicle Make
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Vehicle Model
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Country
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Registration Number
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Engine Capacity
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Fuel Type
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {vehicles.map((vehicle) => (
          <tr key={vehicle.registrationNumber}>
            <td className="px-6 py-4 whitespace-nowrap">{vehicle.vehicleMakes}</td>
            <td className="px-6 py-4 whitespace-nowrap">{vehicle.type}</td>
            <td className="px-6 py-4 whitespace-nowrap">{vehicle.country}</td>
            <td className="px-6 py-4 whitespace-nowrap">{vehicle.registrationNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap">{vehicle.engineCapacity}</td>
            <td className="px-6 py-4 whitespace-nowrap">{vehicle.fuelType}</td>
            <td className="px-6 py-4 whitespace-nowrap">{vehicle.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

VehicleTable.getLayout = (page) => <MainLayout>{page} </MainLayout>;

export default VehicleTable;
