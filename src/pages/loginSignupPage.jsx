import styles from "../components/booking.module.css"
import Footer from "../components/footer";
import LoginSignup from "../components/loginSignup";
import Navbar from "../components/navbar";


const LoginSignupPage = () => {
    return (
        <div>
            <div style={{borderBottom: "1px solid #e0e0e0", paddingBottom: "20px", paddingTop: "10px", marginBottom: "30px"}}>
                <Navbar isFixed={false} showBtn={false}/>
            </div>
            <div className={styles.loginSignup}><LoginSignup /></div>
            <Footer showLinks={false}/>
        </div>
    )
}

export default LoginSignupPage;