import React, { useEffect, useState } from "react";
import terrenos from "../../db/db"
import  CardComponent  from "../card/CardComponent";

 const CardsComponent = () => {
const [terrenosEnVenta, setTerrenos] = useState([])
    useEffect(() => {
        setTerrenos(terrenos)
    },[])



    return (
        <div className="w-full min-h-full flex flex-col justify-center items-center gap-12">
           {terrenosEnVenta?.map(terreno => {
            return <CardComponent
                    precio={terreno.precio}
                    nombreDeTerreno={terreno.nombreDeTerreno}
                    descripcion={terreno.descripcion}
                    servicios={terreno.servicios}
                    enganche={terreno.enganche}
                    id={terreno.id}
                    imagenes={terreno.imagenes}
                    key={terreno.id}
            />
           })}
        </div>
    )
}

export default CardsComponent