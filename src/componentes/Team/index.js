import Agent from '../Agent';
import './Team.css'

const Team = (props) =>{
    return(
        
        props.agentes.length > 0 && <section className='team' style={{ backgroundColor: props.colorSecundary}}>
            <h3 style={{ borderColor: props.colorPrimary}}>{props.name}</h3>
            <div className='agentes'>
                {props.agentes.map(agente => <Agent key={props.name} name={agente.agente} classe={agente.classe} imagem={agente.imagem}/> )}
            </div>
        </section>
    )
}


export default Team;