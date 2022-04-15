import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Image from './components/Image';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';
function App() {
  return (
    <div className="App">
      <h2>Bom dia React</h2>
      <FirstComponent />
      <SecondComponent />
      <Image />
      <Hooks />
      <List />
      <RenderCond x={5} y={10}/>
      <Fragment />
      <Container>
        <h1>Este é filho do container!</h1>
      </Container>
    </div>
  );
}

export default App;