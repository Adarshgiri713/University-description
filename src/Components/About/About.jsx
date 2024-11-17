import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Moving away from technical–rational emphases in curriculum
          development, where curriculum is conceived as predetermined content
          that is covered in linear and accumulative ways, those involved in
          curriculum studies and practices.
        </p>
        <p>
          Most states have norms prescribing what ought to be taught, which are
          authoritative in the sense that they have been established by someone
          who is entitled to do so.
        </p>
        <p>
          The school education system in India is vast and complex. It is
          overseen by three national bodies: The All India Council for Technical
          Education, the University Grants Commission, and the National Council
          of Educational Research and Training. In addition to these, each state
          has its Department or Ministry of Education, which regulates school
          education within its jurisdiction.
        
        </p>
      </div>
    </div>
  );
};

export default About;
