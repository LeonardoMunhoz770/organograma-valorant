import './DropDown.css'

const DropDown = (props) =>{
    

    return(
        <div className='Drop-Down'>
            <label>{props.label}</label>
            <select onChange={event  => props.onAlter(event.target.value)}required={props.mandatory} value={props.value}>
                <option value={''}></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown;