import React, { useState,useEffect } from 'react';
import PatientData from './patientData';
import SearchBox from './searchBar';
const API = '';

export default function PatientTable({queryState, onRowClick}){

    const filterTable = (patient) =>{
        const Name = patient.Name.toLowerCase();
        const Id = patient.Id.toLowerCase();

        const searchquery = searchState.toLowerCase();

        return Id.includes(searchquery) || Name.includes(searchquery);
    }

    const [patient,setPatient] = useState([]);

    const [searchState, setSearchState] = useState("");

    const tableHeaders = {
        'In Queue':["Patient Id","Patient Name","District","Registration Date","Current Status","Action"],
        'In Progress':["Patient Id","Patient Name","District","Assigned Date","Current Status","Action"],
        'Completed':["Patient Id","Patient Name","Assigned Date","Completed Date","Upload Documents","Assigned Category","NGO Help Request"]
    }

    const headers = tableHeaders[queryState];

    const fetchData = async (url) => {
        try{
                const res = await fetch(url);
                const data = await res.json();
                if (data.length > 0){
                    setPatient(data);
                }
        }catch (e){
            console.error(e);
        }
    }

    useEffect ( () => {
        fetchData(API);
    },[])

    return <>
    <SearchBox query={searchState} setQuery={setSearchState}/>
    <table>
        <thead>
            <tr>
                {headers.map((title) => {return<th key={title}>{title}</th>})}
            </tr>
        </thead>
        <tbody>
            <PatientData patient={patient.filter(filterTable)} tab={queryState} clickable={onRowClick}/>
        </tbody>
    </table>
    
    </>
}