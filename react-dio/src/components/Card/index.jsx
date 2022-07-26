import { useState } from "react";

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
        <button type="button" className="btn btn-success" onClick={Adicionar}>Adicionar</button>
        <button type="button" className="btn btn-danger" onClick={Remover}>Remover</button>
        <p>{valor}</p>
      </div>
    </div>
  );
};
