// src/components/AnimatedEyes.jsx
import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AnimatedEyes = () => {
  const [rotation, setRotation] = useState({ left: 0, right: 0 });
  const eyeRefLeft = useRef(null);
  const eyeRefRight = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (eyeRefLeft.current && eyeRefRight.current) {
        // Get the center of the left eye
        const rectLeft = eyeRefLeft.current.getBoundingClientRect();
        const centerLeftX = rectLeft.left + rectLeft.width / 2;
        const centerLeftY = rectLeft.top + rectLeft.height / 2;

        // Get the center of the right eye
        const rectRight = eyeRefRight.current.getBoundingClientRect();
        const centerRightX = rectRight.left + rectRight.width / 2;
        const centerRightY = rectRight.top + rectRight.height / 2;

        // Calculate angle for left eye
        const angleLeft = Math.atan2(e.clientY - centerLeftY, e.clientX - centerLeftX) * (180 / Math.PI);
        // Calculate angle for right eye
        const angleRight = Math.atan2(e.clientY - centerRightY, e.clientX - centerRightX) * (180 / Math.PI);

        setRotation({ left: angleLeft, right: angleRight });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex justify-center items-center bg-gray-800 rounded-full shadow-2xl overflow-hidden mb-6">
      {/* Character Head/Body */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="absolute w-full h-full bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 rounded-full"
      />

      {/* Left Eye */}
      <div className="absolute left-[25%] top-[35%] w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex justify-center items-center shadow-lg">
        <motion.div
          ref={eyeRefLeft}
          className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full"
          style={{
            transform: `rotate(${rotation.left}deg) translateX(10px)`, // Pupil movement
            transformOrigin: 'center center'
          }}
        />
      </div>

      {/* Right Eye */}
      <div className="absolute right-[25%] top-[35%] w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex justify-center items-center shadow-lg">
        <motion.div
          ref={eyeRefRight}
          className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full"
          style={{
            transform: `rotate(${rotation.right}deg) translateX(10px)`, // Pupil movement
            transformOrigin: 'center center'
          }}
        />
      </div>

      {/* Mouth */}
      <div className="absolute bottom-[20%] w-16 h-8 sm:w-20 sm:h-10 bg-white rounded-b-full border-t-2 border-gray-300"></div>
    </div>
  );
};

export default AnimatedEyes;