import Banner from "../../components/Header/Banner";
import Navbar from "../../components/Header/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      {/* services */}
      <div>
        <h3>services</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
