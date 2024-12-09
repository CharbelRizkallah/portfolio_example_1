import React, { useEffect, useState } from 'react';
import { client, urlFor } from "../client.js";

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
      client.fetch(`*[_type == "profile"]`).then((data) => setData(data));
  },[])


  return (
    <div id='about' className='mx-5 md:mx-32 my-9'>
        <div className='m-2 flex justify-between items-end mb-2'>
            <div className='w-1/2'>
              <h1 className='text-4xl md:text-6xl text-cOne text-bold title'>{data?.map((prof, index) => index === 0 ? prof.name : '')}</h1>
              <h2 className='text-2xl md:text-3xl text-cThree text-semibold'>{data?.map((prof, index) => index === 0 ? prof.profession: '')}</h2>
            </div>
            <div className='w-1/2 flex justify-end'>
              {data?.map((prof, index) => index === 0 ? <img src={urlFor(prof.picture)} alt={prof.name} className='w-1/2 md:w-1/4 border-4 border-cOne drop-shadow-lg rounded-full' /> : '')}
            </div>
        </div>
        <div className='m-2 pt-3 text-cFive text-semibold'>
            <p>
              {data?.map((prof) => prof.about)}
            </p>
        </div>
    </div>
  )
}

export default About