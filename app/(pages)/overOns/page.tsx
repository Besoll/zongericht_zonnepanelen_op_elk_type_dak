
import React from 'react'

export default async function page({
  searchParams, 
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  
  return (
    <main className='min-h-[70vh] flex flex-col justify-center items-center '>
      <h1 className='text-black heading4 text-center'>
        404 | pagina
      </h1>
      
    </main>
  )
}


