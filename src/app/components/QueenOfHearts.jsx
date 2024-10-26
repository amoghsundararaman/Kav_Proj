'use client';
import { useState, useEffect} from "react";
import Image from "next/image";
const QueenOfHearts = ({handleJangTrio}) => {
    //const correctSequence = [1, 4, 7, 10, 12, 15, 19, 20];
    const correctSequence = [2, 7, 14, 5, 16, 8, 9, 13, 3, 20, 17, 1, 15, 12, 4, 18, 10, 21, 6, 11, 19, 22];
    //const correctSequence = [1];
    const totalHearts = 22;

    const [currentStep, setCurrentStep] = useState(0);
    const [clickedHearts, setClickedHearts] = useState([]);
    const [bounceHearts, setBounceHearts] = useState([]);
    const [showButton, setShowButton] = useState(false);
    const [swivelBox, setSwivelBox] = useState(false);

    const handleHeartClick = (heartIndex) => {
        if (heartIndex === correctSequence[currentStep]) {
            setClickedHearts((prev) => [...prev, heartIndex]);
            setBounceHearts((prev) => [...prev, heartIndex]);
            setCurrentStep((prev) => prev + 1);

            if (currentStep + 1 === correctSequence.length) {
                alert("Magnificent! Your Heart is Truly that of the Queen of Hearts!");
                setShowButton(true);            
            }
        } else {
            setClickedHearts([]);
            setBounceHearts([]);
            setCurrentStep(0);
            setShowButton(false);
        }
    };

    const handleButtonClick = () => {
        setSwivelBox(true);
        document.body.style.overflow = 'hidden';
        handleJangTrio();
    };

    const heartImages = Array.from({length: totalHearts}, (_, i) => i + 1);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-pink-200">
            <div className={`mb-8 flex space-x-4 ${swivelBox ? 'animate-heart-drop': ''}`}>
                {bounceHearts.map((heartIndex) => (
                    <Image
                        key={heartIndex}
                        src={`/images/Hearts/heart_${heartIndex}.png`}
                        alt={`Heart ${heartIndex}`}
                        width={10}
                        height={10}
                        className={`w-10 h-10 ${!swivelBox ? 'animate-bounce' : 'animate-heart-fall'}`}
                    />
                ))}
            </div>

            <div className={`bg-white p-8 rounded-lg shadow-lg transition-transform ${swivelBox ? 'transform rotate-90 opacity-0' : ''}`}>
                <div className="grid grid-cols-6 gap-4">
                    {heartImages.map((heartIndex) => (
                        <Image
                            key={heartIndex}
                            src={`/images/Hearts/heart_${heartIndex}.png`}
                            alt={`Heart ${heartIndex}`}
                            width={20}
                            height={20}
                            className={`w-20 h-20 cursor-pointer transition transform hover:scale-105`}
                            onClick={() => handleHeartClick(heartIndex)}
                        />
                    ))}
                </div>
            </div>

            {showButton && (
                <button
                    onClick={handleButtonClick}
                    className="mt-8 px-4 py-2 bg-white text-pink-500 font-bold rounded-lg hover:bg-pink-500 hover:text-white transition-transform hover:scale-105"
                >
                    Continue
                </button>    
            )}
        </div>
    );
};

export default QueenOfHearts;