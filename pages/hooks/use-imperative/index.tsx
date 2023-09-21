import React, { useRef } from "react";
import Child, { ChildRef } from "./child";

function UseImperativePage() {
    const childRef = useRef<ChildRef>(null);
    return (
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
    );
}

export default UseImperativePage;
