import Image from "next/image";
import { Inter } from "next/font/google";
import Sider from "@/components/Sider";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Sider />;
}
