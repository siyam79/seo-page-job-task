
import { useEffect, useState } from 'react'
import './App.css'
import { FaIdBadge } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { FaBuffer } from "react-icons/fa6";
import { FaHotdog } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [fileId, setFileId] = useState("")

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


  const bringData = () => {
    fetch('https://seo-page-job-task-server.vercel.app/v1/allTask')
      .then(res => res.json())
      .then(data => setCards(data))
  }

  const [cards, setCards] = useState([])

  useEffect(() => {
    bringData()
  }, [])


  //  Modal Close Function

  const ModalClose = () => {
    const modal = document.getElementById('addFile');
    if (modal) {
      modal.close();
    }
  }



  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    console.log(form.files);


    fetch(`https://seo-page-job-task-server.vercel.app/v1/addFileTasks?id=${fileId}&file=${parseInt(selectedFiles.length)}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      // body: JSON.stringify({ $inc: { file: 1 } })
      body: JSON.stringify({file: selectedFiles.length })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Data Updated', data);
        if (data) {
          console.log(data);
          toast.success('Your Attachments  File Submited Successfully')
          bringData()
          form.reset()
          ModalClose()
        }
      })

  }


  // modal open function 

  const openFileModal = (id) => {
    setFileId(id);

    document.getElementById('addFile').showModal()

  }

  return (
    <>
      <section className=' max-h-screen '>
        <div className='grid grid-flow-col-dense  min-h-screen gap-6 lg:px-4 '>
          {
            categorys.map((category, i) => <div key={i}>
              <div className=" rounded-xl w-[420px] mx-auto h-full bg-base-200 ">
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
                <div className=' h-[100vh]  w-[420px]  border-2  rounded-b-xl  overflow-y-auto scrollbar-to-do space-y-4'>

                  {

                    cards.map((data, i) => data.status === category.name ? <div key={i} className=' bg-white py-4 mx-4 rounded-md  ' >
                      <div className=' flex items-center justify-between px-2 '>
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
                      <div className=' flex items-center mt-10 px-2  '>
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

                          <button onClick={() => openFileModal(data._id)} className='flex items-center gap-1'>
                            <FaHotdog></FaHotdog>
                            {data.file}

                          </button>



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

          <dialog id="addFile" className="modal modal-bottom sm:modal-middle bg-opacity-100 backdrop-blur-lg">
            <div className="modal-box  bg-white bg-opacity-90 backdrop-blur-lg">
              <h3 className="font-bold text-4xl text-center">Add File</h3>
              <div className="modal-action">
                <form
                  method="dialog"
                  className='w-full'
                  onSubmit={handleSubmit}
                >
                  <div className="w-full form-control mb-5">

                    <div className="flex items-center justify-between w-[97%] gap-4">

                      <div className='w-full '>
                        <label className="label">
                          <span className="text-lg text-black  duration-300 font-semibold">  </span>
                        </label>


                        <input
                          type="file"
                          name="file"
                          multiple
                          className="input input-bordered  w-full mb-3 bg-white duration-300"
                          onChange={handleFileChange}
                        />


                        {/* <input

                          type="file"
                          name="file"
                          multiple
                          className="input input-bordered  w-full mb-3 bg-white duration-300"
                        /> */}

                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <button type="submit" className="py-3 px-7 lg:py-4 lg:px-9 text-sm md:text-base lg:text-lg bg-gradient-to-l from-[#924AEF] to-[#A827E4] font-bold rounded-md hover:bg-white hover:scale-90 duration-300 text-white">
                        Add {selectedFiles.length} File
                      </button>
                      <button
                        type="button"
                        className="py-3 px-7 lg:py-4 lg:px-9 text-sm md:text-base lg:text-lg border-[#924AEF] border-2 font-bold rounded-md hover:bg-white hover:scale-90 duration-300 text-[#924AEF]"
                        onClick={() => ModalClose()}
                      >
                        CANCEL
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div >
        <ToastContainer></ToastContainer>
      </section>

    </>
  )
}

export default App
