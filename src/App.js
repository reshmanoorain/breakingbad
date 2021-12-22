import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from "./Card";


function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("inside useEffect");
    getAllCharacters();

  }, [])

  const getAllCharacters = () => {
    axios.get("https://www.breakingbadapi.com/api/characters")
    .then((res) => setCharacters(res.data))
    .catch((err) => console.log(err));

 };

 console.log("characters", characters);


  return (
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }} >
      {characters.map((item) => (
        <div>

          <Card  img={item.img} name={item.name} birthday={item.birthday} category={item.category} occupation={item.occupation} status={item.status} nickname={item.nickname} portrayed={item.portrayed} />
      </div>
      ))}
    </div>
  );
}

export default App;
