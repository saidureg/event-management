const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content py-10">
      <footer className="footer grid-cols-2 md:grid-cols-4 lg:gap-32 max-w-7xl mx-auto px-14 md:px-4 lg:px-0">
        <aside className="col-span-2 md:col-span-4 lg:col-span-1">
          <p>
            <span className="text-lg font-semibold block">
              <span className="text-5xl block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#C2BFBF]">
                Astral
              </span>{" "}
              Event Management.
            </span>
            Reliable event management since 1992
          </p>
          <p>
            <small className="text-xs">
              Copyright &copy; 2023 - All right reserved
            </small>
          </p>
        </aside>
        <nav className="">
          <header className="footer-title">Services</header>
          <a className="link link-hover">Trade Shows and Expos</a>
          <a className="link link-hover">Product Launches</a>
          <a className="link link-hover">Corporate Meetings</a>
          <a className="link link-hover">Award Ceremonies</a>
        </nav>
        <nav className="hidden md:flex flex-col">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
