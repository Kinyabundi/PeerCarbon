import { CiSquareMore } from "react-icons/ci";
import { LuFolders } from "react-icons/lu";

interface ReportCardProps {
  color?: "yellow" | "blue" | "purple";
}

const ReportCard = ({ color = "blue" }: ReportCardProps) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-2xl">
      <div className="px-8 py-5 sm:p-6 w-full">
        <div className="flex items-center justify-between w-full">
          <div
            className={`flex items-center justify-center p-2 bg-${color}-100 rounded-lg`}
          >
            <LuFolders className={`w-9 h-9 text-${color}-600`} />
          </div>
          <CiSquareMore className="w-7 h-7" />
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="space-y-1">
            <h4 className="font-semibold text-[17px]">Emissions Analysis</h4>
            <p className="text-gray-400 font-medium">24 files</p>
          </div>
          <div className="flex mb-5 -space-x-2">
            <img
              className="w-10 h-10 border-2 border-white rounded-full"
              src="https://parade.com/.image/t_share/MTkwNTc4NzcwMDEwOTczMzA5/tom-cruise-net-worth.jpg"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full"
              src="https://images.mubicdn.net/images/cast_member/350615/cache-128294-1533458422/image-w856.jpg"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full"
              src="https://www.denofgeek.com/wp-content/uploads/2020/05/esai-morales-the-brink-hbo.jpg?fit=1200%2C680"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
