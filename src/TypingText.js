import React, { useState, useEffect, useRef } from "react";

const TypingText = ({ text = "", speed = 150, pause = 1000 }) => {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        if (index < text.length) {
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (index > 0) {
          setIndex(index - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [index, isDeleting, text, speed, pause]);

  const displayedText = text.substring(0, index);

  return <h5>Hello,{displayedText}|</h5>;
};

export default TypingText;
