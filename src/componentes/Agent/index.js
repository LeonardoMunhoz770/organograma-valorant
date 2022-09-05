import './Agent.css'

const Agent = ({name, classe, imagem }) =>{
    return(
        <div className='Agent'>
            <div className='Header'>
                <img src={imagem} alt={name}/>
            </div>
            <div className='baseboard'>
                <h4>{name}</h4>
                <h5>{classe}</h5>
            </div>
        </div>
    )
}

export default Agent