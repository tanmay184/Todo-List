import { useEffect, useState } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify(newList));
  }

  function handleAddTodo(newTodo) {
    const combine_todo = [...todos, newTodo];
    persistData(combine_todo);
    setTodos(combine_todo);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    persistData(newTodoList);
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
