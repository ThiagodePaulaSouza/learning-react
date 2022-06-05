import illustrationImg from "../assets/images/images/illustration.svg";
import logoImg from "../assets/images/images/logo.svg";
// webpack (snowpack, vite) | module bandler todos import passam pelo webpack
import googleIconImg from "../assets/images/images/google-icon.svg";
export function Home() {
  return (
    <div>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div>
            <img src={logoImg} alt="letmeask" />
            <button>
                <img src={googleIconImg} alt="Logo do Google" />
                Crie sua sala com o google
            </button>
            <div>ou entre em uma sala</div>
            <form>
                <input 
                type="text"
                placeholder="Digite o código da sala"
                />
                <button type="submit">
                    Entrar na sala 
                </button>
            </form>
        </div>
      </main>
    </div>
  );
}
