import global from "../components/global.module.css";
import footer from "../components/footer.module.css"
import { FaCheck, FaDollarSign, FaFacebook, FaGlobe, FaInstagram, FaRegCopyright, FaTimes, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div class={`${global.center} ${footer.footerBG}`}>
            <div class={`${global.verticalFlex} ${footer.footerContainer}`}>
                <div class={`${global.horizontalFlex} ${footer.footerLinks}`}>
                    <div class={global.verticalFlex}>
                        <h1>Support</h1>
                        <a>AirCover</a>
                        <a>Anti-discrimination</a>
                        <a>Disablity support</a>
                        <a>Cancellation options</a>
                        <a>Report neighborhood concern</a>
                    </div>
                    <div class={global.verticalFlex}>
                        <h1>Hosting</h1>
                        <a>Airbnb your home</a>
                        <a>AirCover for Hosts</a>
                        <a>Hosting resources</a>
                        <a>Community forum</a>
                        <a>Hosting responsibly</a>
                        <a>Airbnb-friendly apartments</a>
                        <a>Join a free Hosting class</a>
                    </div>
                    <div class={global.verticalFlex}>
                        <h1>Airbnb</h1>
                        <a>Newsroom</a>
                        <a>New features</a>
                        <a>Careers</a>
                        <a>Investors</a>
                        <a>Gift cards</a>
                        <a>Airbnb.org emergency stays</a>

                    </div>
                </div>
                <div class={`${global.horizontalFlex} ${footer.info}`}>
                    <div class={`${global.horizontalFlex} ${footer.footerCopyright}`}>
                        <p><FaRegCopyright /> 2024 Airbnb, Inc.</p>•
                        <a>Terms</a>•
                        <a>Sitemap</a>•
                        <a>Privacy</a>•
                        <a>
                            <div>
                                Your Privacy Choices
                            </div>
                            <div className={footer.copyCapsule}>
                                <div>
                                    <FaCheck />
                                </div>
                                <div>
                                    <FaTimes />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class={`${global.horizontalFlex} ${footer.footerCopyright}`}>
                        <div class={footer.settings}>
                            <a><FaGlobe />English (US)</a>
                            <a><FaDollarSign />USD</a>
                        </div>
                        <div class={footer.socialLinks}>
                            <a><FaFacebook /></a>
                            <a><FaTwitter /></a>
                            <a><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;