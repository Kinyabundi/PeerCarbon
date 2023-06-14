import { IconType } from "react-icons";
import { LuPlug, LuChevronUp, LuChevronRight } from "react-icons/lu";
import {
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlineStar,
} from "react-icons/hi";
import { Disclosure, Transition } from "@headlessui/react";
import { BsFillCarFrontFill } from "react-icons/bs";

interface SideItemProps {
  Icon: IconType;
  text: string;
  href?: string;
}

interface DropdownItemProps {
  text: string;
  href: string;
}

const SideItem = ({ Icon, text, href }: SideItemProps) => {
  return (
    <li>
      <a
        href={href ? href : text.toLowerCase()}
        className="flex items-center gap-x-2.5 py-2 px-2.5 text-sm text-slate-700 rounded-md cursor-pointer hover:text-blue-600"
      >
        <Icon className="w-7 h-7" />
        <span className="text-md font-medium">{text}</span>
      </a>
    </li>
  );
};

const DropdownItem = ({ text, href }: DropdownItemProps) => {
  return (
    <div className="pl-6 hover:text-blue-800 hover:bg-gray-100 text-md font-medium mr-2 max-w-[200px] w-full py-3 rounded-full cursor-pointer focus:text-blue-600 focus:bg-gray-100">
      <span>
        <a href={href ? href : text.toLowerCase()}>{text}</a>
      </span>
    </div>
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
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-lg text-left text-sm font-medium text-slate-700 hover:text-blue-600">
                  <span>
                    <SideItem Icon={HiOutlineStar} text="Fleet" href="#" />
                  </span>
                  <LuChevronUp
                    className={`${
                      open ? "-rotate-180 transform" : ""
                    } h-5 w-5 text-slate-700 hover:text-blue-600 rotate-90 rotate`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500 space-y-3">
                    <DropdownItem text="Vehicles" href="/add_vehicle" />
                    <DropdownItem text="Reports" href="/reports" />
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <SideItem Icon={BsFillCarFrontFill} text="Vehicles" />
          <SideItem Icon={HiOutlineCurrencyDollar} text="Offset" />
          <SideItem Icon={HiOutlineCurrencyDollar} text="Subscription" />
          <SideItem Icon={LuPlug} text="Integration" />
        </ul>
      </nav>
      <hr className="h-[1px] border-t-0 bg-neutral-300 opacity-100 mx-2 mt-20" />
    </div>
  );
}
