import { FaApple, FaEnvelopeOpen, FaFacebookSquare, FaGoogle } from "react-icons/fa";
import style from "./loginSignup.module.css";
import { useState } from "react";
import axios from "axios";

const LoginSignup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false); // false for User, true for Admin

    const handleSubmit = async () => {
        try {
            const userType = isAdmin ? "admin" : "user";
            // Attempt to register the user
            const response = await axios.post(`http://localhost:5000/api/auth/register`, {
                username,
                password,
                role: userType, // Pass the user type
            });
            console.log("User registered successfully:", response.data);
            alert("User registered successfully!");
        } catch (error) {
            // If registration fails, check if it's because the user already exists
            if (error.response?.status === 400) {
                try {
                    // Attempt to log in the user if they already exist
                    const loginResponse = await axios.post(`http://localhost:5000/api/auth/login`, {
                        username,
                        password,
                        role: isAdmin ? "admin" : "user", // Pass the user type
                    });
                    console.log("User logged in successfully:", loginResponse.data);
                    alert("User logged in successfully!");
                } catch (loginError) {
                    console.error("Login failed:", loginError.response?.data || loginError.message);
                    alert("Login failed!");
                }
            } else {
                console.error("Registration failed:", error.response?.data || error.message);
                alert("Registration failed!");
            }
        }
    };

    return (
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.title}>Log in or sign up to book</div>
                <div className={style.inputContainer}>
                    <div>
                        Username
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        Password
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="userType"
                                value="user"
                                checked={!isAdmin}
                                onChange={() => setIsAdmin(false)}
                            />
                            User
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="userType"
                                value="admin"
                                checked={isAdmin}
                                onChange={() => setIsAdmin(true)}
                            />
                            Admin
                        </label>
                    </div>
                </div>
                <div className={style.disclaimer}>
                    We’ll call or text you to confirm your number. Standard message and data rates apply. <span>Privacy Policy</span>
                </div>
                <button className={style.btn} onClick={handleSubmit}>
                    Continue
                </button>
                <div className={style.or}>or</div>
                <div className={style.socials}>
                    <div className={style.socialBtns}>
                        <button><FaFacebookSquare /></button>
                        <button><FaGoogle /></button>
                        <button><FaApple /></button>
                    </div>
                    <div className={style.emailBtn}>
                        <button><FaEnvelopeOpen /> Continue with email</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
