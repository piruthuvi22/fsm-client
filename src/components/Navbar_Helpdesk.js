import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='nav-wrapper'>
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <Link to='#' className='menu-bars'>
                            {sidebar ?  <AiIcons.AiOutlineClose onClick={showSidebar} /> : <FaIcons.FaBars onClick={showSidebar} />}

                        </Link>



                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <a class="navbar-brand text-white" href="#">FSM</a>

                        </div>
                    </nav>

                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>

                        {SidebarData.map((item, index) => {
                            return (
                                <li  key={index} className={`${item.cName}`}>
                                    <Link  to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                </nav>
            </IconContext.Provider>
            <br></br>



        </>
    );
}

export default Navbar;
