import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";

const ServicesDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const selectService = services.find((service) => service.id === id);
  const { name, title, thumbnail, description, price } = selectService;
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 mb-8">
        <div className="relative flex w-full lg:w-3/4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 lg:shadow-md">
          <div className="relative m-0 shrink-0 overflow-hidden rounded-xl p-4 bg-white bg-clip-border text-gray-700">
            <img
              src={thumbnail}
              alt={name}
              className="max-h-[70vh] w-full object-cover rounded-xl"
            />
          </div>
          <div className="p-6">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              {description}
            </p>
          </div>
        </div>
        <div className="w-3/4 mx-auto lg:w-1/4">
          <div className="border border-[#ff881e] p-3 rounded">
            <h3 className="text-xl mt-2 text-[#212529]">Starting at:</h3>
            <table className="border-collapse border border-[#c1a26c] w-full mt-2">
              <tr>
                <th className="border border-[#dee2e6] p-3">Regular</th>
                <th className="border border-[#dee2e6] p-3">${price}</th>
              </tr>
            </table>
          </div>
          <div className="bg-[#ff881e] border border-[#ff881e] rounded p-3 my-6 space-y-3">
            <h3 className="text-white text-center text-3xl font-semibold uppercase">
              Booking Query
            </h3>
            <p className="text-sm">
              Please leave your details and let us take care of the rest
            </p>
            <form>
              <input
                type="text"
                placeholder="Company Name"
                className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
              />
              <input
                type="number"
                placeholder="Mobile Number"
                className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
              />
              <input
                type="datetime"
                name="date"
                placeholder="Date"
                className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
              />
              <textarea
                name="text"
                placeholder="Details of your requirements"
                cols="10"
                rows="5"
                className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
              ></textarea>
              <button className="btn btn-outline text-white flex w-full text-lg my-4">
                Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
