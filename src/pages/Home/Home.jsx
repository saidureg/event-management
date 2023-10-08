import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import Navbar from "../../components/Header/Navbar";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      <div className="max-w-7xl mx-auto my-16">
        <h3 className="text-center text-5xl mb-5">Our Services</h3>
        <div className="grid lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <Services key={idx} service={service}></Services>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
