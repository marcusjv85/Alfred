import React from 'react'

function Navbtn({name, updateState}) {
    let navClick = ()=>{
        console.log(`Clicked the ${name} button`)
    }

  return (
    <div onClick={navClick}>
        <p>{name}</p>
    </div>
  )
}

export default Navbtn