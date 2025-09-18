import React from 'react';

export default function NGORequestCard() {
    return (
        <>
        <div>
            <h1> Request NGO Assisstance</h1>
            <h2>What kind of help is needed?</h2>
        </div>

        <div>
            <form>
                <input type="checkbox" >Financial Assistance</input>
                <input type="checkbox" >Scheme linkage</input>
                <input type="checkbox" >Medical Support</input>
                <input type="checkbox" >Awareness Support</input>

            </form>
        </div>
        </>
    )
}