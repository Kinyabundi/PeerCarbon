import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import React, { useState } from 'react'
import { IconType } from 'react-icons';
import PlanList from './PlanList';

interface SubscriptionCardProps {
    title: string;
    description: string;
    price: string;
    icon: IconType;
    planList?: any;
}


const SubscriptionCard = ({ title, description, price, icon, planList }: SubscriptionCardProps) => {
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

        <div className="w-[320px] bg-white rounded-[50px] px-8 py-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: transformValue,
                transition: `transform ${transitionDuration} ease-in-out`,
            }}
        >
            <div className="flex justify-between items-center">
                <div className='flex justify-center items-center bg-blue-50  mt-6 w-16 h-16 rounded-xl'>
                    {React.createElement(icon, { className: 'text-[#1476ff] h-20 w-20' })}
                    {/* <VscDebugStart className='text-[#1476ff]' size={60} /> */}
                </div>
            </div>
            <div className='mt-6 '>
                <h2 className='text-xl text-gray-900 font-bold' style={{ color: titleColor }}>
                    {title}
                </h2>
                <div className='mt-4'>
                    <p className='text-gray-500 text-sm mt-2'>
                        {description}
                    </p>
                </div>
                <div className='mt-6'>
                    <span className='text-gray-900 text-3xl font-bold'>{price}</span>
                    <span className='text-gray-400'>/month/vehicle</span>
                </div>
                {/* <div className='mt-6'>
                    <ul className="space-y-3 text-sm">
                        <li className="flex space-x-3">
                            <AiFillCheckCircle className='text-[#1476ff]' size={22} />
                            <span className="text-gray-400">
                                All integrations and analytics
                            </span>
                        </li>

                        <li className="flex space-x-3">
                            <AiFillCheckCircle className='text-[#1476ff]' size={22} />
                            <span className="text-gray-400">
                                Up to 30 emissions factors
                            </span>
                        </li>

                        <li className="flex space-x-3">
                            <AiFillCheckCircle className='text-[#1476ff]' size={22} />
                            <span className="text-gray-400">
                                Normal support
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <AiFillCheckCircle className='text-[#1476ff]' size={22} />
                            <span className="text-gray-400">
                                Fleet Carbon Offset
                            </span>
                        </li>
                    </ul>
                </div> */}
                <PlanList items={planList} />
            </div>
            <div className='mt-6 flex justify-center'>
                <button type="button" className="py-4 px-6 mr-2 mb-2  w-full text-sm font-medium text-white focus:outline-none bg-[#1476ff] rounded-3xl border border-gray-200 focus:z-10">select plan</button>
            </div>
        </div>
    )
}

export default SubscriptionCard
