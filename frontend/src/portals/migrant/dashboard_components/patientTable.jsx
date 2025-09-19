import React, { useState,useEffect } from 'react';
import PatientData_v2 from './patientData_v2';
import SearchBox from './searchBar';
import mockData from '../temp_data/mockPatientData.json'; // Import the mock data
const API = '';

export default function PatientTable({queryState, onRowClick, onNGOClick ,NGORequest}){



    const [patient,setPatient] = useState([]);

    const [searchState, setSearchState] = useState("");

    const tableHeaders = {
        'In Queue':["Patient Id","Patient Name","District","Registration Date","Current Status","Action"],
        'In Progress':["Patient Id","Patient Name","District","Assigned Date","Current Status","Action"],
        'Completed':["Patient Id","Patient Name","Assigned Date","Completed Date","Upload Documents","Assigned Category","NGO Help Request"]
    }

        const filterTable = (patient) =>{
        const Name = patient.Name.toLowerCase();
        const Id = patient.Id.toLowerCase();

        const searchquery = searchState.toLowerCase();

        return (Id.includes(searchquery) || Name.includes(searchquery)) && patient.CurrentStatus === queryState;
    }

    const headers = tableHeaders[queryState];

    // const fetchData = async (url) => {
    //     try{
    //             const res = await fetch(url);
    //             const data = await res.json();
    //             if (data.length > 0){
    //                 setPatient(data);
    //             }
    //     }catch (e){
    //         console.error(e);
    //     }
    // }

    useEffect ( () => {
        // fetchData(API);
        // For now, we will use the local mock data
        setPatient(mockData);
    },[])

    return <>
    <SearchBox query={searchState} setQuery={setSearchState}/>
    <table className="rounded-lg p-6 w-full border-separate border-spacing-y-2 ">
        <thead className="">
            <tr>
                {headers.map((title) => {return<th key={title} className="px-4 py-2">{title}</th>})}
            </tr>
        </thead>
        <tbody>
            <PatientData_v2 patient={patient.filter(filterTable)} tab={queryState} clickable={onRowClick} onNGOClick={onNGOClick} NGORequest={NGORequest}/>
        </tbody>
    </table>
    
    </>
}