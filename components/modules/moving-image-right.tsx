"use client"
import React, { useState, useEffect } from 'react';

const MovingImageRight = () => {
  const [direction, setDirection] = useState(1);
  const [position, setPosition] = useState(-200);
  const stepSize = 5;
  const interval = 2000;
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition((prevPosition) => prevPosition + direction * stepSize);


      if (position >= 200 || position <= 0) {
        setDirection((prevDirection) => -prevDirection);
      }
    }, interval);

    return () => clearInterval(moveInterval);
  }, [position, direction]);

  return (
    <div className='hidden lg:block'>
      <img
        src="https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/2.png"
        alt="Moving Image"
        style={{ position: 'absolute', top: `${position}px` }}
        className='transition-top duration-1000 ease-in-out rounded-lg drop-shadow-2xl	'
        width={130}
      />
       <img
        src="https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/3.png"
        alt="Moving Image"
        style={{ position: 'absolute', top: `${position+160}px`,  left: 30 }}
        className='transition-top duration-1000 ease-in-out rounded-lg'
        width={130}
      />
       <img
        src="https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/4.png"
        alt="Moving Image"
        style={{ position: 'absolute', top: `${position+320}px` }}
        className='transition-top duration-1000 ease-in-out rounded-lg'
        width={130}
      />
    </div>
  );
};

export default MovingImageRight;
