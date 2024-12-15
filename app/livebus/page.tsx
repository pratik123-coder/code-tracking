import CurrentRoute from "@/components/LiveBus/CurrentRoute";
import LiveRunningBuses from "@/components/LiveBus/LiveRunningBuses";
import PastRoutesSection from "@/components/LiveBus/PastRoutesSelection";

const LiveBus = () => {
  return ( 
    <div>
      <PastRoutesSection />
      <CurrentRoute />
      <LiveRunningBuses />
    </div>
   );
}
 
export default LiveBus;