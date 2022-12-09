import React from 'react'
import '../../Elements.css'
import {motion} from "framer-motion"
function Newscard({number, data}) {


  console.log(`Key: ${number} and Data: ${data}`)
  return (
    <>
    <div className='card'>
      <div className='carImg'>
        <img  src="https://image.cnbcfm.com/api/v1/image/107154490-gettyimages-1442553426-dscf1802_ebfa3b94-f261-4c81-a629-8fa32178ee91.jpeg?v=1670234182&w=1920&h=1080" alt="article" />
      </div>
      <div className='cardBody'>
        <h3>Article Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium molestias praesentium cumque! Asperiores, aspernatur. Ad quibusdam deserunt reprehenderit id mollitia maiores esse, vitae illum minima dignissimos iste molestias? Ipsam.
        </p>
      </div>
      {/* {data.name} */}
    </div>
        <a href="https://www.cnbc.com/2022/12/05/treasury-yields-climb-as-investors-await-ism-services-report.html">Link</a>
    </>
  )
}

export default Newscard