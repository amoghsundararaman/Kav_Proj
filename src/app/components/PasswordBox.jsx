'use client';
import { useState, useEffect } from "react";

import {styles} from '../styles/PasswordBox.module.css';

const PasswordBox = () => {
    const [visible, setVisible] = useState(true);
    const [passwordStrength, setPasswordStrength] = useState("Weak");
    const [passwordColor, setPasswordColor] = useState("red");

    useEffect(() => {
        const fadeInterval = setInterval(() => {
            setVisible((prev) => !prev);
        }, 4000);

        return () => clearInterval(fadeInterval);
    }, []);

    return (
        <div className='flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        >
            <input 
                type='password' 
                placeholder="Enter your password" 
                className='bg-gray-900 border border-green-500 text-green-500 px-4 py-2 w-80 text-center font-mono focus:outline-none animate-pulsate'
            />
        </div>
    );
};

export default PasswordBox;