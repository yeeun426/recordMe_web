import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from "./components/TodoMain";
import Redux from "./components/ReduxMain";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/redux" element={<Redux />}></Route>
      </Routes>
    </div>
  );
};

export default App;
