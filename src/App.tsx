import {BrowserRouter, Routes, Route} from "react-router";
import Home from "./pages/Home.tsx";


function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      {/*<Routes path="/login" element={<Login/>}></Routes>
      <Routes path="/register" element={<Register/>}></Routes>
      <Routes path="/dashboard-account" element={<Dashboard-account/>}></Routes>
      <Routes path="/dashboard-product" element={<dashboard-product/>}></Routes>*/}
    </Routes>
    </BrowserRouter>
  );
}


export default App