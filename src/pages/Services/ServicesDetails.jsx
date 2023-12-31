import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";

const ServicesDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const selectService = services.find((service) => service.id === id);
  const { name, title, thumbnail, description, price, details } = selectService;

  const handleBooking = (e) => {
    e.preventDefault();
    e.target.reset();
    swal(
      "Event Booking successfully",
      "Our team will contact you soon",
      "success"
    );
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 mb-8">
        <div className="relative flex w-full lg:w-3/4 flex-col rounded-xl bg-white bg-clip-border lg:shadow-md">
          <div className="relative m-0 shrink-0 overflow-hidden rounded-xl p-4 bg-white bg-clip-border">
            <img
              src={thumbnail}
              alt={name}
              className="max-h-[70vh] w-full object-cover rounded-xl"
            />
          </div>
          <div className="p-6">
            <h4 className="mb-2 block text-xl md:text-3xl font-semibold leading-snug tracking-normal text-gray-900 antialiased">
              {title}
            </h4>
            <p className="mb-8 block text-base font-normal leading-relaxed text-gray-700 antialiased">
              {description}
            </p>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 my-4">
                Our services include:
              </h3>
              <ul className="text-gray-700">
                {details?.servicesInclude.map((moreServices) => (
                  <>
                    <li className="list-disc ml-8 mb-2">{moreServices} </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-3/4 mx-auto lg:w-1/4">
          <div className="border border-[#ff881e] p-3 rounded">
            <h3 className="text-xl mt-2 text-[#212529]">Starting at:</h3>
            <table className="border-collapse border border-[#c1a26c] w-full mt-2">
              <thead>
                <tr>
                  <th className="border border-[#dee2e6] p-3 text-gray-700">
                    Regular
                  </th>
                  <th className="border border-[#dee2e6] p-3 text-gray-700">
                    ${price}
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="bg-[#ff881e] border border-[#ff881e] rounded p-3 my-6 space-y-3">
            <h3 className="text-white text-center text-2xl md:text-3xl font-semibold uppercase">
              Booking Query
            </h3>
            <p className="text-sm text-gray-700">
              Please leave your details and let us take care of the rest
            </p>
            <form onSubmit={handleBooking}>
              <input
                type="text"
                placeholder="Company Name"
                required
                className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
              />
              <input
                type="number"
                placeholder="Mobile Number"
                required
                className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
              />
              <input
                type="datetime"
                name="date"
                placeholder="Date"
                required
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
