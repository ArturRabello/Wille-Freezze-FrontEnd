import Header from "../components/Header"
import BoxProduto from "../components/BoxProduto"
import Footer from "../components/BaseBoard"

function Product({isDesktop, isTablet, isMobile}: any) {
    return (
        <div>
            <Header isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}/>
            <BoxProduto/>
            <Footer isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}/>
        </div>
    )
}

export default Product