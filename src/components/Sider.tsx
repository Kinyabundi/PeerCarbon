import { IconType } from "react-icons";
import { LuPlug } from "react-icons/lu";
import {
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlineStar,
  HiOutlineUser,
} from "react-icons/hi";

interface SideItemProps {
  Icon: IconType;
  text: string;
}

const SideItem = ({ Icon, text }: SideItemProps) => {
  return (
    <li>
      <a className="flex items-center gap-x-2.5 py-2 px-2.5 text-sm text-slate-700 rounded-md cursor-pointer hover:text-blue-600">
        <Icon className="w-7 h-7" />
        <span className="text-md font-medium">{text}</span>
      </a>
    </li>
  );
};

export default function Sider() {
  return (
    <div className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0">
      <div className="px-6 py-4">
        <a
          className="flex items-center gap-x-2 text-xl font-semibold text-gray-700"
          href="#"
          aria-label="Brand"
        >
          <img src="/images/logo.png" className="w-7 h-7" />
          <span>PeerCarbon</span>
        </a>
      </div>
      <hr className="my-3 h-[1px] border-t-0 bg-neutral-300 opacity-100 mx-2" />

      <nav
        className="hs-accordion-group px-6  w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul className="space-y-5">
          <SideItem Icon={HiOutlineHome} text="Dashboard" />
          <SideItem Icon={HiOutlineStar} text="Fleet" />
          <SideItem Icon={HiOutlineUser} text="Users" />
          <SideItem Icon={HiOutlineCurrencyDollar} text="Offsets" />
          <SideItem Icon={LuPlug} text="Subscription" />
        </ul>
      </nav>
      <hr className="h-[1px] border-t-0 bg-neutral-300 opacity-100 mx-2 mt-20" />
    </div>
  );
}
