import React from 'react';
import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm'

function App() {
  const [todos, setTodos] = React.useState([
    { 
      text: "Finish this app",
      isCompleted: false 
    },
    { 
      text: "Learn React Hooks",
      isCompleted: false 
    },
    { 
      text: "Improve on Redux",
      isCompleted: false  
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos);
  }
  
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
}

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => <Todo
          completeTodo = {completeTodo}
          removeTodo = {removeTodo}
          key={index}
          index={index}
          todo={todo}
        />
        )}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
