import './App.css';
import {useState, useEffect} from "react";


function App(props) {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("Frustrated")}>Frustrate</button>
      <button onClick={() => setSecondary("Crabby")}>Make Crabby</button>
    </>
  )
}

export default App;
