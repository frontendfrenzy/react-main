import React, { useEffect, useState } from 'react';

const FetchProject = () => {
  const [PhotoShow,setPhotoShow] = useState(false);
  const [dataPhoto,setdataPhoto] = useState([]);
  const [dataCommands,setdataCommands] = useState([]);
  const [CommandsShow,setCommandsShow] = useState(false);
  const [dataPost,setdataPost] = useState([]);
  const [PostShow,setPostShow] = useState(false);
  
  
  const API_Link_ONE = 'https://jsonplaceholder.typicode.com/photos';
  const API_Link_TWO = 'https://jsonplaceholder.typicode.com/comments';
  const API_Link_THREE = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
   fetch(API_Link_ONE).then((responce) => {
    if(responce.ok){
      return responce.json();
    }else{
      throw new Error('Photos datas api got some kind of problem _501_');
    }
   }).then((data) => {
    setdataPhoto(data)
   }).catch((error) => {
    console.log(error.message);
   })

   fetch(API_Link_TWO).then((responce) => {
    if(responce.ok){
      return responce.json();
    }else{
      throw new Error('Comments api got some kind of problems _401_');
    }
   }).then((data) => {
    setdataCommands(data);
   }).catch((error) => {
    console.log(error.message);
   })

   fetch(API_Link_THREE).then((responce) => {
    if(responce.ok){
      return responce.json();
    }else{
      throw new Error('POst api something went wrong');
    }
   }).then((data) => {
    setdataPost(data);
   }).catch((error) => {
    console.log(error.message);
   })
  },[])

  const handleCommentShow = () => {
    setCommandsShow(!CommandsShow);
  }

  const handlePhotoshow = () =>{
    setPhotoShow(!PhotoShow);
  }

  const handlePostShow = () => {
    setPostShow(!PostShow);
  }
  return (
    <div>
      <div>
        <div style={{position:'absolute'}}>
          <button style={{cursor:'pointer'}} onClick={handlePhotoshow}>Photo</button>
          {
            PhotoShow && (
              <div  style={{backgroundColor:'wheat',padding:'20px',zIndex:'1',borderRadius:'20px'}}>
                <div>
                <ul>
                  {dataPhoto.map((item) => (
                    <li key={item.id}>
                      <h2 style={{fontFamily:'monospace'}}>{item.title}</h2>
                      <img src={item.url} alt=''/>
                      <img src={item.thumbnailUrl} alt='' />
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            )
          }

          <button  style={{cursor:'pointer'}} onClick={handleCommentShow}>Comments</button>
          {
            CommandsShow && (
              <div style={{backgroundColor:'wheat',padding:'20px',borderRadius:'20px'}}>
                <div>
                  <ul>
                    {dataCommands.map((itemtwo) => (
                      <li key={itemtwo}>
                        <h3 style={{fontFamily:'monospace'}}>{itemtwo.name}</h3>
                        <p style={{fontFamily:'serif'}}>{itemtwo.email}</p>
                        <p style={{fontFamily:'serif'}}>{itemtwo.body}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          }

          <button  style={{cursor:'pointer'}} onClick={handlePostShow}>Posts</button>
          {
            PostShow && (
              <div style={{backgroundColor:'wheat',padding:'20px',borderRadius:'20px'}}>
                <div>
                  <ul>{
                    dataPost.map((itemthree) => (
                         <li key={itemthree.id}>
                          <h2>{itemthree.title}</h2>
                          <p>{itemthree.body}</p>
                         </li>                   
                    ))}</ul>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default FetchProject