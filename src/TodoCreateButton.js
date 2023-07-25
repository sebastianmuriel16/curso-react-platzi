import './CreateTodoButton.css'    
    function TodoCreateButton(){
        return(
            <button className="CreateTodoButton"
            onClick={(event) => {
                console.log('clear')
                console.log(event)
                console.log(event.target)
                }}>
                Add
            </button>
        )
    }

    export {TodoCreateButton}

