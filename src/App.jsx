
import { useEffect, useState } from 'react'
import './App.css'

function App() {





  const [cards, setCards] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  console.log(cards);

  return (
    <>
      <section className=' max-h-screen '>
        <div className='grid lg:grid-flow-col-dense  min-h-screen gap-6 px-6'>
          <div className=" rounded-xl w-[380px] h-full bg-base-200 ">
            <div className=' w-full  py-4 text-center  rounded-t-xl flex justify-between items-center px-10  '>
              <h2 className='flex items-center gap-3 font-bold justify-center border-l-[20px] rounded-full pl-2 border-red-600 '>Incompleted </h2>
              <button className='btn'>0</button>
            </div>
            <div className=' h-full  w-[380px] p-4 border-2 border-[#924AEF] rounded-b-xl  overflow-y-auto scrollbar-to-do space-y-4'>
           
            </div>
          </div>
          <div className=" rounded-xl w-[380px]  bg-base-200">
            <div className='w-full py-4 text-center bg-base-200 rounded-t-xl flex justify-between items-center px-10  '>
              <h2 className='flex items-center gap-3 font-bold justify-center border-l-[20px] rounded-full pl-2 border-blue-600 '>To-Do </h2>
              <button className='btn'>0</button>
            </div>
            <div className='  w-[380px] p-4 border-2 border-[#5ECFFF] rounded-b-xl overflow-y-auto scrollbar-to-do space-y-4'>
            
            </div>
          </div>
          <div className=" rounded-xl  w-[380px]  bg-base-200">
            <div className=' w-full py-4 text-center bg-base-200 rounded-t-xl flex justify-between items-center px-10  '>
              <h2 className='flex items-center gap-3 font-bold justify-center border-l-[20px] rounded-full pl-2 border-green-600 '>Completed </h2>
              <button className='btn'>0</button>
            </div>
            <div className='  w-[380px]  p-4 border-2 border-[#E328AF] rounded-b-xl  overflow-y-auto scrollbar-to-do space-y-4'>
           
            </div>
          </div>
          <div className=" rounded-xl  w-[380px]  bg-base-200">
            <div className=' w-full py-4 text-center bg-base-200 rounded-t-xl flex justify-between items-center px-10  '>
              <h2 className='flex items-center gap-3 font-bold justify-center border-l-[20px] rounded-full pl-2 border-green-600 '> Doing </h2>
              <button className='btn'>0</button>
            </div>
            <div className=' w-[380px]  p-4 border-2 border-[#E328AF] rounded-b-xl  overflow-y-auto scrollbar-to-do space-y-4'>
            
            </div>
          </div>
          <div className=" rounded-xl  w-[380px]  bg-base-200">
            <div className='w-full py-4 text-center bg-base-200 rounded-t-xl flex justify-between items-center px-10  '>
              <h2 className='flex items-center gap-3 font-bold justify-center border-l-[20px] rounded-full pl-2 border-green-600 '> Under Rivew </h2>
              <button className='btn'>0</button>
            </div>
            <div className='  w-[380px] p-4 border-2 border-[#E328AF] rounded-b-xl  overflow-y-auto scrollbar-to-do space-y-4'>
          
            </div>
          </div>
          <div className=" rounded-xl  w-[380px]  bg-base-200">
            <div className='w-full py-4 text-center bg-base-200 rounded-t-xl flex justify-between items-center px-10  '>
              <h2 className='flex items-center gap-3 font-bold justify-center border-l-[20px] rounded-full pl-2 border-green-600 '> Overdate </h2>
              <button className='btn'>0</button>
            </div>
            <div className=' w-[380px] p-4 border-2 border-[#E328AF] rounded-b-xl  overflow-y-auto scrollbar-to-do space-y-4'>
         
            </div>
          </div>
        </div >
      </section>

    </>
  )
}

export default App
