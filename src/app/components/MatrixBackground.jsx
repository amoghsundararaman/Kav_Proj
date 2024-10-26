'use client';
import { useEffect} from "react";
import {styles} from '../styles/MatrixBackground.module.css';

const MatrixBackground = () => {

  useEffect(() => {
      const canvas = document.getElementById("canvas");
      
      const ctx = canvas.getContext("2d");

      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      const fontSize = 10;

      const columns = canvas.clientWidth / fontSize;

      const drops = Array(Math.floor(columns)).fill(1);

      function draw() {
          ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
          ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

          ctx.fillStyle = "#0F0";
          ctx.font = fontSize + "px monospace";

          for (let i = 0; i < drops.length; i++) {
              const text = letters[Math.floor(Math.random() * letters.length)];
              ctx.fillText(text, i * fontSize, drops[i] * fontSize);

              if (drops[i] * fontSize > canvas.clientHeight && Math.random() > 0.975) {
                  drops[i] = 0;
              }

              drops[i]++;
          }
      }

      const interval = setInterval(draw, 50);
      return () => clearInterval(interval);
  }, []);

  return <canvas id='canvas' className='absolute top-0 left-0 w-full h-full z-[-1] bg-black'/>;
};

export default MatrixBackground;
