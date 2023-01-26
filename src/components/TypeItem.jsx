import React from 'react'

export default function TypeItem({ types, quandoClick}) {
    return (
        <div>
            <div className='capitalize w-40 text-xl border-2 border-gray-500 rounded-lg m-2 text-center bg-red-300'>
                <div onClick={() =>quandoClick(types.nome)}>{types.nome}</div>
                
            </div>
        </div>
    )
}