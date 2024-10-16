import React, { useState } from 'react'

function CreateArea(props){
    const [note, setNote] = useState({
        title : "",
        content : ""
    });

    function handleChangeTitle(event){
        const {name, value} = event.target;
        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(event){
        props.onAdd(note)
        setNote({
            title : "",
            content : ""
        });
        event.preventDefault();
    }

    return(
        <div className="flex justify-center items-center py-8">
            <form className="bg-white shadow-md rounded-lg p-6 max-w-md w-full" >
                <input 
                    name='title'
                    placeholder="Title" 
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={note.title}
                    onChange={handleChangeTitle}
                />
                <textarea 
                    name='content'
                    placeholder="Take a note..." 
                    rows="3"
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    value={note.content}
                    onChange={handleChangeTitle}
                />
                <button 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onClick={submitNote}
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default CreateArea;