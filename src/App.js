import Form from './components/Form';
import MoviesDisplay from './components/MoviesDisplay';
import axios from 'axios'
import {useState, useEffect} from 'react'
import './App.css';



function App() {

  // Variable to store the api key
  const apiKey = '386f2ed1';

  // State to store movies data
  const [movie, setMovie] = useState('');

  // function to fetch data
  const fetchMovie = async (searchTerm) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);

    // set the movie state to the movie
    setMovie(response.data);
    console.log(movie)
  }

  useEffect(() => {
    fetchMovie('Gladiator');
  }, [])

  return (
    <div className="App">
      <Form 
        moviesearch={fetchMovie}
      />
      <MoviesDisplay 
        movie={movie}
      />
    </div>
  );
}

export default App;
