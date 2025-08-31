import { Link } from "react-router-dom";
import "./Signup.css";
import blur1 from './assets/blur-01.svg';           
import eclipse1 from "./assets/Ellipse 40.svg";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google"; 

function Signin() {
    const [email2 , setEmail2] = useState("")
    const [emailMessage2 ,setEmailmessage2] = useState("")
    const [PasswordMessage2 ,setPasswordmessage2] = useState("")
    const [password2 , setPassword2] = useState("")
    const API_BASE = "https://gpt3-back-end-4.onrender.com";
  
   const emailInput2 = (event) => {
         setEmail2(event.target.value)
         setEmailmessage2("")
   }
  
   const handleSubmit2 = async (event) => {
          event.preventDefault()
          if(!email2){
            setEmailmessage2("Please enter your Email")
            return
          }
         if(!password2){
         setPasswordmessage2("Please enter your password")
         return
      }
     try{
        const resp = await fetch(`${API_BASE}/signin`,{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
      body: JSON.stringify({ email: email2, password: password2 }),
      });
      const data = await resp.json()
    if (!resp.ok) {
      alert(data.message || "Login Failed");
    }else{
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/"
    }
        // alert("Login successful!");
  }catch(error){
    alert("There is a problem , please check the Server")
  }
}
  
    const handlePassword2 = (event) => {
      setPassword2(event.target.value)
      setPasswordmessage2("")
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
    <div className="sign-up">
      <div className="container2">
        <div className="informations2">
            <h2>Sign in</h2>
            <h6>Please enter your details</h6>
           
            <form onSubmit={handleSubmit2}>
           <div className="sub-information1">
             {/* Email */}
            <label htmlFor="Email" id="l1">Email</label>
            <input type="email" value={email2} onChange={emailInput2} placeholder="Enter your email" id="Email" />
            <p style={{color : "red"} }> {emailMessage2} </p> 
              {/* Password */}
            <label htmlFor="password" id="l2">Password</label>
            <input type="password" value={password2} onChange={handlePassword2} placeholder="Enter your password" id="password" />
            <p style={{ color: "red" }}>{PasswordMessage2}</p>
          </div>

          <div className="sub-information2">
            <Link to ="/reset"> Forgot Password ?</Link>
          </div>
          <button>Sign in</button>
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
          <div className="sub-information3">
            <p>Don't have an account?</p>
                <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
