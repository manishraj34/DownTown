import React from "react";
import pic from "../images/collapce.jpg";
import '../CSS/Accordion.css'
const Accordion = () => {
  return (
    <>
      <section className="accordion">
        <div className="accordion-row">
          <div className="left">
            <h3>Frequently Asked</h3>
            <div className="left-content container">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                         How much do I need for a down payment?

                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                    Esteen spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      How much do I have to pay an agent to help me buy a house?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                    Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      What the first step of the home buying process?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                    Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={pic} alt="person" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordion;
