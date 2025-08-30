import "./global.css"
import Rec17 from "./assets/Rectangle 17.svg"
import Feature from "./assets/Feature Image.svg"
import blur2 from "./assets/blur-02.svg"
import { useNavigate } from "react-router-dom"

function Future() {
    const navigate = useNavigate()
    const handleGetstarted = () => {
        navigate("/signup")
    }
    return(
        <section className="global">
        <div className="global-group">
            <div className="group1">
              <h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
              <p>Request Early Access to Get Started</p>
            </div>
            <div className="group2">
              <img src={Rec17} alt='rectangle' id='Rec5'/>
              <h3>Improving end <br></br> distrusts instantly </h3>
              <img src={Rec17} alt='rectangle' id='Rec6'/>
              <h3>Become the <br></br> tended active</h3>
              <img src={Rec17} alt='rectangle' id='Rec7'/>
              <h3>Message or am <br></br> nothing</h3>
               <img src={Rec17} alt='rectangle' id='Rec8'/>
              <h3>Really boy law <br></br> county</h3>
            </div>
            <div className="group3">
               <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
               <p>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
               <p>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
               <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
            </div>
        </div>
                <img src={blur2} alt='blur' id='blur2'/>
        <div className='Feature'>
            <img src={Feature} alt='Feature' id='Feature'/>
            <div className='Content'>
               <h6>Request Early Access to Get Started</h6>
               <h2>The possibilities are <br></br> beyond your imagination</h2>
               <p id='p1'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
               <p id='p2'>Request Early Access to Get Started</p>
            </div>
        </div>
        <div className='Register-ask'>
            <p>Request Early Access to Get Started</p>
            <div className='sub-reg'>
            <h4>Register today & start exploring the endless possiblities.</h4>
            <button onClick={handleGetstarted}>Get Started</button>
            </div>
        </div>
        </section>
    )
}
export default Future