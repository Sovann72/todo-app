import { useState } from "react";
import { DeleteBtn } from "./DeleteBtn";
import { EditBtn } from "./EditBtn";

export const Todo = (props) => {
  const [ isClick, setIsClick ] = useState(props.todo.selected)

  const [title, setTitle] = useState(props.todo.name);

  const [isEditable, setIsEditable] = useState(props.todo.edit);

  const handleDeleteClick = () => {
    props.todo.selected = !props.todo.selected;
    setIsClick(!isClick);
    props.onClick(isClick);
  }

  const handleEditClick = () => {
    props.todo.edit = !props.todo.edit;
    props.todo.name = title;
    setIsEditable(!isEditable);
  }

  const handleEditOnChange = (event) => {
    setTitle(event.target.value)
    console.log("this is title ", title);
    console.log("this is props.todo.name ", props.todo.name);
    // console.log("props.todo.name.length() ", title.length())
  }


  return <div 
  style={{
    width: '500px',
    height: '50px',
    border: '1px solid black',
    backgroundColor: props.todo.selected ? 'green' : 'white',
    color: props.todo.selected ? 'white' : 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}
  >
    
      <p style={{
        marginLeft: '10px',
      }}>{props.todo.id}: </p>
      <p style={{
        display: isEditable ? 'none' : 'inline',
        fontSize: '0.9rem',

      }}>{props.todo.name}</p>
      <input size="40" onChange={handleEditOnChange} value={title} style={{
        display: isEditable ? 'inline' : 'none',
      }}></input>
    
    <div style={{
      marginRight: '10px',
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
    }}>
      <p style={{
        color: isEditable ? '#007bff' : '#696969',
      }}>{props.todo.edit.toString()}</p>
      <DeleteBtn onClick={handleDeleteClick} todo={props.todo} name="delete" style={{
        width: '50px',
        height: '50%',
        backgroundColor: '#DC3545',
        color: 'white',
        border: '1px solid black',
        borderRadius: '3px',
      }}/>
      <EditBtn onClick={handleEditClick} todo={props.todo} name="edit" style={{
        width: '50px',
        height: '50%',
        backgroundColor: '#007bff',
        color: 'white',
        border: '1px solid black',
        borderRadius: '3px',
      }} />
    </div>
  </div>
}