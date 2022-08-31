import { useState } from "react"
import { AddBtn } from "./AddBtn";
import { DeleteBtn } from "./DeleteBtn";

export const Form = (props) => {
  const [ title, setTitle ] = useState('');
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(title);
  }

  return <form onSubmit={handleSubmit} style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '3px',
    marginBottom: '10px',
  }}>
      <label htmlFor="form">what Todo?</label>
      <input type="text" id="form" onChange={handleChange}/>
      <AddBtn name="Create" type="submit" style={{
        color: 'white',
        backgroundColor: 'green',
        border: '1px solid black',
        borderRadius: '3px',
      }}/>
    </form>   
}