import React from "react";
import { motion } from "framer-motion";

const CircularRotateCards = () => {
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
  const circleRadius = 150; // Radius of the circular rotation

  return (
    <div className="relative w-full h-[400px] flex justify-center items-center">
      {cards.map((card, index) => {
        const angle = (360 / cards.length) * index; // Calculate angle for each card
        const x = circleRadius * Math.cos((angle * Math.PI) / 180); // X-coordinate
        const y = circleRadius * Math.sin((angle * Math.PI) / 180); // Y-coordinate

        return (
          <motion.div
            key={index}
            className="absolute w-[100px] h-[150px] bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg"
            initial={{
              x: 0,
              y: 0,
              rotate: 0,
            }}
            animate={{
              x,
              y,
              rotate: angle,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            {card}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CircularRotateCards;
