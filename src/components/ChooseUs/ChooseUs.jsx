import { CiTrophy } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
const ChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto my-16">
      <h3 className="text-center text-3xl md:text-5xl mb-3">Why Choose Us</h3>
      <div className="border-2 w-[210px] md:w-[350px] mx-auto mb-3"></div>
      <p className="text-center text-xl text-gray-700 mb-8">
        That Event will be Remembered
      </p>
      <div className="flex flex-col lg:flex-row gap-5 mx-2 lg:mx-9">
        <div className="border rounded-lg border-red-300">
          <div className="">
            <CiTrophy className="text-8xl bg-red-600 text-white rounded-full p-4 mx-auto my-5" />
          </div>
          <div className="px-4 mb-4 text-center lg:w-96 mx-auto">
            <h3 className="text-3xl my-6 uppercase font-semibold">
              experienced and versatile
            </h3>
            <p className="text-red-800 opacity-80">
              25 years of experience in a variety of fields, including real
              estate, banking, IT, pharmaceuticals, and luxury.
            </p>
          </div>
        </div>
        <div className="border rounded-lg border-red-300">
          <div className="">
            <BsCurrencyDollar className="text-8xl bg-red-600 text-white rounded-full p-4 mx-auto my-5" />
          </div>
          <div className="px-4 mb-4 text-center lg:w-96 mx-auto">
            <h3 className="text-3xl my-6 uppercase font-semibold">
              Cost Effective
            </h3>
            <p className="text-red-800 opacity-80">
              Marketing experience that tailored to your needs and your budget
            </p>
          </div>
        </div>
        <div className="border rounded-lg border-red-300">
          <div className="">
            <AiOutlineGlobal className="text-8xl bg-red-600 text-white rounded-full p-4 mx-auto my-5" />
          </div>
          <div className="px-4 mb-4 text-center lg:w-96 mx-auto">
            <h3 className="text-3xl my-6 uppercase font-semibold">
              Global Trade Network
            </h3>
            <p className="text-red-800 opacity-80">
              Working internationally and utilizing the greatest talent to
              provide faultless execution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
