import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import hamIco from "../assets/HamIco.svg";
import CloseIco from "../assets/Close.svg";
import "./Nav.css";

const Nav = ({ shipments, handleShipmentClick, activeShipment }) => {
   const [mobileView, setMobileView] = useState(false);
   return (
      <nav className="navigation-bar">
         <div className="logo-container">
            <img src={Logo} className="Logo" alt="Spacer" />
            <img
               src={mobileView ? CloseIco : hamIco}
               onClick={() => setMobileView((e) => !e)}
               className="HamIco"
               alt=""
            />
         </div>

         <div  className="navigation-list">
            <h1>Shipment List</h1>
            <ol>
               {shipments.length > 0
                  ? shipments.map((shipment) => (
                       <li
                          key={shipment.id}
                          onClick={() => handleShipmentClick(shipment)}
                       >
                          <a
                             className={
                                activeShipment.name == shipment.name
                                   ? "active"
                                   : null
                             }
                          >
                             {shipment.name}
                          </a>
                       </li>
                    ))
                  : "No data found"}
            </ol>
         </div>
      </nav>
   );
};

export default Nav;
