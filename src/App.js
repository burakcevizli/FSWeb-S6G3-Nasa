import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Date from "./Date";
import Title from "./components/Title";
import Img from "./components/Img";
import Paragraph from "./components/Paragraph";
import Header from "./components/Header";

function App() {

  const [data, setData] = useState(undefined)
  

useEffect(()=>{
  axios.get("https://api.nasa.gov/planetary/apod?api_key=vjpqfnlPi7E7NxIuQtg9BJpmwZABu579rlcu85D8")
  .then(function (response) {
    console.log(response.data)
    setData(response.data)
  })
  .catch(function (error) {
    
    console.log(error);
  })
  .finally(function () {
    
  });
},[])

  return (
    <div className="App">
      {(data === undefined) ? <p>Html Yükleniyor ...</p> :
        <div>
      
      <Header />

      <Date date = {data.date}/>
      
      <Title title = {data.title}/>

      <Img image = {data.url}/>

      <Paragraph paragraph = {data.explanation} />
    
      </div>
    }
    </div>

  );
}

export default App;
