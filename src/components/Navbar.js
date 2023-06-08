import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const showSidebar = () => setShowSideBar(!showSideBar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="nav-wrapper">
          {/* Top navbar */}
          <nav className="navbar navbar-expand-lg navbar-light">
            <span className="menu-bars mx-2">
              {showSideBar ? (
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              ) : (
                <FaIcons.FaBars onClick={showSidebar} />
              )}
            </span>
          </nav>
        </div>

        {/* Top navbar */}
        <nav className={showSideBar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items p-0" onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={`nav-text px-3`}>
                  <Link to={item.path}>
                    <span className="px-2">{item.icon}</span>
                    <span className="px-2">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
