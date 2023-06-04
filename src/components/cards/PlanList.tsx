import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

interface ListItemProps {
    text: string;
}

const ListItem = ({ text }: ListItemProps) => (
    <li className="flex items-start space-x-3">
    <AiFillCheckCircle className='text-[#1476ff] flex-shrink-0' size={22} />
    <span className="text-gray-400">
        {text}
    </span>
</li>
);


const List = ({ items }: any) => (
  <div className="mt-6">
    <ul className="space-y-3 text-sm">
      {items.map((item: { text: string; }, index: React.Key | null | undefined) => (
        <ListItem key={index}  text={item.text} />
      ))}
    </ul>
  </div>
);

export default List;
