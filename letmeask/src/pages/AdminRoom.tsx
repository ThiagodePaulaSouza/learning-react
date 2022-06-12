import { useParams } from "react-router-dom";
import logoImg from "../assets/images/images/logo.svg";
import "../styles/room.scss";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
// import { useAuth } from "../hooks/useAuth";
import { Question } from "../components/Questions";
import { useRoom } from "../hooks/useRoom";
import deleteImg from '../assets/images/images/delete.svg';
import { database } from "../services/firebase";

type RoomParams = {
  id: string;
};

export function AdminRoom() {

  // const { user } = useAuth();
  const params = useParams<RoomParams>(); //generic RoomParams (it's like a parameter to the type)
  const roomId = params.id;
  const { title, questions } = useRoom(roomId)

  async function handleDeleteQuestion (questionId: string) {
    if(window.confirm('Tem certeza que você deseja excluir essa pergunta?')) {
      const questionRef = await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar Sala</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question 
                key={question.id}
                content={question.content} 
                author={question.author} 
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover Pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
