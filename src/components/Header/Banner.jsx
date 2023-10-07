import { useEffect } from "react";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider4 from "../../assets/slider4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="carousel w-full max-h-[80vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 to-gray-800 opacity-30"></div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="text-white my-12 lg:my-16">
            ❮
          </a>
          <div className="text-white text-center">
            <h3
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="text-sm md:text-lg lg:text-xl mb-3 font-PtSerif"
            >
              We are the Event Management Specialists
            </h3>
            <h3
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="text-lg md:text-3xl lg:text-7xl font-semibold"
            >
              WE PERSONALIZE YOUR
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-[#AFB6C1]">
                CORPORATE EVENTS
              </span>
            </h3>
          </div>

          <a href="#slide2" className="text-white my-12 lg:my-16">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider2} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 to-gray-800 opacity-30"></div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="text-white my-12 lg:my-16">
            ❮
          </a>
          <a href="#slide3" className="text-white my-12 lg:my-16">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 to-gray-800 opacity-40"></div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="text-white my-12 lg:my-16">
            ❮
          </a>

          <div className="text-white text-center">
            <h3
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className=" text-xs md:text-lg lg:text-xl mb-3 font-PtSerif"
            >
              Recognizing the Best, Inspiring the Rest
            </h3>
            <h3
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className=" text-sm md:text-2xl lg:text-4xl font-bold"
            >
              Join us as we applaud the brilliance that sets new
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-orange-600">
                standards in our Award Gala
              </span>
            </h3>
          </div>

          <a href="#slide4" className="text-white my-12 lg:my-16">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slider4} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 to-gray-800 opacity-50"></div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="text-white my-12 lg:my-16">
            ❮
          </a>

          <div className="text-white text-center">
            <h3
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="text-xs md:text-lg lg:text-xl mb-3 font-PtSerif"
            >
              From Concept to Commerce, Witness the Evolution
            </h3>
            <h3
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="text-sm md:text-2xl lg:text-4xl font-bold text-[#F1EAEA]"
            >
              Our Trade Show - Where Ideas Become Deals
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-orange-600">
                and Connections Turn into Collaborations.
              </span>
            </h3>
          </div>
          <a href="#slide1" className="text-white my-12 lg:my-16">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
