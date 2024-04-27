const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = ({ parts }) => {
    console.log("Content parts:", parts)
    return (
        <>
            {parts.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
        </>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    )
}

const Total = ({ parts }) => {
    const totalExercises = () => {
        const total = parts.reduce((sum, part) => sum + part.exercises, 0)
        return total
    }

    return (
        <p><strong>Total of {totalExercises()} exercises</strong></p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: "Redux",
                exercises: 11,
                id: 4
            }
        ]
    }

    return (
        <Course course={course} />
    )
}

export default App
