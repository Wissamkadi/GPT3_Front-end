import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../navbar.css'
import GPT3 from '../assets/GPT-3.svg'

function Navbar() {

  const [user ,setUser] = useState("")
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if(storedUser){
      setUser(JSON.parse(storedUser))
    }
  },[])
  

  const handleLogOut = () => {
    localStorage.removeItem("user")
    setUser(null)
  }
  return (
    <nav className='navbar'>
      <Link to="/" style={{position: 'relative', zIndex: 999}}>
        <img src={GPT3} alt="GPT-3" id="logo" />
      </Link>
      
      <div className="links">
        {/* <Link to="/" className="nav-link">Home</Link> */}
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">What is GPT?</a>
        <a href="#future" className="nav-link">Open AI</a>
        <a href="#case-studies" className="nav-link">Case Studies</a>
        <a href="#blog" className="nav-link">Library</a>
      </div>
      
      <div className='Sign'>
        {user ? (
          <div className='User'>
           {user.picture && ( <img 
            src={user.picture}
            alt='profile-picture'
            className='profile-picture'
           />
        )}
        <div className='user-info'> 
          { user.name || user.email } 
        </div> 
        <button onClick={handleLogOut}>Logout</button>
          </div>
        ) : (
      <>
        <Link to="/signin" className='signin-link' style={{position: 'relative', zIndex: 999}}>
          <p>Sign in</p>
        </Link>
        <Link to="/signup" style={{position: 'relative', zIndex: 999}}>
          <button>Sign up</button>
        </Link>
        </>
        )}
      </div>
    </nav>
  )
}

export default Navbar