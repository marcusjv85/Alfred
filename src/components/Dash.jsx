import React from 'react'
import { motion } from "framer-motion"
import '../App.css'

function Dash() {

    let data = [{name:'Abigail'},{name:'Jennifer'},{name:'Cyndia'},{name:'Eva'}]
  return (
    <div className={'Dash'}>
        {
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
                initial={{ opacity: 0, scale: 0.5,translateY:-250 }}
                animate={{ opacity: 1, scale: 1,translateY: 0}}
                transition={{ duration: 0.2, delay: i * 0.2 }}
                key={i}
                >
                    <p>Hello {val.name}</p>
                </motion.div>
            ))
        }

    </div>
  )
}

export default Dash