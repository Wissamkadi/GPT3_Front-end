import { Link } from "react-router-dom";
import "./Signup.css";
import blur1 from './assets/blur-01.svg';
import eclipse1 from "./assets/Ellipse 40.svg";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


function Signup() {
  const location = useLocation()
  const passedEmail = location.state?.email || ""
  const [email , setEmail] = useState(passedEmail)
  const [emailMessage ,setEmailmessage] = useState("")
  const [PasswordMessage ,setPasswordmessage] = useState("")
  const [password , setPassword] = useState("")
const API_BASE = "https://gpt3-back-end-3.onrender.com";

  
 const emailInput = (event) => {
       setEmail(event.target.value)
       setEmailmessage("")
 }

 const handleSubmit = async (event) => {
        event.preventDefault()
        if(!email){
          setEmailmessage("Please enter your Email")
          return
        }
       if(!password){
       setPasswordmessage("Please enter your password")
       return
    }

    try{
      const resp = await fetch(`${API_BASE}/signup`,{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({email, password}),
      });
      const data = await resp.json()

if (!resp.ok) {
  alert(data.message || "Something went wrong");
} else {
  localStorage.setItem("user", JSON.stringify(data.user))
  window.location.href = "/"
}
  }catch(error){
    alert("There is a problem , please check the Server")
  }
}

  const handlePassword = (event) => {
    setPassword(event.target.value)
    setPasswordmessage("")
  } 

  const handleSuccess = async (credentialResponse) => {
   const decoded = jwtDecode(credentialResponse.credential); 
   console.log(decoded);

   try{
     const resp = await fetch(`${API_BASE}/auth/google/callback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: credentialResponse.credential }),
    })

    const data = await resp.json();

    if (resp.ok) {
      // Save user in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/"
    } else {
      alert(data.message || "Login failed")
    }
  } catch (err) {
    console.error(err)
    alert("Server error")
  }
  }


  return (
    <section className="Sg"> 
    <div className="sign-up">
      <div className="container2">
        <div className="informations2">
          <div className="sub-information1">
            <h2>Sign up</h2>
            <h6>Please enter your details</h6>
            <form onSubmit={handleSubmit}>
              {/* Email */}
            <label htmlFor="Email" id="l1">Email</label>
            <input type="email" value={email} onChange={emailInput} placeholder="Enter your email" id="Email" />
            <p style={{color : "red"} }> {emailMessage} </p> 
              {/* Password */}
            <label htmlFor="password" id="l2">Password</label>
            <input type="password" value={password} onChange={handlePassword} placeholder="Enter your password" id="password" />
            <p style={{ color: "red" }}>{PasswordMessage}</p>
          
            <button>Sign up</button>
          </form>
           <div style={{ display: "flex", alignItems: "center" ,width:"250px",margin:"5px"}}>
            <hr style={{ flex: 1 }} />
            <span style={{ margin: "0 10px" , color: "white"}}>or</span>
            <hr style={{ flex: 1 }} />
          </div> 
          <GoogleLogin
             onSuccess={handleSuccess}
             onError={() => console.log("Login Failed")}
             clientId="871509423731-01v4id2gj98a5pjafcb3pau0rl087c0j.apps.googleusercontent.com"
          />
        </div>
          
          <div className="sub-information3">
            <p>Already have an account?</p>
            <Link 
              to="/signin"
              style={{
                position: 'relative',
                zIndex: 999,
                display: 'inline-block'
              }}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Signup;
