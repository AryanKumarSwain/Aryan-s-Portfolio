import React, { useState, useEffect } from 'react';
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const ThemeChange = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

    useEffect(() => {
        // Check localStorage for saved theme
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
                setIsDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark');
                setIsDarkMode(false);
            }
        } else {
            // Apply dark mode by default
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    const toggleMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light'); // Save light mode preference
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark'); // Save dark mode preference
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleMode}
            className="p-2 text-gray-800 dark:text-gray-200 rounded-full text-2xl cursor-pointer hover:contrast-150"
        >
            {isDarkMode ? <IoSunny /> : <FaMoon />}
        </button>
    );
};

export default ThemeChange;
