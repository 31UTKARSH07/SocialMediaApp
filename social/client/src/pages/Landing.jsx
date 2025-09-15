import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Import motion
import logo1 from "../assets/socialLogo.png"; // Your existing logo
import logo2 from "../assets/logo2.png"; // Your existing logo

// Framer Motion variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will make children animate one by one
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function LandingPage() {
  return (
    // New background: A beautiful, animated aurora gradient
    <div className="relative w-full min-h-screen overflow-hidden bg-[#120527] text-white font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(100%_100%_at_50%_0%,rgba(81,91,212,0.3)_0%,rgba(129,52,175,0)_50%,rgba(129,52,175,0)_100%)]"></div>
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dfhpkqrjw/image/upload/v1726402099/grid_xotqoc.svg')] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      
      {/* Navbar with Glassmorphism effect */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-6 lg:px-12 py-4 backdrop-blur-md border-b border-white/10"
      >
        <Link to="/" className="flex items-center gap-3">
          <img src={logo1} alt="logo" className="w-[40px] h-[40px]" />
          <span className="tracking-wider text-xl font-bold">ScalerGram</span>
        </Link>
        <div className="flex gap-4">
          <Link
            to="/signin"
            className="px-5 py-2 text-white/80 rounded-lg font-semibold hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative z-0 flex flex-col lg:flex-row flex-1 justify-center items-center min-h-screen gap-16 px-6 lg:px-20 pt-20 lg:pt-0">
        {/* Left side: Animated text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white flex flex-col gap-6 max-w-xl text-center lg:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
          >
            Connect. Share. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Scaler
            </span>{" "}
            🚀
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/70">
            Welcome to <span className="font-bold text-white/90">Scaler Gram</span> – the
            coolest place to share your journey, connect with people, and scale
            your network to the next level.
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-4 mt-4 justify-center lg:justify-start">
            <Link
              to="/signup"
              className="px-7 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 active:scale-[.98] transform"
            >
              Get Started
            </Link>
            <Link
              to="/signin"
              className="px-7 py-3 bg-white/10 text-white/80 text-lg font-semibold rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300 active:scale-[.98] transform"
            >
              Sign In
            </Link>
          </motion.div>
        </motion.div>

        {/* Right side: Floating logo with a background glow */}
        <div className="relative flex justify-center items-center w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
           <div className="absolute w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-purple-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
           <div className="absolute w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] bg-blue-500 rounded-full blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>
          <motion.img
            src={logo2}
            alt="App Logo"
            className="relative w-[300px] lg:w-[400px]"
            animate={{
                y: [0, -20, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full text-center text-white/50 py-5 text-sm">
        © {new Date().getFullYear()} Scaler Gram — Scaling Connections
      </div>
    </div>
  );
}

export default LandingPage;