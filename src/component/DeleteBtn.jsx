import { useState } from "react"

export const DeleteBtn = (props) => {
  const [isClick, setIsClick] = useState(props.todo.selected)
  const handleClick = () => {
    setIsClick(!isClick);
    props.onClick(isClick)
  }
  return (
    <button type="button" style={props.style} onClick={handleClick}>
      {props.name}
    </button>
  )
} 