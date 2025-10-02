import React from "react";
import "./_main10.scss";
import {
  RiCheckLine,
  RiPlayCircleLine,
  RiGogglesLine,
  RiCalendar2Line,
  RiUser3Line,
  RiDonutChartLine,
} from "react-icons/ri";

const Main10 = () => {
  return (
    <main className="main10">
      <section className="for-center-main10">
        {/* Core Features */}
        <div className="div-one">
          <h2>Core Features</h2>
          <ul className="three-list-items-one">
            <li>
              <RiCheckLine className="icon" />
              <p>Instant progress tracking: attendance, grades, performance.</p>
            </li>
            <li>
              <RiPlayCircleLine className="icon" />
              <p>Interactive Virtual Lectures</p>
            </li>
            <li>
              <RiGogglesLine className="icon" />
              <p>VR-powered live & on-demand classes.</p>
            </li>
          </ul>
        </div>

        {/* Automated Workflows */}
        <div className="div-two">
          <h2>Automated Workflows</h2>
          <ul className="three-list-items-two">
            <li>
              <RiCalendar2Line className="icon" />
              <p>Exam scheduling</p>
            </li>
            <li>
              <RiUser3Line className="icon" />
              <p>Parent-teacher communications</p>
            </li>
            <li>
              <RiDonutChartLine className="icon" />
              <p>No Manual Edits Required.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main10;
