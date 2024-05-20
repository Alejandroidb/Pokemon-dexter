import Navigation from "./components/Navigation"
import Home from "./views/Home"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Pokemones from "./views/Pokemones"
import Detalles from "./views/Detalles"
function App() {


  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Pokemones/' element={<Pokemones/>}/>
      <Route path="Pokemones/:id" element={<Detalles/>}/>
    </Routes>

    </>
  )
}

export default App
