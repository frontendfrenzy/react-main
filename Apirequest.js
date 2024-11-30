const apiRequest = async (url = 'http://localhost:3500/faleel-data', optionsObj = null, errMsg = null) => {


  try{
    const response = await fetch(url,optionsObj)
    //optionObj yathuku use agumna data update panna,put panna,get panna,delete panna use aguthu
    if(!response.ok) throw new Error("please reload the app");
    //suppose athu work agalana enaku inthe error ra enaku through pannu
  }catch(err){
    errMsg = err.Message;
    //antha error ra catch panni enaku error message kudu
  }finally{
    return errMsg;
    //atha enaku return pannu
  }

  
}

export default apiRequest;