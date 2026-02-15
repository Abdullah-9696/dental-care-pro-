import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../pages/HeroSection";
import CTASection from "../pages/CTASection";

/* IMPORT YOUR LOCAL IMAGES FROM ASSETS */

import whitening from "../assets/0170678001639425089.jpg";
import implant from "../assets/gettyimages-1296443450-612x612.jpg";
import surgery from "../assets/doctor2.jpg";   // change name if different

export default function Home() {
  return (
    <div>

      <Navbar />
      <HeroSection />
      <CTASection />

      {/* SERVICES */}

      <section className="container-page">

        <h2 className="section-title">Trusted Dental Services</h2>

        <div className="cards-grid">

          {/* CARD 1 */}
          <div className="card">
            <img className="card-img" src={whitening} alt="Teeth Whitening"/>
            <div className="card-body">
              <h3>Teeth Whitening</h3>
              <p>Brighten your smile safely.</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card">
            <img className="card-img" src={implant} alt="Dental Implant"/>
            <div className="card-body">
              <h3>Dental Implant</h3>
              <p>Permanent tooth replacement.</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="card">
            <img className="card-img" src={surgery} alt="Oral Surgery"/>
            <div className="card-body">
              <h3>Oral Surgery</h3>
              <p>Advanced professional treatment.</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
