import { LuChevronRight } from "react-icons/lu";

interface BreadcrumbItemProps {
  text: string;
  isActive?: boolean;
  isOpen?: boolean;
}

const BreadcrumbItem = ({
  text,
  isOpen = false,
  isActive = false,
}: BreadcrumbItemProps) => {
  return (
    <div
      className={`flex flex-row items-center space-x-3 cursor-pointer ${
        isActive ? "hover:text-blue-600" : ""
      }`}
    >
      <h3
        className={`text-lg font-medium ${
          isActive ? "hover:text-blue-600" : "text-gray-600"
        }`}
      >
        {text}
      </h3>
      <LuChevronRight
        className={`w-5 h-5 ${
          isOpen
            ? "rotate-90 hover:text-blue-600 hover:-rotate-90 transform"
            : ""
        }`}
      />
    </div>
  );
};

export default BreadcrumbItem;
