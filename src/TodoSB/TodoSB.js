import './TodoSB.css'
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoCreateButton } from '../CreateTodoButton/TodoCreateButton';


function TodoSB({searchValue,setSearchValue,setOpenModal}){
    return(
        <div className='Contenedor-Button-Search'>
        <TodoSearch
            searchValue={searchValue}//el padre app le pasa el estado al componente hijo TodoSearch
            setSearchValue={setSearchValue}
        />
        <TodoCreateButton
        setOpenModal={setOpenModal}
        />
        </div>
    )
}

export { TodoSB };