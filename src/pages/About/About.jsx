import Navbar from "../../components/Header/Navbar";
import Footer from "../Footer/Footer";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-16">
        <h3 className="text-5xl text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B014C] to-[#7B014C] mr-2">
            Astral
          </span>
          Team Members
        </h3>
        <p className="text-center text-xl text-gray-700 mt-4 mb-8">
          We make your events smart & impactful by personalized event management
          services
        </p>
        <div className="grid lg:grid-cols-3 items-center justify-center">
          {/* Team member 01 */}
          <div className="relative mb-8 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img
                className=""
                src="https://i.ibb.co/zHFMmKS/team-member-1.png"
                alt="profile-picture_Team1"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Anna Sydney
              </h4>
              <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text text-base font-medium leading-relaxed text-transparent antialiased">
                Events Manager
              </p>
            </div>
            <div className="flex justify-center items-center gap-7 p-6 pt-2">
              <FaFacebook className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaFacebook>
              <FaTwitter className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaTwitter>
              <FaInstagram className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaInstagram>
            </div>
          </div>
          {/* Team member 02 */}
          <div className="relative mb-8 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img
                className=""
                src="https://i.ibb.co/qRCcy3S/Team-member2.png"
                alt="profile-picture_Team1"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Charles Hasman
              </h4>
              <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text text-base font-medium leading-relaxed text-transparent antialiased">
                Supervisor
              </p>
            </div>
            <div className="flex justify-center items-center gap-7 p-6 pt-2">
              <FaFacebook className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaFacebook>
              <FaTwitter className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaTwitter>
              <FaInstagram className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaInstagram>
            </div>
          </div>
          {/* Team member 03 */}
          <div className="relative mb-8 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img
                className=""
                src="https://i.ibb.co/Pw5FDZR/team-member3.png"
                alt="profile-picture_Team3"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Natalie Paisley
              </h4>
              <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text text-base font-medium leading-relaxed text-transparent antialiased">
                CEO / Co-Founder
              </p>
            </div>
            <div className="flex justify-center items-center gap-7 p-6 pt-2">
              <FaFacebook className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaFacebook>
              <FaTwitter className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaTwitter>
              <FaInstagram className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-2xl"></FaInstagram>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
