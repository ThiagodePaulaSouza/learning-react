import {useState, useEffect} from "react"

const Hooks = () => {
    let idade = 30;

    const [NovaIdade, setNovaIdade] = useState(30)

    const changeAge = () => {
        idade = parseInt(Math.random() * (60 - 15) + 15);
        console.log(idade);
    }

    const changeNewAge = () =>{
        setNovaIdade(parseInt(Math.random() * (60 - 15) + 15));
    }

    useEffect(()=>{
        console.log("Testei")
    })

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p>Idade: {NovaIdade}</p>
            <button onClick={changeNewAge}>Mudar nova idade</button>
        </div>
    )
}
export default Hooks;