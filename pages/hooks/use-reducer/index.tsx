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
    );
};

export default UseReducerPage;
