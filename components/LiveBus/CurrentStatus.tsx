import LocationPath from "./LocationPath";
import Image from "next/image";
import busOperator from "@/public/busoperator.svg"

interface CurrentStatusProps {
  seatsBooked: string;
  status: string;
  locations: { location: string; date: string }[];
  operator: { name: string; contact: string; desn:string}[]; // Array of operator details
}

const CurrentStatus: React.FC<CurrentStatusProps> = ({
  seatsBooked,
  status,
  locations,
  operator,
}) => {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex justify-start items-center pb-4 gap-x-5">
          <h3 className="text-lg font-semibold mt-4">Current Status</h3>
          <div className="mt-4">
            <span
              className={`inline-block px-3 py-1 rounded-full ${
                status === "Online"
                  ? "bg-green-200 text-green-700"
                  : "bg-red-500 text-white"
              }`}
            >
              {status}
            </span>
          </div>
        </div>
        <div className="text-gray-600 font-helvetica">25 Apr 2024</div>
      </div>

      {/* Seat Booked Information */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-800">
          Seat Booked: {seatsBooked}
        </h4>
      </div>

      {/* Location Path with Dates */}
      <LocationPath locations={locations} />

      {/* Operator Information */}
      <div className="mt-6 ">
        <div className="flex flex-col gap-x-6 gap-y-6">
          {operator.map((op, index) => (
            <div key={index} className="flex items-center gap-x-3">
              <Image
                src={busOperator}
                alt="Operator"
                width={40}
                height={40}
                
              />
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col gap-y-1">
                <p className="text-sm font-semibold text-gray-900">{op.name}</p>
                <p className="text-xs text-gray-500">{op.desn}</p>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 pe-24">{op.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentStatus;
