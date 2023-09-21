import React, { useState } from "react";

type User = {
    name: string;
}

const UseStatePage = () => {
    const [inputValue, setInputValue] = useState("Mentoria valtech");
    const [users, setUsers] = useState<User[]>([]);

    const onChange = (event: any) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        // inputValue abaixo não terá o novo valor
        console.log('inputValue', inputValue);
    };

    const addUser = () => {
        setUsers([...users, { name: `user ${Math.random()}` }]);
    }

    return (
        <div>
            <div className="card">
                <h3>First cenario</h3>
                <label htmlFor="use-state">Use state input:</label>
                <input id="use-state" placeholder="enter something..." value={inputValue} onChange={onChange} />
            </div>
            <div className="card">
                <h3>Secord cenario</h3>
                <h3>Users:</h3>
                <button onClick={addUser}>Add user</button>
                <ul>
                    {users.map(u => <li key={u.name}>{u.name}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default UseStatePage;
