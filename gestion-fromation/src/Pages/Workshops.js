import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { getFormationsController } from '../controllers/formation';


/* Modal.setAppElement('#App'); */

export default function Workshops() {

  const dispatch = useDispatch()

  const formations = useSelector(state => state.workshopsReducer)

  const user = JSON.parse(localStorage.getItem("profile"))

  useEffect(() => {
    dispatch(getFormationsController())
  }, []);
  
  const [addWorkShop, setaddWorkShop] = useState(false);

  return (
    <div className='flex flex-col px-5 py-4'>
      {user?.role==="admin"&&<div className='flex items-end justify-end w-full py-4'>
        <button onClick={()=>setaddWorkShop(true)} className='w-fit py-2 px-4 rounded-xl text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 cursor-pointer'>Add cycle formation</button>
      </div>}
      <div className='grid grid-cols-4 gap-7'>
        {formations?.map((formation,index)=><CardWithButtons key={index} user={user} formation={formation}/>)}
      </div>
      <AddFormationModal closeModal={()=>setaddWorkShop(false)} isOpen={addWorkShop}/>
    </div>
  )
}

const AddFormationModal = ({closeModal, isOpen}) => {
  <Modal
        isOpen={true}
        onRequestClose={closeModal}
        style={{}}
        contentLabel="Example Modal"
  >
    <h2>Hello</h2>
    <button onClick={closeModal}>close</button>
    <div>I am a modal</div>
    <form>
      <input />
      <button>tab navigation</button>
      <button>stays</button>
      <button>inside</button>
      <button>the modal</button>
    </form>
  </Modal>
}

const CardWithButtons = ({formation, user}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-fit">
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-800">{formation?.name}</h2>
        <p className="text-gray-600 mt-2">{formation?.date}</p>
      </div>
      <div className="flex justify-end px-4 py-2 bg-gray-100">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          {user.role==="admin"?<p>See subscribers</p>:<p>Subscribe</p>}
        </button>
        {user.role==="admin"&&<button className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
          Delete
        </button>}
      </div>
    </div>
  );
};
