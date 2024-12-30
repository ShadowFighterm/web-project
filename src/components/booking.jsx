import styles from './booking.module.css';
import LoginSignup from "../components/loginSignup";
import { FaLessThan } from 'react-icons/fa';
import SummaryCard from './summaryCard';


const Booking = () => {
    return (
        <div className={styles.container}>
            <div className={styles.summaryContainer}>
                <div className={styles.title}>
                    <button className={styles.backBtn}><FaLessThan /></button>
                    Request to book
                </div>
                <div className={styles.summary}>
                    Your trip
                    <div>
                        <div>
                            Dates
                            <span>Feb 28 - March, 2025</span>
                        </div>
                        <button>Edit</button>
                    </div>
                    <div>
                        <div>
                            Guests
                            <span>1 guest</span>
                        </div>
                        <button>Edit</button>
                    </div>
                </div>
            </div>
            <div className={styles.loginSignup}><LoginSignup /></div>
            <div className={styles.sumCard}><SummaryCard /></div>
            
        </div>
    )
}


export default Booking;