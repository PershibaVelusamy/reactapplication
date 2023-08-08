import React,{useState,useEffect,createContext,useRef, useCallback} from 'react'
import Todos from './Todo';
import './main.css'
import useFetch from './useFetch'
export const Main=()=> {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(0);
    const UserContext = createContext();
    const previousInputValue = useRef("");
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

      </UserContext.Provider>
     
    </>
    </div>
  )
}
