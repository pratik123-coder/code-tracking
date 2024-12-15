interface LocationPathProps {
  locations: { location: string; date: string }[];
}

const LocationPath: React.FC<LocationPathProps> = ({ locations }) => {
  return (
    <div className="relative">
      <div className="flex flex-col gap-4">
        {locations.map((loc, index) => (
          <div key={index} className="flex relative items-center">
            {/* Line Connecting the Dots */}
            

            {/* Blue Dot */}
            <div className="relative z-10 w-4 h-4 rounded-full bg-blue-500" />
            {index !== locations.length - 1 && (
              <div
                className="absolute top-1/2 left-2 transform -translate-x-1/2 h-full w-[2px] bg-black"
                style={{
                  top: 'calc(50% - 8px)', // Adjust top to align the line between the dots
                  height: `calc(100% + 16px)`, // Adjust height for each connection
                }}
              />
            )}

            {/* Location and Date */}
            <div className="ml-4">
              <span className="block font-medium text-gray-800">{loc.location}</span>
              <span className="text-sm text-gray-500">{loc.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPath;
