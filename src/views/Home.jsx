import React from "react";
import PikachuImg from "../components/PikachuImg";


const Home = () => {
  return (
    <>
      <div className="container text-center">
        <p className="fs-1">Bienvenido Maestro Pokemón</p>
        <PikachuImg />
        {/* <img
          src="./src/assets/img/Pikachu.png"
          alt="Pikachu"
          className="pikachu img-fluid"
        /> */}
      </div>
    </>
  );
};

export default Home;
