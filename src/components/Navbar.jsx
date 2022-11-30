import React,{} from 'react'
import '../App.css';
import Navbtn from './elements/Navbtn';
import { BsGear } from "react-icons/bs";
import profile from '../assets/marcus_profile.png'


function Navbar({updateState}) {
    let linkArray = [{name:'Home', component: 'home'}, {name:'News', component: 'news'}, {name:'Weather', component: 'weather'},{name:'Sports', component: 'sports'},{name:'Science', component: 'science'}]


    return (
    <div className='Navbar'>

        <img src={profile} alt="profile_img" style={{width: 100, height: 100, borderRadius: 60, marginTop:45 }} />

        <div className="NavBtnLst">
            {
                linkArray.map((val,i)=>(
                    <div key={i} onClick={()=>{updateState(val.component)}}>
                        <Navbtn  name={val.name} />
                    </div>
                ))
            }
        </div>
        <BsGear className='tester'/>
    </div>
  )
}

export default Navbar