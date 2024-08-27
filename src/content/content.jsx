


import "./content.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"

import amin from '../assets/Photo by Amin RK.png'
import brooke from '../assets/Photo by Brooke Cagle.png'
import chris from '../assets/Photo by Chris Zhang.png'
import daniil from '../assets/Photo by Daniil Lobachev.png'
import franco from '../assets/Photo by Franco Figueroa.png'
import hayes from '../assets/Photo by Hayes Potter.png'
import joe from '../assets/Photo by Joe Gardner.png'
import matteo from '../assets/Photo by Matteo Minoglio.png'
import peter from '../assets/Photo by Peter Idowu.png'

const Content = () => {
    const [data,setData]=useState([])


    // const images =[amin,brooke,chris,daniil,franco, hayes,joe,matteo,peter]
   const images= [peter,matteo,chris,hayes,amin,brooke,franco,joe,daniil]

useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
// .then(resp=>console.log(resp.data))
.then(res=>setData(res.data))
.then(err=>console.log(err))
},[])

  return (
<>
    <h1 className="content-title">Alumnus of Law College</h1> 
    <div className="content">  
{
    data.map((item,index)=>(
        <div className="content-card">
            <img key={index} src={images[index]} alt="images"  className="content-images"/>
        <h2 className="card-name" key={index}>{item.name}</h2>
       <p className="card-username">{item.username}</p>
       <p  className="card-username">{item.email}</p>
       <p  className="card-username">{item.address.city}</p>
       </div>
    ))
}
    </div>
    </>
  )
}

export default Content