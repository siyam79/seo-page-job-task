
import { useEffect, useState } from 'react'
import './App.css'

function App() {


  const categorys = [
    {
      name: "Incompleted",
    },
    {
      name: "To-Do",
    },
    {
      name: "Completed",
    },
    {
      name: "Doing",
    },
    {
      name: "Under-Rivew",
    },
    {
      name: "Overdate",
    },
  ]







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
          {
            categorys.map((category, i) => <div key={i}>
              <div className=" rounded-xl w-[380px] h-full bg-base-200 ">
                <div className=' w-full  py-4 text-center  rounded-t-xl flex justify-between items-center px-10  '>
                  <h2 className={`flex items-center gap-3 font-bold justify-center border-l-[20px] rounded-full pl-2 
                  ${category.name === "Incompleted" ? "border-red-600" : ""}
                   ${category.name === "To-Do" ? "border-blue-600" : ""}
                    ${category.name === "Completed" ? "border-green-600" : ""}
                    ${category.name === "Doing" ? "border-orange-600" : ""}
                    ${category.name === "Under-Rivew" ? "border-sky-600" : ""}
                    ${category.name === "Overdate" ? "border-indigo-600" : ""}
                    
                    `}> {category.name} </h2>
                  <button className='btn'>0</button>
                </div>
                <div className=' h-[100vh]  w-[380px] p-4 border-2 border-[#924AEF] rounded-b-xl  overflow-y-auto scrollbar-to-do space-y-4'>

                  {
                    cards.map((card, i) => <div key={i} className=' bg-white py-24 '>

                    </div>)
                  }
                </div>
              </div>
            </div>)
          }


          {/* <div className=" rounded-xl w-[380px]  bg-base-200">
            <div className='w-full py-4 text-center bg-base-200 rounded-t-xl flex justify-between items-center px-10  '>
              <h2 className='flex items-center gap-3 font-bold justify-center border-l-[20px] rounded-full pl-2 border-blue-600 '>To-Do </h2>
              <button className='btn'>0</button>
            </div>
            <div className=' h-[100vh]  w-[380px] p-4 border-2 border-[#5ECFFF] rounded-b-xl overflow-y-auto scrollbar-to-do space-y-4'>
              {
                cards.map((card, i) => <div key={i} className=' bg-white py-24 '>

                </div>)
              }


            </div>
          </div>
          <div className=" rounded-xl  w-[380px]  bg-base-200">
            <div className=' w-full py-4 text-center bg-base-200 rounded-t-xl flex justify-between items-center px-10  '>
              <h2 className='flex items-center gap-3 font-bold justify-center border-l-[20px] rounded-full pl-2 border-green-600 '>Completed </h2>
              <button className='btn'>0</button>
            </div>
            <div className='h-[100vh]  w-[380px]  p-4 border-2 border-[#E328AF] rounded-b-xl  overflow-y-auto scrollbar-to-do space-y-4'>

            </div>
          </div>
          <div className=" rounded-xl  w-[380px]  bg-base-200">
            <div className=' w-full py-4 text-center bg-base-200 rounded-t-xl flex justify-between items-center px-10  '>
              <h2 className='flex items-center gap-3 font-bold justify-center border-l-[20px] rounded-full pl-2 border-green-600 '> Doing </h2>
              <button className='btn'>0</button>
            </div>
            <div className='h-[100vh] w-[380px]  p-4 border-2 border-[#E328AF] rounded-b-xl  overflow-y-auto scrollbar-to-do space-y-4'>

            </div>
          </div>
          <div className=" rounded-xl  w-[380px]  bg-base-200">
            <div className='w-full py-4 text-center bg-base-200 rounded-t-xl flex justify-between items-center px-10  '>
              <h2 className='flex items-center gap-3 font-bold justify-center border-l-[20px] rounded-full pl-2 border-green-600 '> Under-Rivew </h2>
              <button className='btn'>0</button>
            </div>
            <div className=' h-[100vh] w-[380px] p-4 border-2 border-[#E328AF] rounded-b-xl  overflow-y-auto scrollbar-to-do space-y-4'>

            </div>
          </div>
          <div className=" rounded-xl  w-[380px]  bg-base-200">
            <div className='w-full py-4 text-center bg-base-200 rounded-t-xl flex justify-between items-center px-10  '>
              <h2 className='flex items-center gap-3 font-bold justify-center border-l-[20px] rounded-full pl-2 border-green-600 '> Overdate </h2>
              <button className='btn'>0</button>
            </div>
            <div className='h-[100vh]  w-[380px] p-4 border-2 border-[#E328AF] rounded-b-xl  overflow-y-auto scrollbar-to-do space-y-4'>

            </div>
          </div>  */}
        </div >
      </section>

    </>
  )
}

export default App
