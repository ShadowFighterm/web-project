import global from "../components/global.module.css";
import footer from "../components/footer.module.css"

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
                <div class={global.horizontalFlex}>
                    <div class={`${global.horizontalFlex} ${footer.footerCopyright}`}>
                        <p>© 2024 Airbnb, Inc.</p>•
                        <a>Terms</a>•
                        <a>Sitemap</a>•
                        <a>Privacy</a>•
                        <a>Your Privacy Choices</a>
                    </div>
                    <div class={`${global.horizontalFlex} ${footer.footerCopyright}`}>
                        <a><button>🌐</button>English (US)</a>
                        <a><button>💲</button>USD</a>
                        <div class={footer.socialLinks}>
                            <a><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" /></a>
                            <a><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" /></a>
                            <a><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;