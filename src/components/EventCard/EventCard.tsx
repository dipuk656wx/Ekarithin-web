import React, { useState } from 'react';
import './EventCard.css';
import { motion } from 'framer-motion';

const EventCard = () => {
    const events = ["ffgcg", "hjhg", "hjjhvgv", "abcde", "fghij"]; // Example 5 data items

    const [flippedIndex, setFlippedIndex] = useState(-1);

    function handleflip(index: number) {
        setFlippedIndex(index === flippedIndex ? -1 : index);
    }

    return (
        // <div className=' h-full w-full' style={{backgroundImage: `url("/backGround.svg")`}} >
        <div style={{backgroundImage: `url("/backGround.svg")`}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1 md:gap-2 xl:gap-2 px-3 bg-slate-700"> {/* Adjust grid layout based on screen size */}
            {events.map((event, index) => (
                <div key={index} className={`flip-card w-[400px] h-[360px] rounded-md cursor-pointer ${flippedIndex === index ? 'flipped' : ''}`} onClick={() => handleflip(index)}>
                    <motion.div
                        className='flip-card-inner w-full h-full'
                        initial={false}
                        animate={{ rotateY: flippedIndex === index ? 180 : 360 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className='flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-lg p-4 relative'
                            style={{
                                backgroundImage: "url(/images/sky.jpeg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div>
                                {/* <h1>Sky</h1> */}
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, maxime?</p>
                            </div>
                            <div className="Register-buttons-container">
                                <button className='Register-button' onClick={() => window.location.href = '/Register'}>Register</button>
                                <button className='Details-button' onClick={() => window.location.href = '/Details'}>Details</button>
                            </div>
                        </motion.div>

                        <motion.div
                            className='flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4'
                            style={{
                                backgroundImage: "url(/images/images.jpeg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Add content for the back of the card if needed */}
                        </motion.div>
                    </motion.div>
                </div>
            ))}
        </div>
        // </div>
    );
}

export default EventCard;
