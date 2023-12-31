import React,{useState} from 'react'
import Card from './Card';
import { FiChevronLeft ,FiChevronRight} from "react-icons/fi";

const Testimonials = (props) => {
    const reviews= props.reviews;
    const[index,setIndex] = useState(0);
    function leftShiftHandler(){
        setIndex((index-1 +reviews.length)%reviews.length)
    }
    function rightShiftHandler(){
        setIndex((index+1)%reviews.length)
    }
    function surpriseHandler(){
        setIndex(Math.floor(Math.random()*reviews.length))
    }




    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-start items-center 
         mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
           
             <Card  review = {reviews[index]} />
          
            <div className=" flex text-3xl mt-10 gap-3 text-violet-400 font-bold ">
                <button onClick={leftShiftHandler}
                 className='cursor-pointer select-none hover:text-voilet-500'>
                    <FiChevronLeft />
                </button>
                <button onClick={rightShiftHandler}
                className='cursor-pointer hover:text-voilet-500 select-none'>
                    <FiChevronRight/>
                </button>
            </div> 

            <div className="text-center mt-7">
                <button onClick={surpriseHandler}
                 className='bg-violet-400 select-none hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'
                    >Surprise Me
                </button>
            </div>
        </div>
    )
}



export default Testimonials;