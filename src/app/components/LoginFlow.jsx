'use client';
import Image from "next/image";
import {useState} from "react";
import SubmitPhoto from "./SubmitPhoto";
import WelcomeAnimation from "./WelcomeAnimation";
import QueenOfHearts from "./QueenOfHearts";

const LoginFlow = ({toggleMatrix}) => {
    const [password, setPassword] = useState('');
    const [unlocks, setUnlocks] = useState(0);
    const [step, setStep] = useState(1);

    const handleStepChange = (newStep) => {
        setStep(newStep);
    }
    const handlePasswordSubmit = () => {
        const correctPassword = ['byeolsa', 'hateu', 'Yeonghon'];

        if (password === correctPassword[unlocks]) {
            setUnlocks((prev) => prev + 1);
            setPassword('');
            if (unlocks === 2) {
                setStep(2);
            }
        } else {
            alert("Incorrect Password! Try Again!!")
        }
    };

    return (
        <div className="flex flex-col justify-center items-center space-y-4 p-8 bg-gray-900 rounded-lg shadow-lg">
            <div className="flex space-x-4">
                {[...Array(3)].map((_, i) => (
                    <Image
                        key={i}
                        src={unlocks > i ? '/images/unlock.png' : '/images/padlock.png'}
                        width={12}
                        height={12}
                        alt={unlocks > i ? 'unlocked' : 'locked'}
                        className="w-12 h-12"
                    />
                ))}
            </div>
            {step === 1 && (
            <div className="flex flex-col space-y-4">
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-800 border border-green-500 text-green-500 px-4 py-2 w-80 text-center font-mono focus:outline-none animate-pulsate"
                />
                <button
                    onClick={handlePasswordSubmit}
                    className="bg-green-500 text-gray-900 px-4 py-2 w-80 rounded-lg focus:outline-none"
                >
                    Submit
                </button>
            </div>
            )}
            {step === 2 && (
                <SubmitPhoto onNextStep={handleStepChange} />
            )}
            {step === 3 && (
                <WelcomeAnimation toggleMatrix={toggleMatrix}/>
            )}
        </div>
    );
};

export default LoginFlow;
