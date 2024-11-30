import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const Line = ({listvalue,handleCheck,handleDelete}) => {
    //all file la yum import panni athula ulla function c pass panni output kudukurathuthaan props 
    //if you write large react program gohead to spiltted to use Props(pass)
  return (
    <li className='item' key={listvalue.id} >
    <input type = 'checkbox' onChange={() => handleCheck(listvalue.id)} checked = {listvalue.checked}/>
    <label style={(listvalue.checked) ? {textDecoration:'line-through'}: null} onDoubleClick={() => 
        handleCheck(listvalue.id)
    }>{listvalue.itemtext}</label>
    <FaTrashAlt
    onClick={() => handleDelete(listvalue.id)}
    role='button'
    aria-label={`Delete ${listvalue.item}`}
    tabIndex='0'
    />
</li>
  )
}

export default Line