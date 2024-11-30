import React from 'react'

const Footer = ({length}) => {
  return (
    //{] this method add div content on javascript expression.
   <footer style={{textAlign:'center'}}>{length} List {length === 1 ? "items" : "items"}</footer>
  )
}

export default Footer