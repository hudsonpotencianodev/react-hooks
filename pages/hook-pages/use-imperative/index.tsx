import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";

type ChildRef = {
    triggerCounter: () => void
}

const Child = forwardRef<ChildRef>(function Child(props, ref) {
    const [count, setCount] = useState<number>(0);

    useImperativeHandle(ref, () => ({
        triggerCounter() {
            setCount(count + 1);
        },
    }));
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Child</button>
            <span>count: {count}</span>
        </>
    );
});

function UseImperativePage() {
    const childRef = useRef<ChildRef>(null);
    return (
        <div>

            <div className="card">
                <button
                    onClick={() => {
                        if (childRef.current) {
                            childRef.current.triggerCounter();
                        }
                    }}
                >
                    Parent
                </button>
                <Child ref={childRef} />
            </div>
            <div className="explanation">
                <h2>Explicação:</h2>
                <p>
                    O componente <code>Child</code> é criado com <code>forwardRef</code> para permitir que um ref seja passado para ele a partir do componente pai.
                </p>
                <p>
                    Dentro de <code>Child</code>, utilizamos <code>useState</code> para criar um estado local chamado <code>count</code>, que mantém o número de cliques no botão <strong>Child</strong>.
                </p>
                <p>
                    Em seguida, utilizamos <code>useImperativeHandle</code> para expor uma função chamada <code>triggerCounter</code> através do ref. Esta função incrementa o contador quando chamada.
                </p>
                <p>
                    O componente <code>UseImperativePage</code> cria uma referência chamada <code>childRef</code> usando <code>useRef</code>.
                </p>
                <p>
                    O componente renderiza um card com um botão <strong>Parent</strong> que, quando clicado, verifica se <code>childRef</code> está definido e, se sim, chama a função <code>triggerCounter</code> no componente filho <code>Child</code>.
                </p>
                <h4>Objetivo:</h4>
                <p>
                    Este exemplo demonstra como usar <code>forwardRef</code> para passar um ref de um componente pai para um componente filho, permitindo a interação entre eles através de uma função exposta pelo <code>useImperativeHandle</code>.
                </p>
            </div>

        </div>
    );
}

export default UseImperativePage;
