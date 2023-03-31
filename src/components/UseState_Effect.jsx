import React from 'react';
import { useState } from 'react';

export default function UseState_Effect() {
    const [count, setCount] = useState(0);
    const [list, setList] = useState([3, 6, 8, 1]);
    const handleRandom = () => {
        setList([...list, Math.floor(Math.random() * 10)])
    }
    return (
        <div>
            <h2>React Hook - useState</h2>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>Up</button>
            <button onClick={() => setCount(count - 1)}>DOWN</button>
            <p>Array:{list.toString()}</p>
            <button onClick={handleRandom}>Random</button>
        </div>
    )
}
