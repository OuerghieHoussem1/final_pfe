import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { createInscriptionController, getCyclesByIdController } from '../controllers/cycle';
import { createFormationController, getFormationsByCycleIdController } from '../controllers/formations';
import { Button, Label, Modal, TextInput } from 'flowbite-react';

export default function OneCycle() {

    const {cycleId} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCyclesByIdController(cycleId,{wantPre:true}))
        dispatch(getFormationsByCycleIdController(cycleId))
    }, [cycleId]);

    
    const oneCycle = useSelector(state => state.oneCycleReducer)
    const formations = useSelector(state => state.formationsReducer)
    useEffect(() => {
      console.log(oneCycle)
    }, [oneCycle]);

    const [addFormation, setaddFormation] = useState(false);
  const [newFormation, setnewFormation] = useState({name:"", date:new Date(),  partOfId:cycleId});

  const addCycleButton = () => {
    dispatch(createFormationController(newFormation))
  }

  const createInscriptionButton = (userId) => {
    dispatch(createInscriptionController({userId,cycleId}))
  }





  return (
    <div className='flex flex-col px-4 py-2'>
      <div className='w-full flex justify-end'><p className='font-bold text-3xl'>{oneCycle?.name}</p></div>
      <div className='w-full flex gap-10'>
        <div className='grow'>
        <div className='flex justify-between'>
          <p>Liste de formations</p>
          <button onClick={()=>setaddFormation(true)} className='w-fit py-2 px-4 rounded-xl text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 cursor-pointer'>Add formation</button>
        </div>
          {formations.map((formation,index)=>
          <div key={index}>
            <button onClick={()=>navigate(`/Dashboard/oneFormation/${formation.id}`)} className='w-fit py-2 px-4 rounded-xl text-blue-600 hover:text-blue-700  hover:scale-105 cursor-pointer'>{formation?.name}</button>
          </div>
          )}
        </div>
        <div className='grow'>
          <p>Liste des pre inscriptions</p>
          <div>
            {oneCycle?.Users.map((user,index)=>
            <div key={index} className='flex justify-between items-center'>
              <p>{user.name}</p>
              <button onClick={()=>createInscriptionButton(user.id)} className='w-fit py-2 px-4 rounded-xl text-blue-600 hover:text-blue-700  hover:scale-105 cursor-pointer'>Confirmer inscription</button>
            </div>)}
          </div>
        </div>
      </div>
      <Modal
    show={addFormation}
    size="md"
    popup={true}
    onClose={()=>setaddFormation(false)}
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
              value="Nom de Formation"
            />
          </div>
          <TextInput
            id="cycleName"
            placeholder="Nom de Formation"
            required={true}
            onChange={(e)=>setnewFormation({...newFormation,name:e.target.value})}
            value={newFormation.name}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="cycleDate"
              value="Date debut de formation"
            />
          </div>
          <TextInput
            id="cycleDate"
            type="date"
            required={true}
            onChange={(e)=>setnewFormation({...newFormation,date:e.target.value})}
            value={newFormation.date}

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
