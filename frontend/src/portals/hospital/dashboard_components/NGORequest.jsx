import React,{useState} from 'react';

export default function NGORequestCard({onClose,patient}) {

    const SupportTypes = ["Financial Aid","Scheme Linkage","Medical Support","Awareness Support"];

    const [formData,setFormData] = useState({
        "Financial Aid": false,
        "Scheme Linkage": false,
        "Medical Support": false,
        "Awareness Support": false
    })

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Submitted Form Data: ",formData);

    }

    const handleChange = (e) => {
        const {name,checked} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
}
    console.log(patient);
    return (
        <>
    <div className= "min-h-screen flex flex-col items-center justify-center text-center w-full">
        <div className="bg-[#0870CF] p-10 rounded-xl shadow-lg w-1/3">

        <div>
            <h1> Request NGO Assisstance</h1>
            <h2>What kind of help is needed?</h2>
        </div>

        <div>
            <form onSubmit={submitHandler}>
                <div className ="flex flex-col items-center">
                {SupportTypes.map((type) =>{
                    return <>
                    <div className="relative flex w-64 cursor-pointer items-center justify-center rounded-full p-3 ">
                        <input type="Checkbox" name={type} checked={formData[type]} onChange={handleChange}className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-7 h-5"/>
                        <label className="w-48 px-5 text-left" >{type}</label>
                    </div>
                </>})}
                </div>

                <div className="flex flex-row space-x-3 py-3 items-center justify-center">
                    <div className="border-2 rounded-3xl bg-white text-green-800 px-8 hover:shadow-lg hover-translate-y-1">
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                    <div className="border-2 rounded-3xl bg-green-700 text-white px-6 hover:shadow-lg hover-translate-y-1">
                        <button type="submit">Send Request</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
        </>
    )
}