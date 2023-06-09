import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SideCard from './components/SideCard/SideCard'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime,setWatchTime] = useState(0)
  console.log(watchTime)
const handleWatchTime = (time)=>{
const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"))
if(previousWatchTime){
const sum = previousWatchTime + time;
localStorage.setItem("watchTime", sum);
setWatchTime(sum)
}
else{
localStorage.setItem("watchTime", time);
setWatchTime(time)
}
console.log(time)
// const setTime = watchTime+time
setWatchTime((setTime)=> setTime + time)
}
  return (
    <div className="App">
    <Header></Header>
    <div className="main row">
      <div className="home-container col-md-8  ">
        <Home handleWatchTime={handleWatchTime}></Home>
      </div>
      <div className=" side-cart col-md-4 card ">
        <SideCard watchTime={watchTime}
setWatchTime={setWatchTime}

        ></SideCard>
      </div>
    </div>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
