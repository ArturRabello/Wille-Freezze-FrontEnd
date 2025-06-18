import { useState, useEffect, useRef } from 'react';
import MenuIcon from '../assets/menu.svg';
import Close from '../assets/close.svg';

function MenuTablet({ isTablet }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } 
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [isOpen]);

    return (<>
        <button onClick={() => setIsOpen(!isOpen)}>
            <img src={MenuIcon} className={'w-[80px] h-[80px]'}></img>
        </button>
        {isOpen &&
            <div ref={menuRef}
                className={`flex absolute z-3 flex-col justify-start right-0  bg-gradient-to-b from-[#0097C4] to-[#0077A3] shadow-lg  top-0 h-screen  ${isTablet ? 'w-[300px]' : 'w-[200px]'}`}>
                <button onClick={() => setIsOpen(false)} className={`${isTablet ? 'pl-[190px]' : 'pl-[100px]'} pt-[25px] w-full h-[80px] font-bold text-[24px] text-[#D7F1F9]`}>
                    <img src={Close} className={'w-[80px] h-[80px]'}></img>
                </button>
                <ul className='grid gap-2 text-[32px] pt-[40px] pl-[25px] font-bold text-[#D7F1F9]'>
                    <li >Home</li>
                    <li>Carrinho</li>
                    <li>Login</li>
                </ul>
            </div>
        }
    </>
    );
}

export default MenuTablet