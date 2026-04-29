import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AlgunasPeliculas from './AlgunasPeliculas'
import Pelicula from './Pelicula'

function App() {

  const [PeliculaActual, setPelicula] = useState("")
  const [input, setInput] = useState("");


  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => setPelicula(input)}>
        Buscar
      </button>

      <Pelicula PeliculaActual = {PeliculaActual} />
    </>
  )
}

export default App
