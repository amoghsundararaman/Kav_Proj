'use client';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import styles from '../styles/SeaWorld.module.css';
import "@fontsource/dancing-script";

const SeaWorld = () => {
    const [showScroll, setShowScroll] = useState(true);
    const [showBubbles, setShowBubbles] = useState(false);
    const [clickedPal, setClickedPal] = useState(null);
    const [activeTab, setActiveTab] = useState("HBD");
    const [clickedPals, setClickedPals] = useState({});
    const [showFinalIcon, setShowFinalIcon] = useState(false);
    const [showFinalImage, setShowFinalImage] = useState(false);
    const finalIcon = {src: '/images/Best Kat.jpg'}
    const finalImage = '/images/Best Kat.jpg';

    const bubbleImages = [
        '/images/bubbles/bubble_1.png',
        '/images/bubbles/bubble_2.png',
        '/images/bubbles/bubble_3.png',
        '/images/bubbles/bubble_4.png',
        '/images/bubbles/bubble_5.png',
    ];

    const seaPals = [
        {name: 'Jellyfish', author: 'Aishu', type: 'image', src: '/images/SeaPals/Jellyfish.png', hbdText: "Happy birthday to my ever long lasting best friend ❤! May your day be filled with joy, light and happiness!", whoAmIText: "Kavs and I? — two souls who found each other on a simple ocean bench, bonded by shared dreams and a mutual spark that made the ocean feel a little less vast. I was the jellyfish who wandered the waters, and she was the ever-curious mer-cat with big visions for ABC World. From that day, we did not just become best friends; we became explorers, partners-in-crime, and confidants. Together, we have charted every corner of this sea, uncovering hidden coral kingdoms and sneaking into enchanted kelp forests. We are the kind of duo that balances each other out—she brings the adventure, I bring the company, and somewhere between, we find the courage to tackle whatever waves come our way. When she dreams up something wild, I am right there with her, matching her stride for stride. At midnight, under the moonlit waves, we share our deepest hopes, laughter that echoes for miles, and those secrets only best friends know. She is the heart of ABC world, but I am happy to be the light that only a jellyfish can bring. But more than that, she is my partner in every adventure and the brightest star in my ocean. Happy birthday, Kavs. Here is to more tides, more secrets, and a friendship that even the biggest waves cannot shake."},
        {name: 'SeaHorse', author: 'Yutii', type: 'image', src: '/images/SeaPals/SeaHorse.jpg', hbdText: "Hey gurl! You are 22 now and I couldn't be prouder of the person you have become! Thank you for being kind and charming and my dearest sister ever! Let's make more and more memories together as we navigate adulthood! I love you!", whoAmIText: "Me and Kavs ride around the ocean hiding under corals and pranking other fishes together! We are the fun duo but also during midnights, we gather near the shallow waters, gaze at the stars, and hold deep conversations about everything."},
        {name: 'Dolphin', author: 'Akka', type: 'image', src: '/images/SeaPals/Dolphin.jpg', hbdText: 'Happy Birthday to the Jellyfish! You are the light of the sea and the heart of ABC World. May your day be filled with joy and happiness!', whoAmIText: 'I am the Jellyfish! I am the light of the sea and the heart of ABC World!'},
        {name: 'Whale', authro: 'Bruce', type: 'image', src: '/images/SeaPals/whale_1.jpg', hbdText: "Happier Birthday to our small kid!! 😛 Enjoy ur happy life well with ur happy friends and families💙💗 Shine in ur career and wish u the best life🥳 Don't forget ur closed ones😏😛 Once again happie b'day kid", whoAmIText: "From the first time Kavs and I swam side-by-side, we knew we’d make a solid team. I'm the Whale, her go-to brainstorming buddy, always ready to dive deep into any challenge or idea. Whenever she faces a tangled reef of decisions, she knows I’ll be right there, steady and calm, helping her untangle it one knot at a time. Kavs has this spark—the kind that turns wild ideas into plans and dreams into realities. She may be the queen of ABC World, but she’s never one to overlook a friend’s advice. Together, we’ve mapped new waters, tackled countless currents, and sometimes, we even drift under the stars, exchanging thoughts on what lies beyond the horizon. She trusts my wisdom, and I rely on her vision. That’s our rhythm. So here’s to you, Kavs! Happy Birthday to the queen with the grand ideas and the friend who lets me help make them happen. May we keep swimming through every adventure, with laughter, loyalty, and all the depth that true friendship brings."}
    ];

    const handleClick = () => {
        setShowScroll(false);
        setShowBubbles(true);
    }

    const handleBubbleClick = (index) => {
        const updatedBubbles = bubbles.filter(_, idx => idx !== index);
        setShowBubbles(updatedBubbles);
    }

    const [bubbles, setBubbles] = useState(
        Array.from({length: 70}, () => ({
            src: bubbleImages[Math.floor(Math.random() * bubbleImages.length)],
            left: Math.random() * 100 + 'vw',
            animationDelay: Math.random() * 2 + 's',
        }))
    );

    const handlePalClick = (pal) => {
        setActiveTab("HBD");
        setClickedPal(pal);

        setClickedPals((prev) => ({...prev, [pal.name]: true}));
    };
    
    useEffect(() => {
        const allClicked = seaPals.every((pal) => clickedPals[pal.name]);
        if (allClicked) {
            setShowFinalIcon(true);
        }
    }, [clickedPals]);

    const handleFinalIconClick = () => {
        setShowFinalImage(true);
    };

    return(        
        <div className="relative w-screen h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/ABC World.jpg')"}}>
            {showScroll && (
                <div className={`${styles.scrollContainer} flex flex-col items-center justify-center h-full ${!showScroll ? styles.fadeOut : ''}`}>
                    <div className='relative'>
                    <Image 
                        src='/images/invite.jpg'
                        alt='Sea World Invitation'
                        width={600}
                        height={400}
                        className='block mx-auto'
                    />
                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center px-10'>
                        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl font-bold text-purple-600 text-center leading-tight font-dancing-script' style={{maxWidth:'90%', height: 'auto'}}>Happy Birthday to the Queen of Hearts! We know your journey has been long, but we hope you know that you will always be the guiding star and heart of ABC World. The mystical underwater treasure of ABC World awaits you!Join us for the Partyyyy!</p>
                    </div>
                    </div>
                    <button className='mt-4 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:bg-blue-600 hover:scale-105' 
                            onClick={handleClick}>
                        Enter ABC World
                    </button>
                </div>    
            )}
            {showBubbles && bubbles.map((bubble, index) => (
                <Image 
                    key={index}
                    src={bubble.src}
                    alt={`Bubble ${index}`}
                    width={50}
                    height={50}
                    className={`absolute bottom-0 transition-all ${styles['bubble-float']}`}
                    style={{left: bubble.left, animationDelay: bubble.animationDelay}}
                    onClick={() => handleBubbleClick(index)}
                />
            ))}

            <div className='absolute top-1/2 left-0 transform -translate-y-1/2 p-4'>
                {seaPals.map((pal, index) => {
                        return (
                            <Image 
                                key={index}
                                src={pal.src}
                                alt={pal.name}
                                width={100}
                                height={100}
                                className='my-5 rounded-full cursor-pointer transition-transform transform hover:scale-105'
                                onClick={() => handlePalClick(pal)}
                            />
                        );
                })}
            </div>

            {clickedPal && (
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 shadow-lg rounded p-6 w-100 h-100 overflow-auto'>
                    <h2 className='text-3xl font-bold font-dancing-script mb-2 text-justify'>{clickedPal.name}</h2>
                    <div className='flex mb-4 border-b border-gray-300'>
                        <button 
                               className={`w-1/2 py-2 text-center ${activeTab === 'HBD' ? 'bg-pink-400 text-white' : 'bg-pink-200 text-gray-600'}`}
                               onClick={() => setActiveTab("HBD")}
                        > HBD </button>
                        <button 
                               className={`w-1/2 py-2 text-center ${activeTab === 'Who Am I?' ? 'bg-pink-400 text-white' : 'bg-pink-200 text-gray-600'}`}
                               onClick={() => setActiveTab("Who Am I?")}
                        >Who Am I?</button>
                    </div>
                    <div className='flex-1 text-justify font-dancing-script px-4'>
                        {activeTab === 'HBD' && (
                            <p className='text-lg text-gray-700'>{clickedPal.hbdText}</p>
                        )}
                        {activeTab === 'Who Am I?' && (
                            <div>
                                <Image 
                                    src={clickedPal.src}
                                    alt={clickedPal.name}
                                    width={150}
                                    height={150}
                                    className='rounded-full mb-4'
                                />
                                <p className='text-lg text-gray-700'>{clickedPal.whoAmIText}</p>
                            </div>
                        )}
                    </div>
                    <button 
                        className='mt-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg transition-transform transform hover:bg-blue-600 hover:scale-105 mx-auto'
                        onClick={() => setClickedPal(null)}
                    >
                        Close
                    </button>
                </div>
            )}
            {showFinalIcon && (
                <div className='absolute top-1/2 right-4 transform -translate-y-1/2'>
                    <Image
                         src={finalIcon.src}
                         alt="Final Icon"
                         width={100}
                         height={100}
                         className='my-5 rounded-full cursor-pointer transition-transform transform hover:scale-105'
                         onClick={handleFinalIconClick}
                    />
                </div>
            )}
            {showFinalImage && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <div className='relative bg-pink-200 p-6 rounded-lg shadow-lg'>
                        <Image
                              src={finalImage}
                              alt="Final Image"
                              width={500}
                              height={500}
                              className='rounded-lg'
                        />
                        <p className='text-2xl font-dancing-script text-pink-600 text-center leading-tight mt-4'>Happy Birthday to the Mer-Cat Queen of ABC World!</p>
                        <button 
                              className='absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg transition-transform transform hover:bg-blue-600 hover:scale-105'
                              onClick={() => setShowFinalImage(false)}>
                            Close
                        </button>

                    </div>
                </div>
            )}
        </div>
        //<div className="h-screen w-screen flex items-center justify-center bg-blue-500">Welcome to the Blue Screen!</div>
    );
};

export default SeaWorld;