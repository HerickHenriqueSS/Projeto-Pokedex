import React from 'react'

export default function NextPage({pageClick}) {
    let numeroPagina = 0
    function maisUm(){
        numeroPagina ++
        return numeroPagina;
    }

return (
    <div className='m-auto'>
        <button className='text-2xl capitalize w-40 border-2 border-gray-500 rounded-lg m-2 text-center bg-teal-100'  
        onClick={() => pageClick(maisUm)}><b>Next</b></button>
    </div>
  )
}