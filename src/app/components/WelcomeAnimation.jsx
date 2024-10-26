'use client'
import {useEffect, useState} from 'react';
import Image from 'next/image';
const WelcomeAnimation = ({toggleMatrix}) => {
    const [showBox, setShowBox] = useState(true);
    const [decipheringName, setDecipheringName] = useState('');
    const fullName = "KAVIYA";

    const [welcomeVisible, setWelcomeVisible] = useState(false);

    useEffect(() => {
        const dropTimer = setTimeout(() => {
            setShowBox(false);
        }, 5000);

        const revealLetters = () => {
            let currentLetterIndex = 0;
            const interval = setInterval(() => {
                setDecipheringName((prev) => prev + fullName[currentLetterIndex - 1]);
                currentLetterIndex++;
                if (currentLetterIndex === fullName.length) {
                    clearInterval(interval);
                    setWelcomeVisible(true);
                }
            }, 1000);
        };

        const nameTimer = setTimeout(revealLetters, 5500);

        return () => {
            clearTimeout(dropTimer);
            clearTimeout(nameTimer);
        };
    }, []);

   return (
    <div className='flex flex-col justify-center items-center'>
        {welcomeVisible ? (<h2 className="text-green-500 font-mono text-lg animate-pulsate"> User Identity Confirmed!!</h2>) : (<h2 className="text-white font-mono text-lg animate-pulsate">Deciphering Identity...</h2>)}
        {!showBox && (
            <div className='flex justify-center items-center mt-5'>
                <div className='flex space-x-3 text-6xl text-green-500 font-mono'>
                    {Array.from({length: decipheringName.length}).map((_, i) => (
                        <span key={i} className='inline-block'>
                            {decipheringName[i] || '_'}
                        </span>
                    ))}
                </div>
            </div>
        )}

        {welcomeVisible && (
            <button onClick = {toggleMatrix}
                    className='bg-blue-600 text-lg text-white px-6 py-2 rounded hover:bg-green-700 mt-5 transition-colors duration-300'>
                Welcome!
            </button>    
        )}
    </div>
   );
};

export default WelcomeAnimation;