import React from "react";
import Zoom from "../assets/Zoom.svg";
import "./Header.css";
import Input from "./Input";

const Header = ({onChange,value}) => {
  return (
    <div className="Header">
      <Input
        role={`Search Bar`}
        className={`SearchBar`}
        beforeimg={true}
        image={Zoom}
        alt={``}
        type={`text`}
        name={`searchbox`}
        id={`searchbox`}
        placeholder={`Search`}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Header;
