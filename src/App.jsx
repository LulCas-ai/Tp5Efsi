import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AlgunasPeliculas from './AlgunasPeliculas'
import Pelicula from './Pelicula'

function App() {

  const [Peliculas, setPeliculas] = useState("")
  const [input, setInput] = useState("");
  const [Pelicula,setPelicula] = useState("")


  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => setPeliculas(input)}>
        Buscar
      </button>

      <AlgunasPeliculas PeliculaActual = {Peliculas} />



    </>
  )
}

export default App
