import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NextPage from './NextPage'
import PrevPage from './PrevPage'

export default function SearchPokemon() {
    const [answerPokemon, setAnswerPokemon] = useState(null)
    const [page, setPage] = useState(0)

    useEffect(() => {
        listPokemon()
    }, [page])

    function listPokemon(){
        const url =`http://localhost:3333/pokemon/20/${page}`

        fetch(url)
            .then(answer => answer.json())
            .then(answer => setAnswerPokemon(answer))
            .catch((error) => console.error(error));
    }

    if (answerPokemon == null){
        return(
            <div className='text-center'> Carregando dados...</div>
        )
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
  return (
    <div>
        <div className='h-40 bg-red-600 '></div>
        <div className="box flex w-auto"></div>
        <div className='grid grid-cols-5 ' >
            {answerPokemon.map((poke) => (
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
                <PrevPage pageClick={prevPage}/>
                <NextPage pageClick={nextPage}/>
            </div>
    </div>
  )
}
