import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";
import ProjectCard from "@/components/cards/ProjectCard";
import Head from "next/head";

const Offset: NextPageWithLayout = () => {
  const images = [
    {
      src: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      alt: "Image 1",
    },
    {
      src: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      alt: "Image 2",
    },
    {
      src: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      alt: "Image 3",
    },
  ];
  return (
    <>
    <Head>
      <title>Offset | PeerCharge</title>
    </Head>
    <div className="px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12">
      <div>
        <h1 className="text-xl text-gray-900 font-bold">Offset</h1>
        <p className="text-gray-600 mb-4">
          Neutralize your fleet footprint by pre-funding nature-based and
          community projects through carbon forward contracts issued on the
          blockchain.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-7 md:grid-cols-3 gap-x-0 md:gap-x-6">
        <ProjectCard
          projectName="Octavia Carbon"
          description="Octavia builds and deploys Direct Air Carbon Capture machines in Kenya."
          projectType="DACC"
          offsetPercentage={50}
          images={images}
        />
        <ProjectCard
          projectName="Mikoko Mangrove"
          description="An initiative in the Gazi and Makongeni areas of the South Coast of Kenya."
          projectType="Blue Carbon"
          offsetPercentage={20}
          images={images}
        />
        <ProjectCard
          projectName="Clean Cooking Alliance"
          description="Supports access to clean cooking systems in Africa, especially Kenya."
          projectType="Clean Fuels"
          offsetPercentage={80}
          images={images}
        />
      </div>

      <div>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#005921] rounded-lg border border-gray-200 hover:bg-gray-900  focus:z-10"
        >
          Proceed To Offset
        </button>
      </div>
    </div>
    </>
  );
};

Offset.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Offset;
