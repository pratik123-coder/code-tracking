import LocationPath from "./LocationPath";

interface RouteCardProps {
  seatsBooked: string;
  status: string;
  locations: { location: string; date: string }[];
}

const RouteCard: React.FC<RouteCardProps> = ({
  seatsBooked,
  status,
  locations,
}) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between items-center">
      <h3 className="text-sm font-semibold mb-2">
        Seat Booked: {seatsBooked}
      </h3>
      
      <span
        className={`text-xs mt-2 inline-block px-2 py-1 rounded ${
          status === "Complete" ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"
        }`}
      >
        {status}
      </span>
      </div>
      <LocationPath locations={locations} />
    </div>
  );
};

export default RouteCard;
