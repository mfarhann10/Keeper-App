import React from 'react'

function Note(props){
    return(
        <>
        <h1 className='text-xl font-bold'>{props.title}</h1>
        <p>props.content</p>
        </>
    )
}

export default Note;