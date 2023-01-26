import React, { useEffect, useState } from 'react'
import SearchTypePokemon from '../../components/SearchTypePokemon';
import TypeItem from '../../components/TypeItem';

export default function AnwerTypes() {
    const [anwerR, setAnwerR] = useState(null);
    const [typesSelect, setTypesSelect] = useState('normal');

    useEffect(() =>{
        const url = `http://localhost:3333/types`;
        setTimeout(() => {
        fetch(url)
            .then(dados => dados.json())
            .then(dados => setAnwerR(dados))
            .catch(error => console.log(error));
        }, 500);
    }, []);

    if( anwerR == null){
        return(
            <div className='text-center '>
                Carregando Dados...
            </div>
        )
    }


    function clickTypes(newTypes){
        /* alert(newTypes) */
        setTypesSelect(newTypes)
    }
    return (
        <>
            <div className='h-40 bg-red-600 border-b-8 border-black'></div>
            <div className="box flex w-auto">
                <div className='text-center text-4xl'><b>Types</b> 
                    {anwerR.map((anwerR) =>(
                    <TypeItem types={anwerR} key={anwerR.nome} quandoClick={clickTypes} />))}

                </div>

                <div className=''>
                    <SearchTypePokemon types={typesSelect}/>
                </div>
            </div>
        </>
    )
}