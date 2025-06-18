

interface CardProdutoProps {
    name: string;
    price: number;
    img: string;
    description: string;
}


function CardProduto({name, price, img, description}: CardProdutoProps) {
    return (
        <div className={' grid  gap-[10px] w-[240px] h-[422px] rounded-[24px] duration-300 shadow-lg hover:scale-105 '}>
            <img className={''} src={img}></img>
            <h3 className={' font-poppins-bold text-[24px] pl-[20px] max-w-198 break-words'}>{name}</h3>
            <p className={'font-inter font-regular text-[14px] pl-[20px] max-w-[198px] break-words min-h-[lem * 1.5 * 2]'}
                style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{description}</p>
            <p className={'font-Roboto font-regular text-[21px] pl-[20px] mb-[12px] max-w-198  break-words'}>{price.toLocaleString('pt-BR', ({style: 'currency', currency: 'BRL'}))}</p>
        </div>
    );
}

export default CardProduto;