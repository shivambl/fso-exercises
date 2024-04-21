const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    console.log(props);
    return (
        <>
            <Part partname={props.cinfo.part1} exercises={props.cinfo.exercises1} />
            <Part partname={props.cinfo.part2} exercises={props.cinfo.exercises2} />
            <Part partname={props.cinfo.part3} exercises={props.cinfo.exercises3} />
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
    const course = 'Half Stack application development'

    const cinfo = {
        part1: 'Fundamentals of React',
        exercises1: 10,
        part2: 'Using props to pass data',
        exercises2: 7,
        part3: 'State of a component',
        exercises3: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content cinfo={cinfo} />
            <Total total={cinfo.exercises1 + cinfo.exercises2 + cinfo.exercises3} />
        </div>
    )
}

export default App
