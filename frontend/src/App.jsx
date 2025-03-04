import './App.css'
import MovieCard from './components/MovieCard'
function App() {

  return (
    <>
      <MovieCard movie={{ title: "Film1", release_date: "2024" }} />
    </>
  )
}

export default App
