import { App1 } from "./App1";
import { App2 } from "./App2";
import { useGlobalState } from "./GlobalStateProvider";

export function App() {
  var [, , url] = useGlobalState();
  function postTodo(evt) {
    // post body data
    const user = {
      first_name: 5,
      last_name: "todo 5",
      job_title: false,
    };

    // request options
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // send POST request
    fetch(url + "/Addtodo", options)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  return (
    <div class="vertical_wrapper">
      <div class="horizontal_wrapper">
        <label htmlFor="newTodo">New Todo:</label>
        <input
          type="text"
          id="newTodo"
          placeholder="Enter A Todo"
          onChange={postTodo}
        ></input>
      </div>
      <App1 />
      <App2 />
    </div>
  );
}
