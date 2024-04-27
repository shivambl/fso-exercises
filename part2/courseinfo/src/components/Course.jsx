const Header = (props) => {
    return (
        <h2>{props.course}</h2>
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

export default Course
