import React from "react";
import sorvete from "../assets/Sorvete_pistache.png"

function BoxProduto() {
    return (
        <div className="flex h-[600px] items-center justify-center ">
            <div className=" flex w-[956px] h-[470px] bg-[#D7F1F9] ">
                <div className="flex items-center justify-between ">
                    <img src={sorvete} alt="" className="w-[430px] h-[430px] "></img>
                    <div className="flex flex-col items-center justify-center ">
                        <h1>Pistache</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BoxProduto;