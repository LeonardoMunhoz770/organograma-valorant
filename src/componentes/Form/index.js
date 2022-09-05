import { useState } from 'react'
import Button from '../Button/index.js'
import DropDown from '../DropDown/index.js'
import FieldText from '../FieldText/index.js'
import './Form.css'

const FormFields = (props) =>{


    const [agente,setAgente] = useState('')
    const [habilidade, setHabilidade] = useState('')
    const [imagem, setImagem] = useState('')
    const [classe, setClasse] = useState('')


    const onSave = (event) =>{
        event.preventDefault()
        props.newAgente({
            agente: agente,
            habilidade: habilidade,
            imagem: imagem,
            classe: classe
        })
        setAgente('')
        setClasse('')
        setHabilidade('')
        setImagem('')
    }
    return(
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do seu Jogador</h2>
                <FieldText 
                    mandatory={true} 
                    label="Agente" 
                    placeholder="Digite o nome do Agente"
                    value={agente}
                    onAlter={value => setAgente(value)}
                />
                <FieldText 
                    mandatory={true} 
                    label="Habilidade Especial"
                    placeholder="Digite a sua habilidade especial"
                    value={habilidade}
                    onAlter={value => setHabilidade(value)}
                />
                <FieldText 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    onAlter={value => setImagem(value)}
                />
                <DropDown 
                    mandatory={true} 
                    itens={props.teams} 
                    label="Classe"
                    value={classe}
                    onAlter={value => setClasse(value)}
                        
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
    
}

export default FormFields