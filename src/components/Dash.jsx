import React from 'react'
import { motion } from "framer-motion"
import '../App.css'
import data from '../data.json'
import Todo from './elements/Todo'
import Calendar from './elements/Calendar'
import Forecast from './elements/Forecast'
import Newsum from './elements/Newsum'
import Article from './elements/Article'

function Dash() {

    let articles = data.articles
    console.log(articles)
  return (
    <div className='Dash'>
        <div className="overview">
            <Forecast/>
            <Newsum>
               {articles.map((v,i)=>(
                 <Article key={i} story = {v}/>
               ))}
            </Newsum>
        </div>
        <div className="mytasks">
            <Todo/>
            <Calendar />
        </div>
    </div>
  )
}

export default Dash