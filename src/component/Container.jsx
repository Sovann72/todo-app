import { useState } from 'react'
import { Form } from './Form'
import { Todo } from './Todo';
import { v4 as uuid, v4 } from 'uuid';
import { DeleteBtn } from './DeleteBtn';
import { AddBtn } from './AddBtn';

export const Container = () => {
  const [ todos, setTodos ] = useState([]);
  const [ todoID, setTodoID ] = useState(0);
  const [anotherTodo, setAnotherTodo] = useState('');

  const getTitleSetState = (data) => {
    setTodoID(todoID+1);
    setTodos([...todos, {
      name: data, 
      id: todoID,
      selected: false,
      edit: false
    }]);
    console.log('todos: getTitleSetState ', todos)
  }
  const getSelection = () => {
    const afterDeleteTodo = todos.filter((value)=> value.selected === false)
    setTodos(afterDeleteTodo)
    console.log('todos: getSelection ', todos)
  }


  return <div className="Container" style={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  }}>
    <Form onSubmit={getTitleSetState}>
      </Form>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}>
    {todos.map((todo) => (
      <Todo todo={todo} key={todo.id} onClick={getSelection} />
    ))}
    </div>
  </div>
}