import React, { useState } from "react";

function Counter({ initialCount = 0 }) {
    const [count, setCount] = useState(initialCount);
    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export default function MyDemo() {
    return (
        <>
            <h1>Counter</h1>
            <Counter initialCount={5} />
        </>
    )
}

