function Card(props) {
  return (
    <div className="todo-card">
      <h5>{props.todo.toDo}</h5>
    </div>
  );
}

export default Card;
