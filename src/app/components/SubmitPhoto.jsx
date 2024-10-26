'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
// import * as faceapi from 'face-api.js';
const SubmitPhoto = ({onNextStep}) => {
    const [photo, setPhoto] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const fileInputRef = useRef(null);
    const [faceDone, setFaceDone] = useState(false);
    
    const startCamera = async () => {
        setIsCameraOn(true);
        const stream = await navigator.mediaDevices.getUserMedia({ video: {facingMode: 'user'}});

        if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
        }
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        const context = canvas.getContext('2d');

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        setPhoto(canvas.toDataURL('image/png'));
        stopCamera();
    };

    const stopCamera = () => {
        setIsCameraOn(false);
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
    };

    return (
        <div className="flex flex-col justify-center items-center space-y-4 p-8 bg-gray-900 rounded-lg shadow-lg">
            {photo? <h2 className="text-green-500 font-mono text-lg animate-pulsate"> Facial Verification in Progress...</h2>: <h2 className="text-white font-mono text-lg">Facial Verification Required!!</h2>}

            {!isCameraOn && !photo && (
                <button
                    onClick={startCamera}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Start Camera
                </button>
            )}

            {isCameraOn && (
                <div>
                    <video
                        ref={videoRef}
                        className="w-40 h-40 bg-black rounded-lg"
                    />
                    <button
                        onClick={capturePhoto}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 ml-3"
                    >
                        Capture Photo
                    </button>
                </div>
            )}

            <canvas ref={canvasRef} className="hidden" />
            {photo && (
                <div>
                    <Image
                        src={photo}
                        alt="captured photo"
                        width={40}
                        height={40}
                        className="w-40 h-40 object-cover rounded-lg mt-4 ml-14"
                    />
                    <button
                        onClick={() => setPhoto(null)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-6 ml-4"
                    > Retake Photo 
                    </button>
                    <button 
                        onClick={() => onNextStep(3)}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-6 ml-4">
                    Continue
                    </button>
                </div>
            )}
        </div>
    );
};

export default SubmitPhoto;