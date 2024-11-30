import React from 'react'
// useState is react hooks dont refesh to change the value this concept is click the button to change the value 
import { useState } from 'react';


const Content = () => {
//craete a javascript fuction
const [name, setName] = useState('') 
    function handleNameChange(){
        const name = ["spidy","ironi","cap"];
        const int = Math.floor(Math.random()*3);
        setName(name[int])
        //return name[int]
      }

  return (
    //add in the tag element
  <main>
   <p style={{textAlign:'center'}}>Lets {name} hi.</p>
    <button onClick={handleNameChange}>Subscribe</button>
  </main> 
  )
}

export default Content
































/*
    //THIS IS AN IMPORTANT CONCEPT AND THIS PARAMETER PASSING CONCEPT 
    //parameter pass panni output yadukurathu

     const handleClick = (e) => {
      console.log(e.target.innerText);
    }
    //doubleclick is click some text or button to tap two time the scound time to show the value
    //make arrow func or normal func to give parameter to pass the function with parameter if not work add annonymous fuction to apply
    
      const handleClicktwo = (name) => {
      console.log('Thanks for the support' +name);
    }

    <p>Lets {handleNameChange()} money</p>
    <button onClick={handleClicktwo('faleel')}>Subscribe</button>
    <button onClick={(e) => handleClick(e)}>click</button>
*/




  /*
  //BUTTON INCREASES AND DICREASES EFFECT IN FASTESTLY
  //ithu useState() oru function concept main concept ithu btn increment and dicrement pannurathukum use aguthu i mean btn effect ku use aguthu

  function userids(){
        return console.log('visit.solocodeArtisan.in');
      }
      //const [userid, setName] = useState(() => userids());
      

    //setCount is js variables
    const [count, setCount] = useState(99);

    function incrementFunction(){
      setCount(count +1);
    }

    function dicrementFunction(){
      setCount(count -1);
    }
    <button onClick={dicrementFunction}>-</button>
    <span>{count}</span>
    <button onClick={incrementFunction}>+</button>
    */