import RouteCard from "./RouteCard";

const PastRoutesSection: React.FC = () => {
  const pastRoutesData = [
    {
      seatsBooked: "45/50",
      status: "Complete",
      locations: [
        { location: "Bhubaneswar", date: "6/11/24" },
        { location: "Cuttack", date: "6/12/24" },
      ],
    },
    {
      seatsBooked: "32/60",
      status: "Incomplete",
      locations: [
        { location: "Bhubaneswar", date: "6/13/24" },
        { location: "Cuttack", date: "6/14/24" },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Past Route</h2>
      <div className="grid grid-cols-1 gap-4">
        {pastRoutesData.map((route, index) => (
          <RouteCard
            key={index}
            seatsBooked={route.seatsBooked}
            status={route.status}
            locations={route.locations}
          />
        ))}
      </div>
    </div>
  );
};

export default PastRoutesSection;
