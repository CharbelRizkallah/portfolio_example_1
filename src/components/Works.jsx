import React, { useEffect, useState } from 'react';
import { client } from "../client.js";
import Work from './Work.jsx';

const Works = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        client.fetch(`*[_type == "work"]`).then((data) => setData(data));
    },[])
    


  return (
    <div id='works' className='w-auto md:flex md:flex-wrap m-10'>
        {data?.map((work, index) => <Work index={index} key={work.id} title={work.title} desc={work.desc} images={work.pictures} featured={work.featured_image} />)}
    </div>
  )
}

export default Works