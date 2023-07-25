import './TodoCounter.css';

function TodoCounter({total, completed}){
    return (

      total === completed && total !=0 ?

      <h1 className='TodoCounter'>
      Muy bien lograste completar todas tus tareas
      </h1>
      :
      <h1 className='TodoCounter'>
        has completado <span>{completed}</span>  de <span>{total}</span>  TODOs
      </h1>
    )
  }

  export {TodoCounter};