import Navbar from "../../components/Header/Navbar";
import Footer from "../Footer/Footer";
import swal from "sweetalert";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const Contact = () => {
  const handleContactForm = () => {
    swal("Thanks", "Our team will contact you soon", "success");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-16">
        <p className="text-center text-xl text-gray-700 mb-8">
          We make your events smart & impactful by personalized event management
          services
        </p>
        <div>
          <h3 className="text-5xl font-bold text-center text-[7B014C]">
            Get In Touch
          </h3>
          <form
            onSubmit={handleContactForm}
            className="card-body w-3/4 mx-auto"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                name="Subject"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                name="text"
                placeholder="Your Message"
                className="input input-bordered"
                required
                id=""
                cols="30"
                rows="30"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </form>
          <div>
            <h3 className="text-5xl font-bold text-center text-[7B014C] my-10">
              Other Ways To Contact Us
            </h3>
            <div>
              <div className="grid grid-cols-2 lg:grid-cols-3 mx-2 lg:mx-9">
                <div>
                  <div className="">
                    <AiOutlineMail className="text-6xl lg:text-8xl bg-red-600/60 text-white rounded-full p-4 mx-auto my-5" />
                  </div>
                  <div className="px-4 mb-4 text-center lg:w-96 mx-auto">
                    <h3 className="text-xl lg:text-3xl my-6 uppercase font-semibold">
                      Email
                    </h3>
                    <p className="text-xs lg:text-base text-red-800 opacity-80">
                      info@astral.com
                    </p>
                  </div>
                </div>
                <div className="block lg:hidden">
                  <div className="">
                    <BsPhone className="text-6xl lg:text-8xl bg-red-600/60 text-white rounded-full p-4 mx-auto my-5" />
                  </div>
                  <div className="px-4 mb-4 text-center lg:w-96 mx-auto">
                    <h3 className="text-xl lg:text-3xl my-6 uppercase font-semibold">
                      Phone
                    </h3>
                    <p className="text-xs lg:text-base text-red-800 opacity-80">
                      +8801345-600600
                    </p>
                  </div>
                </div>
                <div>
                  <div className="">
                    <FaFacebookF className="text-6xl lg:text-8xl bg-red-600/60 text-white rounded-full p-4 mx-auto my-5" />
                  </div>
                  <div className="px-4 mb-4 text-center lg:w-96 mx-auto">
                    <h3 className="text-xl lg:text-3xl my-6 uppercase font-semibold">
                      Facebook
                    </h3>
                    <p className="text-xs lg:text-base text-red-800 opacity-80">
                      Like Us
                    </p>
                  </div>
                </div>
                <div>
                  <div className="">
                    <FaInstagram className="text-6xl lg:text-8xl bg-red-600/60 text-white rounded-full p-4 mx-auto my-5" />
                  </div>
                  <div className="px-4 mb-4 text-center lg:w-96 mx-auto">
                    <h3 className="text-xl lg:text-3xl my-6 uppercase font-semibold">
                      Instagram
                    </h3>
                    <p className="text-xs lg:text-base text-red-800 opacity-80">
                      Follow Us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
