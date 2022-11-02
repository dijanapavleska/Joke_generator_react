import { useState } from "react";


export default function Joke () {

    const [joke, setJoke] = useState([]);

    const loadJoke = async () => {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();
        console.log(data);
        setJoke(data);
    }

    loadJoke();

    

}