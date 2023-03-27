import React, { useRef } from "react";
import "./Body.css";
import Input from "./Input";
import { calculateCargoBays } from "../utils/calculateCargoBays";

const Body = ({ activeShipment }) => {
   return (
      <div className="main-body-wrapper">
         <div>
            <h1 className="shipment-name">{activeShipment.name}</h1>
            <span className="contact">{activeShipment.email}</span>
         </div>
         <div className="mt-30">
            <Input
               className={`cargoboxes-wrapper`}
               label={`Cargo Boxes`}
               alt={``}
               value={activeShipment.boxes}
               type={`text`}
            />
         </div>
         <div className="count-number mt-30">
            <h3>Number of required cargo bays</h3>
            <span>{calculateCargoBays(activeShipment.boxes)}</span>
         </div>
      </div>
   );
};

export default Body;
