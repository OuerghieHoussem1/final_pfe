import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signupController } from '../controllers/auth';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import {loadUsers} from "../controllers/auth"


export default function Users() {

    const dispatch = useDispatch()

  const users = useSelector(state => state.usersReducer)

  const user = JSON.parse(localStorage.getItem("profile"))

  const [addUser, setaddUser] = useState(false);

  const [newUser, setNewuser] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
    cin: "",
    directionEtService: "",
    entreprise: "",
  });

  const createAccount = () => {
    dispatch(signupController(newUser))
  }

  useEffect(() => {
    dispatch(loadUsers())
  }, []);

  return (
    <div className='flex flex-col px-5 py-4'>
      {user?.role==="admin"&&<div className='flex items-end justify-end w-full py-4'>
        <button onClick={()=>setaddUser(true)} className='w-fit py-2 px-4 rounded-xl text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 cursor-pointer'>Create new user</button>
      </div>}
      <div className='grid grid-cols-4 gap-7'>
        {users?.map((oneUser,index)=><CardWithButtons oneUser={oneUser}/>)}
      </div>
      <div /* ref={rootRef} */>
      <Modal
  show={addUser}
  size="md"
  popup={true}
  onClose={() => setaddUser(false)}
  root={document.body}
>
  <Modal.Header />
  <Modal.Body>
    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Sign in to our platform
      </h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="userName" value="Name" />
        </div>
        <TextInput
          id="userName"
          placeholder="Name"
          required={true}
          onChange={(e) => setNewuser({ ...newUser, name: e.target.value })}
          value={newUser.name}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="userEmail" value="Email" />
        </div>
        <TextInput
          id="userEmail"
          placeholder="Email"
          required={true}
          onChange={(e) => setNewuser({ ...newUser, email: e.target.value })}
          value={newUser.email}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="userPassword" value="Password" />
        </div>
        <TextInput
          id="userPassword"
          placeholder="Password"
          required={true}
          onChange={(e) => setNewuser({ ...newUser, password: e.target.value })}
          value={newUser.password}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="userCIN" value="CIN" />
        </div>
        <TextInput
          id="userCIN"
          placeholder="CIN"
          onChange={(e) => setNewuser({ ...newUser, cin: e.target.value })}
          value={newUser.cin}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="userDirectionEtService" value="Direction et Service" />
        </div>
        <TextInput
          id="userDirectionEtService"
          placeholder="Direction et Service"
          onChange={(e) => setNewuser({ ...newUser, directionEtService: e.target.value })}
          value={newUser.directionEtService}
        />
      </div>
      <div>
        <div className="mb-2 block">
            <Label htmlFor="userRole" value="Role" />
        </div>
        <select
            id="userRole"
            required={true}
            onChange={(e) => setNewuser({ ...newUser, role: e.target.value })}
            value={newUser.role}
        >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="formateur">Formateur</option>
        </select>
        </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="userEntreprise" value="Entreprise" />
        </div>
        <TextInput
          id="userEntreprise"
          placeholder="Entreprise"
          onChange={(e) => setNewuser({ ...newUser, entreprise: e.target.value })}
          value={newUser.entreprise}
        />
      </div>
      <div className="w-full">
        <Button onClick={createAccount}>Add User</Button>
      </div>
    </div>
  </Modal.Body>
</Modal>
      </div>
      
    </div>
  )
}

const CardWithButtons = ({oneUser}) => {
    return <div className="bg-white rounded-lg overflow-hidden shadow-md w-fit">
    <div className="p-4">
      <h2 className="text-lg font-medium text-gray-800">{oneUser?.name}</h2>
      <p className="text-gray-600 mt-2">Email: {oneUser?.email}</p>
      <p className="text-gray-600 mt-2">Role: {oneUser?.role}</p>
      <p className="text-gray-600 mt-2">CIN: {oneUser?.cin}</p>
      <p className="text-gray-600 mt-2">Direction et Service: {oneUser?.directionEtService}</p>
      <p className="text-gray-600 mt-2">Entreprise: {oneUser?.entreprise}</p>
    </div>
  </div>
  };
  
