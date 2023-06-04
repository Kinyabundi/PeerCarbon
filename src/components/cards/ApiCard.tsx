import React from 'react'

interface ApiCardProps {
    image: string;
    title: string;
    description: string;
}


const ApiCard = ({image, title, description}: ApiCardProps) => {
    return (
        <div className="w-[300px] bg-white rounded-[20px] px-8 py-8">
            <div className="flex justify-between items-center">
                <img src={image} alt="Shell" className="w-10 h-10" />
                <h2 className='text-gray-800 font-semibold text-[17px] mr-[90px]'> {title} </h2>
            </div>
            <div className='mt-6'>
                <p className='text-gray-500 text-[13px] leading-6'>
                    {description}
                </p>
            </div>
            <div className='mt-6'>
                <button type="button" className="py-2 px-8 inline-flex justify-center items-center gap-3 mr-3 rounded-3xl border border-gray-200 text-[11px] bg-white text-gray-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                Request API call
                </button>
            </div>
        </div>
    )
}

export default ApiCard
