import { useState } from 'react';
import Banner from './componentes/Banner/index.js';
import FormFields from './componentes/Form/index.js';
import Team from './componentes/Team/index.js';

function App() {
  const [agentes, setAgentes] = useState([])

  const teams = [
    {
      name: 'Duelista',
      colorPrimary: '#FF4654',
      colorSecundary: '#0F1923'
    },
    {
      name: 'Iniciador',
      colorPrimary: '#FF4654',
      colorSecundary: '#0F1923'
    },
    {
      name: 'Controlador',
      colorPrimary: '#FF4654',
      colorSecundary: '#0F1923'
    },
    {
      name: 'Sentinela',
      colorPrimary: '#FF4654',
      colorSecundary: '#0F1923'
    },
  ]

  const newAgenteAdd = (agente) =>{
    setAgentes([...agentes, agente])
    console.log(agente)
  }

  return (
    <div className="App">
      <Banner/>
      <FormFields newAgente={agente => newAgenteAdd(agente)} teams={teams.map(team=> team.name)} />
      {teams.map( team => 
      <Team 
      key={team.name} 
      name={team.name} 
      colorPrimary={team.colorPrimary}  
      colorSecundary={team.colorSecundary} 
      agentes={agentes.filter(agente => agente.classe === team.name)}
      />)}
    </div>
  );
}

export default App;
