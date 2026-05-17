import "./App.css";
import {SampleComponent} from "./features/sample-feature/SampleComponent";

function App() {
  return <>
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <p>This is a simple React application for your groceries.</p>
      </header>
      <SampleComponent />
    </div>
  </>;
}

export default App;
