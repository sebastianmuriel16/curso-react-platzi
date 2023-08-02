import React from "react"

function useLocalStorage(itemName,initialValue){

    const [item, setItem] = React.useState(initialValue)

    const [loading,setLoading] = React.useState(true)

    const [error,setError] = React.useState(false)

    React.useEffect(() => {
      setTimeout(() =>{
        try {
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem
    
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue
          }else{
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
          }
          setLoading(false)
        } catch (error) {
          setLoading(false)
          setError(true)
        }
      },2000)
    },[]);// el array vacio es para que el useEffect solo se ejecute una unica vez
  
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
    
    return {
      item,
      saveItem,
      loading,
      error,
    }
  
  }
  
export { useLocalStorage }  

// const defaultTodos = [
//   {text: 'cortar....', completed: true},
//   {text: 'curso React.js', completed: false},
//   {text: 'jack', completed: false},
//   {text: 'como sea', completed: false},
//   {text: 'JACK', completed: false},
//   {text: 'Coincidencias', completed: false},
//   {text: 'V rising', completed: false},
// ];