import React, { forwardRef } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";
import ResumeCard from "../../widgets/ResumeCard";
import Button from "../../widgets/Button";

const Resume = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="ftco-section ftco-no-pb resume-section">
        <div className="container">
          <HeadinContent
            h1Heading="Education"
            h2Heading="Education"
            paraName="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          />
          <div className="row d-flex">
            <div className="col-md-6">
              <ResumeCard year="2021-2025" from="Dr. APJ Abdul kalam technical univercity" course="B.tech(Information technology)" />
              <ResumeCard year="2019-2021" course="Intermediate" from="Om kamal public school lalpur bazar(sitapur)" />

            </div>
            <div className="col-md-6">
              <ResumeCard year="2017-2019" from="Dr. APJ Abdul kalam technical univercity" course="Metriculation" />
              <ResumeCard year="2019-2021" course="Intermediate" from="Om kamal public school lalpur bazar(sitapur)" />
            </div>
          </div>

          <Button BtnName="Download CV" />

        </div>
      </section>
    </>
  );
});

export default Resume;
