import React, {useEffect, useState, useRef} from 'react'
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

  const [newCycle, setnewCycle] = useState({
    name: "",
    date: new Date(),
    creatorId: user.id,
    entreprise: "",
    numAction: "",
    creditImport: "",
    droitTirageIN: "",
    droitTirageCo: "",
    themeFormation: "",
    modeFormation: "",
    lieuFormation: "",
    gouvernorat: "",
    dateDebut: new Date(),
    dateFin: new Date(),
    heurDebut: "",
    heurFin: "",
    debutPause: "",
    finPause: "",
    numSalle: "",
  });

  const addCycleButton = () => {
    dispatch(createCyclesController(newCycle))
  }

  const addPreinscriptionButton = (cycleId) => {
    dispatch(createPreinscriptionController({userId:user?.id,cycleId}))
  }


  const rootRef = useRef<HTMLDivElement>(null);


  return (
    <div className='flex flex-col px-5 py-4'>
      {user?.role==="admin"&&<div className='flex items-end justify-end w-full py-4'>
        <button onClick={()=>setaddCycle(true)} className='w-fit py-2 px-4 rounded-xl text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 cursor-pointer'>Add cycle formation</button>
      </div>}
      <div className='grid grid-cols-4 gap-7'>
        {cycles?.map((cycle,index)=><CardWithButtons addPreinscriptionButton={user?.role==="admin"?()=>{}:addPreinscriptionButton} key={index} user={user} cycle={cycle}/>)}
      </div>
      <div /* ref={rootRef} */>
          <Modal
        show={addCycle}
        size="md"
        popup={true}
        onClose={()=>setaddCycle(false)}
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
            <Label htmlFor="cycleName" value="Nom de cycle" />
          </div>
          <TextInput
            id="cycleName"
            placeholder="Nom de cycle"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, name: e.target.value })}
            value={newCycle.name}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="cycleEntreprise" value="Entreprise" />
          </div>
          <TextInput
            id="cycleEntreprise"
            placeholder="Entreprise"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, entreprise: e.target.value })}
            value={newCycle.entreprise}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="cycleNumAction" value="Numéro de l'action" />
          </div>
          <TextInput
            id="cycleNumAction"
            placeholder="Numéro de l'action"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, numAction: parseInt(e.target.value) })}
            value={newCycle.numAction}
            type="number"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="cycleCreditImport" value="Crédit d'import" />
          </div>
          <TextInput
            id="cycleCreditImport"
            placeholder="Crédit d'import"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, creditImport: parseInt(e.target.value) })}
            value={newCycle.creditImport}
            type="number"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="cycleDroitTirageIN" value="Droit de tirage IN" />
          </div>
          <TextInput
            id="cycleDroitTirageIN"
            placeholder="Droit de tirage IN"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, droitTirageIN: parseInt(e.target.value) })}
            value={newCycle.droitTirageIN}
            type="number"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="cycleDroitTirageCo" value="Droit de tirage Co" />
          </div>
          <TextInput
            id="cycleDroitTirageCo"
            placeholder="Droit de tirage Co"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, droitTirageCo: parseInt(e.target.value) })}
            value={newCycle.droitTirageCo}
            type="number"
            />
            </div>
            <div>
            <div className="mb-2 block">
            <Label htmlFor="cycleThemeFormation" value="Thème de formation" />
            </div>
            <TextInput
            id="cycleThemeFormation"
            placeholder="Thème de formation"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, themeFormation: e.target.value })}
            value={newCycle.themeFormation}
            />
            </div>
            <div>
            <div className="mb-2 block">
            <Label htmlFor="cycleModeFormation" value="Mode de formation" />
            </div>
            <TextInput
            id="cycleModeFormation"
            placeholder="Mode de formation"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, modeFormation: e.target.value })}
            value={newCycle.modeFormation}
            />
            </div>
            <div>
            <div className="mb-2 block">
            <Label htmlFor="cycleLieuFormation" value="Lieu de formation" />
            </div>
            <TextInput
            id="cycleLieuFormation"
            placeholder="Lieu de formation"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, lieuFormation: e.target.value })}
            value={newCycle.lieuFormation}
            />
            </div>
            <div>
            <div className="mb-2 block">
            <Label htmlFor="cycleGouvernorat" value="Gouvernorat" />
            </div>
            <TextInput
            id="cycleGouvernorat"
            placeholder="Gouvernorat"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, gouvernorat: e.target.value })}
            value={newCycle.gouvernorat}
            />
            </div>
            <div>
            <div className="mb-2 block">
            <Label htmlFor="cycleDateDebut" value="Date de début" />
            </div>
            <TextInput
            id="cycleDateDebut"
            type="date"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, dateDebut: e.target.value })}
            value={newCycle.dateDebut}
            />
            </div>
            <div>
            <div className="mb-2 block">
            <Label htmlFor="cycleDateFin" value="Date de fin" />
            </div>
            <TextInput
            id="cycleDateFin"
            type="date"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, dateFin: e.target.value })}
            value={newCycle.dateFin}
            />
            </div>
            <div>
            <div className="mb-2 block">
            <Label htmlFor="cycleHeurDebut" value="Heure de début" />
            </div>
            <TextInput
            id="cycleHeurDebut"
            type="time"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, heurDebut: e.target.value })}
            value={newCycle.heurDebut}
            />
            </div>
            <div>
            <div className="mb-2 block">
            <Label htmlFor="cycleHeurFin" value="Heure de fin" />
            </div>
            <TextInput
            id="cycleHeurFin"
            type="time"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle,heurFin: e.target.value })}
            value={newCycle.heurFin}
            />
            </div>
            <div>
            <div className="mb-2 block">
            <Label htmlFor="cycleDebutPause" value="Début de la pause" />
            </div>
            <TextInput
            id="cycleDebutPause"
            type="time"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, debutPause: e.target.value })}
            value={newCycle.debutPause}
            />
            </div>
            <div>
            <div className="mb-2 block">
            <Label htmlFor="cycleFinPause" value="Fin de la pause" />
            </div>
            <TextInput
            id="cycleFinPause"
            type="time"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, finPause: e.target.value })}
            value={newCycle.finPause}
            />
            </div>
            <div>
            <div className="mb-2 block">
            <Label htmlFor="cycleNumSalle" value="Numéro de salle" />
            </div>
            <TextInput
            id="cycleNumSalle"
            placeholder="Numéro de salle"
            required={true}
            onChange={(e) => setnewCycle({ ...newCycle, numSalle: parseInt(e.target.value) })}
            value={newCycle.numSalle}
            type="number"
            />
            </div>
            <div className="w-full">
            <Button onClick={addCycleButton}>Ajouter cycle</Button>
            </div>
            
              </div>
            </Modal.Body>
      </Modal>
      </div>
      
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
