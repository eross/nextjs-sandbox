import { useState } from 'react';

function Header({ title }) {
    return <h1>{title}</h1>;
}

export default function HomePage() {
    const names = ["Tom", "Dick", "Harry"];

    const [likes, setLikes] = useState(0);
    function handleClick() {
        setLikes(likes + 1);
    }

    return <div>
        <Header title="Develop. Preview. Ship"/>
        <ul>
            {names.map ((name) => (
                <li>{name}</li>
            ))}
        </ul>
        <button onClick={handleClick}>Like({likes})</button>
    </div>
}
