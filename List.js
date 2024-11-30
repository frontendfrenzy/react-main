import React from 'react'
import Arraylist from './Arraylist';
const List = ({items,handleCheck,handleDelete}) => {
    /*}
    const number = [-2,-1,0,1,2];
    const itms = number.filter(n => n >= 0).map(n => ({number:n}));
    console.log(itms);
    */
  return (
   <>
    {(items.length) ? (
        <Arraylist
        items = {items}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete} />
    ) : (
        <p style={{marginLeft:'50%',textAlign:'center',transform:'translateY(10%)'}}>yor list is empty</p>
    )
}
      
   </>
  )
}

export default List