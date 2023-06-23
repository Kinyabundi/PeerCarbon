
'use client';
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useMemo } from "react";
import { IconType } from "react-icons";
import {
  HiOutlineLogout,
  HiOutlineMenuAlt2,
  HiOutlineUser,
} from "react-icons/hi";
import { VscBellDot } from "react-icons/vsc";
import { SlSettings } from "react-icons/sl";
import { LuBell, LuInfo } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { useAuthStore } from "@/hooks/useAuthStore";
import useUserUtils from "@/hooks/useUserUtils";
import { useRouter } from "next/navigation";
import useDidHydrate from "@/hooks/useDidHydrate";

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";

interface IconBtnProps {
  Icon: IconType;
  iconSize?: number;
}

interface IconTextProps {
  Icon: IconType;
  text: string;
  isLogout?: boolean;
}

const IconBtn = ({ Icon, iconSize = 6 }: IconBtnProps) => {
  return (
    <button
      type="button"
      className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs"
    >
      <Icon className={`w-${iconSize} h-${iconSize}`} />
    </button>
  );
};

const IconText = ({ Icon, text, isLogout = false }: IconTextProps) => {
  return (
    <a
      className={`flex items-center gap-x-2.5 py-2 px-2.5 text-sm ${
        isLogout ? "text-red-500" : "text-slate-700"
      } rounded-md cursor-pointer hover:${
        isLogout ? "text-red-700" : "text-blue-600"
      }`}
    >
      <Icon
        className={`w-5 h-5 ${isLogout ? "text-red-500" : "text-blue-600"}`}
      />
      <span className="text-[14px] font-medium">{text}</span>
    </a>
  );
};

export default function Navbar() {
  const { user: userData } = useAuthStore();
  const { logout } = useUserUtils();
  const router = useRouter();
  const { didHydrate } = useDidHydrate();

  const user = useMemo(() => {
    if (!didHydrate) return null;
    if (!userData) return null;
    return userData;
  }, [didHydrate, userData]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:pl-64 ">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="mr-5 lg:mr-0 lg:hidden">
          <a
            className="flex-none text-xl font-semibold"
            href="#"
            aria-label="Brand"
          >
            PeerCarbon
          </a>
        </div>

        <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="sm:hidden">
            <IconBtn Icon={HiOutlineMenuAlt2} />
          </div>

          <div className="hidden sm:block">
            <h2>
              <span className="text-gray-900 text-xl">Dashboard</span>
            </h2>
          </div>

          <div className="flex flex-row items-center justify-end gap-2">
            <IconBtn Icon={VscBellDot} iconSize={7} />

            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button>
                <div className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <img
                      className="inline-block flex-shrink-0 h-10 w-10 rounded-full"
                      src={user ? (user?.logo as string) : PLACEHOLDER_IMG}
                    />
                    <div className="ml-3 flex flex-col items-start">
                      <h3 className=" text-gray-800 hover:text-blue-600">
                        {user ? user?.companyName : "User"}
                      </h3>
                      <p className="text-xs text-gray-400">Account settings</p>
                    </div>
                  </div>
                </div>
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
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      <IconText Icon={HiOutlineUser} text="Account" />
                    </Menu.Item>
                    <Menu.Item>
                      <IconText Icon={SlSettings} text="Settings" />
                    </Menu.Item>
                    <Menu.Item>
                      <IconText Icon={LuBell} text="Notifications" />
                    </Menu.Item>
                    <Menu.Item>
                      <hr className="h-[1px] border-t-0 bg-neutral-300 opacity-100 mx-2 my-3" />
                    </Menu.Item>
                    <Menu.Item>
                      <IconText Icon={LuInfo} text="Help" />
                    </Menu.Item>
                    <Menu.Item>
                      <IconText Icon={BiSupport} text="Support" />
                    </Menu.Item>
                    <Menu.Item
                      as={"button"}
                      onClick={() => {
                        logout();
                        router.push("/login");
                      }}
                    >
                      <IconText Icon={HiOutlineLogout} text="Logout" isLogout />
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
}
