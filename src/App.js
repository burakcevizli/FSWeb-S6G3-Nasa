import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Greeting from "./Greetings";
import Title from "./components/Title";
import Img from "./components/Img";






function App() {

  


  const [data, setData] = useState(undefined)
  

useEffect(()=>{
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
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
      
      <Greeting date = {data.date}/>
      
      <Title title = {data.title}/>

      <Img image = {data.url}/>
      
      

      
      

      

      

      

      


      



      </div>
    }
    </div>


  );
}

export default App;
