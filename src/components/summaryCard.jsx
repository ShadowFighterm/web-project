import { FaStar } from "react-icons/fa"
import styles from "./summaryCard.module.css"
import { FaRightFromBracket, FaRightToBracket } from "react-icons/fa6"


const SummaryCard = ({img="https://a0.muscache.com/im/pictures/miso/Hosting-49840035/original/e7496a4a-3cac-444f-8858-15bff633bd42.jpeg?aki_policy=large", title="Purple prince house", rating=4.8, reviews=161, nights=5, price=127}) => {
    const calculatePrice = () => {
        return nights * price;
    }
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <img src={img} alt="" />
                <div>
                    {title}
                    <span><FaStar/>{rating} ({reviews} reviews)</span>
                </div>
            </div>
            <div className={styles.priceDetails}>
                Price Details
                <div>
                    <div>${price} x {nights} nights</div>
                    <div>${calculatePrice()}</div>
                </div>
            </div>
            <div className={styles.totalPrice}>
                <div>Total<button>(USD)</button></div>
                <div>${calculatePrice()}</div>
            </div>
        </div>
    )
}

export default SummaryCard