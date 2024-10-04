import "./navbar.css";
import airbnbLogo from "./assets/airbnb_logo.png"
function Navbar(){
    return (
        <div class="center">
            <nav class="navbar-container"> 
                <div>
                    <a><img class="brand-logo" src={airbnbLogo}></img></a>
                </div>
                <div id="nav-center">
                    <ul class="nav-links">
                        <li class="active-link"><a>Stays</a></li>
                        <li><a>Experiences</a></li>
                    </ul>
                </div>
                <div>
                    <ul class="nav-links">
                        <li><a>Airbnb your home</a></li>
                        <li><a>🌐</a></li>
                        <li class="login-btn"><a>☰ 👤</a></li>
                    </ul>
                </div>
            </nav>
        </div> // main container
    );
}

export default Navbar;