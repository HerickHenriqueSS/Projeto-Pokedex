import React from 'react'

export default function prevPage({pageClick}) {
    let numeroPagina = 0
    function maisUm(){
        numeroPagina --
        return numeroPagina;
    }1
return (
    <div className='flex-auto m-auto'>
        <button className='text-2xl capitalize w-40 border-2 border-gray-500 rounded-lg m-2 text-center bg-teal-100 ' onClick={() => pageClick(maisUm)}><b>Prev</b></button>
    </div>
  )
}