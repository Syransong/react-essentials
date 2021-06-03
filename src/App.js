import './App.css';
import {useState, useEffect} from "react";
// import {useReducer} from "react";


function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
  }, []);

  if(data) {
    return <div>{JSON.stringify(data)}</div>
  }
  return (
    <div>No User Available</div>
  )
}

export default App;
