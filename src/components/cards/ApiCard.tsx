import React, { useState } from 'react'


interface ApiCardProps {
    image: string;
    title?: string;
    description: string;
    text: string;
}



const ApiCard = ({ image, title, description, text }: ApiCardProps) => {
   const [isHovered, setIsHovered] = useState<boolean>(false)

    return (
        <div className={`w-[320px] bg-white rounded-[20px] px-8 py-8 mb-4 hover:shadow-lg transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <div className="flex justify-between items-center">
                <img src={image} alt="Shell" className="w-10 h-10" />
                <h2 className={`font-semibold text-[17px] mr-[90px] ${isHovered ? 'text-[#1476ff]' : 'text-gray-800'}`}> {title} </h2>

            </div>
            <div className='mt-6'>
                <p className='text-gray-500 text-[13px] leading-6'>
                    {description}
                </p>
            </div>
            <div className='mt-6'>
                <button type="button" className="py-2 px-8 inline-flex justify-center items-center gap-3 mr-3 rounded-3xl border border-gray-200 text-[11px] bg-white text-gray-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                 {text}
                </button>
            </div>
        </div>
    )
}

export default ApiCard
