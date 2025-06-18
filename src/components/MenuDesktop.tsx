import { useState } from 'react';
import MenuIcon from '../assets/menu.svg'
function Menu(){

        const [isHoverMenu, setIsHoverMenu] = useState(false);
        const [isHoverSubMenu, setIsHoverSubMenu] = useState(false);

    return(
        <div className={'flex justify-evenly  -[260px] right-[260px] items-center bg-[#D7F1F9] h-[32px] '} style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <div onMouseOver={() => setIsHoverMenu(true)} onMouseLeave={() => setIsHoverMenu(false)} >
                <img src={MenuIcon} alt="menu" className={'z-1 p-x-[30px] w-[32px] h-[32px]  duration:300 hover:scale-110'}></img>
                {isHoverMenu && 
                    <div className={'absolute top-40 bg-[#D7F1F9] w-[140px] bg-[#D7F1F9] z-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer '}>
                        <ul className='grid row-span-3 border-[#0097C4] '>
                            <li onMouseOver={() => setIsHoverSubMenu(true)} onMouseLeave={() => setIsHoverSubMenu(false)} 
                                className='font-size-[14px] font-bold text-[#0097C4] p-[10px] bg-[#D7F1F9] border-b-[2px] cursor-pointer hover:bg-[#0097C4] hover:text-[#D7F1F9] hover: font-bold'>
                                Sorvetes
                                {isHoverSubMenu &&
                                    <div className={'absolute left-[140px] top-0 bg-[#D7F1F9] w-[140px] z-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer '}>
                                        <ul className='grid row-span-3 border-[#0097C4] border-[2px]'>
                                            <li className='font-size-[14px] font-bold text-[#0097C4] p-[10px] bg-[#D7F1F9] border-b-[2px] border-[#0097F1F9] cursor-pointer  hover:bg-[#0097C4] hover:text-[#D7F1F9] hover: font-bold'>Classicos</li>
                                            <li className='font-size-[14px] font-bold text-[#0097C4] p-[10px] bg-[#D7F1F9] cursor-pointer  hover:bg-[#0097C4] hover:text-[#D7F1F9] hover: font-bold'>Especiais</li>
                                        </ul>
                                    </div>}
                            </li>
                            <li className='font-size-[14px] font-bold text-[#0097C4] p-[10px] bg-[#D7F1F9] border-b-[2px] border-[#0097C4] cursor-pointer  hover:bg-[#0097C4] hover:text-[#D7F1F9] hover: font-bold'>Login</li>
                            <li className='font-size-[14px] font-bold text-[#0097C4] p-[10px] bg-[#D7F1F9] cursor-pointer  hover:bg-[#0097C4] hover:text-[#D7F1F9] hover: font-bold'>Sesta</li>
                        </ul>
                    </div>}
            </div>
            <div className={'flex justify-end p-x-[30px] w-[902px] h-[32px] '}></div>
        </div>
    );
}

export default Menu;