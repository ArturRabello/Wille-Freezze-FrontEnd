
import { useMediaQuery } from 'react-responsive';
import Avatar from '../assets/avatar.svg';
import Basket from './headerIcons/Basket.tsx';
import MainIcon from './MainIcon.tsx';
import SearchField from './SearchField.tsx';
import MenuTablet from './MenuTablet.tsx';
function Header({ isDesktop, isTablet, isMobile }: any) {



    return (
        <header className={`${isDesktop ? 'flex items-center justify-evenly h-[130px] bg-[#0097C4] px-[30px]' : 'flex fixed z-3 items-center gap-x-5 justify-between h-[130px] w-full bg-[#0097C4] px-[30px]'}`}>
            {(isDesktop || isTablet) && <MainIcon />}
            <SearchField isDesktop={isDesktop} />
            {isDesktop &&
                <section className={'flex pr-[20px] gap-x-10'}>
                    <img src={Avatar} alt="Avatar" className={'duration-300 transform ease-in-out drop-shadow-lg  hover:scale-110 '}></img>
                    <Basket />
                </section>
            }
            {(isTablet || isMobile) && <MenuTablet isTablet={isTablet} />}

        </header>
    )
}

export default Header;