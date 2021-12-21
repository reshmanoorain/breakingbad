import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from "./Card";


const data = {
  results: [
   {
    src: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    birthday: "09-07-1958",
    category: "Breaking Bad",
    name: "Walter White",
    nickname: "Heisenberg",
    occupation: ['High School Chemistry Teacher'],
    portrayed: "Bryan Cranston",
    status: "Presumed dead",
},
{
src: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
birthday: "09-24-1984",
category: "Breaking Bad",
name: "Jesse Pinkman",
nickname: "Cap n' Cook",
occupation: ['Meth Dealer'],
portrayed: "Aaron Paul",
status: "Alive",
},
{
  birthday: "Unknown",
  category: "Breaking Bad",
  src: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
  name: "Henry Schrader",
  nickname: "Hank",
  occupation: ['DEA Agent'],
  portrayed: "Dean Norris",
  status: "Deceased",
},
{
  birthday: "07-08-1993",
category: "Breaking Bad",
src: "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
name: "Walter White Jr.",
nickname: "Flynn",
occupation: ['Teenager'],
portrayed: "RJ Mitte",
status: "Alive",
}
  ]
}

console.log(data.results)

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

 }

 console.log("characters", characters);



 const renderListUsingMap = () => {
   const mappedList = data.results.map((item, idx) => 
   <Card  src={item.src} name={item.name} birthday={item.birthday} category={item.category} occupation={item.occupation} status={item.status} nickname={item.nickname} portrayed={item.portrayed}/>)

   return mappedList
 }
  return (
    <div className="App" style={{ display: "flex",}}>
      {renderListUsingMap()}
  
    
    </div>
  );
}

export default App;
