
import Header from '../components/Header.tsx';
import MenuDesktop  from '../components/MenuDesktop.tsx';
import SliderBanner from '../components/slider/sliderBanner/SliderBanner.tsx';
import SliderCards from '../components/slider/sliderProduct/SliderCard.tsx';
import BaseBoard from '../components/BaseBoard.tsx';

import banner_1 from '../assets/banner1.svg'
import pistache from '../assets/Sorvete_pistache.png'




interface Flavers {
    name: string;
    price: number;
    img: string;
    description: string;
}

interface IceCreamTypes {
    type: string;
    flavers: Flavers[];
}
function Home({isDesktop, isTablet, isMobile}: any) {
    
    const imgBanner = [
            banner_1,
            banner_1,
        ]

    const IceCreemTypes: IceCreamTypes[] = [{
        type: 'Sabores Classicos',
        flavers: [
            {name: 'pistachio', price: 23.00, img: pistache , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {name: 'Strawberry', price: 23.00, img: pistache, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {name: 'Vanilla', price: 23.00, img: pistache, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {name: 'Mint', price: 23.00, img: pistache, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        ]},
        {
        type: 'Sabores Especiais',
        flavers: [
            {name: 'Pistache', price: 23.00, img: pistache , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {name: 'Strawberry', price: 23.00, img: pistache, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {name: 'Vanilla', price: 23.00, img: pistache, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {name: 'Mint', price: 23.00, img: pistache, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {name: 'favorBomb', price: 23.00, img: pistache , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {name: 'Mint', price: 23.00, img: pistache, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        ]}
    ];
    
    return (
        <div className={'bg-[#F1F1F1]'}>
            <Header  isDesktop={isDesktop} isTablet ={isTablet} isMobile={isMobile}/>
            {isDesktop && <MenuDesktop/>}
            {(isDesktop || isTablet) && <SliderBanner img={imgBanner} isDesktop={isDesktop}/>}
            {isMobile && <div className='pt-[130px]'></div>}
            {IceCreemTypes.map((IceCreemTypes, index) => <SliderCards key={index} IceCreemTypes={IceCreemTypes} isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}/>)}
            <BaseBoard isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}/>
        </div>
    );
}

export default Home;