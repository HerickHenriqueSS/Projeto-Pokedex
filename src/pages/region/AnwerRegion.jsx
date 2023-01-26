import React, { useEffect, useState } from 'react'
import RegionItem from '../../components/RegionItem';
import SearchRegionPokemon from '../../components/SearchRegionPokemon';

export default function AnwerRegion() {

    const [anwerR, setAnwerR] = useState(null);
    const [regionSelect, setRegionSelect] = useState('kanto');

    useEffect(() =>{
        const url = `http://localhost:3333/regions`;
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

    function clickRegion(newRegion){
        /* alert(newRegion) */
        setRegionSelect(newRegion)
    }
    return (
        <>
            <div className='h-40 bg-red-600 border-b-8 border-black'></div>
            <div className="box flex w-auto">
                <div className='text-center text-4xl'><b>Regions</b> 
                    {anwerR.map((anwerR) =>(
                    <RegionItem regiao={anwerR} key={anwerR.nome} quandoClick={clickRegion} />))}

                </div>

                <div className=''>
                    <SearchRegionPokemon regiao={regionSelect}/>
                </div>
            </div>
        </>
    )
}
