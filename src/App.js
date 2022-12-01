import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  const [toDos, setToDos] = useState([
    { id: 1, toDo: "react를 배워봅시다" },
    { id: 2, toDo: "useState를 배워봅시다" },
  ]);

  const [toDo, setToDo] = useState();

  function addToDoHandler() {
    const newToDo = {
      id: toDos.length + 1,
      toDo: toDo,
    };
    setToDos([...toDos, newToDo]);
  }
  // console.log(toDo);

  function onSubmit(e) {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
  }

  return (
    <div className="main">
      <Input
        toDo={toDo}
        setToDo={setToDo}
        addToDoHandler={addToDoHandler}
        onSubmit={onSubmit}
      ></Input>
      <div className="card-box">
        {toDos.map((todo) => {
          return <Card key={todo.id} todo={todo}></Card>;
        })}
      </div>
    </div>
  );
}

export default App;
