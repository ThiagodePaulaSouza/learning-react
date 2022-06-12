// webpack (snowpack, vite) | module bandler todos import passam pelo webpack
import { useHistory } from "react-router-dom";
import illustrationImg from "../assets/images/images/illustration.svg";
import logoImg from "../assets/images/images/logo.svg";
import googleIconImg from "../assets/images/images/google-icon.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";

export function Home() {
  const [roomCode, setRoomCode] = useState("");
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomref = await database.ref(`rooms/${roomCode}`).get();
    if (!roomref.exists()) {
      alert("Room does not exist.");
      return;
    }

    if (roomref.val().endedAt) {
      alert("Room Already closed.");
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

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
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />

          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o google
          </button>

          <form onSubmit={handleJoinRoom}>
            <div className="separator">ou entre em uma sala</div>

            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
