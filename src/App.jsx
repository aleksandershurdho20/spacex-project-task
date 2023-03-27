import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { useDebounce } from "./hooks/useDebounce";
import { searchShipments } from "./utils/searchShipments";
import shipments from "./utils/shipments.json";

function App() {
   const shipmentsData = shipments;
   const [activeShipment, setActiveShipment] = useState(shipmentsData[0]);
   const [searchQuery, setSearchQuery] = useState("");

   const searchedResults = useDebounce(searchQuery, 500);
   const handleShipmentClick = (shipment) => setActiveShipment(shipment);
   const handleSearch = (e) => setSearchQuery(e.target.value);

   const shipmentsResults = searchShipments(shipments, searchedResults);
   return (
      <div className="App">
         <BrowserRouter>
            <Nav
               shipments={shipmentsResults}
               handleShipmentClick={handleShipmentClick}
               activeShipment={activeShipment}
            />
            <main className="body-wrapper">
               <Header onChange={handleSearch} value={searchQuery} />
               <Body activeShipment={activeShipment} />
            </main>
         </BrowserRouter>
      </div>
   );
}

export default App;
