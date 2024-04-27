const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    console.log(props);
    return (
        <>
            <Part partname={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part partname={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part partname={props.parts[2].name} exercises={props.parts[2].exercises} />
        </>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.partname} {props.exercises}
        </p>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.total}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total
                total={course.parts.reduce(
                    (ex_sum, part) => ex_sum + part.exercises,
                    0
                )}
            />
        </div>
    )
}

export default App
