'use client';
import {useState} from 'react';
import Image from 'next/image';
const JangTrio = ({handleSeaWorld}) => {
    const [cards, setCards] = useState({
        left: false, 
        right: false,
        flipped: [false, false, false],
        inputs: ['', '', ''],
        correct: false,
    });

    const acceptedWords = [
        ['GanJang','smooth', 'Elegant', 'Refined', 'Graceful', 'Poised', 'Classy', 'Reliable', 'Modest', 'Charming', 'Flexible', 'Versatile', 'Finesse','Gentle'],
        ['DoenJang','dynamic', 'Deep', 'Comforting', 'Rich', 'Authentic', 'Genuine', 'Unique', 'Subtle', 'Warm', 'Cozy', 'Soulful', 'Wholesome'],
        ['GochuJang', 'intellectual', 'Insightful', 'Innovative', 'Inquisitive', 'Intelligent', 'Ingenious', 'Inspiring', 'Irresistable', 'Captivating', 'Sensational']
    ]

    const handleQueenClick = () => {
        if (!cards.left) {
            setCards({...cards, left: true});
        } else if (!cards.right) {
            setCards({...cards, right: true});
        } 
    };

    const handleFlip = (index) => {
        const newFlipped = [...cards.flipped];
        newFlipped[index] = !newFlipped[index];
        setCards({...cards, flipped: newFlipped});
    };

    const handleInputChange = (e, index) => {
        const newInputs = [...cards.inputs];
        newInputs[index] = e.target.value.toLowerCase();
        setCards({...cards, inputs: newInputs});
    };

    const checkIfCorrect = () => {
        const isCorrect = cards.inputs.every((input, index) => {
            return acceptedWords[index].includes(input);
        });

        if (isCorrect) {
            setCards({...cards, correct: true});
            handleSeaWorld();
        }
    };

    return (
        <div
          className={`h-screen w-screen flex items-center justify-center ${
            cards.correct ? "bg-blue-500" : "bg-pink-300"
          }`}
        >
          {!cards.correct ? (
            <>
              {cards.left && (
                <div className="w-1/3 flex justify-center">
                  <div
                    className={`relative cursor-pointer ${
                      cards.flipped[0] ? "flip-card" : ""
                    }`}
                    onClick={() => handleFlip(0)}
                  >
                    <Image
                      src={
                        cards.flipped[0]
                          ? "/images/JangTrio/GanJang.png"
                          : "/images/QueenHeart.png"
                      }
                      alt="Queen of Hearts Left"
                      width={300}
                      height={500}
                      className="transform hover:scale-105 transition-transform duration-500"
                    />
                    {cards.flipped[0] && (
                      <input
                        type="text"
                        value={cards.inputs[0]}
                        onChange={(e) => handleInputChange(e, 0)}
                        onClick={(e) => e.stopPropagation()}
                        placeholder="Enter word"
                        className="mt-4 p-2 border border-gray-300 rounded"
                      />
                    )}
                  </div>
                </div>
              )}
    
              <div className="w-1/3 flex justify-center">
                <div
                  className={`relative cursor-pointer ${
                    cards.flipped[1] ? "flip-card" : ""
                  }`}
                  onClick={() => handleFlip(1)}
                >
                  <Image
                    src={
                      cards.flipped[1]
                        ? "/images/JangTrio/DoenJang.png"
                        : "/images/QueenHeart.png"
                    }
                    alt="Queen of Hearts Center"
                    width={300}
                    height={500}
                    className="transform hover:scale-105 transition-transform duration-500"
                  />
                  {cards.flipped[1] && (
                    <input
                      type="text"
                      value={cards.inputs[1]}
                      onChange={(e) => handleInputChange(e, 1)}
                      onClick={(e) => e.stopPropagation()}
                      placeholder="Enter word"
                      className="mt-4 p-2 border border-gray-300 rounded"
                    />
                  )}
                </div>
              </div>
    
              {cards.right && (
                <div className="w-1/3 flex justify-center">
                  <div
                    className={`relative cursor-pointer ${
                      cards.flipped[2] ? "flip-card" : ""
                    }`}
                    onClick={() => handleFlip(2)}
                  >
                    <Image
                      src={
                        cards.flipped[2]
                          ? "/images/JangTrio/GochuJang.png"
                          : "/images/QueenHeart.png"
                      }
                      alt="Queen of Hearts Right"
                      width={300}
                      height={500}
                      className="transform hover:scale-105 transition-transform duration-500"
                    />
                    {cards.flipped[2] && (
                      <input
                        type="text"
                        value={cards.inputs[2]}
                        onChange={(e) => handleInputChange(e, 2)}
                        onClick={(e) => e.stopPropagation()}
                        placeholder="Enter word"
                        className="mt-4 p-2 border border-gray-300 rounded"
                      />
                    )}
                  </div>
                </div>
              )}
    
              {!cards.left || !cards.right ? (
                <button
                  className="absolute bottom-10 bg-red-500 text-white px-4 py-2 rounded-full"
                  onClick={handleQueenClick}
                >
                  Reveal Queen of Hearts
                </button>
              ) : (
                <button
                  className="absolute bottom-10 bg-green-500 text-white px-4 py-2 rounded-full"
                  onClick={checkIfCorrect}
                >
                  Check Words
                </button>
              )}
            </>
          ) : (
            <div className="text-white text-3xl">Welcome to the Blue Screen!</div>
          )}
        </div>
      );
};
    
export default JangTrio;