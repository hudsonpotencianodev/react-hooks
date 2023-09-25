import { useContext } from "react";
import { MyContext } from "../context";

export default function ChildTwo() {
    const { userName } = useContext(MyContext);
    console.log("ChildTwo Render");
    
    return (
        <div className="card">
            <h3>{userName}</h3>
        </div>
    )
}