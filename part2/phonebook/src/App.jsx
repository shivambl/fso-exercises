import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {

    // State

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    // Effects

    useEffect(() => {
        console.log("Using effect to GET data ...")
        personService
            .getAll()
            .then(initialPersons => {
                console.log("Initial persons:", initialPersons)
                setPersons(initialPersons)
            })
    }, [])

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

            personService
                .create(personObject)
                .then(returnedPerson => {
                    console.log("Created person:", returnedPerson)
                    setPersons(persons.concat(returnedPerson))
                })
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

            <Filter
                filter={filter}
                handleFilterChange={handleFilterChange}
            />

            <h2>Add new</h2>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />

            <h2>Directory</h2>
            <Persons
                personsToShow={personsToShow}
            />
        </div>
    )
}

export default App
