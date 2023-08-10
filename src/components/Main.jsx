import React,{useState,useEffect,createContext,useRef, useCallback} from 'react'
import Todos from './Todo';
import './main.css'
import useFetch from './useFetch'
export const Main=()=> {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(0);
    const UserContext = createContext();
    const previousInputValue = useRef("");
    const [ajaxtext, setAjaxText]=useState("")
    const [data] = useFetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&contains=C%2523&idRange=0-150&blacklistFlags=nsfw%2Cracist');
console.log(data,"dfghjkl")

const increment= useCallback(()=>{
    setCount((c) => c + 1);
},[count])
  
    const decreament = () => {
        if(count>0){
      setCount((c) => c - 1);
        }
    };

    useEffect(() => {
        setTodos(() => count * 2);
        if(count>0){
            previousInputValue.current = count;
        }
      
      }, [count]); // <- add the count variable here
    


      function loadDoc() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
          console.log(this.responseText)
          setAjaxText(this.responseText)

        //  myFunction(this);
        }
        xhttp.open("GET", "cd_catalog.xml");
        xhttp.send();

      }
      function myFunction(xml) {
        const xmlDoc = xml.responseXML;
        console.log(xmlDoc)
     //   const x = xmlDoc.getElementsByTagName("CD");
        // let table="<tr><th>Artist</th><th>Title</th></tr>";
        // for (let i = 0; i <x.length; i++) { 
        //   table += "<tr><td>" +
        //   x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        //   "</td><td>" +
        //   x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        //   "</td></tr>";
        // }


      }
  return (
    <div className='mainWrapper'>
         <>
         <UserContext.Provider value={todos}>
      <Todos  UserContext={UserContext}/>
      <div className='counterdiv'>
       <h1>
       Count: {count}
        </h1>
        <br/>
    
        <button className='button'  onClick={increment}>click to add</button>
        <button className='button'  onClick={decreament}>click to sub</button>
      </div>
      <div>
      <h1>
       previous Count: {previousInputValue.current}
        </h1>

<h1>Jokes</h1>
<h3>{data?.setup}</h3>
<h5>{data?.delivery}</h5>
      </div>


      <button className='button' onClick={loadDoc}> clickME for Ajax</button>

      <h6 >{ajaxtext}</h6>

      </UserContext.Provider>
     
    </>
    </div>
  )
}
