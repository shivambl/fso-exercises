import { useState } from 'react'

const App = () => {

    // State

    const [persons, setPersons] = useState([
        {
            name: "Ghanshyam Sundaram",
            number: "9090909090"
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    // Handlers

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        console.log("Add person:", newName)

        const isPersonAlreadyPresent = persons.find(person => person.name === newName)

        if (isPersonAlreadyPresent === undefined) {
            const personObject = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(personObject))
        }
        else {
            window.alert(`${newName} is already added to the phonebook`)
        }

        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>

            <h2>Numbers</h2>
            {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default App
