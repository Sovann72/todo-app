import { useState } from "react";

export const EditBtn = (props) => {
  const [isClick, setIsClick] = useState(props.todo.edit);
  const handleClick = () => {
    setIsClick(!isClick);
    props.onClick(isClick);
  }

  return <button type="button" style={props.style} onClick={handleClick}>
    {props.name}
  </button>
}