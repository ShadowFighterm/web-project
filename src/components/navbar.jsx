import navbar from "../components/navbar.module.css";
import airbnbLogo from "../assets/airbnb_logo.png";
import global from "../components/global.module.css";
import { useState } from "react";

function Navbar() {
    
    return (
        <div class={global.center}>
            <nav class={navbar.navbarContainer}>
                <div>
                    <a><img class={navbar.brandLogo} src={airbnbLogo}></img></a>
                </div>
                
                <div>
                    <ul class={navbar.navLinks}>
                        <li><a>Airbnb your home</a></li>
                        <li><a>🌐</a></li>
                        <li class={navbar.loginBtn}><a>☰ 👤</a></li>
                    </ul>
                </div>
            </nav>
        </div> // main container
    );
}

export default Navbar;