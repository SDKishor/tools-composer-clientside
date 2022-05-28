import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import "react-toastify/dist/ReactToastify.css";
import { RequireAuth } from "./hooks/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Dashboard from "./Pages/dashboard/Dashboard";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/Purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        ></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
