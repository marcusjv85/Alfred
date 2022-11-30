import React, { useEffect, useState } from 'react';
import '../App.css'

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
        data.length===0?<p>loading...</p>:data.map((val,i)=>(<p>{val.name}</p>))
      }
    </div>
  )
}

export default News 