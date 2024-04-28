import { useState } from 'react'

import Note from './components/Note'

const App = (props) => {

    // State
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState("")

    // Handlers
    const addNote = (event) => {
        event.preventDefault()
        console.log("Save clicked: ", event.target)

        const noteObject = {
            id: notes.length + 1,
            content: newNote,
            important: Math.random() < 0.5
        }

        setNotes(notes.concat(noteObject))
        setNewNote("")
    }

    const handleNoteChange = (event) => {
        console.log("Note modified: ", event.target.value)
        setNewNote(event.target.value)
    }

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note =>
                    <Note key={note.id} text={note.content} />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default App
