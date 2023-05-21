import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCyclesController, createPreinscriptionController, getCyclesController } from '../controllers/cycle';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

/* Modal.setAppElement('#App'); */

export default function Cycle() {

  const dispatch = useDispatch()

  const cycles = useSelector(state => state.workshopsReducer)

  const user = JSON.parse(localStorage.getItem("profile"))

  useEffect(() => {
    dispatch(getCyclesController({wantPre:true}))
  }, []);
  
  const [addCycle, setaddCycle] = useState(false);

  const [newCycle, setnewCycle] = useState({name:"", date:new Date(),  creatorId:user.id});

  const addCycleButton = () => {
    dispatch(createCyclesController(newCycle))
  }

  const addPreinscriptionButton = (cycleId) => {
    dispatch(createPreinscriptionController({userId:user?.id,cycleId}))
  }

  return (
    <div className='flex flex-col px-5 py-4'>
      {user?.role==="admin"&&<div className='flex items-end justify-end w-full py-4'>
        <button onClick={()=>setaddCycle(true)} className='w-fit py-2 px-4 rounded-xl text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 cursor-pointer'>Add cycle formation</button>
      </div>}
      <div className='grid grid-cols-4 gap-7'>
        {cycles?.map((cycle,index)=><CardWithButtons addPreinscriptionButton={user?.role==="admin"?()=>{}:addPreinscriptionButton} key={index} user={user} cycle={cycle}/>)}
      </div>
      <Modal
    show={addCycle}
    size="md"
    popup={true}
    onClose={()=>setaddCycle(false)}
  >
    <Modal.Header />
    <Modal.Body>
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h3>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="cycleName"
              value="Nom de cycle"
            />
          </div>
          <TextInput
            id="cycleName"
            placeholder="Nom de cycle"
            required={true}
            onChange={(e)=>setnewCycle({...newCycle,name:e.target.value})}
            value={newCycle.name}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="cycleDate"
              value="Date debut de cycle"
            />
          </div>
          <TextInput
            id="cycleDate"
            type="date"
            required={true}
            onChange={(e)=>setnewCycle({...newCycle,date:e.target.value})}
            value={newCycle.date}

          />
        </div>
        <div className="w-full">
          <Button onClick={addCycleButton}>
            Ajouter cycle
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
    </div>
  )
}


const CardWithButtons = ({cycle, user, addPreinscriptionButton}) => {
  const navigate = useNavigate()
  const [isSubscribed, setIsSubscribed] = useState(false);
  useEffect(() => {
    cycle.Users.forEach(element => {
      setIsSubscribed(isSubscribed || element.id===user.id)
    });
  }, []);
  return (
    <div onClick={user?.role==="admin"?()=>navigate(`/Dashboard/oneCycle/${cycle.id}`):()=>{}} className="bg-white cursor-pointer hover:scale-105 duration-200 rounded-lg overflow-hidden shadow-md w-fit">
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-800">{cycle?.name}</h2>
        <p className="text-gray-600 mt-2">{cycle?.date}</p>
      </div>
      <div className="flex justify-end px-4 py-2 bg-gray-100">
        <button onClick={!isSubscribed?()=>addPreinscriptionButton(cycle?.id):()=>{}} className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          {user.role==="admin"?<p>See subscribers</p>:<p>{isSubscribed?"Already Subscribed":"Subscribe"}</p>}
        </button>
        {user.role==="admin"&&<button className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
          Delete
        </button>}
      </div>
    </div>
  );
};
