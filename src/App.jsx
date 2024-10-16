import React, { StrictMode, useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../public/css/styles.css'
import Heading from './components/Heading.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import CreateArea from './components/CreateArea.jsx';

function App() {
  const [items, setItems] = useState([]);

  function addNote(newNotes){
    setItems(prevNotes =>{
      return[
        ...prevNotes,
        newNotes
      ]
    })
  };

  function deleteNote(id){
    setItems(prevNotes =>{
      return prevNotes.filter((items, index) =>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Heading/>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10 text-center space-y-6 pb-20 mb-20">
        <CreateArea
          onAdd = {addNote}
        />
        {items.map((note, index) => (
          <Card
            key = {index}
            id = {index}
            title = {note.title}
            content = {note.content}
            onDeleted = {deleteNote}
          />
        ))}
      </div>
      <Footer/>
    </div> 
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);

export default App

