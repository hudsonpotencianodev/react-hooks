import React, { forwardRef, useImperativeHandle, useState } from "react";

export type ChildRef = {
    triggerCounter: () => void
}

const Child = forwardRef<ChildRef>(function Child(props, ref) {
    const [count, setCount] = useState<number>(0);

    useImperativeHandle(ref, () => ({
        triggerCounter() {
            setCount(count + 1);
        },
    }));
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Child</button>
            <span>count: {count}</span>
        </>
    );
});

export default Child;