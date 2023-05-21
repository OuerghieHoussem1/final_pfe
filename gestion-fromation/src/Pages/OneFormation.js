import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFormationsByIdController } from '../controllers/formations';
import { getCyclesByIdController } from '../controllers/cycle';
import { createAttendanceController } from '../controllers/attendance';



export default function OneFormation() {
    const {formationId} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFormationsByIdController(formationId))
        /* dispatch(getCyclesByIdController(cycleId))
        dispatch(getFormationsByCycleIdController(cycleId)) */
    }, [formationId]);
    const oneCycle = useSelector(state => state.oneCycleReducer)
    const oneFormation = useSelector(state => state.oneFormationReducer)
    
    useEffect(() => {
      if(oneFormation){
        dispatch(getCyclesByIdController(oneFormation?.partOf?.id,{wantPre:false}))
      }
    }, [oneFormation]);

    const createAttendanceButton = (userId) => {
      dispatch(createAttendanceController({userId,workshopId:formationId,attendanceDate:new Date()}))
    }
    
  
    return (
    <div className='flex flex-col px-4 py-2'>
      <div className='flex justify-end'>
        <p className='font-bold text-xl'>{oneFormation?.name}</p>
      </div>
      <div>
        <p>Liste des utilisateurs </p>
        {oneCycle?.Users?.map((user,index)=>
          <div key={index} className='flex items-center gap-4'>
            <p>{user.name}</p>
            <button onClick={()=>createAttendanceButton(user.id)} className='w-fit py-2 px-4 rounded-xl text-blue-600 hover:text-blue-700  hover:scale-105 cursor-pointer'>Confirmer presence</button>
          </div>
        )}
      </div>
    </div>
  )
}
