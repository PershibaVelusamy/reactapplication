import React ,{useContext,createContext}from "react";



const Todos = ({UserContext}) => {
  // const UserContext = createContext();
  const todos = useContext(UserContext);
  console.log(todos,"todos")
    console.log("child render");
    return (
      <>
        <h2>My Smart Calculation is</h2>
        <h3 >{todos}</h3>
      </>
    );
  };
  
  export default Todos;