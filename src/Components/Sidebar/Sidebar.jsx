import React from 'react'
import "./Sidebar.css";
import logo from '../../assets/logo.png'
import { AiOutlinePieChart } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import { BsFolderSymlink } from "react-icons/bs";
import { FiBatteryCharging } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";
import { GiSettingsKnobs } from "react-icons/gi";

function sidebar() {
  return (
    <div className="sideBarr">
      <div className="logoDiv flex">
        <img src={logo} alt="Logoimage" />
      </div>

      <div className="menu">
        <ul className="navItem">
          <li className="navList">
            <AiOutlinePieChart className="icon" />
          </li>
          <li className="navList">
            <BsCalendar2Date className="icon" />
          </li>
          <li className="navList">
            <BsFolderSymlink className="icon" />
          </li>
          <li className="navList">
            <FiBatteryCharging className="icon" />
          </li>
          <li className="navList">
            <BsChatDots className="icon" />
          </li>
          <li className="navList">
            <GiComputerFan className="icon" />
          </li>
          <li className="navList">
            <GiSettingsKnobs className="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default sidebar