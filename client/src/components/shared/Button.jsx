import './Button.scss'

function Button({ btnicon,msg }) {
    return (
        <div>
            <button className='button'>
               <img src={btnicon} alt="" />
                <span>{msg}</span>
            </button>
        </div>
    )
}

export default Button;