import UseEffect from "./Hooks/UseEffect";
import UseReducer from "./Hooks/UseReducer";
import UseState from "./Hooks/UseState";
import Resturant from "./Resturant/Resturant";
import TodoList from "./ToDoReact/TodoList";

function App() {
  return (
    <>
      {!(<Resturant />)}
      {!(<UseState />)}
      {!(<UseEffect />)}
      {!(<UseReducer />)}
      {<TodoList/>}
    </>
  );
}

export default App;
