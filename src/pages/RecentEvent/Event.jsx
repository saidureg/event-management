import PropTypes from "prop-types";
const Event = ({ event }) => {
  const { name, image, event_date, address } = event;
  const eventStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div>
      <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
          style={eventStyle}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 py-14 px-6 md:px-12">
          <h2 className="mb-6 block text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
            {name}
          </h2>
          <h5 className="mb-4 block text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
            {event_date}
          </h5>
          <p className="mb-4 block text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object,
};

export default Event;
