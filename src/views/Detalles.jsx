import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PokeContext } from '../context/PokeContext'
const Detalles = () => {
    const {pokemones} = useContext(PokeContext)
    const { name } = useParams()
    const navigate = useNavigate()

    let pokemon = pokemones.find((pokemon) => pokemon.name == name)

    if (!pokemon) {
        return (
            <div className="container mt-3">
                <p>Pokemon no encontrado</p>
                <button onClick={() => navigate('/pokemones')} className="btn btn-primary">Volver</button>
            </div>
        );
    }

    const volver = ()=> {
        navigate(`/pokemones`)
    }

  return (
    <div className='container mt-3'>
        <div className='card'>
            <img src={pokemon.img} className='card-img-top' alt={pokemon.name}/>
            <div className='card-body text-center'>
                <h5 className='card-title'>{pokemon.name}</h5>
            </div>
            <button onClick={volver} className='btn btn-success'>Volver</button>
        </div>
    </div>
  )
}

export default Detalles