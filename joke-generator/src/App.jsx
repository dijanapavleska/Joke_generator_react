import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [jokesData, setJokesData] = useState([]);
  const [jokeDelivary, setJokeDelivery] = useState(null)
  const loadJokes = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any')
    const data = await response.json();
    console.log(data);
    setJokesData(data);
    setJokeDelivery(null)
  }
  useEffect(() => {
    loadJokes();
  }, []);
  useEffect(() => {
    if(jokesData.type === 'twopart') {
      setTimeout(() => {
        setJokeDelivery(jokesData.delivery)
      }, 3000)
    }
  }, [jokesData])
  return (
    <div className="App">
      <div>
        {
          jokesData.type === 'single' ? <div>{jokesData.joke}</div>  : <div> Setup: {jokesData.setup} <br/> {jokeDelivary}</div>
        }
      </div>
      <button onClick={loadJokes}>Jokes</button>
    </div>
  );
}
export default App;









