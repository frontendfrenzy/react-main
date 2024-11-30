import React from 'react'
//props is passing the value in parameter
//parameter la props namma name kudukalam ella enaku direct title wachu output kuda yadukalam {title}
const Header = ({title}) => {
  function hello(){
    return alert('this add pass concept on prop');
  }
/*Adding js with style on div element
const header --> this add to div on style {header} give value on const on {backgroundColor:'lightblue',color:'white'}*/
  return (
   <header /*style={
    {
     backgroundColor: 'lightblue',
     color: 'white'
    }}*/>
      <h1>{title}</h1>
     <button onClick={hello}>press</button>
   </header>
  )
}

Header.defaultProps = {
  title:"to do list"
  //sappose niga api data or user data kudutha sappose work agala enaku palaiya value thanthuru sollurathuku intha concept use pannuwanga
}
export default Header