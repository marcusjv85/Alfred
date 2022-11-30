import React, { useEffect, useState } from 'react';
import '../App.css'
import { motion } from "framer-motion"


function News() {
  let [data, setData]= useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setData(json)  
    })
  },[])
  return (
    <div className='News'>
      {
        data.length===0?<p>loading...</p>:data.map((val,i)=>(<motion.div
           className='cardtest2' 
           whileHover={{ scale: 1.1 }}
           initial={{ opacity: 0, scale: 0.5,translateY:-250 }}
           animate={{ opacity: 1, scale: 1,translateY: 0}}
           transition={{ duration: 0.2, delay: i * 0.1 }}
           key={i}
           >
            {val.name}
            </motion.div>))
      }
    </div>
  )
}

export default News 