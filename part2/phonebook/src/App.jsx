import { useState } from 'react'

const App = () => {

    // State

    const [persons, setPersons] = useState([
        { name: "Ghanshyam Sundaram" }
    ])
    const [newName, setNewName] = useState('')


    // Handlers

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        console.log("Add person:", newName)

        const personObject = {
            name: newName
        }

        setPersons(persons.concat(personObject))
        setNewName('')
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>

            <h2>Numbers</h2>
            {persons.map(person => <p key={person.name}>{person.name}</p>)}
        </div>
    )
}

export default App
