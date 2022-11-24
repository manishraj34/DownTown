import React, { useState } from "react";
import PropertyDetail from "../PropertyDetails/PropertyDetails";
import '../CSS/Property.css'
const Property = () => {
  const [details] = useState(PropertyDetail);
  return (
    <>
      <section className="property">
        <div className="center">
          <h3>Popular Properties</h3>
        </div>
        <div className="row">
          {details.map((details) => {
            return (
              <div className="column">
                <div className="single-property">
                  <div className="card">
                    <div className="property-thumb">
                      <div className="property-tag">For Sale</div>
                      <img src={details.Image} alt="Place" />
                    </div>
                    <div className="property-content">
                      <h3>{details.heading}</h3>
                      <div className="mark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-geo-alt"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <span>{details.span}</span>
                      </div>
                      <span className="amount">{details.amount}</span>
                    </div>
                    <div className="property-footer">
                      <ul>
                        <li>
                          <span>{details.size}</span>
                        </li>
                        <li>
                          <img src={details.bedImage} alt="" />
                          <span>{details.bed}</span>
                        </li>
                        <li>
                          <img src={details.bathImage} alt="" />
                          <span>{details.bath}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="more-property">
          <a href="/" className="property-btn">
            More Properties
          </a>
        </div>
      </section>
    </>
  );
};

export default Property;
