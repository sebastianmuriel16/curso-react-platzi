import './TodoItem.css'
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';
import { CompleteIcon } from '../CompleteIcon/CompleteIcon';
function TodoItem(props){
    return(
      <li className="TodoItem">
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`} >{props.text}</p>
        <CompleteIcon 
        completed={props.completed}
        onClik={props.onComplete}
        />
        < DeleteIcon 
        onClick={props.onDelete}
        />
      </li>
    );
  }

  export {TodoItem}