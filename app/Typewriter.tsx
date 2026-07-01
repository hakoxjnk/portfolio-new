"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Typewriter() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "I'm a Software Engineer.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i = i >= fullText.length ? 0 : i + 1;
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {displayedText}
      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-[#A855F7]">|</motion.span>
    </span>
  );
}