import { useEffect, useState } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  // useEffect(() => {
  //   const localTodos = JSON.parse(localStorage.getItem('todos'));
  //   if (localTodos) {
  //     setTodos(localTodos);
  //   }
  // }, []);
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  function handleAddTodo(newTodo) {
    const combine_todo = [...todos, newTodo]
    setTodos(combine_todo)

  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);

  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo} />
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} handleEditTodo={handleEditTodo} />
    </>
  );
}

export default App;
