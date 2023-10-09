import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import Navbar from "../../components/Header/Navbar";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      {/* Services section */}
      <div className="max-w-7xl mx-auto my-16">
        <h3 className="text-center text-5xl mb-3">Our Services</h3>
        <p className="text-center text-xl text-gray-700 mb-8">
          We make your events smart & impactful by personalized event management
          services
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-2 lg:px-0">
          {services.map((service, idx) => (
            <Services key={idx} service={service}></Services>
          ))}
        </div>
      </div>
      <Gallery />

      <Footer />
    </div>
  );
};

export default Home;
