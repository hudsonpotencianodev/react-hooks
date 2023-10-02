import { Action } from "@/store/reducers/counter/index.types";

const increment = (newValue: number): Action => ({
    type: 'INCREMENT',
    value: newValue
});

const decrement = (newValue: number): Action => ({
    type: 'DECREMENT',
    value: newValue
});

export default { increment, decrement } 