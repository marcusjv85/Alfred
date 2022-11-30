import React from 'react'
import '../App.css';
import Navbtn from './elements/Navbtn';




function Navbar({updateState}) {
    let linkArray = [{name:'news', component: 'Home'}, {name:'news', component: 'News'}, {name:'weather', component: 'Weather'},{name:'sports', component: 'Sports'},{name:'science', component: 'Science'}]


    return (
    <div className='Navbar'>
        {
            linkArray.map((val,i)=>(
                <div key={i} onClick={()=>{updateState(val.name)}}>
                    <Navbtn  name={val.name} />
                </div>
            ))
        }
        
    </div>
  )
}

export default Navbar