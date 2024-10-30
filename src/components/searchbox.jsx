import searchbox from "../components/searchbox.module.css";
import global from "../components/global.module.css"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";


function SearchBox() {
    let [activeLink, setActiveLink] = useState("Stays");
    return (
        <div class={`${global.verticalFlex}`}>
            <div class={`${global.center} ${searchbox.vertical}`}>
                <div class={searchbox.top}>
                    <ul class={searchbox.searchLinks}>
                        <li onClick={() => { setActiveLink("Stays") }}
                            class={activeLink == "Stays" ? searchbox.activeLink : ""}>
                            <a>Stays</a>
                        </li>
                        <li onClick={() => { setActiveLink("Experiences") }}
                            class={activeLink == "Experiences" ? searchbox.activeLink : ""}>
                            <a>Experiences</a>
                        </li>
                    </ul>
                </div>
                <div class={searchbox.searchContainer}>
                    <div class={searchbox.globalVersion}>
                        <button class={`${searchbox.searchBoxBtn} ${searchbox.w30}`}>
                            <div>
                                <h1>Where</h1>
                                <input type="text" placeholder="Search destinations"></input>
                            </div>
                        </button>
                        <button style={{ display: activeLink === "Experiences" ? "flex" : "none" }}
                            class={`${searchbox.searchBoxBtn} ${searchbox.w40}`}>
                            <div>
                                <h1>Date</h1>
                                <h2>Add dates</h2>
                            </div>
                        </button>
                        <button style={{ display: activeLink === "Stays" ? "flex" : "none" }}
                            class={`${searchbox.searchBoxBtn} ${searchbox.w20}`}>
                            <div>
                                <h1>Check in</h1>
                                <h2>Add dates</h2>
                            </div>
                        </button>
                        <button style={{ display: activeLink === "Stays" ? "flex" : "none" }}
                            class={`${searchbox.searchBoxBtn} ${searchbox.w20}`}>
                            <div>
                                <h1>Check out</h1>
                                <h2>Add dates</h2>
                            </div>
                        </button>
                        <button class={`${searchbox.searchBoxBtn} ${searchbox.w30}`}>
                            <div class={global.horizontalFlex}>
                                <div>
                                    <h1>Who</h1>
                                    <h2>Add guests</h2>
                                </div>
                                <div>
                                    <button class={searchbox.searchBtn}>⌕</button>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className={searchbox.mobileVersion}>
                        <div>
                            <button><FaSearch /></button>
                        </div>
                        <div className={`${global.verticalFlex} ${searchbox.desc}`}>
                            <div>
                                <h1>Where to?</h1>
                            </div>
                            <div className={`${global.horizontalFlex} ${searchbox.desc2}`}> 
                                <p>Anywhere</p>
                                <p>•</p>
                                <p>Any week</p>
                                <p>•</p>
                                <p>Add guests</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class={global.borderDown}></div>
        </div>
    );
}

export default SearchBox;