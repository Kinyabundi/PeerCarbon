import Navbar from "@/components/Navbar";
import Sider from "@/components/Sider";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <Sider />
      <div>
        {children}
      </div>
    </>
  );
}
// w-full mt-32 px-4 sm:px-6 md:px-8 lg:pl-72 bg-[#f7f9fc] h-full