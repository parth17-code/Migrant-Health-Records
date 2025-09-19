import React,{useState} from 'react';
import PatientTable from './patientTable';



function TabButton({activeTab,setActiveTab}) {

    const tabs = ['In Queue', 'In Progress', 'Completed'];

return <>
{tabs.map(tab => {
    return (<button key={tab} onClick={()=>setActiveTab(tab)} id={activeTab === tab ? "active" : "inactive"} className="tabButton">{tab}</button>)
})}
</>
}


export default function Dashboard() {

    const [selectedPatient,setPatient] = useState(null);

    const handlePatientClick = (patient) => {
        setPatient(patient);
    }

    const handleClosePatientCard = () => {
        setPatient(null);
    }

    const [queryState,setQueryState] = useState("In Queue");

    return(<>

    <div className="tabSwitcher">
        <TabButton activeTab={queryState} setActiveTab={setQueryState}/>
    </div>
    
    <div className="Table">
        <PatientTable state={queryState} onRowClick={handlePatientClick}/>
    </div>

    { selectedPatient && (<PatientCard patient={selectedPatient} onClose={handleClosePatientCard} />) }
</>
)}