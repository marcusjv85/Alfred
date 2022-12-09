import React from 'react'
import '../../Elements.css'
function Hscroll({children}) {
    console.log(window.innerWidth);
  return (

    <div drag className='hbody'>
        <div className='htitle' >News</div>
        <div  className='hscroll'>
            {children}
        </div>
    </div>
  )
}

export default Hscroll