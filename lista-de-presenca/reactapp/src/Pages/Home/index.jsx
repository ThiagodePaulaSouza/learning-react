import { Card } from '../../components/Card'
import './styles.css'

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presenças</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Thiago de Paula Souza" time="10:55:25" />
      <Card name="Rodrigo" time="11:00:21" />
      <Card name="João" time="11:30:35" />
      <Card name="Gabriel" time="12:04:10" />
    </div>
  )
}
