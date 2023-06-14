import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";
import Head from "next/head";
import { HiDownload, HiLink, HiUpload } from "react-icons/hi";
import {
  LuMoreHorizontal,
  LuPlus,
} from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  BreadcrumbItem,
  BreadcrumbDropdown,
  ReportBtn,
  ReportCard,
} from "@/components/reports";
import { reportItems } from "@/data/dummy";

const Reports: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>PeerCarbon | Reports</title>
      </Head>
      <div className="px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12 pr-3">
        <div className="flex justify-between items-center">
          <div className=" flex flex-row space-x-3">
            <BreadcrumbItem text="All Files" />
            <BreadcrumbItem text="PeerCarbon" />
            <BreadcrumbDropdown
              title="Reports"
              options={[
                "Emission Analysis",
                "Fleet Data - Reports",
                "Sustainability reports",
              ]}
            />
          </div>
          <div className="space-x-3">
            <ReportBtn text="Upload" Icon={HiUpload} isPrimary={false} />
            <ReportBtn text="Create Folder" Icon={LuPlus} />
          </div>
        </div>
        <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ReportCard />
          <ReportCard color="yellow" />
          <ReportCard color="purple" />
        </div>
        <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-8 pb-8 rounded-2xl">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-[13px] text-gray-400 uppercase bg-gray-100 font-normal">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-[25px] focus:ring-blue-500"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th className="px-6 py-3 font-medium">Name</th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Last Modified
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Kind
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {reportItems.map((item, i) => (
                <tr className="bg-white border-b hover:bg-gray-50" key={i}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <IoDocumentTextOutline className="w-7 h-7 mr-2 text-blue-500" />
                    <span className="text-[15px]">{item.name}</span>
                  </td>
                  <td className="px-6 py-4 uppercase">{item.size}</td>
                  <td className="px-6 py-4">{item.lastModified}</td>
                  <td className="px-6 py-4 uppercase">
                    {item.name?.split(".")
                      ? item.name.split(".")?.pop()
                      : "folder"}
                  </td>
                  <td className="px-6 py-4 flex space-x-1">
                    <HiDownload className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
                    <HiLink className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
                    <LuMoreHorizontal className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

Reports.getLayout = (c) => <MainLayout>{c}</MainLayout>;

export default Reports;
