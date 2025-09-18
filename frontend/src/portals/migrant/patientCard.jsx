import React from 'react';

export default function PatientCard({patient, onClose}){
    return <>
    <div className="patientCard">
        <button className="closeCard" onClick={onClose}>X</button>
        <h2>Patient Details</h2>
        <p>Patients Name: {patient.Name} </p>
        <p>Patient ID : {patient.ID}</p>
    </div>
    </>
}