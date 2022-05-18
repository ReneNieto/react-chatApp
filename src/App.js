
import { Routes, Route, Link } from "react-router-dom";

import  ChatHome from './Components/ChatHome/Home';
import  Login from './Components/Login/Login';
import  {Register} from './Components/Register/Register';



function App() {
  return (
    <div className="App">
     <Routes>
      <Route element={<ChatHome />} path="/" />
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
      </Routes>

    </div>
  );
}

export default App;
