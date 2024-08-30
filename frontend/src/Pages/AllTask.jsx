import React, { useState } from 'react'
import Cards from '../Components/Home/Cards'
import { PlusCircle } from 'lucide-react'
import InputData from '../Components/Home/InputData';

const AllTask = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <div className='flex items-center justify-between p-3 sticky top-0 bg-gray-900'>
        <h1 className='text-xl md:text-3xl p-2 font-serif font-bold'>All Tasks</h1>
        <button onClick={() => setOpenDialog(true)} className='btn btn-outline  transition-all duration-300'><PlusCircle /> Add Task</button>
      </div>
      <Cards />
      <InputData setOpenDialog={setOpenDialog} openDialog={openDialog} />
    </div>
  )
}

export default AllTask