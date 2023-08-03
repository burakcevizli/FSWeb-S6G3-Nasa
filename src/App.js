import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Date from "./components/Date";
import Title from "./components/Title";
import Img from "./components/Img";
import Paragraph from "./components/Paragraph";
import Header from "./components/Header";
import DateField from "./components/DateField";
import NavbarNasa from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import "./AppBody.css";
import "./OzelHeaderClass.css";



function App() {

  const [data, setData] = useState(undefined)
  const [tarih , setTarih] = useState(undefined)
  
  

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=vjpqfnlPi7E7NxIuQtg9BJpmwZABu579rlcu85D8", {
        
      })
      .then(function (response) {
        console.log(response.data)
        setData(response.data)
       
      })
      .catch(function (error) {

        console.log(error);
      })
      .finally(function () {

      });
  }, [])
 

  return (
    <div className="App">
      {(data === undefined) ? <p>Html Yükleniyor ...</p> :
        <div className="AppBody" style={{ backgroundImage: `url(${data.hdurl})` }} >

      
        <NavbarNasa />


          <Header />

          <Date date={data.date} />



          {/* <DateField /> */}
        


          <Title title={data.title} date={data.date} />

          {/* <Img image = {data.url}/> */}

          <Paragraph paragraph={data.explanation} />


        </div>
      }
    </div>

  );
}

export default App;
