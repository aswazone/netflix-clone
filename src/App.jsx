// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Player />
    </>
  );
};

export default App;
