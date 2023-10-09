const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto my-16">
      <h3 className="text-center text-5xl mb-3">Our Gallery</h3>
      <p className="text-center text-xl text-gray-700 mb-8">
        We make your events smart & impactful by personalized event management
        services
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-2 lg:mx-0">
        <div className="md:col-span-2">
          <img
            className="md:w-full md:h-full"
            src="https://i.ibb.co/hR0j7fm/Conferences-des.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="mb-3"
            src="https://i.ibb.co/6tGYsdP/Team-des.jpg"
            alt=""
          />
          <img src="https://i.ibb.co/DRjWnK5/conference.webp" alt="" />
        </div>
        <div className="">
          <img
            className="mb-3"
            src="https://i.ibb.co/bF9fQcf/Product-des.webp"
            alt=""
          />
          <img src="https://i.ibb.co/9TSZ59J/Corporate-des.jpg" alt="" />
        </div>
        <div className="md:col-span-2">
          <img
            className="md:w-full md:h-full"
            src="https://i.ibb.co/fnkrcf9/Product.webp"
            alt=""
          />
        </div>

        <div className="md:col-span-2">
          <img
            className="md:w-full"
            src="https://i.ibb.co/kgQvh58/Trade-des.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:h-full"
            src="https://i.ibb.co/FsnGNz2/Corporate.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
