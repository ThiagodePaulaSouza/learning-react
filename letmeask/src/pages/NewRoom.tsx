// webpack (snowpack, vite) | module bandler todos import passam pelo webpack
import { Link } from "react-router-dom";
import illustrationImg from "../assets/images/images/illustration.svg";
import logoImg from "../assets/images/images/logo.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";
import { useContext } from "react";
import { AuthContext } from "../App";
export function NewRoom() {
  const { user } = useContext(AuthContext)

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <h1>seu nome é: {user?.name}</h1>
        {/* <h1>seu avatar é: {user?.avatar}</h1><br/> */}
        {/* <h1>seu id é: {user?.id}</h1> */}
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
          </form>
        </div>
      </main>
    </div>
  );
}
