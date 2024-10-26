'use client';
import Image from "next/image";
import MatrixBackground from "./components/MatrixBackground";
import PasswordBox from "./components/PasswordBox";
import LoginFlow from "./components/LoginFlow";
import { useState, useEffect } from "react";
import QueenOfHearts from "./components/QueenOfHearts";
import BirthdayBackground from "./components/BirthdayBackground";
import JangTrio from './components/JangTrio';
import SeaWorld from './components/SeaWorld';
export default function Home() {
  const [showMatrix, setShowMatrix] = useState(true);
  const [heartGame, setHeartGame] = useState(false);
  const [showJangTrio, setShowJangTrio] = useState(false);
  const [showSeaWorld, setShowSeaWorld] = useState(false);
/*   useEffect(() => {
        setTimeout(() => {
            playDramaticMusic();
        }, 2000);
  }, []);

  const playDramaticMusic = () => {
    const audio = new Audio('/audio/Dramatic_intro.mp3');
    audio.play();
  } */

  const handleMatrix = () => {
    setShowMatrix(false);
  }
  const handleHeartGame = () => {
    if (heartGame) {
      setHeartGame(false);
    } else {
      setHeartGame(true);
    }
  }

  const handleJangTrio = () => {
    setShowJangTrio(true);
  }

  const handleSeaWorld = () => {
    setShowSeaWorld(true);
  }
  
  return (
     <div className="relative min-h-screen flex justify-center items-center">
      {showMatrix && <MatrixBackground />}
      {showMatrix && <LoginFlow toggleMatrix={handleMatrix}/>}
      {!showMatrix && !heartGame && <BirthdayBackground handleHeartGame={handleHeartGame}/>} 
      {!showMatrix && heartGame && !showJangTrio && <QueenOfHearts handleJangTrio={handleJangTrio}/>}
      {showJangTrio && !showSeaWorld && <JangTrio handleSeaWorld={handleSeaWorld}/>}
      {showSeaWorld && <SeaWorld />}
    </div>
  );
}
