import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import Footer from "../Footer/Footer";
import Event from "./Event";

const RecentEvent = () => {
  const events = useLoaderData();
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-16">
        <h3 className="text-center text-5xl mb-3">Our Recent Events</h3>
        <div className="border-2 w-[250px] md:w-[280px] mx-auto mb-3"></div>
        <p className="text-center text-xl text-gray-700 mb-8">
          We make your events smart & impactful by personalized event management
          services
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-2 lg:px-0">
          {events.map((event, idx) => (
            <Event key={idx} event={event}></Event>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecentEvent;
