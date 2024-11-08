import React from "react";
import Image from "next/image";

const Service = () => {
  return (
    <section className="service">
      <h2 className="section-title">Services</h2>

      <div className="service-info">
        <div className="grid">
          <div className="grid-card">
            <Image src={"/images/s1.png"} alt="card" height={100} width={100} />
            <h3>Web Applications</h3>
            <p>Tailored web apps built with the latest technologies.</p>
          </div>

          <div className="grid-card">
            <Image src={"/images/s2.png"} alt="card" height={100} width={100} />
            <h3>E-commerce Websites</h3>
            <p>Secure online stores with user-friendly shopping.</p>
          </div>

          <div className="grid-card">
            <Image src={"/images/s4.png"} alt="card" height={100} width={100} />
            <h3>User Interfaces</h3>
            <p>Engaging, responsive front-end designs and user experiences.</p>
          </div>

          <div className="grid-card">
            <Image src={"/images/s7.png"} alt="card" height={100} width={100} />
            <h3>Speed Optimization</h3>
            <p>Boost performance with faster load times and optimization.</p>
          </div>
        </div>

        <Image
          src="/images/banner_bg.png"
          alt="Profile Pic"
          height={2000}
          width={2000}
          className="img"
        />
      </div>
    </section>
  );
};

export default Service;
