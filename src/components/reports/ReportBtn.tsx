import { IconType } from "react-icons";

interface ReportBtnProps {
  text: string;
  isPrimary?: boolean;
  Icon: IconType;
}

const ReportBtn = ({ text, Icon, isPrimary = true }: ReportBtnProps) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 inline-flex justify-center items-center gap-2 rounded-full focus:outline-none text-sm transform transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${
        isPrimary
          ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 font-semibold"
          : "bg-white text-gray-700 font-light hover:bg-blue-600 hover:text-white shadow-sm hover:font-semibold border-[1px]"
      }`}
    >
      <Icon className="w-5 h-5" />
      {text}
    </button>
  );
};

export default ReportBtn;
