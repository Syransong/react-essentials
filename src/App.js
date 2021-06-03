import './App.css';
import {useState} from "react";


function App(props) {
  const [emotion, setEmotion] = useState("happy");

  return (
    <>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("Frustrated")}>Frustrate</button>
    </>
  )
}

export default App;
