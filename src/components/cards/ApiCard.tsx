import React, { useState } from 'react'


interface ApiCardProps {
    image: string;
    title: string;
    description: string;
}


const ApiCard = ({ image, title, description }: ApiCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const titleColor = isHovered ? '#1476ff' : 'black';
    const transformValue = isHovered ? 'scale(1.05)' : 'scale(1)';
    const transitionDuration = '0.3s';
    
    return (
        <div className="w-[320px] bg-white rounded-[20px] px-8 py-8 mb-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: transformValue,
                transition: `transform ${transitionDuration} ease-in-out`,
            }}>
            <div className="flex justify-between items-center">
                <img src={image} alt="Shell" className="w-10 h-10" />
                <h2 className='text-gray-800 font-semibold text-[17px] mr-[90px]' style={{ color: titleColor }}> {title} </h2>
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
