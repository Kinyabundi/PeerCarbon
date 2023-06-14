import ApiCard from '@/components/cards/ApiCard';
import { UploadBtn } from '@/components/forms/FormControl';
import MainLayout from '@/layouts/MainLayout';
import { NextPageWithLayout } from '@/types/Layout'
import React, { useRef } from 'react'
import { useState } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { VscDebugStart } from 'react-icons/vsc';


const Integration: NextPageWithLayout = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [excelFile, setExcelFile] = useState<string>('');

  const excelFileRef = useRef(null);

  const handleExcelPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    // check if there files
    if (!e?.target?.files?.length) return;
    const file = e?.target?.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setExcelFile(reader.result as string);
    };
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12">
      <div>
        <h1 className="text-xl text-gray-900 font-bold">Integrations</h1>
        <p className="text-gray-600 mb-4">
          Add and manage Peercarbon API connections to your fuel retailer's Fuel Card and Telematics for accurate emissions input data.
        </p>
      </div>
      <div className='mt-6'>
        <button
          type="button"
          className={`py-3 px-6 inline-flex justify-center items-center gap-2 mr-3 rounded-3xl border ${activeTab === 'All' ? 'bg-blue-600 text-white' : 'border-gray-200'} font-medium text-gray-800 text-sm hover:bg-blue-600  transition-all`}
          onClick={() => handleTabClick('All')}
        >
          All
        </button>
        <button
          type="button"
          className={`py-3 px-8 inline-flex justify-center items-center gap-3 mr-3 rounded-3xl border ${activeTab === 'Fuel Cards' ? 'bg-blue-600 text-white' : 'border-gray-200'} font-medium text-gray-800 hover:bg-blue-600 focus:outline-none transition-all text-sm`}
          onClick={() => handleTabClick('Fuel Cards')}
        >
          <BiSearch size={20} />
          <span> Fuel Cards API</span>
        </button>
        <button
          type="button"
          className={`py-3 px-8 inline-flex justify-center items-center gap-3 mr-3 rounded-3xl border ${activeTab === 'Telematics' ? 'bg-blue-600 text-white' : 'border-gray-200'} font-medium text-gray-800 hover:bg-blue-600  transition-all text-sm`}
          onClick={() => handleTabClick('Telematics')}
        >
          <AiOutlineShareAlt size={20} />
          Telematics
        </button>
        <button
          type="button"
          className={`py-3 px-8 inline-flex justify-center items-center gap-3 mr-3 rounded-3xl border ${activeTab === 'Manual Data' ? 'bg-blue-600 text-white' : 'border-gray-200'} font-medium text-gray-800 hover:bg-blue-600  transition-all text-sm`}
          onClick={() => handleTabClick('Manual Data')}
        >
          <VscDebugStart size={20} />
          Manual Data
        </button>
      </div>
      <div className='API'>
        {activeTab === 'All' && (
          <>
            <div className='mt-8 grid grid-cols-1 gap-y-7 md:grid-cols-3 gap-x-0 md:gap-x-6'>
              <ApiCard
                image='/images/ola.jpeg'
                title='OLA Africa'
                description="Connect to OLA Africa's fuel cards accounts through our API endpoints for fueling transaction data"
                text = ' Request API call'
              />
              <ApiCard
                image='/images/hashi.png'
                title='Hashi Energy'
                description="Connect to Hashi Energy fuel cards accounts through our API endpoints for fueling transaction data"
                text = ' Request API call'
              />
              <ApiCard
                image='/images/hass.jpeg'
                title='Hass Energy'
                description="Connect to Hass Energy fuel cards accounts through our API endpoints for fueling transaction data"
                text = ' Request API call'
              />
            </div>
            <div className='mt-6 grid grid-cols-1 gap-y-7 md:grid-cols-3 gap-x-0 md:gap-x-6'>
              <ApiCard
                image='/images/telematics.png'
                title='Telematics Africa'
                description="Connect to Telematics Africa accounts through our API endpoints for fueling transaction data"
                text = ' Request API call'
              />
              <ApiCard
                image='/images/Tramigo.png'
                title='Tramigo'
                description="Connect to Tramigo accounts through our API endpoints for fueling transaction data"
                text = ' Request API call'
              />
              <ApiCard
                image='/images/Emdee.png'
                title='Emdee Telematics'
                description="Connect to 
            Emdee Telematics accounts through our API endpoints for fueling transaction data"
            text = ' Request API call'
              />
            </div>
            <div className='mt-6 grid grid-cols-1 gap-y-7 md:grid-cols-3 gap-x-0 md:gap-x-6'>
              <ApiCard
                image='/images/TotalEnergies.png'
                title='Total Energies'
                description="Connect to Total fuel cards accounts through our API endpoints for fueling transaction data"
                text = ' Request API call'
              />
              <ApiCard
                image='/images/AFMS.jpeg'
                title='Africa Fleet MS'
                description="Connect to OLA Africa's fuel cards accounts through our API endpoints for fueling transaction data"
                text = ' Request API call'
              />
              <ApiCard
                image='/images/Rubis.webp'
                title='Rubis'
                description="Connect to Rubis fuel cards accounts through our API endpoints for fueling transaction data"
                text = ' Request API call'
              />
            </div>
          </>
        )}
        {activeTab === 'Fuel Cards' && (
          <div className='mt-6 grid grid-cols-1 gap-y-7 md:grid-cols-3 gap-x-0 md:gap-x-6'>
            <ApiCard
              image='/images/privatebeta.svg'
              title='Private Beta'
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
              text = 'View Integration'
            />
          </div>
        )}
        {activeTab === 'Telematics' && (
          <div className='mt-6 grid grid-cols-1 gap-y-7 md:grid-cols-3 gap-x-0 md:gap-x-6'>
            <ApiCard
              image='/images/facebook.svg'
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
              text = 'View Integration'
            />
            <ApiCard
              image='/images/twitter.svg'
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
              text = 'View Integration'
            />
            <ApiCard
              image='/images/pinterest.svg'
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
              text = 'View Integration'
            />
          </div>
        )}
        {activeTab === 'Manual Data' && (
          <div className='mt-6 grid grid-cols-1 gap-y-7 md:grid-cols-3 gap-x-0 md:gap-x-6'>
            {excelFile ? (
            <div className="flex items-center mt-6">
             <p>
              File Picked
             </p>

              <div className="ml-4">
                <UploadBtn
                  btnText={excelFile ? "Change excelFile" : "Company Logo"}
                  labelText="Upload Vehicle Details Excel File"
                  pickerRef={excelFileRef}
                  onChange={(e) => handleExcelPick(e)}
                  value={excelFile}
                  accept="application/xsls"
                />
              </div>
            </div>
          ) : (
            <UploadBtn
              btnText={excelFile ? "Change Excel File" : " Vehicle Details Excel File"}
              labelText="Upload Vehicle Details Excel File"
              pickerRef={excelFileRef}
              onChange={(e) => handleExcelPick(e)}
              value={excelFile}
            />
          )}

          </div>
        )}
      </div>
    </div>
  )
}

//@ts-ignore
Integration.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Integration
