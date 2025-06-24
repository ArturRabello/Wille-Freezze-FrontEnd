import Header from '../components/Header.tsx';
import LoginBox from '../components/LoginBox.tsx';
import Footer from '../components/BaseBoard.tsx';
function Login({isDesktop, isTablet, isMobile}: any) {
    return (
        <>
            <Header isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />
            <LoginBox isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />
            <Footer isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} />
        </>
    )
}

export default Login