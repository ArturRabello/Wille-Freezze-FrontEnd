import {BrowserRouter, Routes, Route} from "react-router";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import Product from "../pages/Product.tsx";
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import {type RootState } from '../app/store';
function AppRoutes() {
    const isTablet = useMediaQuery({ minWidth: 426, maxWidth: 768 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 425 });
    const isLoggedIn = useSelector((state: RootState) => state.auth.sessionUser.isLogged);

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />}></Route>
                
                <Route path="/login" element={isLoggedIn ? <Home isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} /> : <Login isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />}></Route>
                <Route path="/product" element={<Product isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />}></Route>
                {/*<Routes path="/login" element={<Login/>}></Routes>
      <Routes path="/register" element={<Register/>}></Routes>
      <Routes path="/dashboard-account" element={<Dashboard-account/>}></Routes>
      <Routes path="/dashboard-product" element={<dashboard-product/>}></Routes>*/}
            </Routes>
        </BrowserRouter>
    );
}


export default AppRoutes