import React from "react";
import "./_main12.scss";
import GradiantButton from "../GradiantButton/GradiantButton";

const Main12 = () => {
  return (
    <main className="main12">
      <div className="one-h2-tag">
        <h2>Ready To See Ilmversity In Action?</h2>
      </div>
      <section className="for-center-main12">
        <div className="two-buttons">
          <GradiantButton text="Discover More" />

          <GradiantButton text="Schedule a Demo" />
        </div>

        <div className="line"></div>
      </section>
    </main>
  );
};

export default Main12;
