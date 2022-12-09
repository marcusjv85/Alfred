import React, { useEffect, useState } from 'react';
import '../App.css'
import { motion } from "framer-motion"
import Newscard from './elements/NewsCard';
import Hscroll from './elements/Hscroll';
import resp from './resp.json'

function News() {
  let [data, setData]= useState([])

  let test = [{name:'Marcus'},{name:'Abby'},{name:'Eevee'},{name:'Penny'},{name:'Marcus'},{name:'Abby'},{name:'Eevee'},{name:'Penny'}]

  console.table('The json file: ',resp.articles)
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json)
  //     setData(json)  
  //   })
  // },[])
  return (
    <div className='News'>
      <a href="https://www.cnbc.com/2022/12/05/treasury-yields-climb-as-investors-await-ism-services-report.html">Link</a>
      <div>
        <div>
          {
                  test.length===0?<p>loading...</p>:test.map((val,i)=>(<Newscard  key={i} number = {i} data={val}/>))
          }
        </div>
      </div>
    </div>
  )
}

export default News 