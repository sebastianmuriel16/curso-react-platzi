import {AiOutlineCheck} from 'react-icons/ai';
function TodoIcon({type}){
    return (
        <span
        className={`Icon Icon-svg Icon-${type}`}>
            <AiOutlineCheck/>
        </span>
    )
}

export { TodoIcon };