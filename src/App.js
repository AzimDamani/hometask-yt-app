import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const MyContext = createContext();
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://imdb-top-100-movies.p.rapidapi.com/",
          headers: {
            "x-rapidapi-key":
              "0a4c9c3ad2msh9b36b24357f5bbcp1b00c5jsn61d78be2afff",
            "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
          },
        };
  
        const response = await axios.request(options);
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [])
  return (
    <MyContext.Provider value={data}>

    <div className="App">
      <Header />
      <MoviesList />
    </div>
    </MyContext.Provider>
  );
}

export default App;
