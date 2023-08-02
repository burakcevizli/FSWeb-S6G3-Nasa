import React, { useState } from "react";
import "./App.css";
import axios from "axios";


const sahteData = {
  "date": "1997-01-21",
  "explanation": "In Jules Verne's science fiction classic A Journey to the Center of the Earth, Professor Hardwigg and his fellow explorers encounter many strange and exciting wonders. What wonders lie at the center of our Galaxy? Astronomers now know of some of the bizarre objects which exist there, like vast dust clouds,\r bright young stars, swirling rings of gas, and possibly even a large black hole. Much of the Galactic center region is shielded from our view in visible light by the intervening dust and gas. But it can be explored using other forms of electromagnetic radiation, like radio, infrared, X-rays, and gamma rays. This beautiful high resolution image of the Galactic center region in infrared light was made by the SPIRIT III telescope onboard the Midcourse Space Experiment. The center itself appears as a bright spot near the middle of the roughly 1x3 degree field of view, the plane of the Galaxy is vertical, and the north galactic pole is towards the right. The picture is in false color - starlight appears blue while dust is greenish grey, tending to red in the cooler areas.",
  "hdurl": "https://apod.nasa.gov/apod/image/9701/galcen_msx_big.gif",
  "media_type": "image",
  "service_version": "v1",
  "title": "Journey to the Center of the Galaxy \r\nCredit:",
  "url": "https://apod.nasa.gov/apod/image/9701/galcen_msx.jpg"
}



function App() {




  const [data, setData] = useState(sahteData)
  const [showImg, setShowImg] = useState(false)
  const [showExplanation, setShowExplantion] = useState(false)
  // const [showImg, setShowImg] = useState(true)
  // const [showImg, setShowImg] = useState(true)


  return (
    <div className="App">

      <h1> {data.title} </h1>

      <button onClick={() => {
        setShowImg(!showImg)
      }}>

        Hide / Show IMG

      </button>

      <br />
      <br />


      {showImg && <img src={data.url} />}

      <br />
      <br />

      <button onClick={() => {
        setShowExplantion(!showExplanation)
      }}>

        Hide / Show Explanation

      </button>

      <br />
      <br />


      {showExplanation && <p>{data.explanation}</p> }

    </div>


  );
}

export default App;
