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
import NotFound from "./Pages/NotFound/NotFound";
import AllProduct from "./Pages/Purchase/AllProduct";
import MyProfile from "./Pages/dashboard/MyProfile";
import AddReview from "./Pages/dashboard/AddReview";
import MyOrder from "./Pages/dashboard/MyOrder";
import AddProduct from "./Pages/dashboard/AddProduct";
import MakeAdmin from "./Pages/dashboard/MakeAdmin";
import ManageOrders from "./Pages/dashboard/ManageOrders";
import ManageProduct from "./Pages/dashboard/ManageProduct";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";

function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/myportfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/purchase" element={<AllProduct></AllProduct>}></Route>
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
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route
            path="manageorders"
            element={<ManageOrders></ManageOrders>}
          ></Route>
          <Route
            path="manageproducts"
            element={<ManageProduct></ManageProduct>}
          ></Route>
          <Route path="myorders" element={<MyOrder></MyOrder>}></Route>
        </Route>

        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
