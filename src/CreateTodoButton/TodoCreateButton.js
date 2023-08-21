import './CreateTodoButton.css'    
import {AiOutlinePlusCircle} from 'react-icons/ai'

    function TodoCreateButton({setOpenModal}){
        return(
            <button className="CreateTodoButton"
            onClick={
                ()=>{
                setOpenModal(state => !state)
            }}>
            <AiOutlinePlusCircle className='icon'/>
            </button>
        )
    }

    export {TodoCreateButton}

