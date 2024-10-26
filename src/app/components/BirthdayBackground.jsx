'use client';
import { useState, useEffect } from "react";
import {Dancing_Script} from 'next/font/google';
import "@fontsource/dancing-script";

const BirthdayBackground = ({handleHeartGame}) => {
    const [currentText, setCurrentText] = useState('');
    const [showHeart, setShowHeart] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('black');
    const [dramaticMusic, setDramaticMusic] = useState(null);
    const [showText, setShowText] = useState(true);
    const [clicks, setClicks] = useState(-1);
    const [nextUp, setNextUp] = useState(false);
    const [birthdayMusic, setBirthdayMusic] = useState(null);
    const heartContainerList = ['heart-container-1', 
                                'heart-container-2', 
                                'heart-container-3',
                                'heart-container-4',
                                'heart-container-5',
                                'heart-container-6',
                                'heart-container-7',
                                'heart-container-8',
                                'heart-container-9',
                                'heart-container-10',
                                'heart-container-11',
                                'heart-container-12',
                                'heart-container-13',
                                'heart-container-14',
                                'heart-container-15',
                                'heart-container-16',
                                'heart-container-17',
                                'heart-container-18',
                                'heart-container-19',
                                'heart-container-20',
                                'heart-container-21',
                                'heart-container-22',
    ];   
    const text = "  Did you know? Once upon a time, there lived a queen, and today is.....";
    
    useEffect(() => {
        const music = new Audio('/audio/Dramatic_intro.mp3');
        music.play();
        setDramaticMusic(music);
        return () => {
            music.pause();
        }
    }, []);
    
    useEffect(() => {
        let index = 0;
        const textInterval = setInterval(() => {
            if (index < text.length - 1) {
                setCurrentText((prev) => prev + text[index]);
                index++;
            } else {
                clearInterval(textInterval);
                setShowHeart(true);
            }
        }, 250);

        return () => clearInterval(textInterval);
    }, [text]);

    const handleHeartClick = () => {
        if (clicks === -1) {
            if (dramaticMusic) {
                dramaticMusic.pause();
            }
            const bM = new Audio('/audio/Happy_Birthday.mp3');
            bM.loop = true;
            bM.play();
            setBirthdayMusic(bM)
            setBackgroundColor('lightpink');
            startHeartFalling(heartContainerList[0]);
            setShowText(false);
            document.body.style.overflow = 'hidden';
            setClicks((prev) => prev + 1);
        } 
        if (clicks < 22) {
            startHeartFalling(heartContainerList[clicks + 1]);
            setClicks((prev) => prev + 1);
        }
        if (clicks === 22) {
            birthdayMusic.pause();
            setNextUp(true);
        }
    };

    const startHeartFalling = (hc_name) => {
        const heartContainer = document.createElement('div');
        heartContainer.id = hc_name;
        document.body.appendChild(heartContainer);

        const createHeart = () => {
            const heart = document.createElement('div');
            heart.classList.add('falling-heart');
            heartContainer.appendChild(heart);
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';

            setTimeout(() => {
                heart.remove();
            }, 5000);
        };

        setInterval(createHeart, 300);
    };

    const stopHeartFalling = () => {
        for (let i = 0; i < heartContainerList.length; i++) {
            const heartContainer = document.getElementById(heartContainerList[i]);
            if (heartContainer) {
                heartContainer.remove();
            }
        }
        const heartContainer1 = document.getElementById('heart-container-1');
        if (heartContainer1) {
            heartContainer1.remove();
        }
        const heartContainer2 = document.getElementById('undefined');
        if (heartContainer2) {
            heartContainer2.remove();
        }
        handleHeartGame();
    }

    return (
        <div
            className={`h-screen w-full flex items-center justify-center transition-all duration-1000 ${backgroundColor === 'lightpink' ? 'bg-pink-200' : 'bg-black'}`}
        >
           {showText && <h1 className="text-pink-500 font-dancing-script text-5xl text-center">{currentText}</h1>}
           {showHeart && (

                <img
                    src = "/images/Heart.png"
                    alt = 'heart'
                    className = "cursor-pointer w-48 h-48 mt-10 animate-bounce"
                    onClick = {handleHeartClick}
                ></img>
           )}
           {
                nextUp && (
                     <div className="absolute bottom-0 left-0 w-full h-20 bg-white flex justify-center items-center">
                          <button
                                onClick={stopHeartFalling} 
                                className="text-pink-500 font-dancing-script text-4xl">Proceed: Queen of Hearts Game</button>
                     </div>
                )
           } 
        </div>
    );
};

export default BirthdayBackground;