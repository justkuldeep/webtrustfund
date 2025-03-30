import { useState, useEffect } from "react";
import "../styles/darkMode.css";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default DarkModeToggle;
