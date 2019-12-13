import React, { useRef } from "react";

interface INewTodoProps {
  handleAddTodo: (text: string) => void;
}

const NewTodo: React.FC<INewTodoProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.handleAddTodo(enteredText);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
