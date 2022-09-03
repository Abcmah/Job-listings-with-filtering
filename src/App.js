import { useState } from 'react';
import JsonData from './data.json'
import deskTopImg from './images/bg-header-desktop.svg'
import Jobs from './Jobs';
import mobi from './images/bg-header-mobile.svg'
import './bootstrap.css'
import './App.css';
function App() {
  const [filter,setFilter]=useState([])
const clear =()=>{
  setFilter([])
}
 const filterFn =(tool)=>{
  if(filter.length ===0){
    setFilter([...filter,tool])
  }else{

    filter.map((tl)=>{
      console.log(tl)
      tool !==tl && setFilter([...filter,tool])
    })
  }
 }

  return (
  <>
  <section>
<div className="top-container">
<img className='desktop' style={{backgroundColor:"hsl(180, 29%, 50%)",height:"130px",width:"100%"}} src={deskTopImg} alt="" />
<img className='mobile' src={mobi}/>
</div>
<Jobs onClear={clear} onFilterReq={filterFn} onFilter={filter} data={JsonData}/>

  </section>
  
  </>
  );
}

export default App;
