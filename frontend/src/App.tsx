import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/homePage/Home";
import { useSelector } from "react-redux";
import { AuthState } from "./redux/user/userAuth";

function App() {
  const isAuth = useSelector((state : AuthState) => state.userAuth.isAuth)
  console.log(isAuth);
  
  return (
    <Routes>
    <Route
      path="/"
      element={isAuth ? <Navigate to="/home" /> : <LandingPage />}
    />
    <Route
      path="/home"
      element={isAuth ? <Home /> : <Navigate to="/" />}
    />
  </Routes>
  );
}

export default App;
