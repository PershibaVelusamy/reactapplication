import React,{useState,useEffect,createContext,useRef} from 'react'
import Todos from './Todo';
import './main.css'
export const Main=()=> {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(0);
    const UserContext = createContext();
    const previousInputValue = useRef("");

    const increment = () => {
      setCount((c) => c + 1);
    };
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

      </div>
      </UserContext.Provider>
     
    </>
    </div>
  )
}
