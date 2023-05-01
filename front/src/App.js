import { Routes, Route } from "react-router-dom";
import Main from "./components/TodoMain";
import Redux from "./components/ReduxMain";
import Split from "./components/SplitMain";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/redux" element={<Redux />}></Route>
        <Route path = "/splitting" element={<Split />}></Route>
      </Routes>
    </div>
  );
};

export default App;
