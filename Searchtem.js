import React from 'react'
import { useRef } from 'react'

const Searchtem = ({ search, setSearch}) => {

  const inputRef = useRef();

  return (
    <form className='Seacrhform' onSubmit={(e) => e.preventDefault()} onClick={() => inputRef.current.focus()}>
        <label style={{fontFamily:'sans-serif',color:'black',fontSize:'1rem'}} htmlFor='search'>Search</label>
        <input style={{border:'2px solid purple',outline:'none',borderRadius:'10px',padding:'5px 10px'}}
         id='search'
         type='text' 
         role='searchbox' 
         value={search} 
         onChange={(e) => setSearch(e.target.value)} 
         placeholder='Search Items...'
         ref={inputRef}
         />
    </form>
  )
}

export default Searchtem