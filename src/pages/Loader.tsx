import React from "react";

const sentences = [
  "Pouring some wine...",
  "Hitting popcorn...",
  "Catching Pikachu...",
  "Eating pizza...",
  "Taking a selfie...",
  "Loading fun...",
  "Taming a dragon...",
  "Brewing coffee...",
  "Charging your vibe...",
  "Solving world peace...",
];

const Loader: React.FC = () => {
  const randomSentence =
    sentences[Math.floor(Math.random() * sentences.length)];

  return (
    <div className="loader-container">
      <p className="loader-text">{randomSentence}</p>
    </div>
  );
};

export default Loader;
