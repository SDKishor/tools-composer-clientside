import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
