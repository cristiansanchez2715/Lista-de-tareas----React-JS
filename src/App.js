import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateButton } from './CreateButton';
import { TodoClick } from './TodoClick';
import React from 'react';

import { TodoNuevoTodo } from './NuevoTodo';
import './App.css';

let defaultTodos = [
   {text: 'cortar mango', completed: true},
   {text: 'comer mango', completed: false},
   {text: 'digerir mango', completed: false},
   {text: 'cagar mango', completed: false}
  ];
var ul = document.getElementById('ul')
  // var input = document.getElementById('input')
  // var valorActual = input.value

// localStorage.setItem('TODOS_V1', defaultTodos);

// let stringifiedTodos
function App() {
  // let localStorageTodos = localStorage.getItem('TODOS_V1');
// let parsedTodos = JSON.parse(localStorageTodos);



  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('')
  
 const completedTodos = todos.filter(todo => !!todo.completed).length; 
 const totalTodos = todos.length;
 const searchedTodos = todos.filter(
  (todo) => {
   return todo.text.includes(searchValue.toLowerCase())
  } 
 )

const completeTodo = (text) => {
  const newTodos = [...todos];
 const todoIndex = newTodos.findIndex(
  (todo) => todo.text == text
 );
  newTodos[todoIndex].completed = true
  setTodos(newTodos)
}

let input = document.getElementById("input");
 
let todosLosTodos = todos.length;
let parrafo = document.getElementById("parrafo");
React.useEffect(() => {
  if(completedTodos === todosLosTodos){
    alert("Felicidades todos los To-Do han sido completados")
  }
}, [completedTodos, todosLosTodos])
const deleteTodo = (text) => {
  const newTodos = [...todos];
 const todoIndex = newTodos.findIndex(
  (todo) => todo.text == text
 );
  newTodos.splice(todoIndex, 1)
  setTodos(newTodos)
}


  console.log("el usuario escribio: " + searchValue)  
  var addTodo = () => {
    var nuevo = input.value
   const elemento = defaultTodos.push({nuevo, completed: 'false'})
   const li = document.createElement('li')
   ul.appendChild(li)
   li.innerHTML(elemento)
  };

  // ...
  
  return (
    <React.Fragment>
     <TodoCounter
      completed={completedTodos}
       total={totalTodos}  
       />
     <TodoSearch searchValue={searchValue}
     setSearchValue ={setSearchValue} />

     <TodoList> 
      {searchedTodos.map(todo => (
        <TodoItem key={todo.text} 
        text={todo.text}
         completed={todo.completed}
         onComplete ={() => completeTodo(todo.text)}
         onDelete ={() => deleteTodo(todo.text)}
          />
      
      ))}
    
     </TodoList>

     <CreateButton onAddClick={addTodo}/>
     
   <TodoClick />
    </React.Fragment>
  );

}


export default App;
