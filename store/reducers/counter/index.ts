import { Action } from "./index.types";

export const counterReducer = (state: number = 0, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return action.value;
            //OU return state++;
        case 'DECREMENT':
            return action.value;
            //OU return state--;
        default:
            return state;
    }
};
