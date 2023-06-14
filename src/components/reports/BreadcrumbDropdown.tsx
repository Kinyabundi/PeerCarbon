import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { LuChevronDown } from "react-icons/lu";

interface BreadcrumbDropdownProps {
  title: string;
  options: string[];
}

const BreadcrumbDropdown = ({ title, options }: BreadcrumbDropdownProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex rounded-3xl justify-center bg-gray-100 bg-opacity-20 px-4 py-2 text-md font-medium text-gray-600 hover:text-blue-600 hover:bg-opacity-30">
            <span>
              {/* {options?.find((option) => option.active)?.name} */}
              {title}
            </span>
            <LuChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-blue-600 hover:rotate-180 hover:transform"
              aria-hidden="true"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute w-[200px] origin-top-right bg-white divide-y divide-gray-100 rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                {options.map((item, i) => (
                  <div className="">
                    <Menu.Item key={i}>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "text-blue-600 bg-opacity-30"
                              : "text-gray-900"
                          } group flex rounded-md items-center w-full px-2 py-2 text-md`}
                        >
                          {item}
                        </button>
                      )}
                    </Menu.Item>
                    <hr className="h-px mt-1 mb-2 bg-gray-200 border-0" />
                  </div>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <hr className="h-px mt-3 mb-6 bg-gray-200 border-0" />
    </>
  );
};

export default BreadcrumbDropdown;
