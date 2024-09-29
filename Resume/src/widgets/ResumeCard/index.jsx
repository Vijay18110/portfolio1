import React from "react";
import "./index.css";

const ResumeCard = ({ year, course, from }) => {
  return (
    <>
      <div className="resume-wrap ftco-animate fadeInUp ftco-animated">
        <span className="date">{year}</span>
        <h2>{course}</h2>
        <span>{from}</span>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          perspiciatis amet incidunt quam sed molestiae veritatis saepe aliquid
          aut voluptas.
        </p>
      </div>
    </>
  );
};

export default ResumeCard;
