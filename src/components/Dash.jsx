import React from 'react'
import { motion } from "framer-motion"
import '../App.css'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import imgWeather from "../assets/sunny.png"




function Dash() {

    let data = [{name:'Abigail'},{name:'Jennifer'},{name:'Cyndia'},{name:'Eva'}]
    let data2 =[{name: 'XinHeng', days_out: 1},{name: 'Miller', days_out: 3},{name: 'Abby', days_out: 8},{name: 'Marcus', days_out: 4}, {name: 'Jenny', days_out: 2}, {name: 'Evelyn', days_out: 7},{name: 'Cyndia', days_out: 2}]
  return (
      <div className={'Dash'}>
        <div className='currWeather'>
            <div className='weatherdegree'>
                <h3>39C</h3>
            </div>
            <img src={imgWeather} alt="test" />
        </div>
            <LineChart width={500} height={200} data={data2}>
                <Line type="monotone" dataKey="days_out" stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis dataKey="days_out"/>
                <Tooltip/>
            </LineChart>
        {/* {
            data.map((val,i)=>(
                <motion.div 
                className='cardtest'
                whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: .9 }}
                // drag
                // dragConstraints={{
                // top: -50,
                // left: -50,
                // right: 50,
                // bottom: 50,
                // }}
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: 0.2, delay: i * 0.3 }}
                key={i}
                >
                    <p>Hello {val.name}</p>
                </motion.div>
            ))
        } */}

    </div>
  )
}

export default Dash