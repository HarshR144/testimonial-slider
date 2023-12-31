import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';

 
const Card = (props) => {
    const review = props.review;

    return (
        <div className='flex flex-col md:relative '>
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
               
                <img src={review.image} alt=' ' className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'/>
                <div className='rounded-full w-[140px] h-[140px] z-[-10] bg-violet-500 absolute top-[-6px] left-[10px]'>

            </div>
            </div>
 
            <div className="text-center mt-7">
                <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
            </div>
            
           

            <div className="mx-auto  mt-5 text-violet-400">
                <FaQuoteLeft/>
            </div>

            <div className="text-center mt-4 text-slate-500 ">
                <p>{review.text}</p>
            </div>
            <div className="mx-auto  mt-5 text-violet-400">
                <FaQuoteRight/>
            </div>
         
            
            
        </div>
    )
}

export default Card