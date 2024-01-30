import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Home from "./components/homePage/Home";
import { useSelector } from "react-redux";
import { AuthState } from "./redux/user/userAuth";

function App() {
  const isAuth = useSelector((state : AuthState) => state.userAuth.isAuth)
  console.log(isAuth);
  
  return (
    <Routes>
     {
      !isAuth ? ( 
      <Route path="/" element={<LandingPage/>}/>
      ): (
        <Route path="/home" element={<Home/>}/>
      )
     }
    </Routes>
  );
}

export default App;
