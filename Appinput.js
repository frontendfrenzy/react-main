import React from 'react'
import { useRef } from 'react'
// some kind of name kuduthu value wa list add pannona focus theyriyama poiduthu antha focus thayriya waikurathu ku thaan useRef
import { FaPlus } from 'react-icons/fa'
//icons ta command wachu thaan call pannanum i mean --> <FaPlus/>
//oru input react la apply pannurathu ku useState la thaan use panna mudiyumr
const Appinput = ({handleSubmit,newItem,setNewItem}) => {

  const inputRef = useRef();
  
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label  htmlFor='addItem'>Add Item</label>
        <input type='text' 
        autoFocus id='addItem' 
        value={newItem} onChange={(e) => setNewItem(e.target.value)} 
        placeholder='addItem' 
        ref={inputRef}
        required/>
        <button style={{backgroundColor:'greenyellow',color:'black'}} type='submit' aria-label='Add Item' onClick={() => inputRef.current.focus()}><FaPlus/></button>
    </form>
  )
}

export default Appinput