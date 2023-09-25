import { useContext } from "react";
import { MyContext } from "../context";

export default function Child() {
    const { userName, updateUser } = useContext(MyContext);
    console.log("Child Render");
    return (
        <>
            <div className="card">
                <button onClick={() => updateUser("hudson" + Math.random())}>Update context</button>
            </div>
            <div className="card">
                <h3>{userName}</h3>
            </div>
        </>
    )
}