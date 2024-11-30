import React from 'react'
import { useState,useEffect } from 'react'

const Example = () => {
    const [email,setEmail] = useState('');

    const date = new Date();

    useEffect(() => {
      console.log("rendering")
    },[])

    const handlesubmit = (event) => {
        event.preventDefault();
        alert(`Submitting  Email: ${email} ${date}`)
    }
 
  return (

<form onSubmit={handlesubmit}>
   <h4 style={{fontFamily:'sans-serif',color:'black',textShadow:'2px 2px 3px gray'}}>Submitting Deadline {date.getUTCDate()}</h4>
   <h3 style={{color:'orange',fontFamily:'sans-serif'}}>Submit the Email ID</h3>
   <label>Email</label>
   <input style={{width:'150px',padding:'5px 10px',margin:'2px'}}tabIndex={-1} type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
   <button type='submit'>Submit</button>
</form>
 
  )
}

export default Example