import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";

function UseEffectPage() {
    const [data, setData] = useState("");
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const refreshListRef = useRef<HTMLUListElement>(null);

    const addLi = (text: string) => {
        const li = document.createElement('li');
        li.innerText = text;
        refreshListRef.current?.appendChild(li);
    }

    // reactStrictMode = false
    // https://react.dev/reference/react/StrictMode
    // https://nextjs.org/docs/pages/api-reference/next-config-js/reactStrictMode
    useEffect(() => {
        addLi('empty');
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email);
            });
    }, []);

    useEffect(() => {
        addLi('count');
    }, [count1, count2]);

    return (
        <div>
            <div className="card">
                <h3>count1: {count1}</h3>
                <h3>count2: {count2}</h3>
                <button
                    onClick={() => {
                        setCount1(count1 + 1);
                    }}
                >
                    Click Count 1
                </button>
                <button
                    onClick={() => {
                        setCount2(count2 + 1);
                    }}
                >
                    Click Count 2
                </button>
            </div>
            <div className="card">
                <h3>Empty Effect Data</h3>
                <h4>{data}</h4>
            </div>
            <div className="card">
                <h3>Refresh list</h3>
                <ul ref={refreshListRef}>
                </ul>
            </div>
        </div>
    );
}

export default UseEffectPage;
