import React from 'react';

const QueueData = ({data, onRowClick}) =>{
    return<> { data.map((curPatient)=>{
        const {Name,Id,QrSource,District,RegistrationDate,CurrentStatus,Action} = curPatient;
        return <tr key={Id} onClick={() =>onRowClick(curPatient)}>
            <td>{Id}</td>
            <td>{Name}</td>
            <td>{District}</td>
            <td>{RegistrationDate}</td>
            <td>{CurrentStatus}</td>
            <td>{Action}</td>
        </tr>
    })}
</>
}

const ProgressData = ({data, onRowClick}) =>{
    return<> { data.map((curPatient)=>{
        const {Name,Id,QrSource,District,RegistrationDate,CurrentStatus,Action} = curPatient;
        return <tr key={Id} onClick={() =>onRowClick(curPatient)}>
            <td>{Id}</td>
            <td>{Name}</td>
            <td>{District}</td>
            <td>{RegistrationDate}</td>
            <td>{CurrentStatus}</td>
            <td>{Action}</td>
        </tr>
    })
    }
</>
}

const CompletedData = ({data, onRowClick}) =>{
    return <>
    { data.map((curPatient)=>{
        const {Name,Id,QrSource,District,RegistrationDate,CurrentStatus,Action} = curPatient;
        return <tr key={Id} onClick={() =>onRowClick(curPatient)}>
            <td>{Id}</td>
            <td>{Name}</td>
            <td>{District}</td>
            <td>{RegistrationDate}</td>
            <td>{CurrentStatus}</td>
            <td>{Action}</td>
        </tr>
    })}
    </>
    
}

export default function PatientData({patient,tab, clickable}) {
    return<>
    {tab === "In Queue" ? <QueueData data={patient} onRowClick={clickable} />: tab === "In Progress" ? <ProgressData data={patient} onRowClick={clickable} /> :  <CompletedData data={patient} onRowClick={clickable} />}
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