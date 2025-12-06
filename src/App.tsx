import { useState } from 'react'
import './App.css'
import Note from './components/Note'
import type { NoteType } from './type'


function App() {
  const [notes, _setNotes] = useState<NoteType[]>([
    { id: 1, content: '1 Note', isStar: false },
    { id: 2, content: '2 Note', isStar: true },
    { id: 3, content: '3 Note', isStar: true },
    { id: 4, content: '4 Note', isStar: false },
    { id: 5, content: '5 Note', isStar: true },
    { id: 6, content: '6 Note', isStar: true },

  ])


  return (
    <>
      <Note notes={notes} />
    </>
  )
}

export default App
