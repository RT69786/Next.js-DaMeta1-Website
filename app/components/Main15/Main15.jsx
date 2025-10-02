import React from "react";
import "./_main15.scss";
import SmallCard from "../SmallCard/SmallCard";

const Main15 = () => {
  return (
    <main className="main15">
      <section className="for-center-main15">
        <div className="div-one">
          <SmallCard
            image="/pics/pic16.png"
            title="For Entrepreneurs & Businesses"
            description="Set up your virtual office in Business Bay, host global conferences, and invest in digital real estate."
          />

          <SmallCard
            image="/pics/pic15.png"
            title="For Content Creators & Developers"
            description="Build and monetize your innovations in Eureka, the creator’s hub powered by AI and Blockchain."
          />

          <SmallCard
            image="/pics/pic17.png"
            title="For Gamers & Developers"
            description="Step into Gameaholic, where immersive gameplay, E-Sports tournaments and user generated worlds redefine gaming."
          />
        </div>
        <div className="div-two">
          <SmallCard
            image="/pics/pic18.png"
            title="For Investors & Owners"
            description="Claim your stake in the future of real estate through Business Bay’s metaverse driven economy."
          />

          <SmallCard
            image="/pics/pic19.png"
            title="For Entertainment Enthusiasts"
            description="Experience concerts, sports  events, and live shows in Dope, the entertainment capital of DaMeta1."
          />
        </div>
      </section>
    </main>
  );
};

export default Main15;
