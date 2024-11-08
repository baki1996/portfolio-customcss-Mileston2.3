import React from "react";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <Image
          src="/images/banner_bg.png"
          alt="Profile Pic"
          height={2000}
          width={2000}
        />
        <div className="info-box">

          <div className="text">
            <h3>Hi Im</h3>
            <h1>Bakhtawar Khan</h1>
            <span>FrontEnd Developer</span>
          </div>

          <div className="btn-group">
            <div className="btn"><Link className="aboutLink" href={"/cv-by-html.jpeg"} target="_blank">Download CV</Link></div>
            <div className="btn"> <Link className="aboutLink" href={"/Contact"}>Contact</Link> </div>
          </div>

          <div className="socials">
            <Link style={{color:"black"}} href={"https://github.com/baki1996"} target="_blank"><FaGithub  className="i"/></Link>

            <Link style={{color:"black"}} href={"https://www.linkedin.com/in/bakhtawar-khan-4ab7a32b5/"}target="_blank"><FaLinkedin  className="i"/></Link>

            <Link style={{color:"black"}} href={"https://www.linkedin.com/in/bakhtawar-khan-4ab7a32b5/"} target="_blank"><FaFacebook  className="i"/></Link>
          
          </div>



        </div>


      </div>
    </section>
  );
};

export default About;
