import { useState } from 'react'

const Display = ({count}) => <p>{count}</p>

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const App = () => {
    const [count, setCount] = useState(0)
    const setZero = () => setCount(0)
    const plusOne = () => setCount(count + 1)
    const minusOne = () => setCount(count - 1)

    return (
        <>
            <Display count={count} />
            <Button
                text='Minus'
                onClick={minusOne}
            />
            <Button
                text='Reset'
                onClick={setZero}
            />
            <Button
                text='Plus'
                onClick={plusOne}
            />
        </>
    )
}

export default App
