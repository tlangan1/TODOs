import { createSignal, createResource } from "solid-js";

const fetchUser = async (id) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

export const App2 = () => {
  const [userId, setUserId] = createSignal();
  const [user] = createResource(userId, fetchUser);
  console.log(`user: ${user}`);

  return (
    <>
      <input
        type="number"
        min="1"
        placeholder="Enter Numeric Id"
        onInput={(e) => setUserId(e.currentTarget.value)}
      />
      <span>{user.loading && "Loading..."}</span>
      <div>
        <pre>{JSON.stringify(user(), null, 2)}</pre>
      </div>
    </>
  );
};

// render(App, document.getElementById("app"));
