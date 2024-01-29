import "./App.css";
import React from "react";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Home from "./components/homePage/Home";

function App() {
  const [isValid , setIsValid] = React.useState<boolean>(false)
  
  React.useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      setIsValid(true)
    }
  },[isValid])
  return (
    <Routes>
     {
      !isValid ? ( 
      <Route path="/" element={<LandingPage/>}/>
      ): (
        <Route path="/home" element={<Home/>}/>
      )
     }
    </Routes>
  );
}

export default App;
