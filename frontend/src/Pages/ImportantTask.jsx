import React from 'react'
import Cards from '../Components/Home/Cards'

const ImportantTask = () => {
  return (
    <div>
      <div className='flex items-center justify-between p-3 sticky top-0 bg-gray-900'>
        <h1 className='text-3xl p-2 font-serif font-bold'>Important Tasks</h1>
      </div>
      <Cards />
    </div>
  )
}

export default ImportantTask