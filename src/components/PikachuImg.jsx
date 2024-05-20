import React from "react";
const getPic = (imageName) =>{
    return `src/assets/img/Pikachu.png`
}

const PikachuImg = ({imageName}) =>{
    return (
        <>
        <img src={getPic(imageName)} alt={imageName} className="pikachu" />
        </>
    )
}

export default PikachuImg