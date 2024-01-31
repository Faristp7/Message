import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthState } from "./redux/user/userAuth";
import HomePage from "./pages/HomePage";

function App() {
  const isAuth = useSelector((state : AuthState) => state.userAuth.isAuth)
  
  return (
    <Routes>
    <Route
      path="/"
      element={isAuth ? <Navigate to="/home" /> : <LandingPage />}
    />
    <Route
      path="/home"
      element={isAuth ? <HomePage /> : <Navigate to="/" />}
    />
  </Routes>
  );
}

export default App;
