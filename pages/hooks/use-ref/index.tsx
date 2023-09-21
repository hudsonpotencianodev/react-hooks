import React, { useRef, useState } from "react";

function RefTutorial() {
    const [refValue, setRefValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const countRef = useRef(0);

    const onClick = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    const updateRef = () => {
        countRef.current++;
        alert(countRef.current);
    }

    return (
        <div>
            <div className="card">
                Ref element:
                <input
                    type="text"
                    placeholder="use ref input"
                    ref={inputRef}
                    value={refValue}
                    onChange={(event: any) => setRefValue(event.target.value)} />
                <button onClick={onClick}>Clear Input</button>
            </div>
            <div className="card">
                Ref value:
                <span>{countRef.current}</span>
                <button onClick={updateRef}>Count++</button>
            </div>
        </div>
    );
}

export default RefTutorial;
