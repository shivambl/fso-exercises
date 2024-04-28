const PersonLine = ({ name, number }) => {
    return (
        <p>
            {name} {number}
        </p>
    )
}

const Persons = ({ personsToShow }) => {
    return (
        <>
            {personsToShow.map(person =>
                <PersonLine key={person.name} name={person.name} number={person.number} />
            )}
        </>
    )
}

export default Persons
