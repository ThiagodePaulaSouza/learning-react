import React, { useState } from 'react';
import { Card } from '../../components/Card'
import './styles.css'

export function Home() {

  const [studentName, setStudentName] = useState('');


  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>
      <input 
      type="text" 
      placeholder="Digite o nome..."
      onChange={e => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Thiago de Paula Souza" time="10:55:25" />
      <Card name="Rodrigo" time="11:00:21" />
      <Card name="João" time="11:30:35" />
      <Card name="Gabriel" time="12:04:10" />
    </div>
  )
}
