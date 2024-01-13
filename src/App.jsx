
import { useEffect, useState } from 'react'
import './App.css'
import { FaIdBadge } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { FaBuffer } from "react-icons/fa6";
import { FaHotdog } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
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
    fetch('http://localhost:5000/v1/allTask')
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
                <div className=' h-[100vh]  w-[380px]  border-2 border-[#924AEF] rounded-b-xl  overflow-y-auto scrollbar-to-do space-y-4'>

                  {

                    cards.map((data, i) => data.status === category.name ? <div key={i} className=' bg-white h-[200px] ' >
                      <div className=' flex items-center justify-between px-2 pt-2 '>
                        <div className=" flex items-center just gap-1 ">
                          <img alt="" className='w-12  h-10 rounded-full' src="https://i.ibb.co/vsFt72P/images-3.jpg" />
                          <h1>Client Name </h1>
                        </div>
                        <div>
                          <div className=" flex items-center just gap-1 ">
                            <img alt="" className='w-[36px]  h-10 rounded-full' src="https://i.ibb.co/xCdnLKR/images-4.jpg" />
                            <h1> {data.name} </h1>
                          </div>
                        </div>
                      </div>

                      <div className=' flex items-center justify-between px-2 mt-6'>
                        <div className='  flex items-center gap-2'>
                          <FaBuffer></FaBuffer>
                          <h1> {data.description}....... </h1>
                        </div>

                        <button className=' flex items-center bg-base-300 px-2 rounded-sm '>
                          <FaIdBadge></FaIdBadge>
                          1/2
                        </button>

                      </div>
                      <div className=' flex items-center mt-10 px-2 '>
                        <div className='flex items-center justify-around gap-3'>
                          <img alt="" className='w-[36px]  h-10 rounded-full' src="https://i.ibb.co/xCdnLKR/images-4.jpg" />
                          <img alt="" className='w-12  h-10 rounded-full' src="https://i.ibb.co/vsFt72P/images-3.jpg" />
                          <h1 className='bg-base-300 rounded-full px-1'> 12+ </h1>
                          <div>
                          <h1 className='flex items-center gap-1'>
                          <BiMessageRounded></BiMessageRounded> 
                          20
                          </h1>
                          </div>
                         
                          <h1 className='flex items-center gap-1'>
                          <FaHotdog></FaHotdog> 
                          25
                          </h1>

                          <h1 className='flex items-center gap-1'>
                            <BsCalendarDate></BsCalendarDate>
                            {data.date}
                          </h1>

                        </div>
                      </div>
                    </div> : <></>)

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
