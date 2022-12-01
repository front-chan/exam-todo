function Input(props) {
  return (
    <form className="main-title" onSubmit={props.onSubmit}>
      <input
        type="text"
        value={props.toDo || ""}
        onChange={(e) => props.setToDo(e.target.value)}
      />
      <button onClick={props.addToDoHandler}>추가하기</button>
      <h1>Todo List</h1>
    </form>
  );
}

export default Input;
