import React, { useReducer } from "react";

type StateType = {
    name: string;
    age: number
}

type ReducerAction = {
    key: keyof StateType,
    value?: any;
}

const reducer = (state: StateType, action: ReducerAction) => {
    switch (action.key) {
        case 'age':
            return { ...state, age: state.age + 1 };
        case "name":
            return { ...state, name: action.value };
        default:
            return state;
    }
};

const UseReducerPage = () => {
    const [state, dispatch] = useReducer(reducer, { name: '', age: 1 });

    return (
        <div>
            <div className="card">
                <div className="card">
                    <h2>Name: {state.name}</h2>
                    <h2>Age: {state.age}</h2>
                </div>
                <button onClick={() => dispatch({ key: 'age' })}>
                    Age++
                </button>
                <input type="text" onChange={(event: any) => dispatch({ key: 'name', value: event.target.value })} />
            </div>
            <div className="explanation">
                <h2>Explicação:</h2>
                <p>
                    O hook <code>useReducer</code> é usado para gerenciar o estado de um componente de forma mais complexa, especialmente quando o estado depende do estado anterior ou quando há várias ações possíveis que podem afetar o estado.
                </p>
                <p>
                    Definimos um tipo <code>StateType</code> que descreve a forma do estado e um tipo <code>ReducerAction</code> que descreve a forma das ações que podem ser despachadas.
                </p>
                <p>
                    O <code>reducer</code> é uma função que recebe o estado atual e uma ação, e retorna o novo estado com base na ação. Neste caso, estamos incrementando a idade quando a ação é de tipo <strong>age</strong> e atualizando o nome quando a ação é de tipo <strong>name</strong>.
                </p>
                <p>
                    No componente, utilizamos <code>useReducer</code> para criar um estado <code>state</code> e uma função de despacho <code>dispatch</code> que podemos usar para despachar ações para o <code>reducer</code>.
                </p>
                <p>
                    A renderização exibe o nome e a idade do estado atual, um botão para incrementar a idade e um input para alterar o nome.
                </p>
                <h4>Objetivo:</h4>
                <p>
                    Demonstração do uso de <code>useReducer</code> para gerenciar o estado de forma mais complexa em um componente funcional.
                </p>
            </div>

        </div>
    );
};

export default UseReducerPage;
