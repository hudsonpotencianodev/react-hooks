import { memo, useEffect } from "react";

function Child({ handler }: { handler: (event: any) => void }) {
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    console.log("Child re-redered");
  }, []);

  return (
    <ul>
      {items.map((item, index) => <li key={index}> <button onClick={handler}>{item}</button></li>)}
    </ul>
  );
}

export default memo(Child);