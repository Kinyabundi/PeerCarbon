import SubscriptionCard from '@/components/cards/SubscriptionCard'
import MainLayout from '@/layouts/MainLayout'
import { NextPageWithLayout } from '@/types/Layout'
import React, {useState} from 'react'
import { CiPlane } from 'react-icons/ci'
import { VscDebugStart } from 'react-icons/vsc'
import { GiJetFighter } from 'react-icons/gi'
const Subscription: NextPageWithLayout = () => {
    const [isBilledAnnually, setIsBilledAnnually] = useState(false)

    const handleToggleBilling = () => {
      setIsBilledAnnually(!isBilledAnnually)
    }

    return (
        <div className='px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12'>
            <div className='text-center mt-4'>
                <h1 className="text-3xl mb-4 text-gray-900 font-bold">Subscription</h1>
                <p className="text-gray-600 mb-2">
                    Select one of the business goal-specific packages
                </p>
                <p className="text-gray-600 mb-4">and start managing your fleet's emissions.</p>
                <div className='mt-6 flex justify-center'>
                    <div className="flex items-center">
                        <label className="text-sm text-gray-500 mr-3 dark:text-gray-400">Billed Monthly</label>
                        <input type="checkbox" id="hs-basic-with-description" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                         checked={!isBilledAnnually}
                         onChange={handleToggleBilling} />
                            <label className="text-sm text-gray-500 ml-3 dark:text-gray-400">Billed Annually</label>
                    </div>
                </div>
            </div>

            <div className='mt-12 grid grid-cols-1 gap-y-7 md:grid-cols-3 gap-x-0 md:gap-x-6'>
                <SubscriptionCard 
                icon={VscDebugStart}
                title='Startup'
                description='Entry level software with basic features and integrations'
                price={isBilledAnnually ? '$19' : '$20'}
                planList={[
                    {text: 'All integrations and analytics'},
                    {text: 'Up to 30 emissions factors'},
                    {text: 'Normal support'},
                    {text: 'Fleet Carbon Offset'}
                ]}
                />
                <SubscriptionCard 
                icon={CiPlane}
                title='Professional'
                description='Solution for companies with a larger fleet and footprint'
                price={isBilledAnnually ? '$29' : '$299'}
                planList={[
                    {text: 'Everything on Startup plan'},
                    {text: 'Access modules to Scope 1 and 2 carbon accounting'},
                    {text: 'Carbon offseting integration'},
                    {text: 'Up to 3 team members'},
                    {text: 'Free training'},
                    {text: 'Export reports'}
                ]}
                />
                <SubscriptionCard 
                icon={CiPlane}
                title='Enterprise'
                description='Custom solutions with top emissions management'
                price={isBilledAnnually ? '$39' : '$999'}
                planList={[
                    {text: 'Everything on Professional plan'},
                    {text: 'Up to 1,000 emissions factors for scope 1,2 and 3 accounting modules'},
                    {text: 'Hotspot analysis with Dedicated reduction support'},
                    {text: 'Up to 10 team members'},
                    {text: 'Real-time offseting and carbon neutrality verification'},
                    {text: 'Dedicated account manager'},
                    {text: 'Personalized training and whitelabel'},
                    {text: 'Batch export reports'}
                ]}
                />
                </div>

        </div>
    )
}

Subscription.getLayout = (page) => <MainLayout>{page}</MainLayout>
export default Subscription
