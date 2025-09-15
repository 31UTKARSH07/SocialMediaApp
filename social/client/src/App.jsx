import "./App.css";
import Landing from "./pages/Landing.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route/>
      </Routes>
    </div>
  );
}
export default App;
