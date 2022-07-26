import { useState } from "react";
import { Button } from "../Button";

export const Card = () => {
  let [valor, setValor] = useState(0)

  const Adicionar = () => {
    setValor(valor + 1)
  }

  const Remover = () => {
    setValor(valor - 1)
  }

  return (
    <div className="card" >
      <div className="card-header">
        Feature
      </div>
      <div className="card-body">
        <Button className='btn btn-success' onClick={Adicionar}>Adiconar</Button>
        <Button className='btn btn-danger' onClick={Remover}>Remover</Button>
        <p>{valor}</p>
      </div>
    </div>
  );
};
