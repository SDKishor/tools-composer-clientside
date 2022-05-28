import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
