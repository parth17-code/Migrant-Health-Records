import React,{useState} from 'react';
import PatientTable from './patientTable';
import PatientCard from './patientCard';
import NGORequestCard from './NGORequest';



function TabButton({activeTab,setActiveTab}) {

    const tabs = ['In Queue', 'In Progress', 'Completed'];

return <>
{tabs.map(tab => {
    return (<button key={tab} onClick={()=>setActiveTab(tab)} id={activeTab === tab ? "active" : "inactive"} className="px-4 py-2 text-md font-medium rounded-xl transition-colors duration-200 bg-blue-500 hover:bg-blue-600">{tab}</button>)
})}
</>
}


export default function Dashboard() {

    const [selectedPatient,setPatient] = useState(null);
    const [showNGORequest, setShowNGORequest] = useState(false);
    const [patientN,setPatientN] = useState(null);

    const handlePatientClick = (patient) => {
        setPatient(patient);
    }

    const handleClosePatientCard = () => {
        setPatient(null);
    }

    const handleNGORequestOpen = () => {
        setShowNGORequest(true);
    }

    const handleNGORequestClose = () => {
        setShowNGORequest(false);
    }

    const [queryState,setQueryState] = useState("In Queue");

    return(<>
<div className="min-h-screen flex flex-col justify-center items-center ">
     
    <div className="size-auto">
        <h1 className="text-2xl font-bold text-center mt-4 mb-4">Patient DashBoard</h1>

        <div className="rounded-xl shadow-lg p-6">
            <div className="tabSwitcher flex space-x-4 justify-center mb-4">
                <TabButton activeTab={queryState} setActiveTab={setQueryState}/>
            </div>
    
            <div className="Table rounded-lg">
                <PatientTable queryState={queryState} onRowClick={handlePatientClick} patientSelect={setPatient} NGORequest={setPatientN} onNGOClick = {handleNGORequestOpen}/>
            </div>
        </div>
    </div>

</div>
 { selectedPatient && ( <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
             <PatientCard patient={selectedPatient} onClose={handleClosePatientCard} />
        </div>)}
 { showNGORequest && ( <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
        <NGORequestCard patient={patientN} onClose={handleNGORequestClose} />
    </div>)}</>
)}
