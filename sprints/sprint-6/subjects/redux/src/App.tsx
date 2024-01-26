import "./App.css";
import configureStore from "./store";
import { loadPending, setUser } from "./reducers/user";

const store = configureStore({});

function App() {
  store.dispatch(loadPending());

  store.dispatch(setUser({ name: "Peter" }));

  return (
    <>
      <h1>Redux</h1>
    </>
  );
}

export default App;
