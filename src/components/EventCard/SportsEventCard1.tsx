import React, { useState } from 'react';
import './EventCard.css';
import { motion } from 'framer-motion';
import { SportAllData } from '../../SportData';
import Header from '../header';
import Footer from '../Footer/Footer';

interface Event {
    id: number;
    image: string;
    name: string;
    description: string;
    rules: string[];
    prizes: string[];
    team: string;
    category: string;
    fees: string;
    contactInfo: string[];
    location: string;
    date: string;
    link: string;
}

const SportEventCard = () => {
    const [flippedIndex, setFlippedIndex] = useState<number>(-1);

    function handleflip(index: number) {
        setFlippedIndex(index === flippedIndex ? -1 : index);
    }

    return (
        <div>
            <Header />
            <div style={{ height: '100%', backgroundImage: `url("/backGround.svg")`, backgroundSize: 'cover', backgroundPosition: 'center', alignItems: 'center' }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1 md:gap-2 xl:gap-9 px-4 bg-slate-700">
                {SportAllData.map((event: Event, index: number) => (
                    <div key={index} className={`flip-card w-[400px] h-[360px] rounded-md cursor-pointer ${flippedIndex === index ? 'flipped' : ''}`} onClick={() => handleflip(index)}>
                        <motion.div
                            className='flip-card-inner w-full h-full'
                            initial={false}
                            animate={{ rotateY: flippedIndex === index ? 180 : 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className='flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-lg p-4 relative hover:scale-110'
                                style={{
                                    backgroundImage: `url(${event.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }} // Scale up on hover with transition
                            >
                                <div>
                                    <p>{event.name}</p>
                                </div>
                                <div className="Register-buttons-container">
                                    <button className='Register-button' onClick={() => window.location.href = event.link}>Register</button>
                                    <button className='Details-button' onClick={() => window.location.href = `/Sports-event/${index}`}>Details</button>
                                </div>
                            </motion.div>

                            <motion.div
                                className='flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4'
                                style={{
                                    backgroundImage: `url(${event.image})`,
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
            <Footer />
        </div>
    );
}

export default SportEventCard;
