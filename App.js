import Header from './header';
import Content from './content';
import Footer from './Footer';
import Example from './Example';
import FetchProject from './FetchProject';
import { useState,useEffect } from 'react'
import List from './List';
import Appinput from './Appinput';
import Searchtem from './Searchtem';
import apiRequest from './Apirequest';

function App() {

  //api link to get data
  const API_URL = 'http://localhost:3500/datas';
  const [fetcherror,setFetchError] = useState('');
 /* sappose ungaluku error show achu na i mean another error use this concept const [fetcherror,setFetchError] = useState(''); */



  //bug 1 in this function --> 1
  const [items, setItems] = useState([]);
   //namma random ma eluthuna data wa local storage la save panni atha antha data get panni use panna meyla vulla line use aguthu

const handleCheck = async (id) => {
    const listItems = items.map((listvalue) => listvalue.id === id ? {...listvalue,checked:!listvalue.checked} : listvalue)
    setItems(listItems)

    const myItem = listItems.filter((item) => item.id === id)
    //namma add pannura list item checked false kadaikuthu atha change pani true wa kadaika use this method
    const updateOption = {
      method: 'PATCH',
      //PATCH wanthu oru data wa update panna use aguthu
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({checked:myItem[0].checked})
      //antha json data id [0] 0 wa yaduthutu checked box sa click panna wara data id:num athoda checked enaku true wa kudu 
    }
    
    const rqsURL = `${API_URL}/${id}`
    //antha api data la erukura some data woda checked click panna athoda id ya reqsURL la store
    const result = await apiRequest(rqsURL,updateOption)
    //atha result la enaku true wa return pannu 
    if(result) setFetchError(result);
    //so ithuthaam data value wa update --> POST panna use aguthu
}




//console.log("before");
//fetch to communication with frontend to backend to get data using concept like Fetchapi,useEffect,asyn/await
useEffect(() => {
  const fetchItems = async() => {
    //try and catch and finally is safe to run the codes or datas and if catch the error
    try{
      const response = await fetch(API_URL);
     /* if(!response.ok) throw Error("Data not received"); suppose response ok wa ella na enaku error throw pannu*/
      const listItems = await response.json();
      console.log(listItems);
      setItems(listItems);
     /* setFetchError(null);  */
    }catch(err){
      console.log(err.message);
      /* setFetchError(err.message) setfetcherror la enaku error message ja show pannu */

    }
  }

  setTimeout(() => {
    (async () => await fetchItems())();
  },5000);
},[])
//console.log("after")




const handleDelete = async (id) => {
  const listItems = items.filter((listvalue) => listvalue.id!==id)
  setItems(listItems)

  const deleteOption = { method: 'DELETE' }
  //json file site namma kudukura data wa athu json file la convert aguthu antha json data wa delete panna method:'DELETE' use aguthu
  const rqsURL = `${API_URL}/${id}`
  //target to delete that id
  const result = await apiRequest(rqsURL,deleteOption)
  //api link la poi antha data wa delete pannu
  if(result) setFetchError(result);
}




const handleSubmit = (e) => {
  //run panna fraction of second la wanthu submitted show agitu poidum atha default pannurathuku oru syntax eruku -->preventDefault
  e.preventDefault();
  // intha syntax kudtha default stop agidum e wanth --> Event nus ollu wanga
  //namba required kudukurathu nala thaan empty ya vitu submit panna pls fill the feild nu show aguth atha kudukala nah intha concept
  //write pannuga
  if(!newItem) return;
  //user kudukura value wa newItem ma yaduthukutu atha string ga return pannu solla use pannuwanga
  console.log(newItem);
  addItem(newItem);
  setNewItem('');
  //newItem la ulla list addItems call panni pass panni output yadukurom
  //console log la pass agura value yaduthu website list add pannurathu pakalam
}



const [newItem, setNewItem] = useState('');
//state ta control pannurathuku list kulla key apply pannanum that is imporrtant
const [search, setSearch] = useState('');



const addItem = async (item) => {
  const id = items.length ? items[items.length -1].id + 1 : 1;
  const addNewItem = {id, checked:false, item};
  const listItems = [...items, addNewItem]
  setItems(listItems);
  //puthu list make agi kadaikuthu in tha concept moliyama add aguthu
  //localStorage.setItem('todo_list',JSON.stringify(listItems))

  const postOption = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(addNewItem)
  }
  const result = await apiRequest(API_URL,postOption)
  if(result) setFetchError(result);
}





  return (
    <div className="App">
      <Header  title = "Course list" />
      <Content
      items = {items}
      />
      <Footer length = {items.length} />
      <Example />
      <Appinput
        handleSubmit = {handleSubmit}
        newItem = {newItem}
        setNewItem = {setNewItem}
       />
         <Searchtem
         search = {search}
         setSearch = {setSearch}
         />
         <main>
          {fetcherror && <p>{`Error:${fetcherror}`}</p>}
      <List
      items={items}
       handleCheck = {handleCheck}
       handleDelete = {handleDelete} />
       <FetchProject/>
       </main>
    </div>
  );
  //<main>main tag la list content la enaku error bathipuwantha itha call pannanum {fetcherror && <p>{`Error:{fetcherror}`}</p></main>
  //data loading agi kadaikuthuna athuku first nama user ta data load aguthu nu solla num athuku ithu use pannanum
  /*
  finally{
  ithula enaku 
   setIsLoading{false} value false sa eruntha
  }
   enaku {isloading && <p>{`loading items...`}</p>} loading items nu display pannu
  */
}

export default App;
