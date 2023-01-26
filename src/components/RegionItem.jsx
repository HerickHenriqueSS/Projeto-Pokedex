import React from 'react'

export default function RegionItem({ regiao, quandoClick}) {
  return (
    <div>
        <div className='capitalize w-40 text-xl  rounded-lg m-2 text-center bg-red-300'>
            <div onClick={() =>quandoClick(regiao.nome)}>{regiao.nome}</div>
            
        </div>
    </div>
  )
}



