
import lupa from '../assets/lupa.png';

function SearchField({isDesktop, isTablet}: any) {
    return (<div className={` ${isDesktop ? 'w-[526px] h-[45px]' : 'w-[445px] h-[56px]'} flex items-center  drop-shadow-lg  justify-between bg-[white] rounded-[12px] `}>
        <span className={` flex items-center ${isDesktop ? 'h-[45px]' : 'h-[56px]'}`}>
            <img src={lupa} alt="Pesquisa"/>
        </span >
        <input className={' focus:outline-none rounded-[12px]'} >
        </input>
    </div>
    );
}

export default SearchField;