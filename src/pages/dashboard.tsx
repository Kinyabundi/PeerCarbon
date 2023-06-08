import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";
import { IconType } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaGasPump, FaRoad, FaTruck } from "react-icons/fa";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { LuArrowUpRight, LuChevronDown, LuArrowDownLeft } from "react-icons/lu";
import { Fragment } from "react";
import DashboardChart from "@/components/DashboardChart";
import DashboardAreaChart, {
  DashboardAreaChartProps,
} from "@/components/AreaChart";
import DashPieChart from "@/components/DashPieChart";
import Head from "next/head";

interface DashboardCardProps {
  title: string;
  value: string;
  Icon: IconType;
}

interface DashboardAreaChartMainProps extends DashboardAreaChartProps {
  title: string;
  value: string;
  percent: string;
  isDown?: boolean;
}

interface DashCardTitleProps {
  title: string;
  options: string[];
}

interface RecentIntegrationItemProps {
  img: string;
  name: string;
  email: string;
}

interface OffsetModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const recentIntegrations: RecentIntegrationItemProps[] = [
  {
    img: "https://pbs.twimg.com/profile_images/1178683300254273536/F0iDBqF9_400x400.jpg",
    name: "Ola Energy",
    email: "contact@ola.com",
  },
  {
    img: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052014/hashi-logo.png?itok=fgOZHnPy",
    name: "Hashi Energy",
    email: "contact@hashi.com",
  },
  {
    img: "https://hasspetroleum.com/wp-content/themes/hass/assets/img/logo.png",
    name: "Hass Petroleum",
    email: "contact@hass.com",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5acf87facc8fedbe1a9c205b/1524726814665-CVU2DQH1NA2AY8R6MUT0/Lexo+Energy+Petrol+Logo.png",
    name: "Lexo Energy",
    email: "contact@lexo.com",
  },
  {
    img: "https://pbs.twimg.com/profile_images/1178683300254273536/F0iDBqF9_400x400.jpg",
    name: "Ola Energy",
    email: "contact@ola.com",
  },
];

const Dashboard: NextPageWithLayout = () => {

  return (
    <>
    <Head>
        <title>Dashboard</title>
    </Head>
      <div className="px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12 pr-3">
        <div className="flex items-baseline justify-between">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Dashboard</h1>
            <p className="text-gray-600">June 2, 2023</p>
          </div>
          <button
            type="button"
            className="py-4 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          >
            <AiOutlinePlus className="w-5 h-5" />
            Offset CO2
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Fleet Emissions"
            value="71897"
            Icon={TbActivityHeartbeat}
          />
          <DashboardCard title="Vehicles" value="3282" Icon={FaTruck} />
          <DashboardCard title="CO2 Per Car" value="322" Icon={FaGasPump} />
          <DashboardCard title="Mileage" value="23627" Icon={FaRoad} />
        </div>

        <div className="mt-8">
          <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-[50px] px-8 py-6">
            <DashCardTitle
              title="Carbon Footprint"
              options={["This Week", "This Month", "This Year"]}
            />
            <div className="mt-6">
              <DashboardChart />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 py-8">
          <DashboardAreaChartMain
            title="Drive Time"
            value="50.8 Hrs"
            percent="23.4"
          />
          <DashboardAreaChartMain
            title="Fleet Coverage"
            value="23.6 Kms"
            percent="12.4"
            strokeColor="#CF5C36"
            fillColor="#EFC88B"
          />
          <DashboardAreaChartMain
            title="Speeding"
            value="15 Events"
            percent="5.4"
            strokeColor="#7B4B94"
            fillColor="#7D82B8"
            isDown
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 py-8">
          <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-[50px] px-8 py-6">
            <DashCardTitle
              title="Emissions By Vehicle Type"
              options={["This Week", "This Month", "This Year"]}
            />

            <DashPieChart />
          </div>
          <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-[50px] px-8 py-6">
            <DashCardTitle
              title="Recent Integrations"
              options={["Telematics", "Fuel API", "Custom API"]}
            />
            <div className="mt-6">
              <div className="space-y-3">
                {recentIntegrations.map((item, i) => (
                  <RecentIntegrationItem {...item} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DashboardCard = ({ title, value, Icon }: DashboardCardProps) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-2xl">
      <div className="px-4 py-5 sm:p-6 flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <dl>
          <dt className="text-sm font-medium text-gray-500 truncate">
            {title}
          </dt>
          <dd className="mt-1 text-xl font-semibold text-gray-900">{value}</dd>
        </dl>
      </div>
    </div>
  );
};

const DashboardAreaChartMain = ({
  title,
  value,
  percent,
  strokeColor,
  fillColor,
  isDown = false,
}: DashboardAreaChartMainProps) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-2xl">
      <div className="px-4 py-5 sm:p-6 flex items-end space-x-4 justify-between">
        <dl>
          <dt className="text-2xl font-semibold text-gray-900 truncate">
            {value}
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-500">{title}</dd>
        </dl>
        <div
          className={`flex items-center gap-x-0.5 py-2 px-2.5 text-sm ${
            isDown ? "text-red-600" : "text-green-600"
          }`}
        >
          {percent}%
          {isDown ? (
            <LuArrowDownLeft className="w-4 h-4" />
          ) : (
            <LuArrowUpRight className="w-4 h-4" />
          )}
        </div>
      </div>
      <hr className="h-px mt-2 mb-1 bg-gray-200 border-0 mx-4" />
      <DashboardAreaChart strokeColor={strokeColor} fillColor={fillColor} />
    </div>
  );
};

const DashCardTitle = ({ title, options }: DashCardTitleProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex rounded-3xl justify-center border-gray-300 border-[1px] bg-gray-100 bg-opacity-20 px-4 py-2 text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
            <span>
              {/* {options?.find((option) => option.active)?.name} */}
              {options[1]}
            </span>
            <LuChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-blue-600"
              aria-hidden="true"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute w-32 origin-top-right bg-white divide-y divide-gray-100 rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                {options.map((item, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "text-blue-600 bg-opacity-30"
                            : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-xs`}
                      >
                        {item}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <hr className="h-px mt-3 mb-6 bg-gray-200 border-0" />
    </>
  );
};

const RecentIntegrationItem = ({
  img,
  name,
  email,
}: RecentIntegrationItemProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <img
            className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white"
            src={img}
            alt="Image Description"
          />
          <span className="text-md text-gray-800 ml-3 text-semibold">
            {name}
          </span>
        </div>

        <a className="text-blue-600 text-sm cursor-pointer">{email}</a>
      </div>
      <hr className="h-px mt-5 mb-8 bg-gray-200 border-0" />
    </div>
  );
};

const OffsetModal = ({ open, setOpen }: OffsetModalProps) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setOpen(false)}>Deactivate</button>
        <button onClick={() => setOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

Dashboard.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Dashboard;
