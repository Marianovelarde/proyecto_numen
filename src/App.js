import React from 'react'
import Carrusel from '../src/Componentes/Carrusel'
import './estilos.css';
import styled from 'styled-components'; //IMPORTANDO STYLED.COMPONENT



const App = () => {
  return (
    <main>
          <Titulo></Titulo>
    <Carrusel/>
    
    </main>
  )
};

const Titulo = styled.p`
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 18px;
`;
//ESTA LA DEJE DE PRUEBA
export default App