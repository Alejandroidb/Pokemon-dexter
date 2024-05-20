import React from "react";
const getPic = (imageName) =>{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png`
}

const PikachuImg = ({imageName}) =>{
    return (
        <>
        <img src={getPic(imageName)} alt={imageName} className="pikachu img-fluid" />
        <audio src="https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg" autoPlay></audio>
        </>
    )
}

export default PikachuImg