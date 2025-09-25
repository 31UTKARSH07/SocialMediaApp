import "./App.css";
import Landing from "./pages/Landing.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser.jsx";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function App() {
  useCurrentUser();
  const { userData } = useSelector((state) => state.user);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={!userData ? <Landing /> : <Navigate to="/home" />}
        />
        <Route
          path="/signin"
          element={!userData ? <SignIn /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          element={!userData ? <SignUp /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={userData ? <Home /> : <Navigate to="/signin" />}
        />
        <Route />
      </Routes>
    </div>
  );
}
export default App;
