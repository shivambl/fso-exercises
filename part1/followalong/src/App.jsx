import { useState } from 'react'

const Display = ({count}) => <p>{count}</p>

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const App = () => {
    const [lcount, setLcount] = useState(0)
    const [rcount, setRcount] = useState(0)

    const handleLeftClick = () => setLcount(lcount + 1)
    const handleRightClick = () => setRcount(rcount + 1)
    const handleReset = () => {
        setLcount(0)
        setRcount(0)
    }

    return (
        <>
            <Display count={lcount} />
            <Button
                text='Left button'
                onClick={handleLeftClick}
            />
            <Display count={rcount} />
            <Button
                text='Right button'
                onClick={handleRightClick}
            />
            <Button
                text='Reset All'
                onClick={handleReset}
            />
        </>
    )
}

export default App
