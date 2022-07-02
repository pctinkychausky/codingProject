import React from "react";
import "./carlist.css";
import data from "../data/date.json";
import { nanoid } from "nanoid";

function CarList() {
  return (
    <>
      <div className="CarList-container">
        {data.map((entry) => (
          <React.Fragment key={nanoid()}>
            <div className="Container">
              <div id="carName">
                <h3>
                  {entry.Make}
                  <span> </span>
                  {entry.Model}
                </h3>
              </div>
              <div id="carImage">
                <img id="image" src={entry.ImageUrl} alt="" />
              </div>
              <div id="sidebar-top">£{entry.Price}</div>
              <div id="sidebar-bottom">
                <button style={{ backgroundColor: "#18a969", color: "white" }}>
                  Email
                </button>
                <button
                  style={{ backgroundColor: "#18a969", color: "#2d294b" }}
                >
                  Next Step
                </button>
              </div>
              <div id="policy1">
                <h6>Fair fuel policy</h6>
                <p>Return with same amount</p>
              </div>
              <div id="policy2">
                <h6>Collection info</h6>
                <p>Off-site</p>
              </div>
              <div id="policy3">
                <h6>Refundable security deposit</h6>
                <p>£1,205.00</p>
              </div>
              <div id="policy4">
                <h6>Mandatory local charges</h6>
                <p>No mandatory local charges</p>
              </div>
              <div id="extra">
                <h6>Only with Zest...</h6>
                <ul>
                  <li>Full Collision Damage Waiver with Excess Protection </li>
                  <li>Free cancellation</li>
                  <li>One free additional driver</li>
                  <li>Breakdown assistance</li>
                  <li>Enhanced Cleaning</li>
                </ul>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default CarList;
