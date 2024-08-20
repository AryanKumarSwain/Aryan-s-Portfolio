import React, { useState, useEffect } from 'react';
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import '../index.css'; // or wherever your index.css is located

const ThemeChange = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const initialTheme = document.documentElement.getAttribute('data-theme');
        setIsDarkMode(initialTheme === 'dark');
    }, []);

    const setLightMode = () => {
        document.documentElement.setAttribute('data-theme', 'light');
        setIsDarkMode(false);
    };

    const setDarkMode = () => {
        document.documentElement.setAttribute('data-theme', 'dark');
        setIsDarkMode(true);
    };

    const toggleMode = () => {
        if (isDarkMode) {
            setLightMode();
        } else {
            setDarkMode();
        }
    };

    return (
        <button
            onClick={toggleMode}
            className="right-5 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg text-xl cursor-pointer hover:contrast-150"
        >
            {isDarkMode ? <IoSunny className="text-gray-900" /> : <FaMoon className="text-gray-900" />}
        </button>
    );
};

export default ThemeChange;
