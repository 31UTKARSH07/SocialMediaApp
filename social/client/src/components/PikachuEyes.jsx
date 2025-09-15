// src/components/PikachuEyes.jsx
import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const PikachuEyes = ({ isPasswordFocused }) => {
  const [eyeRotation, setEyeRotation] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  // Constants for pupil movement limits (how far pupils can move within the eye)
  const PUPIL_MOVE_RANGE = 4; // pixels

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isPasswordFocused && leftPupilRef.current && rightPupilRef.current) {
        // --- Left Eye ---
        const leftEyeRect = leftPupilRef.current.parentElement.getBoundingClientRect(); // Get the bounding box of the white eye part
        const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
        const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;

        const deltaXLeft = e.clientX - leftEyeCenterX;
        const deltaYLeft = e.clientY - leftEyeCenterY;

        const angleLeft = Math.atan2(deltaYLeft, deltaXLeft);
        const distanceLeft = Math.min(
          Math.sqrt(deltaXLeft * deltaXLeft + deltaYLeft * deltaYLeft),
          PUPIL_MOVE_RANGE
        );

        const newXLeft = distanceLeft * Math.cos(angleLeft);
        const newYLeft = distanceLeft * Math.sin(angleLeft);

        // --- Right Eye ---
        const rightEyeRect = rightPupilRef.current.parentElement.getBoundingClientRect(); // Get the bounding box of the white eye part
        const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
        const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

        const deltaXRight = e.clientX - rightEyeCenterX;
        const deltaYRight = e.clientY - rightEyeCenterY;

        const angleRight = Math.atan2(deltaYRight, deltaXRight);
        const distanceRight = Math.min(
          Math.sqrt(deltaXRight * deltaXRight + deltaYRight * deltaYRight),
          PUPIL_MOVE_RANGE
        );

        const newXRight = distanceRight * Math.cos(angleRight);
        const newYRight = distanceRight * Math.sin(angleRight);

        setEyeRotation({
          left: { x: newXLeft, y: newYLeft },
          right: { x: newXRight, y: newYRight },
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isPasswordFocused]); // Re-run effect if password focus changes

  // Variants for eye-hiding animation (e.g., eyelids closing)
  const eyelidVariants = {
    open: { y: 0 },
    closed: { y: '50%' }, // Moves the lid down halfway to cover pupils
  };

  return (
    <div className="w-56 h-56 sm:w-64 sm:h-64 relative flex justify-center items-center overflow-hidden mb-6">
      {/* Pikachu SVG */}
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100" // Adjust viewBox if your SVG dimensions change
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {/* Main Body */}
        <circle cx="50" cy="50" r="45" fill="#FFD700" /> {/* Pikachu Yellow */}

        {/* Ears */}
        {/* Left Ear */}
        <path d="M 25 20 Q 15 5 35 10 L 40 25 Z" fill="#FFD700" />
        <path d="M 28 17 Q 20 6 36 12 L 38 18 Z" fill="#202020" /> {/* Black tip */}
        {/* Right Ear */}
        <path d="M 75 20 Q 85 5 65 10 L 60 25 Z" fill="#FFD700" />
        <path d="M 72 17 Q 80 6 64 12 L 62 18 Z" fill="#202020" /> {/* Black tip */}

        {/* Cheeks */}
        <circle cx="28" cy="65" r="7" fill="#E60023" /> {/* Red Cheek */}
        <circle cx="72" cy="65" r="7" fill="#E60023" /> {/* Red Cheek */}

        {/* Mouth (simple smile) */}
        <path d="M 40 75 Q 50 85 60 75" stroke="#202020" strokeWidth="2" fill="none" />

        {/* Left Eye */}
        <circle cx="38" cy="40" r="10" fill="white" /> {/* White of eye */}
        <motion.circle
          ref={leftPupilRef}
          cx="38"
          cy="40"
          r="5"
          fill="black"
          animate={{ x: isPasswordFocused ? 0 : eyeRotation.left.x, y: isPasswordFocused ? 0 : eyeRotation.left.y }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
         {/* Eyelid for closing effect */}
        <motion.rect
          x="28" y="30" width="20" height="10" fill="#FFD700"
          variants={eyelidVariants}
          initial="open"
          animate={isPasswordFocused ? "closed" : "open"}
          transition={{ duration: 0.2 }}
        />

        {/* Right Eye */}
        <circle cx="62" cy="40" r="10" fill="white" /> {/* White of eye */}
        <motion.circle
          ref={rightPupilRef}
          cx="62"
          cy="40"
          r="5"
          fill="black"
          animate={{ x: isPasswordFocused ? 0 : eyeRotation.right.x, y: isPasswordFocused ? 0 : eyeRotation.right.y }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
        {/* Eyelid for closing effect */}
        <motion.rect
          x="52" y="30" width="20" height="10" fill="#FFD700"
          variants={eyelidVariants}
          initial="open"
          animate={isPasswordFocused ? "closed" : "open"}
          transition={{ duration: 0.2 }}
        />
      </motion.svg>
    </div>
  );
};

export default PikachuEyes;