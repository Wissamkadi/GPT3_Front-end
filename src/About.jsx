import { useState} from 'react'
import {Link} from 'react-router-dom'
import "./global.css"
import eclipse1 from "./assets/Ellipse 40.svg"
import eclipse2 from "./assets/Ellipse 39.svg"
import Rec17 from "./assets/Rectangle 17.svg"

function About() {
return(
<section className='global-box'>
    <div className='masked'>
    <img src={eclipse1} alt='eclipse' id='eclipse1'/>
    <img src={Rec17} alt='rectangle' id='Rec1'/>
  <div className='box1'>
   <h3>What is GPT-3</h3>
   <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
  </div>
  <div className='title'>
    <h2>The possibilities are beyond <br></br>your imagination</h2>
      <Link to="#blog">
    <p>Explore The Library</p>
      </Link>
  </div>
  <div className='box2'>
   <div className='sub-box1'>
        <img src={Rec17} alt='rectangle' id='Rec2'/>
      <h3>Chatbots</h3>
      <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
   </div>
   <div className='sub-box2'>
        <img src={Rec17} alt='rectangle' id='Rec3'/>
      <h3>Knowledgebase</h3>
      <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
   </div>
   <div className='sub-box3'>
        <img src={Rec17} alt='rectangle' id='Rec4'/>
       <h3>Education</h3>
       <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
   </div>
  </div>
    <img src={eclipse2} alt='eclipse' id='eclipse2'/>
</div>
</section>
)
}

export default About
