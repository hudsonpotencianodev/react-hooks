import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";

function UseEffectPage() {
    const [data, setData] = useState("");
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const refreshListRef = useRef<HTMLUListElement>(null);

    const addLi = (text: string) => {
        const li = document.createElement('li');
        li.innerText = text;
        refreshListRef.current?.appendChild(li);
    }

    // reactStrictMode = false
    // https://react.dev/reference/react/StrictMode
    // https://nextjs.org/docs/pages/api-reference/next-config-js/reactStrictMode
    useEffect(() => {
        addLi('empty effect');
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setData(response.data[0].body);
            });
    }, []);

    useEffect(() => {
        addLi('count effect');
    }, [count1, count2]);

    return (
        <div>
            <div className="card">
                <h3>count1: {count1}</h3>
                <h3>count2: {count2}</h3>
                <button
                    onClick={() => {
                        setCount1(count1 + 1);
                    }}
                >
                    Click Count 1
                </button>
                <button
                    onClick={() => {
                        setCount2(count2 + 1);
                    }}
                >
                    Click Count 2
                </button>
            </div>
            <div className="card">
                <h3>Empty Effect Data</h3>
                <h4>{data}</h4>
            </div>
            <div className="card">
                <h3>Refresh list</h3>
                <ul ref={refreshListRef}>
                </ul>
            </div>
            <div className="explanation">
                <h2>Explicação:</h2>
                <p>
                    O componente possui quatro estados locais: <code>data</code>, <code>count1</code>, <code>count2</code> e <code>refreshListRef</code>.
                </p>
                <p>
                    - <code>data</code> é um estado que guarda um texto vindo de uma requisição à API.
                    - <code>count1</code> e <code>count2</code> são estados que guardam contadores que podem ser incrementados por botões.
                    - <code>refreshListRef</code> é uma referência associada a uma lista não ordenada do DOM.
                </p>
                <p>
                    O componente possui dois effects:
                </p>
                <ol>
                    <li>
                        <code>useEffect</code> vazio, que adiciona um item na lista <strong>Empty Effect Data</strong> e faz uma requisição à API para obter um texto e atualizar o estado <code>data</code>.
                    </li>
                    <li>
                        <code>useEffect</code> que depende dos estados <code>count1</code> e <code>count2</code>, adicionando um item na lista <strong>count effect</strong> sempre que algum dos dois é atualizado.
                    </li>
                </ol>
                <h4>Objetivo:</h4>
                <p>
                    Este exemplo demostra o uso de <code>useEffect</code> para buscar dados de uma API apenas na primeira inicialização
                    e também um exemplo de useEffect com dependencias.
                </p>
            </div>

        </div>
    );
}

export default UseEffectPage;
