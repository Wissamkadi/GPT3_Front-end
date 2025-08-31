import { Link } from "react-router-dom"
import "./global.css"
import { useState } from "react"

function Reset(){
    const [email,setEmail] = useState("")
    const [emailMessage,setEmailMessage] = useState("")
    const [code,setCode] = useState("")
    const [codeMessage,setcodeMessage] = useState("")
    const [verified, setVerified] = useState(false)
    const [newPassword , setNewPassword] = useState("")
    const [newPassword2 , setNewPassword2] = useState("")
    const [message, setMessage] = useState("")
    const API_BASE = "https://gpt3-back-end-3.onrender.com";

    const emailInput = (event) => {
       setEmail(event.target.value)
       setEmailMessage("")
    }

    const codeInput = (event) => {
       setCode(event.target.value)
       setcodeMessage("")
    }

    const handleCode = async () => {
        if(!code){
            setcodeMessage("Please enter your verification code")
        }
        try{
              const res = await fetch(`${API_BASE}/reset`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            })

            const data = await res.json()
            if(res.ok){
               alert("Verification code sent  to your Email !")

            }
            else{
                setEmailMessage(data.message || "Error sending code")
            }
        }catch(err){
            console.log(err)
            setEmailMessage("Server Error, tyr again later")
        }
    }

    const handleVerification = async (event) => {
        event.preventDefault()
        if(!email){
            setEmailMessage("Please enter your Email")
        }
        if(!code){
            setcodeMessage("Please enter your verification code")
        }

        try{
             const res = await fetch(`${API_BASE}/verifyCode`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, code })
        })

        const data = await res.json()
        if(res.ok){
          alert("Code Verified! Now you can reset your password.")
          setVerified(true)
        }else{
            setcodeMessage(data.error || "Invalid code")
            setVerified(false)
        }

    }catch(err){
            console.log(err)
            setcodeMessage("Server Error, tyr again later")     
    }
}

   const newPasswordInput = (event) => {
    setNewPassword(event.target.value)
   }

    const newPasswordInput2 = (event) => {
    setNewPassword2(event.target.value)
   }

   const handleNewPassword = async () => {
    if(!newPassword || !newPassword2){
        setMessage("Please fill both password feild")
    }
     
     if(newPassword !== newPassword2){
        setMessage("Passwords do not match")
        return
     }

    try{
        const res = await fetch(`${API_BASE}/newPassword`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, newPassword })
        })
          
        const data = await res.json()
        if(res.ok){
            alert("Password successfully reser!")
            window.location.href = "/signin"
        }else{
            setMessage( data.message || "Error resseting password" )
        }
    }catch(err){
        console.log(err)
        setSame("Server error, try again later")
    }
   }

   return(
    <section className="global-Reset">
     {!verified &&
       <div className="Reset">
          <h3>Reset password</h3>
          <p>Enter your email address and we will send you <br></br> a verification code to reset your password</p>
          <form onSubmit={handleVerification}>
          <input type="email" value={email} onChange={emailInput} placeholder="Email address" id="email"/>
          <p style={{color : "red"} }> {emailMessage} </p> 
          <div className="Code">
          <input type="text" value={code} onChange={codeInput} placeholder="Code"/>
          <button id="code" type="button" onClick={handleCode}>Send code</button>
          </div>
          <p style={{color : "red"} }> {codeMessage} </p> 
          <button id="continue" type="submit">Continue</button>
          </form>
          <Link to="/signin" id="Link">Back to log in</Link>
       </div>
       }
       { verified && 
         <div className="NewPassword">
            <input type="password" value={newPassword} onChange={newPasswordInput} placeholder="Enter your new password"/>
            <input type="password" value={newPassword2} onChange={newPasswordInput2} placeholder="Re enter your new password"/>
            <p style={{ color: "red" }}>{message}</p>
            <button type="button" onClick={handleNewPassword}>Save new password</button>
         </div>
       }
    </section>
   )
}

export default Reset
