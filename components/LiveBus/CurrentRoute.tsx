import CurrentStatus from "./CurrentStatus";

const CurrentRoute = () => {
  const routeDetails = {
    seatsBooked: "20/50",
    status: "Online",
    locations: [
      { location: "Bhubaneswar", date: "2024-12-10" },
      { location: "Cuttack", date: "2024-12-11" },
    ],
    operator: [
      { name: "Sayed Ali", contact: "+91-9999999999",desn:"Manager" },
      { name: "Tiger Babu", contact: "+91-9999999998", desn:"Driver" },
    ],
  };

  return (
    <div>
      <CurrentStatus
        seatsBooked={routeDetails.seatsBooked}
        status={routeDetails.status}
        locations={routeDetails.locations}
        operator={routeDetails.operator}
      />
    </div>
  );
};

export default CurrentRoute;
