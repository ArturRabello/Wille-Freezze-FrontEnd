
import lupa from '../assets/lupa.png';

function SearchField({isDesktop, isTablet}: any) {
    return (<div className={` ${isDesktop ? 'w-[526px] h-[45px]' : isTablet ? 'w-[340px] h-[45px]' : 'w-[216px] h-[45px]'} ${isDesktop ? 'w-[526px] h-[45px]' : isTablet ? 'w-[340px] h-[45px]' : 'w-[40px] h-[45px]'} flex items-center  drop-shadow-lg  justify-between bg-[white] rounded-[12px] `}>
        <span className={` flex items-center ${isDesktop ? 'h-[45px]' : 'h-[56px]'}`}>
            <img src={lupa} alt="Pesquisa"/>
        </span >
        <input className={` ${isDesktop ? 'w-[526px] h-[45px]' : isTablet ? 'w-[340px] h-[45px]' : 'w-[210px] h-[45px]'} focus:outline-none rounded-[12px]`} >
        </input>
    </div>
    );
}

export default SearchField;