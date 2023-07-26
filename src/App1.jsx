import { createSignal, createResource } from "solid-js";
import { useGlobalState } from "./GlobalStateProvider";

export function App1() {
  var [requestTodos, setRequestTodos] = createSignal(false);
  const [todos] = createResource(requestTodos, fetchTodos);
  const [count, { increment, decrement }, dataServer] = useGlobalState();
  console.log(count(), dataServer);

  async function fetchTodos() {
    const response = await fetch(dataServer + "/todos");
    function delay(increment, resp) {
      return new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve(resp);
        }, increment)
      );
    }
    var data = await delay(2000, response);
    return await data.json();
  }
  setRequestTodos(true);
  //   console.log(`todos: ${todos}`);

  return (
    <div>
      <button
        onClick={() => {
          // Note that this acts to toggle the boolean setRequest variable
          // As it turns out if you pass a function to the setter in a signal
          // SolidJS will automatically pass the associated value to it.
          // I replaced this
          //   setRequestTodos(true);
          //   setRequestTodos(false);
          // with this
          setRequestTodos((s) => !s);
          setRequestTodos((s) => !s);
          increment();
          console.log(count());
        }}
      >
        Request Todos
      </button>
      <div>{todos.loading && "Loading..."}</div>
      <ul>
        <For each={todos()}>{(todo) => <li>{todo.todo_name}</li>}</For>
      </ul>
    </div>
  );
}
