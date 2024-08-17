import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { movies } from "./components/data";

export const MyContext = createContext();
function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const movie = movies;
  console.log(movie);
  useEffect(() => {
    setData(movie);
  }, [])
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // try {
  //     //   const options = {
  //     //     method: "GET",
  //     //     url: "https://imdb-top-100-movies.p.rapidapi.com/",
  //     //     headers: {
  //     //       "x-rapidapi-key":
  //     //         "676edcf3a0msh0a0967b89d09a25p133898jsnc71a50c5596e",
  //     //       "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  //     //     },
  //     //   };

  //     //   const response = await axios.request(options);
  //     //   console.log(response.data);
  //     //   setData(response.data);
  //     // } catch (err) {
  //     //   console.log(err);
  //     // }

  //     try{
  //       const response = 
  //     }
  //   };

  //   fetchData();
  // }, [searchTerm]);



  const filteredMovie = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <MyContext.Provider value={{ filteredMovie, setSearchTerm }}>
      <div className="App">
        <Header />
        <MoviesList />
      </div>
    </MyContext.Provider>
  );
}

export default App;
