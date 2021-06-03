import './App.css';
// import {useState, useEffect} from "react";
import {useReducer} from "react";


function App(props) {
  const [checked, toggle] = useReducer(
    (checked) => !checked, // first arg is the function
    false // 2nd arg is the initial state
  );

  return (
    <>
      <input 
        type="checkbox"
        value={checked} 
        onChange={toggle} 
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  )
}

export default App;
