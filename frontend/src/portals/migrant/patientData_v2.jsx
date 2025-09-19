import React,{useState} from 'react';

const PatientRow =({curPatient,onRowClick,curTab, onNGOClick, NGORequest}) =>{
      const {Id,Name,District,RegistrationDate,AssignedDate,CompletedDate,CurrentStatus,Action,AssignedCategory,NGOHelpRequest} = curPatient;

            const [Category,setCategory] = useState(AssignedCategory);

      return <tr key={Id} onClick={() => onRowClick(curPatient)} className="rounded-lg hover:shadow-lg hover:bg-blue-800 ">

                  <td>{Id}</td>
                  <td>{Name}</td>

                  {curTab !== "Completed" && (<td>{District}</td>)}
                  {curTab === "In Queue" && (<td>{RegistrationDate}</td>)}
                  {curTab !== "In Queue" && (<td>{AssignedDate}</td>)}
                  {curTab === "Completed" && (<td>{CompletedDate}</td>)}
                  {curTab !== "Completed" && (<td>{CurrentStatus}</td>)}
                  <td onClick ={(e)=>{e.stopPropagation();}}><button className="rounded-3xl hover:bg-blue-400 hover:shadow-lg bg-white text-blue-600 px-8">{Action}</button></td>
                  {curTab === "Completed" && (<td onClick ={(e)=>{e.stopPropagation();}}><select value={Category} onChange={(e)=>{setCategory(e.target.value)}} className="border-0 cursor-pointer rounded-full drop-shadow-md  w-72 duration-300 hover:bg-sky-400 focus:bg-amber-300 text-center">
                    <option value="Critical">🔴Critical</option>
                    <option value="At Risk">🟠At Risk</option>
                    <option value="Follow-Up">🟡Follow-Up</option>
                    <option value="Minor Issue">🔵Minor Issue</option>
                    <option value="Healthy">🟢Healthy</option>
                    </select></td>)}
                  {curTab === "Completed" && (<td onClick ={(e)=>{e.stopPropagation();}}><button onClick={()=>{onNGOClick();NGORequest(curPatient)}} className="rounded-3xl hover:bg-blue-400 hover:shadow-lg bg-green-500 text-white px-8">Request NGO Help</button></td>)}
</tr>
}

export default function PatientData({patient,tab, clickable, onNGOClick, NGORequest}) {
    return<>
    {patient.map((curPatient) => {return <PatientRow key={curPatient.Id} curPatient ={curPatient} onRowClick={clickable} curTab={tab} onNGOClick={onNGOClick} NGORequest={NGORequest}/>} )}
   </>
}


/*patient.map((curPatient) => {
        const {Name,Id,QrSource,District,RegistrationDate,CurrentStatus,Action} = curPatient;
        return <tr key={Id}>
            <td>{Id}</td>
            <td>{QrSource}</td>
            <td>{Name}</td>
            <td>{District}</td>
            <td>{RegistrationDate}</td>
            <td>{CurrentStatus}</td>
            <td>{Action}</td>
        </tr>
    })*/