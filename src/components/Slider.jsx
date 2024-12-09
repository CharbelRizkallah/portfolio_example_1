import { useEffect, useState } from "react";
import { client, urlFor } from '../client';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const Slider = () => {
    const [data, setData] = useState(null);
    const [maxInd, setMaxInd] = useState(1);
    const [ind, setInd] = useState(0);
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
  
    useEffect(() => {
        client.fetch(`*[_type == "work"]`).then((data) => {setData(data); setMaxInd(data.length);});
    },[]);

    const midBannerClass = "absolute px-2 left-0 right-0 mx-auto transform duration-300 h-fit md:h-full z-10";
    const leftBannerClass = 'absolute px-2 -left-full transform duration-300 h-fit md:h-full z-20';
    const rightBannerClass = 'absolute px-2 -right-full transform duration-300 h-fit md:h-full z-20';

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50 

    const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) isLeftSwipe ? incInd() : decInd();
    // add your conditional logic here
    }

    const incInd = () => {
        if(ind < maxInd - 1){
            setInd(ind+1);
        }else{
            setInd(0);
        }
    }

    const decInd = () => {
        if(ind > 0){
            setInd(ind-1);
        }else{
            setInd(maxInd-1);
        }
    }
  
  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className='relative h-[300px] md:h-[500px] select-none overflow-hidden'>
            <div className='absolute w-8 md:w-32 top-0 left-0 h-full z-20 rounded-r-full transition duration-500 md:hover:bg-cTwo hover:cursor-pointer opacity-90' onClick={decInd}>
                <div className="h-full w-full flex justify-center items-center">
                    <IoIosArrowBack size={40} color={'facc15'} />
                </div>
            </div>
            <div className="flex h-full justify-center items-center z-10">
                {data?.map((work, index)=> <img className={
                    index === ind ? midBannerClass :
                    index === ind + 1 ? rightBannerClass :
                    index === ind - 1 ? leftBannerClass :
                    index === maxInd - 1 && ind === maxInd - 2 ? rightBannerClass :
                    index === maxInd - 1 && ind === 0 ? leftBannerClass :
                    index === 0 && ind === maxInd - 1 ? rightBannerClass :
                    index === 0 && ind === 1 ? leftBannerClass:
                    'hidden'
                     } key={work.id} src={urlFor(work.featured_image)} alt={work.title} /> )}
            </div>
            <div className='absolute w-8 md:w-32 top-0 right-0 h-full z-20 rounded-l-full transition duration-500 md:hover:bg-cTwo hover:cursor-pointer opacity-90' onClick={incInd}>
                <div className="h-full w-full flex justify-center items-center">
                    <IoIosArrowForward size={40} color={'facc15'}/>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center h-6">
            {data?.map((work, index)=> <div className={index === ind ? "w-3 h-3 rounded-full drop-shadow-lg bg-yellow-400 mx-1": 'w-2 h-2 rounded-full drop-shadow-lg bg-cThree mx-1'}></div>)}
        </div>
    </div>
  )
}

export default Slider