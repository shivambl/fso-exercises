import { useState } from 'react'

const App = () => {

    // State

    const [persons, setPersons] = useState([
        {
            name: "Ghanshyam Sundaram",
            number: "9090909090"
        },
        {
            name: 'Adrian Newey',
            number: '0987654321'
        },
        {
            name: 'Toto Wolff',
            number: '420106070'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

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

    const handleFilterChange = (event) => {
        const updatedFilter = event.target.value
        setFilter(updatedFilter)
    }

    const personsToShow = filter === ''
        ? persons
        : persons.filter(person => {
            const lc_name = person.name.toLowerCase()
            const lc_filter = filter.toLowerCase()
            return lc_name.includes(lc_filter)
        })

    return (
        <div>
            <h1>Phonebook</h1>

            <h2>Add new</h2>
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

            <h2>Directory</h2>
            <div>Filter names: <input value={filter} onChange={handleFilterChange} /></div>
            {personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default App
