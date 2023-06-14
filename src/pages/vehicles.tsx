import { useEffect, useMemo, useState } from "react";
import { IVehicle } from "@/types/Vehicle";
import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/MainLayout";
import useVehicleUtils from "@/hooks/useVehicleUtils";
import { useAuthStore } from "@/hooks/useAuthStore";
import useDidHydrate from "@/hooks/useDidHydrate";

const VehicleTable: NextPageWithLayout = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const { didHydrate } = useDidHydrate();
  const { getMyVehicles } = useVehicleUtils();
  const { user: userData } = useAuthStore();

  const user = useMemo(() => {
    if (!didHydrate) return null;
    return userData;
  }, [didHydrate, userData]);

  const myVehicles = async () => {
    const cars = await getMyVehicles(user?.id as string);

    setVehicles(cars);
  };

  useEffect(() => {
    myVehicles();
  }, [user]);

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
              <td className="px-6 py-4 whitespace-nowrap">
                {vehicle.vehicleMakes}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{vehicle.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{vehicle.country}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {vehicle.registrationNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {vehicle.engineCapacity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {vehicle.fuelType}
              </td>
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
