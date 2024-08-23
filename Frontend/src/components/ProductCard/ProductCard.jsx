import React from 'react'
import { Button } from '../ui/button'
import { CurrencyRupee } from '@mui/icons-material'

function ProductCard({product}) {
    
  return (
    <div className=' flex flex-col justify-center h-fit p-3 shadow-xl
    hover:scale-105 duration-500 ease-in-out
    bg-gray-200 
    cursor-pointer
    '>
        <div>
            <img src={product.thumbnail} alt={product.title} 
            className='aspect-square h-[20rem] object-cover '
            />
        </div>
        <div className='flex justify-between items-end'>
        <div  className='flex flex-col justify-center gap-2 m-2'>

        <div>

            <h2 className='text-2xl'>{product.title}</h2>
        </div>
        <div>
            <p className='text-xl text-black'>{product.description}</p>
        </div>
        <div>
            <p className='font-semibold'>Price:<CurrencyRupee/>{product.price}</p>
        </div>
        </div>
        <div>
            <Button>
                 Buy Now
            </Button>
        </div>
        </div>
    </div>
  )
}

export default ProductCard