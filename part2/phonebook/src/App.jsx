import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {

    // State

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [notif, setNotif] = useState({
        isError: false,
        message: null
    })

    // Effects

    useEffect(() => {
        console.log("Using effect to GET data ...")
        personService
            .getAll()
            .then(initialPersons => {
                console.log("Initial persons:", initialPersons)
                setPersons(initialPersons)
            })
            .catch(error => {
                console.log("Failed to get initial notes:", error)
                showNotification(true, "Failed to get initial notes.")
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
        console.log("Add person:", newName, newNumber)

        const personObject = {
            name: newName,
            number: newNumber
        }

        const existingPerson = persons.find(person => person.name === newName)

        if (existingPerson === undefined) {
            personService
                .create(personObject)
                .then(returnedPerson => {
                    console.log("Created person:", returnedPerson)
                    setPersons(persons.concat(returnedPerson))
                    showNotification(false, `${returnedPerson.name} added`)
                })
                .catch(error => {
                    console.log("Failed to create new person:", error);
                    showNotification(true, `Failed to create new person ${personObject.name}`)
                })
        }
        else {
            if (existingPerson.number === newNumber) {
                window.alert(`${newName} is already added to the phonebook`)
            }
            else {
                if (!confirm(
                    `${newName} is already added to the phonebook. Update phone number?`
                )) return

                personService
                    .update(existingPerson.id, personObject)
                    .then(returnedPerson => {
                        console.log("Modified person:", returnedPerson)
                        setPersons(persons.map(p =>
                            p.id === returnedPerson.id ? returnedPerson : p
                        ))
                        showNotification(false, `${returnedPerson.name} modified`)
                    })
                    .catch(error => {
                        console.log(`Failed to update ${existingPerson.name}:`, error)
                        setPersons(persons.filter(p => p.id !== existingPerson.id))
                        showNotification(true, `Person ${existingPerson.name} has already been removed`)
                    })
            }
        }

        setNewName('')
        setNewNumber('')
    }

    const handleFilterChange = (event) => {
        const updatedFilter = event.target.value
        setFilter(updatedFilter)
    }

    const deletePersonOf = id => {
        console.log("Delete person with ID:", id)
        personService
            .remove(id)
            .then(returnedPerson => {
                console.log("Deleted person:", returnedPerson)
                setPersons(persons.filter(person => person.id !== id))
                showNotification(false, `${returnedPerson.name} deleted`)
            })
            .catch(error => {
                console.log(`Failed to delete ${id}:`, error)
                setPersons(persons.filter(person => person.id !== id))
                showNotification(false, `Person ${id} has already been deleted`)
            })
    }

    const personsToShow = filter === ''
        ? persons
        : persons.filter(person => {
            const lc_name = person.name.toLowerCase()
            const lc_filter = filter.toLowerCase()
            return lc_name.includes(lc_filter)
        })

    const showNotification = (isError, message) => {
        const updatedNotif = { isError, message }
        setNotif(updatedNotif)
        setTimeout(() => setNotif({
            isError: false,
            message: null
        }), 3000)
    }

    return (
        <div>
            <h1>Phonebook</h1>

            <Notification
                isError={notif.isError}
                message={notif.message}
            />

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
                deletePersonOf={deletePersonOf}
            />
        </div>
    )
}

export default App
