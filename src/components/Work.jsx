import React, { useState } from 'react'
import { urlFor } from '../client';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Work = ( {index, title, desc, images, featured} ) => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    } 

  return (
    <div id={title + index} className='mb-5 p-2 select-none md:w-1/2'>
        <div className='md:flex mb-1 md:mb-3'>
            <div className='md:w-1/2 flex flex-col justify-center mb-2 md:mb-0'>
                <div className='flex justify-left text-5xl md:text-6xl mb-5 text-cOne title'>
                    <h1> { title } </h1>
                </div>
                <div className='flex justify-left text-lg md:text-xl text-cFive'>
                    <h1> { desc } </h1>
                </div>
            </div>
            <div className='md:w-1/2 flex justify-end'>
                <img src={urlFor(featured && featured)} className="w-full md:w-auto md:hover:scale-125 md:hover:border-4 md:hover:border-cTwo md:hover:drop-shadow-lg" alt='title'/>
            </div>
        </div>
        <div className='md:hidden flex justify-center items-center mb-1' onClick={handleToggle}>
            {toggle ? <IoIosArrowDown color='facc15' size={30} /> : <IoIosArrowUp color='facc15' size={30} /> }
        </div>
        <div className={toggle ? 'columns-3 gap-3 w-full mx-auto space-y-3' : 'md:columns-3 md:gap-3 md:w-full md:mx-auto space-y-3'}>
            {images.map((image) => 
                <div className='break-inside-avoid'>
                    <img src={urlFor(image)} alt={image} className='md:hover:scale-125 md:hover:border-4 md:hover:border-cTwo md:hover:drop-shadow-lg' />
                </div>
            )}
        </div>
    </div>
  )
}

export default Work