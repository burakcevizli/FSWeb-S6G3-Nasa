import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Date from "./components/Date";
import Title from "./components/Title";
import Img from "./components/Img";
import Paragraph from "./components/Paragraph";
import Header from "./components/Header";
import DateField from "./components/DateField";




function App() {

  const [data, setData] = useState(undefined)




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
        <div className="Body">
          <div className="main">

            <nav className="navbar">
              <img src="https://media2.spaceref.com/wp-content/uploads/2023/03/10103111/NASA.png" />
              <a href="#">Archive</a>
              <a href="#">Index</a>
              <a href="#">Calender</a>
              <a href="#">RSS</a>
              <a href="#">Discuss</a>
              <a href="#">Education</a>
              <a href="#">About APOD</a>
              <input type="input" />
              <img className="logo" src="logo192.png" />
              <button>Submit Picture</button>
            </nav>

            <div className="component-class">
              <Img image={data.url} />

              <div className="main-iki">
                <Date date={data.date} />

                <Title title={data.title} date={data.date} />
              </div>

              
              <Paragraph paragraph={data.explanation} />

            </div>


          </div>








        </div>
      }
    </div>

  );
}

export default App;
