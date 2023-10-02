import { Provider } from "react-redux"
import { Store } from '@/store'
import Child from "./child"
import ChildTwo from "./childTwo"

export default function ReduxPage() {
    return <Provider store={Store}>
        <Child></Child>
        <ChildTwo></ChildTwo>
    </Provider>
}