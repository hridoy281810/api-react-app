import React, { useEffect, useState } from 'react';
import './SideCard.css';
import { ToastContainer, toast } from 'react-toastify';

const SideCard = ({watchTime}) => {
const [time,setTime] = useState(watchTime)
const [breakTime, setBreakTime] = useState(0);

useEffect(()=>{
    const getWatchTimeFormeStorage = localStorage.getItem("watchTime");
    setTime(getWatchTimeFormeStorage)
    const getBreakTime = localStorage.getItem("breakTime");
    setBreakTime(getBreakTime);
},[watchTime]);


const handleBreakTime = (bt)=>{
localStorage.setItem("break-time", bt);
setBreakTime(bt)
}
const handleComplete = () =>{
    toast("Wow so easy!")
}

    return (
        <div className='side-cart'>
           <h1>My Cart</h1>
           <div className='mt-5 text-center'>
        <p>Total watch time</p>
        <input type="text" value={time} disabled />
           </div>
           <h5 className='mt-5'>Add Break time</h5>
  <button onClick={()=> handleBreakTime(15)} className='w-25 btn-circle m-1 btn btn-info'>15</button>
  <button onClick={()=> handleBreakTime(20)} className='w-25 btn-circle m-1 bg-warning btn btn-info'>20</button>
  <button onClick={()=> handleBreakTime(25)} className='w-25 btn-circle m-1 bg-danger btn btn-info'>25</button>
        <input className='m-1' type="text" value={breakTime} disabled />
  <button onClick={handleComplete}  className='w-25 mt-5 btn btn-info w-100'>Complete</button>
       
        </div>
    );
};

export default SideCard;