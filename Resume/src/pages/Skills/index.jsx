import React, { forwardRef } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";
import SkillContent from "../../widgets/SkillContent";
import SkillComp from "../../components/MyskillsComp";
import react from '../../assets/logos/react.png';
import mongo from '../../assets/logos/mongo.png';
import jquery from '../../assets/logos/jquery.png';
import node from '../../assets/logos/nodejs.png';
import ds from '../../assets/logos/ds.png';
import github from '../../assets/logos/github.png';
import html from '../../assets/logos/html.png';
import npm from '../../assets/logos/npm.webp';
import css from '../../assets/logos/css.webp';
import c from '../../assets/logos/c.png';
import bootstrap from '../../assets/logos/bootstrap.jpeg';
import algo from '../../assets/logos/algo.jpeg';


const Skills = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="Skills-section">
        <div className="container">
          <HeadinContent
            h1Heading="Skills"
            h2Heading="My Skills"
            paraName="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
          <div className="skills">
            <SkillComp logo={react} name="react.js" />
            <SkillComp logo={mongo} name="mongodb" />
            <SkillComp logo={node} name="node.js" />
            <SkillComp logo={jquery} name="jquery" />
            <SkillComp logo={ds} name="ds" />
            <SkillComp logo={github} name="github" />
            <SkillComp logo={html} name="html5" />
            <SkillComp logo={npm} name="npm" />
            <SkillComp logo={css} name="css" />
            <SkillComp logo={c} name="c lang" />
            <SkillComp logo={bootstrap} name="Bootstrap" />
            <SkillComp logo={algo} name="alogorithm" />


          </div>
        </div>
      </section>
    </>
  );
});

export default Skills;
