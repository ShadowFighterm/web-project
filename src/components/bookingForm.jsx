import React, { useDebugValue, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingForm.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const BookingForm = ({onDateChange}) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const [checkInDate, setCheckInDate] = useState(today);
    const [checkOutDate, setCheckOutDate] = useState(tomorrow);
    const [guestCount, setGuestCount] = useState(1);
    const [showGuestOptions, setShowGuestOptions] = useState(false);

    const handleGuestChange = (change) => {
        setGuestCount((prevCount) => Math.max(1, prevCount + change));
    };

    const handleCheckInDateChange = (date) => {
        setCheckInDate(date);
    };

    const handleCheckOutDateChange = (date) => {
        setCheckOutDate(date);
    };

    useEffect(() => {
        onDateChange(checkInDate, checkOutDate);
    }, [checkInDate, checkOutDate]);

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={`${styles.field} ${styles.checkIn}`}>
                    <label className={styles.label}>CHECK-IN</label>
                    <div>
                        <DatePicker
                            selected={checkInDate}
                            onChange={handleCheckInDateChange}
                            placeholderText="Add date"
                            className={styles.input}
                            minDate={new Date()}
                        />
                    </div>
                </div>
                <div className={`${styles.field} ${styles.checkOut}`}>
                    <label className={styles.label}>CHECK-OUT</label>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={handleCheckOutDateChange}
                        placeholderText="Add date"
                        className={styles.input}
                        minDate={checkInDate || new Date()}
                    />
                </div>

            </div>
            <div className={styles.field}>
                <label className={styles.label}>GUESTS</label>
                <div
                    onClick={() => setShowGuestOptions(!showGuestOptions)}
                    className={styles.input}
                >
                    {guestCount} guest{guestCount > 1 ? "s" : ""}
                </div>
                {showGuestOptions && (
                    <div className={styles.dropdown}>
                        <button
                            onClick={() => handleGuestChange(-1)}
                            className={styles.button}
                            disabled={guestCount <= 1}
                        >
                            <FaMinus />
                        </button>
                        {guestCount}
                        <button
                            onClick={() => handleGuestChange(1)}
                            className={styles.button}
                            disabled={false}
                        >
                            <FaPlus />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingForm;
