import { createSignal, createResource } from "solid-js";
import { useGlobalState } from "./GlobalStateProvider";

export function App1() {
  var [requestTodos, setRequestTodos] = createSignal(false);
  const [count, { increment, decrement }, dataServer] = useGlobalState();

  console.log("Data Server", dataServer);

  const fetchTodos = async () => (await fetch(dataServer + "/todos")).json();
  const [todos] = createResource(requestTodos, fetchTodos);

  setRequestTodos(true);

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
          console.log("Fetch #", count());
        }}
      >
        Request Todos
      </button>
      <span>{todos.loading && "Loading..."}</span>
      <span>{todos.error && "Error"}</span>
      <div>
        {todos.state == "ready" && (
          <ul>
            <For each={todos()}>{(todo) => <li>{todo.todo_name}</li>}</For>
          </ul>
        )}
      </div>
    </div>
  );
}
