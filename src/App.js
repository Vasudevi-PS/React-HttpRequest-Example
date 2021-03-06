import "./App.css"
import PersonList from "./components/PersonList.js";
import PersonAdd from "./components/PersonAdd.js";
import PersonRemove from "./components/PersonRemove.js";

function App() {
  return (
    <div className="app">
    <h1>XMLHttpRequest using axios</h1>
      <PersonAdd />
      <PersonList />
      <PersonRemove/>
    </div>
  );
}
export default App;
