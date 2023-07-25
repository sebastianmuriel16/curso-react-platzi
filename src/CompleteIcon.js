import react from "react";
import { AiOutlineCheck } from 'react-icons/ai';
import { FcCheckmark} from "react-icons/fc"
import {BsFillClipboard2CheckFill } from "react-icons/bs"
import "./CompleteIcon.css"
function CompleteIcon ({completed,onClik}){

    const iconSelect = completed ? <BsFillClipboard2CheckFill/> : <AiOutlineCheck/>;
    return (
        <span
         className={'Icon-check '+(completed ? 'completed-color': 'completed-uncolor') }
         onClick={onClik}> 
            {iconSelect}
         </span>

    )
}

export { CompleteIcon };