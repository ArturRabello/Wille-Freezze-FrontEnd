
import { useState } from 'react';
import Logo from '../assets/logo.png'
import FormLogin from '../components/forms/FormLogin.tsx';
import FormRegister from '../components/forms/FormRegister.tsx';


function LoginBox({isDesktop, isTablet, isMobile}: any){ 
    
    const [isform, setIsForm] = useState<'login' | 'register'>('login');

    return (
    <div className={`flex items-center justify-center ${isDesktop ? 'pt-[70px] pb-[70px]' : 'pt-[130px] '}`}>
        <div className={`flex items-center justify-center w-[956px] h-[524px] bg-[#D7F1F9] rounded-[12px] ${(isform === 'login' ? ' gap-x-[130px]' : 'gap-x-[40px]')} ${isDesktop && 'shadow-lg'}`}>
            {(isDesktop || (isTablet  && isform === 'login')) && <img src={Logo} alt="Logo" className={'w-[330px] h-[320px] drop-shadow-lg'}></img>}
            {isform === 'login' ? <FormLogin setIsForm={setIsForm} isTablet={isTablet}/> : <FormRegister setIsForm={setIsForm} isMobile={isMobile}/>}
        </div>

        
    </div>
    )
}

export default LoginBox;