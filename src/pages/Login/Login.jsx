import { Link } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import loginImg from "../../assets/secure_login.png";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#7B014C]/80">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-white text-black hover:text-xl hover:scale-105">
                  Login
                </button>
              </div>
              <div>
                <p className="text-white flex items-center gap-3 mt-5">
                  Login with
                  <button className=" hover:text-xl ml-2 hover:opacity-70 btn flex items-center gap-2">
                    <BsGoogle className=""></BsGoogle> Google
                  </button>
                </p>
              </div>
              <p className="text-white mt-3">
                Already have account?
                <Link to="/register">
                  <button className="text-xl hover:text-2xl ml-2 hover:opacity-60 hover:underline">
                    Register
                  </button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
