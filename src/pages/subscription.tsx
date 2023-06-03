import MainLayout from '@/layouts/MainLayout'
import { NextPageWithLayout } from '@/types/Layout'
import React from 'react'

const Subscription: NextPageWithLayout = () => {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:pl-80 bg-[#f7f9fc] min-h-[100vh] pt-12'>
            <div className='text-center mt-4'>
                <h1 className="text-3xl mb-4 text-gray-900 font-bold">Subscription</h1>
                <p className="text-gray-600 mb-2">
                    Select one of the business goal-specific packages
                </p>
                <p className="text-gray-600 mb-4">and start managing your fleet's emissions.</p>
                <div className='mt-6'>
                    <div className="flex items-center">
                        <label className="text-sm text-gray-500 mr-3 dark:text-gray-400">Off</label>
                        <input type="checkbox" id="hs-basic-with-description" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200" />
                            <label className="text-sm text-gray-500 ml-3 dark:text-gray-400">On</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

Subscription.getLayout = (page) => <MainLayout>{page}</MainLayout>
export default Subscription
