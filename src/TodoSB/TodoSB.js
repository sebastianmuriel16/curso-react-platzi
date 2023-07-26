import './TodoSB.css'
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoCreateButton } from '../CreateTodoButton/TodoCreateButton';


function TodoSB({searchValue,setSearchValue}){
    return(
        <div className='Contenedor-Button-Search'>
        <TodoSearch
            searchValue={searchValue}//el padre app le pasa el estado al componente hijo TodoSearch
            setSearchValue={setSearchValue}
        />
        <TodoCreateButton/>
        </div>
    )
}

export { TodoSB };