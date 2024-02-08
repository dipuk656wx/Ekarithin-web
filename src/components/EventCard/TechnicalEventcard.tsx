import React, { useState } from 'react';
import './EventCard.css';
import { motion } from 'framer-motion';
// import space1 from '../../../public/images/images (1).jpeg';
// import space2 from '../../../public/images/images.jpeg';

const TechnicalEventcard = () => {
    const events = ["ffgcg", "hjhg", "hjjhvgv"];
    const [isFlip, setFliplled] = useState(false);
    const [isAnimation, setIsAnimation] = useState(false);

    function handleflip() {
        if (!isAnimation) {
            setFliplled(!isFlip);
            setIsAnimation(true);
        }
    }

    return (
        <div>

            <div className='flip-card w-[340px] h-[360px] rounded-md cursor-pointer' onClick={handleflip}>
                <motion.div
                    className='flip-card-inner w-[100%] h-[100%]'
                    initial={false}
                    animate={{ rotateY: isFlip ? 180 : 360 }}
                    transition={{ duration: 0.6 }}
                    onAnimationComplete={() => setIsAnimation(false)}
                >
                    {/* <img src="/images/sky.jpeg" className='w-[100px] h-[100px]' alt="" /> */}
                    <motion.div
                        className='flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
                        style={{
                            backgroundImage: "url(/images/sky.jpeg)",
                            backgroundSize: "cover", // Adjust the background size if needed
                            backgroundPosition: "center", // Adjust the background position if needed
                        }}
                    >
                        <h1>Sky</h1>
                        <p>Technical Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, maxime?</p>
                    </motion.div>




                    <motion.div
                        className='flip-card-black w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
                        style={{
                            backgroundImage: "url(/images/images.jpeg)",
                            backgroundSize: "cover", // Adjust the background size if needed
                            backgroundPosition: "center", // Adjust the background position if needed
                        }}
                    >
                        <h1>Sky</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, maxime?</p>
                    </motion.div>



                </motion.div>

            </div>
        </div>
    );
}

export default TechnicalEventcard;
