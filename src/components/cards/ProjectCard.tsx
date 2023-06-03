import React from 'react';
import { IconType } from 'react-icons';



interface ImageObject {
    src: string;
    alt: string;
  }
  
  interface ProjectCardProps {
    icon: IconType | string;
    more: IconType;
    projectName: string;
    description: string;
    projectType: string;
    offsetPercentage: number;
    images: ImageObject[];
  }
  const ProjectCard: React.FC<ProjectCardProps> = ({
    icon,
    more,
    projectName,
    description,
    projectType,
    offsetPercentage,
    images,
  }) => {
    const progressBar = {
      width: `${offsetPercentage}%`,
    };

  return (

    <div className="min-h-[17rem] min-w-[330px] bg-white rounded-[50px] px-8 py-6">
      <div className="flex justify-between items-center mt-8">
      {React.createElement(icon, { className: 'w-8 h-8 ml-3 text-blue-600' })}
      {React.createElement(more, { className: 'w-8 h-8 ml-3 text-gray-600' })}
      </div>
      <div className='mt-8'>
        <h2 className='text-md text-gray-900 font-semibold'>{projectName}</h2>
        <div className='my-3'>
          <p className='text-xs text-gray-500 tracking-wide leading-6'>{description}</p>
        </div>
        <hr className='h-px my-6 bg-gray-200' />
      </div>
      <div className='mt-12'>
        <h2 className='text-sm text-gray-900 text-medium'>Project Type</h2>
        <h3 className='text-xs text-gray-600 mt-1'>{projectType}</h3>
        <div className='mt-6'>
          <h3 className='text-sm text-semibold text-gray-700'> % of emissions to offset</h3>
          <div className="w-full bg-gray-100 rounded-full  h-2.5 mt-1">
            <div className="bg-[#05c168] h-2 rounded-full"style={progressBar}></div>
          </div>
          <div className='my-6'>
          <div className="flex -space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
                  </div>
                </div>

            </div>
          </div>
          );
};

          export default ProjectCard;