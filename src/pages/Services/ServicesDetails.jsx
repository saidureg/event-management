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
      <div className="max-w-7xl mx-auto flex gap-5">
        <div className="relative flex w-3/4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 shrink-0 overflow-hidden rounded-xl p-4 bg-white bg-clip-border text-gray-700">
            <img
              src={thumbnail}
              alt={name}
              className="max-h-[70vh] w-full object-cover rounded-xl"
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              startups
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              {description}
            </p>
            <a className="inline-block" href="#">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="border w-1/4">
          <div className="border p-4">
            <h3>Starting at:</h3>
            <table className="border-collapse border border-[#c1a26c] w-full mt-2">
              <tr>
                <th className="border border-[#dee2e6] p-4">Regular</th>
                <th className="border border-[#dee2e6] p-4">${price}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
