import React, { useState } from "react";

function Child({ count }: { count: number }) {
    console.log("child re-render");
    return <h3>Child count: {count}</h3>
}

function ChildMemo({ count }: { count: number }) {
    console.log("child-memo re-render");
    return <h3>ChildMemo count: {count}</h3>
}

export default function ReactMemo() {
    console.log("parent re-render");
    const [count, setCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    return <div>
        <div className="card">
            <h3>Count: {count}</h3>
            <Child count={childCount} />
            <ChildMemo count={childCount}></ChildMemo>
            <button onClick={() => setCount(count + 1)}>Parent count++</button>
            <button onClick={() => setChildCount(count + 1)}>Child count++</button>
        </div>
        <div className="explanation">
            <h2>Explicação:</h2>
            <p>
                Neste exemplo, utilizamos o hook <code>React.memo</code> para otimizar a renderização de componentes funcionais chamados <code>Child</code> e <code>ChildMemo</code>.
            </p>
            <p>
                O componente <code>ReactMemo</code> possui dois estados locais: <code>count</code> e <code>childCount</code>. O primeiro é um contador para o componente pai, enquanto o segundo é um contador para os componentes filhos.
            </p>
            <p>
                - <code>Child</code> é um componente funcional simples que recebe um prop <code>count</code> e exibe o valor.
            </p>
            <p>
                - <code>ChildMemo</code> é um componente funcional que também recebe um prop <code>count</code>, mas é envolto pelo <code>React.memo</code>, o que faz com que o componente seja memorizado e apenas renderizado novamente se as props mudarem.
            </p>
            <p>
                Quando o componente pai é renderizado, ele exibe o valor de <code>count</code> e renderiza ambos os componentes filhos com seus respectivos contadores.
            </p>
            <p>
                A renderização também inclui dois botões: um para incrementar o contador do componente pai e outro para incrementar o contador dos componentes filhos.
            </p>
            <h4>Objetivo:</h4>
            <p>
                Demonstração do uso do <code>React.memo</code> para otimizar a renderização de componentes funcionais e evitar renderizações desnecessárias.
            </p>
        </div>
    </div>
}