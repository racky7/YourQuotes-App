import React, { useState } from 'react'
import './App.css'
import CardsList from './components/CardsList'
import { nanoid } from 'nanoid';

//API Details
// 20220912223415
// https://6315b6ef33e540a6d38296a9.mockapi.io/notepad-app

function App() {

  const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
  const randomColor2 = Math.floor(Math.random()*16777215).toString(16);

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      color1: randomColor1,
      color2: randomColor2,
      text: "this is the note pad app text",
      date: "15/06/2021",
    },
  ])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      color1: randomColor1,
      color2: randomColor2,
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <CardsList 
         notes={ notes } 
         handleAddNote={ addNote } 
         handleDeleteNote={ deleteNote }
         />
    </div>
  )
}

export default App