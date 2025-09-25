import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import logo1 from "../assets/socialLogo.png";
import PikachuEyes from "../components/PikachuEyes";
import { signUpUser } from "../apiCalls/authCalls";
import { setUserData } from "../redux/userSclice";
import { useDispatch } from "react-redux";

function SignUp() {
  const [name, setName] = useState("");
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const  handleSignUp = async(e)=> {
    e.preventDefault()
    try {
      const data = await signUpUser({name,username,password,email})
      console.log("Signup Success:",data);
      dispatch(setUserData(data))
      navigate("/signin");
    } catch (error) {
      console.log("SignUp Error:",error);
    }
  }
  const formVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: 0.2,
        duration: 0.8,
      },
    },
  };
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#120527] text-white font-sans flex justify-center items-center p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(100%_100%_at_50%_0%,rgba(81,91,212,0.3)_0%,rgba(129,52,175,0)_50%,rgba(129,52,175,0)_100%)]"></div>
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dfhpkqrjw/image/upload/v1726402099/grid_xotqoc.svg')] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl h-auto min-h-[600px] bg-white/5 backdrop-blur-xl rounded-3xl flex flex-col lg:flex-row overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="w-full lg:w-[55%] p-8 md:p-12 flex flex-col items-center justify-center text-center">
          <div className="mb-6">
            <PikachuEyes isPasswordFocused={isPasswordFocused} />{" "}
            {/* Pass the state */}
            <div className="flex gap-2 items-center text-3xl font-bold text-white mt-4">
              <span>Sign Up to</span>
              <img src={logo1} alt="Scaler Gram Logo" className="w-[80px]" />
            </div>
            <p className="text-white/70 mt-2 text-md">
              Join the coolest network today!
            </p>
          </div>

          <form className="w-full max-w-sm flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                className="w-full p-3 pl-10 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/50 transition-all duration-300"
                placeholder="Enter Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
            </div>

            <div className="relative">
              <input
                type="text"
                id="userName"
                className="w-full p-3 pl-10 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/50 transition-all duration-300"
                placeholder="Enter Username"
                required
                value={username}
                onChange={(e) => setuserName(e.target.value)}
              />
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full p-3 pl-10 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/50 transition-all duration-300"
                placeholder="Enter Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full p-3 pl-10 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-white/50 transition-all duration-300"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsPasswordFocused(true)} // Set focus state
                onBlur={() => setIsPasswordFocused(false)} // Clear focus state
              />
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
            </div>

            <button

              type="submit"
              className="w-full p-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/20 hover:from-blue-600 hover:to-purple-700 active:scale-[0.98] transition-all duration-300"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-white/70 text-sm">
            Already Have An Account?{" "}
            <Link
              to="/signin"
              className="font-semibold text-purple-400 hover:text-purple-300 transition-colors border-b border-purple-400 pb-px"
            >
              Sign In
            </Link>
          </p>
        </div>

        <div className="hidden lg:flex lg:w-[45%] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex-col gap-4 items-center justify-center p-8 rounded-r-3xl text-white text-center">
          <img
            src={logo1}
            alt="Scaler Gram Icon"
            className="w-[150px] drop-shadow-lg"
          />
          <h2 className="text-4xl font-extrabold tracking-wide">Scaler Gram</h2>
          <p className="opacity-90 text-lg">
            Scaling Connections to the Next Level
          </p>
        </div>
      </motion.div>
    </div>
  );
}
export default SignUp;