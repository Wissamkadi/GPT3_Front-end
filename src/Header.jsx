import { useState , useEffect} from 'react'
import "./global.css"
import blur1 from './assets/blur-01.svg';           
import HeaderIL from './assets/Header-Illustration.svg';
import google from './assets/google.svg';
import slack from './assets/slack.svg';
import atlassian from './assets/atlassian.svg';
import dropbox from './assets/dropbox.svg';
import shopify from './assets/shopify.svg';
import { useNavigate } from 'react-router-dom';
const API_BASE = "https://gpt3-back-end-4.onrender.com";

function Header() {
      const [email,setEmail] = useState("")
      const [Message,setMessage] = useState("")
      const [userCpt, setUsercpt] = useState(0)
      const navigate = useNavigate()
      const emailInput = (event) => {
        setEmail(event.target.value)
        setMessage("")
      }
      const handleSubmit =(event) => {
        event.preventDefault()
        if(!email){
          setMessage("Please enter your Email")
          return
        }

        navigate("/signup" , { state : {email}})
        }

        useEffect(() => {
          fetch(`${API_BASE}/users/count`)
            .then(res => res.json())
            .then(data => setUsercpt(data.count))
            .catch(err => console.error(err));
        }, []);

    return(
     <div className='Header'>
      <div className='container'>
        <div className='Header-content'>
         <img src={blur1} alt='blur' id='blur1'/>
       <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
       <h6>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</h6>
       <form onSubmit={handleSubmit}>
        <input type='email' placeholder='your Email Address' value={email} onChange={emailInput}/>
        <button id='GetStarted' type='submit'>Get Started</button>
        <h5>{Message}</h5>
        <p id='usernbr'>Trusted by {userCpt} Users</p>
        </form>
      </div>
       <img src={HeaderIL} alt='Header-illustration' id='Header-illustration'/>
      </div>
      <div className='Companies-logo'>
         <img src={google} alt='google'/>
         <img src={slack} alt='slack'/>
         <img src={atlassian} alt='atlassian'/>
         <img src={dropbox} alt='dropbox'/>
         <img src={shopify} alt='shopify'/>
      </div>
      </div>
    )
}
export default Header
