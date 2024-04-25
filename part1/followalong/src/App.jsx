import { useState } from 'react'

const Display = ({text}) => <p>{text}</p>

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const History = ({ allClicks }) => {
    if (allClicks.length === 0) {
        return <Display text="Use the app by clicking buttons." />
    }

    return <Display text={"Click history = " + allClicks.join(', ')} />

}

const App = () => {
    const [lcount, setLcount] = useState(0)
    const [rcount, setRcount] = useState(0)
    const [total, setTotal] = useState(0)
    const [allClicks, setAllClicks] = useState([])

    const handleLeftClick = () => {
        setAllClicks(allClicks.concat('L'))
        setLcount(lcount + 1)
        setTotal(total + 1)
    }
    const handleRightClick = () => {
        setAllClicks(allClicks.concat('R'))
        setRcount(rcount + 1)
        setTotal(total + 1)
    }
    const handleReset = () => {
        setAllClicks([])
        setLcount(0)
        setRcount(0)
        setTotal(0)
    }

    return (
        <>
            <Display text={lcount} />
            <Button
                text='Left button'
                onClick={handleLeftClick}
            />
            <Display text={rcount} />
            <Button
                text='Right button'
                onClick={handleRightClick}
            />
            <Display text={"Total = " + total} />
            <History allClicks={allClicks} />
            <Button
                text='Reset All'
                onClick={handleReset}
            />
        </>
    )
}

export default App
