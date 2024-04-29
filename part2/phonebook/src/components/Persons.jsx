const PersonLine = ({ name, number, deletePerson }) => {
    return (
        <p>
            {name}
            &ensp;
            {number}
            &ensp;
            <button onClick={deletePerson}>delete</button>
        </p>
    )
}

const Persons = ({ personsToShow, deletePersonOf }) => {
    return (
        <>
            {personsToShow.map(person =>
                <PersonLine
                    key={person.id}
                    name={person.name}
                    number={person.number}
                    deletePerson={() => {
                        if (confirm(`Delete ${person.name} ?`)) {
                            deletePersonOf(person.id)
                        }
                    }}
                />
            )}
        </>
    )
}

export default Persons
