import React from 'react'
import '../../App.css'

function Navbtn({name}) {



    let navClick = ()=>{
        console.log(`Clicked the ${name} button`)
    }

  return (
    <div className='navBtn' onClick={navClick}>
        <p>{name}</p>
    </div>
  )
}

export default Navbtn