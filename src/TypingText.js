import React, { useState, useEffect } from "react";

const TypingText = ({ 
  texts = ["Hello, World!"], 
  speed = 100, 
  pause = 1000, 
  loop = true 
}) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setCurrentText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setCurrentText(fullText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed, pause]);

  return (
    <h5 className="section-title">
      {currentText}
      <span className="cursor">|</span>
    </h5>
  );
};

export default TypingText;
