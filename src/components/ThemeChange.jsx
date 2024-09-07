import React, { useState, useEffect } from 'react';
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const ThemeChange = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to true for dark mode

    useEffect(() => {
        // Apply dark mode by default
        if (!document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.add('dark');
        }
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    const toggleMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    };

    return (
        <button
        onClick={toggleMode}
        className=" p-2 text-gray-700 dark:text-gray-200 rounded-full text-2xl cursor-pointer hover:contrast-150"
    >
        {isDarkMode ? <IoSunny/> : <FaMoon  />}
    </button>
    
    );
};

export default ThemeChange;
