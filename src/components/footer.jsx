
import GPT3 from '../assets/GPT-3.svg'
import '../Footer.css'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
    const handleEarlyaccess = () => {
        navigate("/signup")
    }
    return(
      <section className="Footer">
       <div className='Request'>
        <h2>Do you want to step in to the<br></br>future before others</h2>
        <button onClick={handleEarlyaccess}>Request Early Access</button>
       </div>
       <div className='global-footer'>
        <div className='LOGO'>
        <img src={GPT3} alt='GPT-3' id='logo2'/>
        <p>Crechterwoord K12 182 DK <br></br> Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='LINKS'>
            <h6>Links</h6>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
        </div>
        <div className='Company'>
            <h6>Company</h6>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
        </div>
        <div className='Get'>
            <h6>Get i touch</h6>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
        </div>
       </div>
       <p id='rights'>© 2021 GPT-3. All rights reserved.</p>
      </section>
    )
}

export default Footer
