import React from 'react';
import SmallCard from '../../components/SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Movies in Data Base",
    valor: 21,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Total awards",
    valor: 79,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Actors quantity",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


export const CardsPeliculas = () =>{
    return (
        <>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </>
    )
}
