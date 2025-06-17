import React from "react";
import "./About.css";
import Image from "../../assets/viren.png";
import Resume from "../../assets/VIREN-RANGANI-RESUME.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am a dedicated and detail-oriented professional with a passion
              for delivering high-quality work and creative solutions. With a
              strong foundation in web development. I specialize in specific
              skills building responsive websites, crafting visual identities,
              or developing strategic campaigns that help businesses and
              individuals achieve their goals. Driven by curiosity and
              continuous improvement, I thrive in collaborative environments and
              enjoy turning complex challenges into elegant, user-friendly
              results. Whether working independently or as part of a team, I
              bring a proactive mindset and a commitment to excellence in every
              project I undertake.
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="about__list">
              <li>HTML,CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MONGO-DB</li>
              <li>Express.js</li>
              <li>NestJS</li>
              <li>Tailwind CSS</li>
              <li>Flutter</li>
              <li>Dart</li>
              <li>Python</li>
              <li>Git</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Language</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
