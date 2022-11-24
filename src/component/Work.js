import React, { useState,useEffect } from "react";
import WorkDetail from "../PropertyDetails/WorkDetail";
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../CSS/Work.css'
const Work = () => {
  const [ detail ] = useState(WorkDetail);
  useEffect(()=>{
    Aos.init({duration:2500, once:true, easing:"ease"})
  },[])
  return (
    <>
      <section className="work">
        <div className="overlay"></div>
        <div data-aos="fade-up" className="work-container">
          <div className="work-heading">
            <span>Work Flow</span>
            <h2>How It Work </h2>
          </div>
          <div className="column1">
            <div className="work-row">
              {
                detail && detail.map((detail) => {

                return (
                  <div className="work-card">
                    <div className="work-column">
                      <div className="content">
                        <div className="number">
                          <span>{detail.number}</span>
                        </div>
                        <div className="work-content">
                          <h3>{detail.heading}</h3>
                          <p>{detail.info}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
