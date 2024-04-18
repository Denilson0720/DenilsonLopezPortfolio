import React, { useState, useEffect } from 'react';

const TextShifter = ({ words }) => {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (typing) {
        // Typing effect
        if (text !== words[counter]) {
          setText(prevText => words[counter].slice(0, prevText.length + 1));
        } else {
          // Once fully typed, start deleting
          setTyping(false);
        }
      } else {
        // Deleting effect
        if (text !== '') {
          setText(prevText => prevText.slice(0, prevText.length - 1));
        } else {
          // Once fully deleted, move to next word
          setCounter(prevCounter => (prevCounter + 1) % words.length);
          setTyping(true);
        }
      }
    }, 80);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [words, counter, text, typing]);

  return <span>{text}</span>;
};

export default TextShifter;
