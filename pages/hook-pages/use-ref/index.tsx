import React, { useRef, useState } from "react";

function UseRefPage() {
    const [refValue, setRefValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const countRef = useRef(0);

    const onClick = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    const updateRef = () => {
        countRef.current++;
        alert(countRef.current);
        // não re-renderiza o dom
    }

    return (
        <div>
            <div className="card">
                Ref element:
                <input
                    type="text"
                    placeholder="use ref input"
                    ref={inputRef}
                    value={refValue}
                    onChange={(event: any) => setRefValue(event.target.value)} />
                <button onClick={onClick}>Clear Input</button>
            </div>
            <div className="card">
                Ref value:
                <span>{countRef.current}</span>
                <button onClick={updateRef}>Count++</button>
            </div>
            <div className="explanation">
                <h2>Explicação:</h2>
                <p>
                    O objetivo do <code>useRef</code> é criar uma referência associada a um elemento do DOM ou a um valor que persistirá entre as renderizações sem causar uma nova renderização.
                </p>
                <p>
                    No componente, declaramos três referências: <code>inputRef</code>, <code>countRef</code> e <code>refValue</code>.
                    - <code>inputRef</code> é associada a um elemento de input no DOM.
                    - <code>countRef</code> é uma referência usada para contar cliques em um botão.
                    - <code>refValue</code> é um estado local associado ao valor de um input.
                </p>
                <p>
                    Definimos duas funções: <code>onClick</code> para limpar o input e <code>updateRef</code> para incrementar <code>countRef</code>.
                </p>
                <p>
                    A renderização exibe um input e um botão para limpeza, e um contador com um botão para incrementar.
                </p>
                <h4>Objetivo:</h4>
                <p>
                    Este exemplo demonstra como usar <code>useRef</code> para criar referências e manter valores entre renderizações sem forçar uma nova renderização.
                </p>
            </div>
        </div>
    );
}

export default UseRefPage;
