"use client";

import React, { useState } from "react";
import GradiantButton from "../GradiantButton/GradiantButton";
import "./_main07.scss";

const Main07 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="main07">
      <div className="main07__video-box">
        {!isPlaying ? (
          <>
            <img
              src="/pics/Background1.jpg" // replace with your thumbnail
              alt="Video Thumbnail"
              className="main07__thumbnail"
            />
            <button
              className="main07__play-button"
              onClick={() => setIsPlaying(true)}
            >
              ▶
            </button>
          </>
        ) : (
          <iframe
            className="main07__iframe"
            src="https://www.youtube.com/embed/vWVm_9ewZ_Q?autoplay=1&rel=0"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="main07__cta">
        <GradiantButton text="See How It Works" />
      </div>
    </section>
  );
};

export default Main07;
