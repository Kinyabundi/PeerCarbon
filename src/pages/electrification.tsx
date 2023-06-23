import MainLayout from '@/layouts/MainLayout'
import { NextPageWithLayout } from '@/types/Layout'
import React from 'react'
import { IconType } from 'react-icons';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaPlug } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { LuChevronDown } from 'react-icons/lu';

interface ElectrificatioCardProps {
    title: string;
    vehicels: number;
    totalVehicles: number;
    Icon: IconType;
    text: string;
}

const data = [
    {
        id: 1,
        registrationNo: "KCB 665T",
        brand: "Audi",
        model: "A3",
        bodyType: "Sedan",
        dailyAverage: "768 km",
        yearlyCo2: "0.34 t",
        chargeability: "100%",
        group: "Management",
    },
    {
        id: 2,
        registrationNo: "KCC 666T",
        brand: "Volkaswagen",
        model: "Polo",
        bodyType: "Van",
        dailyAverage: "868 km",
        yearlyCo2: "0.4 t",
        chargeability: "88%",
        group: "Management",
    },
    {
        id: 3,
        registrationNo: "KCB 665T",
        brand: "Volkswagen",
        model: "Caddy",
        bodyType: "Hatcback",
        dailyAverage: "668 km",
        yearlyCo2: "0.6 t",
        chargeability: "90%",
        group: "Sales",
    },
    {
        id: 3,
        registrationNo: "KCB 665T",
        brand: "Volkswagen",
        model: "Caddy",
        bodyType: "Hatcback",
        dailyAverage: "668 km",
        yearlyCo2: "0.6 t",
        chargeability: "9%",
        group: "Sales",
    },
    {
        id: 3,
        registrationNo: "KDB 667T",
        brand: "Telsa",
        model: "Model 3",
        bodyType: "Sedans",
        dailyAverage: "668 km",
        yearlyCo2: "0.6 t",
        chargeability: "86%",
        group: "Management",
    },
    {
        id: 3,
        registrationNo: "KCB 665B",
        brand: "Volkswagen",
        model: "Polo",
        bodyType: "Sedans",
        dailyAverage: "668 km",
        yearlyCo2: "0.6 t",
        chargeability: "3%",
        group: "Sales",
    },
    {
        id: 3,
        registrationNo: "KBK 665D",
        brand: "Volkswagen",
        model: "Caddy",
        bodyType: "Hatcback",
        dailyAverage: "668 km",
        yearlyCo2: "0.6 t",
        chargeability: "90%",
        group: "Management",
    },
];




const Electrification: NextPageWithLayout = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12">
            <div>
                <h1 className="text-xl text-gray-900 font-bold">Reduction Plan</h1>
                <p className="text-gray-600 mb-4">
                    Analytics from your emissions data and potential emissions with EV transition.
                    Set your reduction targets and track your progress
                </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <ElectrificationCard title="Vans" totalVehicles={100} vehicels={74} Icon={FaPlug} text="68 recommended EVs" />
                <ElectrificationCard title="Sedans" totalVehicles={29} vehicels={26} Icon={FaPlug} text="19 recommended EVs" />
                <ElectrificationCard title="Hatchbacks" totalVehicles={41} vehicels={37} Icon={FaPlug} text="9 recommended EVs" />
                <ElectrificationCard title="MPVs" totalVehicles={16} vehicels={4} Icon={FaPlug} text="1 recommended EVs" />
            </div>

            <div className='mt-4 bg-white rounded-lg px-4 py-5'>
                <div className='mt-2'>
                    <p className='text-gray-900 text-lg font-semibold'>All Vehicles(77)</p>
                </div>
                <div className='mt-6'>
                    <button
                        type="button"
                        className={`py-2 px-3 inline-flex justify-center items-center gap-2 mr-2 rounded-3xl border  font-medium text-gray-800 text-sm hover:bg-blue-600  transition-all`}

                    >
                         <BiSearch size={20} />
                        Search for Registration Plate or brand
                    </button>
                    <button
                        type="button"
                        className={`py-2 px-3 inline-flex justify-center items-center gap-2 mr-2 rounded-3xl border font-medium text-gray-800 hover:bg-blue-600  transition-all text-sm`}
                    >
                        <span > Status</span>
                        <LuChevronDown className='ml-1 h-4 w-4'/>
                    </button>
                    <button
                        type="button"
                        className={`py-2 px-3 inline-flex justify-center items-center gap-2 mr-2 rounded-3xl border font-medium text-gray-800 hover:bg-blue-600  transition-all text-sm`}

                    >
                    Engine
                    <LuChevronDown className='ml-1 h-4 w-4' />
                    </button>
                    <button
                        type="button"
                        className={`py-2 px-3 inline-flex justify-center items-center gap-2 mr-2 rounded-3xl border font-medium text-gray-800 hover:bg-blue-600  transition-all text-sm`}

                    >
                       Segment
                       <LuChevronDown className='ml-1 h-4 w-4' />
                    </button>
                    <button
                        type="button"
                        className={`py-2 px-3 inline-flex justify-center items-center gap-2 mr-2 rounded-3xl border font-medium text-gray-800 hover:bg-blue-600  transition-all text-sm`}

                    >
                       Group
                       <LuChevronDown className='ml-1 h-4 w-4' />
                    </button>
                    <button
                        type="button"
                        className={`py-2 px-3 inline-flex justify-center items-center gap-2 mr-2 rounded-3xl border font-medium text-gray-800 hover:bg-blue-600  transition-all text-sm`}

                    >
                       Confidence
                       <LuChevronDown className='ml-1 h-4 w-4'/>
                    </button>
                </div>

                <table className="min-w-full divide-y divide-gray-300 mt-7">
        <thead>
          <tr>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              VEHICLE
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
            BRAND/MODEL
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
            BODY TYPE
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
             DAILY AVERAGE
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              YEARLY CO2
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
            CHARGEABILITY
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
            GROUP
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {data.map((vehicle) => (
            <tr key={vehicle.id}>
              <td className="px-2 py-2 whitespace-nowrap text-gray-700 text-sm ">
              {vehicle.registrationNo}
              </td>
              <td className="px-2 py-2 whitespace-nowrap text-gray-700 text-sm "> {vehicle.brand} {vehicle.model} </td>
              <td className="px-2 py-2 whitespace-nowrap text-gray-700 text-sm"> {vehicle.bodyType} </td>
              <td className="px-2 py-2 whitespace-nowrap text-gray-700 text-sm">
            {vehicle.dailyAverage}
              </td>
              <td className="px-2 py-2 whitespace-nowrap text-gray-700 text-sm">
                {vehicle.yearlyCo2}
              </td>
              <td className="px-2 py-2 whitespace-nowrap text-gray-700 text-sm">
                {vehicle.chargeability}
              </td>
              <td className="px-2 py-2 whitespace-nowrap text-gray-700 text-sm">
                {vehicle.group}
              </td>
            </tr>
            ))}
       
        </tbody>
      </table>
            </div>
        </div>
    )
}


const ElectrificationCard = ({ title, vehicels, Icon, text, totalVehicles }: ElectrificatioCardProps) => {
    const styles = {
        path: {
            strokeWidth: "8px",
        },
        text: {
            //   fill: `rgba(62, 152, 199, ${vehicels / totalVehicles})`,
            fontSize: "12px",
        },
    };
    return (
        <div className="bg-white overflow-hidden shadow rounded-2xl">
            <div className="px-2 py-2 sm:p-6 flex items-center space-x-3">
                <div>
                    <div className="text-sm font-medium text-gray-500 truncate">
                        {title} ({totalVehicles})
                    </div>
                    <div style={{ width: 70, height: 70 }} className='mt-4'>
                        <CircularProgressbar value={(vehicels / totalVehicles) * 100} text={`${vehicels}EVs`} styles={styles} />
                    </div>
                    <div className='flex items-center mt-4'>
                        <Icon className=" text-gray-900" />
                        <p className='ml-2 text-sm text-gray-600'>{text}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

Electrification.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Electrification
