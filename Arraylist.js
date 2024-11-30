import React from 'react'
import Line from './Line';

const Arraylist = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
    {items.map((listvalue) => (  
      <Line
      listvalue = {listvalue}
      key={listvalue.id}
      handleCheck={handleCheck}
      handleDelete = {handleDelete}
      
      />
    ))}
</ul>
  )
}

export default Arraylist