import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NextPage from './NextPage';
import PrevPage from './PrevPage';

export default function SearchTypePokemon({types}) {
    const [ pokemon, setPokemon] = useState([])
    const [page , setPage] = useState(0)
    if (!types)
        types = "normal"
    

    useEffect(() =>{
        typePokemon();
    }, [types]);

    useEffect(() =>{
        pagePokemon();
    }, [page]);



    function pagePokemon() {
        console.log(types)
        console.log(page)
        const url = `http://localhost:3333/types/${types}/20/${page}`

        fetch(url)
            .then(answer => answer.json())
            .then(answer => setPokemon(answer))
            .catch(error => console.log(error))
    }
    
    function typePokemon() {
        console.log(types)
        console.log(page)
        const url = `http://localhost:3333/types/${types}/20/0`

        fetch(url)
            .then(answer => answer.json())
            .then(answer => setPokemon(answer))
            .catch(error => console.log(error))

        setPage(0)
    }

    function nextPage(){
        setPage(page+1);
    }
    function prevPage(){
        if (page > 0){
            setPage(page-1);
        }else{
            setPage(0);
        }
    }

    return(
        <div className='border-2'>
            <div className='grid grid-cols-5 border-4 border-slate-900 ' >
            {pokemon.map((poke) => (
                <span className=''>
                    <div className='m-2 p-1 border-4 rounded-lg border-yellow-400 text-center bg-gradient-to-r from-gray-300 to-blue-500 ' key={poke.id}>
                        <b>#{poke.numero}</b>
                        <Link to ={`/pokemon/${poke.id}`}>
                            <img className=' w-600' src={poke.img} alt="" />
                        </Link>
                        <div className='capitalize bg-white rounded-xl'>
                            <b>{poke.nome}</b>
                            <br/> {poke.tipo}
                        </div>
                    </div>                   
                </span>               
            ))}
            </div>

            <div className='flex '>
                <PrevPage className="" pageClick={prevPage}/>
                <NextPage pageClick={nextPage}/>
            </div>
        </div>
    )

    
}