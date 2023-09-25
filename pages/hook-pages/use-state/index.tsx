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
        // setState não é instantâneo
        console.log('inputValue', inputValue);
    };

    const addUser = () => {
        setUsers([...users, { name: `user ${Math.random()}` }]);
    }

    return (
        <div>
            <div className="card">
                <h3>First</h3>
                <label htmlFor="use-state">Use state input:</label>
                <input id="use-state" placeholder="enter something..." value={inputValue} onChange={onChange} />
            </div>
            <div className="card">
                <h3>Secord</h3>
                <h3>Users:</h3>
                <button onClick={addUser}>Add user</button>
                <ul>
                    {users.map(u => <li key={u.name}>{u.name}</li>)}
                </ul>
            </div>
            <div className="explanation">
                <h2>Explicação:</h2>
                <p>
                    O objetivo do <code>useState</code> é adicionar o estado a um componente funcional. Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo.
                </p>
                <p>
                    O componente possui dois estados locais: <code>inputValue</code> e <code>users</code>. <code>inputValue</code> é inicializado com o valor <strong>Mentoria valtech</strong>, enquanto <code>users</code> é inicializado com um array vazio.
                </p>
                <p>
                    A função <code>onChange</code> é chamada sempre que o conteúdo do input é alterado. Ela atualiza o valor de <code>inputValue</code> e exibe o novo valor no console.
                </p>
                <p>
                    A função <code>addUser</code> adiciona um novo usuário ao array de <code>users</code> com um nome gerado aleatoriamente.
                </p>
                <h4>Objetivo:</h4>
                <p>
                    Este exemplo demonstra como controlar dois tipos de states usando useState, um  texto simpes e um array de objetos.
                </p>
            </div>

        </div>
    );
};

export default UseStatePage;
