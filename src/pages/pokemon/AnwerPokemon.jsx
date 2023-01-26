import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function AnwerPokemon() {

    const {id} = useParams();
    const [answerPoke, setAnwerpoke] =useState(null);

    useEffect(() => {
        showPokemon();
    }, [])

    function showPokemon (){
        const url =`http://localhost:3333/pokemons/pokedex/${id}`

        fetch(url)
            .then(answer => answer.json())
            .then(answer => setAnwerpoke(answer))
            .catch(error => console.log(error))

        
    }

    if (answerPoke ==null){
        return(
            <div className='text-center '>
                Carregando Dados...
            </div>
        )
    }
  return (
    <div>
        <div className='h-40 bg-red-600 border-b-8 border-black'></div>
        <div className="box flex w-auto"></div>
        <div className='text-center '>
            {console.log(answerPoke)}
            {answerPoke.map((poke) => (
                <div>
                    <div className='text-4xl capitalize'><b>{poke.nome}</b></div>
                    <div className='flex justify-center'>
                        <img className='' src={poke.img} alt="" />
                        <div className='text-3xl'> <b>Status</b>
                            <ul className='border-2 w-96 text-2xl'> 
                                <li> <b>Altura:</b> {poke.altura}cm</li>
                                <li> <b>Peso:</b> {poke.peso}m</li>
                                <li> <b>Attack:</b> {poke.atk}</li>
                                <li> <b>Deffence:</b> {poke.def}</li>
                                <li> <b>Special Attack:</b> {poke.spatk}</li>
                                <li> <b>Special Deffence:</b> {poke.spdef}</li>
                                <li> <b>Speed:</b> {poke.speed}</li>

                            </ul>
                        </div>
                    </div>
                    <span className='text-3xl'><b>{poke.tipo}</b></span>

                </div>
            ))}
        </div>

    </div>
  )
}
