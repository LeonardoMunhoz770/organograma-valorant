import './FieldText.css'


const FieldText = (props) =>{
    const placeholderModify = `${props.placeholder}...`

    const onWrite= (event) =>{
        props.onAlter(event.target.value)
    }

    return(
        <div className='field-text'>
            <label>{props.label}</label>
            <input  value={props.value} onChange={onWrite} required={props.mandatory} placeholder={placeholderModify}/>
        </div>
    )
}


export default FieldText