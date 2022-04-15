function SecondComponent() {
    const name = "Thiago";
    const handleClick = () =>{
        console.log("Teste de botão");
    }

    return (
        <div>
            {/*Comentario no componente*/}
            <p>SEGUNDO COMPONENTE</p>
            <button onClick={handleClick}>Evento do Click</button>
            <hr />
            <button onClick={() => console.log("TesteSuperTeste")}>sim</button>

        </div>
    )
}
export default SecondComponent;