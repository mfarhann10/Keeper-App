import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '../public/css/styles.css'
import Heading from './components/Heading.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import notes from '../note.js';

function App() {
  return (
    <div>
      <Heading/>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10 text-center space-y-6 pb-20 mb-20">
        {notes.map(note => (
          <Card
            key = {note.key}
            title = {note.title}
            content = {note.content}
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

