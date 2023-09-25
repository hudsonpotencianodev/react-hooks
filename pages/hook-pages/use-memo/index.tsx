import axios from "axios";
import React from "react";
import { useEffect, useState, useMemo } from "react";

export default function UseMemoPage() {
    console.log("re-render");
    const [renderCount, setRenderCount] = useState(0);
    const [data, setData] = useState<any[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number>(1);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setData(response.data);
            });
    }, []);

    const filtredPosts = useMemo(() => {
        console.log("useMemo filter");
        return data.filter(d => d.userId === selectedUserId)
    }, [data, selectedUserId])

    return (
        <div>
            <div className="card">
                <div className="card">
                    <ul>
                        {filtredPosts.map(f => <li key={f.id}>{f.body}</li>)}
                    </ul>
                </div>
                <div className="card">
                    <button onClick={() => setRenderCount(renderCount + 1)}>Re-render</button>
                    <button onClick={() => setSelectedUserId(1)}>User 1</button>
                    <button onClick={() => setSelectedUserId(2)}>User 2</button>
                </div>
            </div>
            <div className="explanation">
                <h2>Explicação:</h2>
                <p>
                    O componente possui três estados locais: <code>renderCount</code>, <code>data</code> e <code>selectedUserId</code>.
                </p>
                <p>
                    - <code>renderCount</code> guarda a contagem de renders do componente.
                    - <code>data</code> armazena os dados obtidos de uma requisição à API.
                    - <code>selectedUserId</code> guarda o ID do usuário selecionado.
                </p>
                <p>
                    Utilizamos <code>useEffect</code> para fazer uma requisição à API ao montar o componente e atualizar o estado <code>data</code>.
                </p>
                <p>
                    O hook <code>useMemo</code> é usado para memoizar um valor computado. No caso, utilizamos para filtrar os posts baseados no <code>selectedUserId</code>. Ele recalcula o valor quando <code>data</code> ou <code>selectedUserId</code> mudam.
                </p>
                <h4>Objetivo:</h4>
                <p>
                    Demonstração do uso do hook <code>useMemo</code> para memoizar um valor computado em um componente funcional.
                </p>
            </div>
        </div>
    );
}