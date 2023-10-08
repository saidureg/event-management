import { Link, Navigate } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import loginImg from "../../assets/secure_login.png";
import { BsGoogle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../provide/AuthProvide";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { signIn, user, googleLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    e.target.reset();
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const googleProvide = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleLogin(googleProvide)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#7B014C]/80">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-white text-black hover:text-xl hover:scale-105">
                  Login
                  {user && <Navigate to={"/"}></Navigate>}
                </button>
              </div>
              <div>
                <p className="text-white flex items-center gap-3 mt-5">
                  Login with
                  <span
                    onClick={handleGoogleSignIn}
                    className=" hover:text-xl ml-2 hover:opacity-70 btn flex items-center gap-2"
                  >
                    <BsGoogle /> Google
                  </span>
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
