import { createSignal, createResource } from "solid-js";

export function App1() {
  async function setContents() {
    // const response = await fetch("todos");
    const response = await fetch("http://127.0.0.1:3001/todos");
    console.log("response is ", response);
    // todos = await response.json();
    var x = await response.json();
    setTodos(x);
  }
  var [todos, setTodos] = createSignal();

  setContents();
  //   createResource(requestTodos, setContents);
  //   setContents().catch((err) => console.log(err));
  //   const todos = async () => (await fetch("http://127.0.0.1:3001/")).json();

  //   console.log(`todos: ${todos()}`);
  return (
    <div>
      <button onClick={setContents}>Request Todos</button>
      {/* <span>{todos().loading && "Loading..."}</span> */}
      {/* <pre>{todos()}</pre> */}
      {/* <div>
        <pre>{JSON.stringify(data(), null, 2)}</pre>
      </div> */}
      <ul>
        <For each={todos()}>{(todo) => <li>{todo.todo_name}</li>}</For>
      </ul>
    </div>
  );
}
