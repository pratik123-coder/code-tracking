import Image from "next/image";
import livebus from "@/public/livebus.svg";

interface BusDetails {
  registration: string;
  operator: string;
  role: string;
  availableSeats: number;
  bookedSeats: number;
  status: string;
  expiry: string;
}

const LiveRunningBuses: React.FC = () => {
  const buses: BusDetails[] = [
    {
      registration: "OD 33 J 7878",
      operator: "Minar Travels Pvt Limited",
      role: "Manager",
      availableSeats: 29,
      bookedSeats: 40,
      status: "Online",
      expiry: "14/06/21",
    },
    {
      registration: "OD 33 J 7879",
      operator: "Minar Travels Pvt Limited",
      role: "Programmer",
      availableSeats: 39,
      bookedSeats: 40,
      status: "Offline",
      expiry: "14/06/21",
    },
    {
      registration: "OD 33 J 7880",
      operator: "Minar Travels Pvt Limited",
      role: "Developer",
      availableSeats: 39,
      bookedSeats: 40,
      status: "Online",
      expiry: "14/06/21",
    },
  ];

  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Live Running Buses</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-100 text-gray-600">
              <th className="p-3">Bus Registration</th>
              <th className="p-3">Operator</th>
              <th className="p-3">Seat Booking</th>
              <th className="p-3">Status</th>
              <th className="p-3">Expiry Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-300"
              >
                {/* Bus Registration */}
                <td className="p-3 flex items-center gap-x-3">
                  <Image
                    src={livebus} // Path to your uploaded bus SVG
                    alt="Bus Icon"
                    width={24}
                    height={24}
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {bus.registration}
                    </p>
                    <p className="text-xs text-gray-500">{bus.operator}</p>
                  </div>
                </td>

                {/* Operator */}
                <td className="p-3 text-gray-700">{bus.role}</td>

                {/* Seat Booking */}
                <td className="p-3">
                  <span className="text-sm text-gray-800">
                    Available Seats: {bus.availableSeats}
                  </span>
                  <br />
                  <span className="text-xs text-gray-500">
                    Booked: {bus.bookedSeats}
                  </span>
                </td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      bus.status === "Online"
                        ? "bg-green-200 text-green-700"
                        : "bg-red-200 text-red-700"
                    }`}
                  >
                    {bus.status}
                  </span>
                </td>

                {/* Expiry Date */}
                <td className="p-3 text-gray-600">{bus.expiry}</td>

                {/* Actions */}
                <td className="p-3">
                  <button className="px-3 py-1 mr-2 text-sm bg-gray-200 rounded hover:bg-gray-300">
                    View Route
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveRunningBuses;
