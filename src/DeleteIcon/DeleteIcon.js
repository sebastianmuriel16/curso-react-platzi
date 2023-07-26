import {BsFillTrashFill} from 'react-icons/bs'
import "./DeleteIcon.css"


function DeleteIcon({onClick}){
    return (
        <span
        className={`Icon-delete`}
        onClick={onClick}
        > 
        <BsFillTrashFill/>

        </span>
    )
}

export { DeleteIcon };