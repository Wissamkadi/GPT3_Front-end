import { useState} from 'react'
import {Link} from 'react-router-dom'
import "./global.css"
import Rectg1 from "./assets/Rectangle 22.svg"
import Rectg2 from "./assets/Rectangle 22 (1).svg"
import Rectg4 from "./assets/Rectangle 22 (2).svg"
import Rectg3 from "./assets/Rectangle 22 (3).svg"
import Rectg5 from "./assets/Rectangle 22 (4).svg"

function Blog() {
    return(
      <section className='Blog'>
        <h2>A lot is happening,<br></br>We are blogging about it.</h2>
        <div className='blogs'>
          <div className='blog1'>
            <img src={Rectg1} alt='rectangle' id='Rectg1'/>
            <h6>Sep 26, 2021</h6>
            <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
            <h6 className='Read'>Read Full Article</h6>
          </div>
          <div className='blog23'>
         <div className='blog2'>
              <img src={Rectg2} alt='rectangle' id='Rectg2'/>
            <h6>Sep 26, 2021</h6>
            <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
            <h6  className='Read'>Read Full Article</h6>
          </div>
          <div className='blog3'>
              <img src={Rectg3} alt='rectangle' id='Rectg3'/>
            <h6>Sep 26, 2021</h6>
            <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
            <h6 className='Read'>Read Full Article</h6>
          </div>
          </div>
          <div className='blog45'>
          <div className='blog4'>
              <img src={Rectg4} alt='rectangle' id='Rectg4'/>
            <h6>Sep 26, 2021</h6>
            <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
            <h6 className='Read'>Read Full Article</h6>
          </div>
          <div className='blog5'>
              <img src={Rectg5} alt='rectangle' id='Rectg5'/>
            <h6>Sep 26, 2021</h6>
            <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
            <h6 className='Read'>Read Full Article</h6>
          </div>
          </div>
        </div>
      </section>
    )
}
export default Blog