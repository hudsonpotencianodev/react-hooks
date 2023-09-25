import { useCallback, useEffect, useState } from "react";
import Child from './child'

export default function UseCallbackPage() {
  const [state, setState] = useState(false);
  const [dep, setDep] = useState(false);
  console.log("Parent re-redered");

  const handler = useCallback(
    (event: any) => {
      console.log("memorized callback click", event?.currentTarget);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dep],
  );

  useEffect(() => {
    console.log("handler new instance");
  }, [handler]);

  return (
    <>
      <div className="card">
        <button onClick={() => setState(!state)}>Parent state</button>
        <button onClick={() => setDep(!dep)}>callback dep</button>
        <Child handler={handler} />
      </div>
      <div className="explanation">
        <h2>Explicação:</h2>
        <p>
          Neste exemplo, utilizamos o hook <code>useCallback</code> para memorizar uma função de callback e otimizar a performance de um componente.
        </p>
        <p>
          O componente possui dois estados locais: <code>state</code> e <code>dep</code>, que controlam o estado do componente.
        </p>
        <p>
          - <code>state</code> é um booleano que indica se o estado do componente está ativado ou desativado.
        </p>
        <p>
          - <code>dep</code> também é um booleano, usado para atualizar a dependência do <code>useCallback</code> e demonstrar como a função de callback é memorizada.
        </p>
        <p>
          O <code>useCallback</code> é utilizado para memorizar a função de callback. A função <code>handler</code> será memorizada e apenas criará uma nova instância quando a dependência <code>dep</code> mudar.
        </p>
        <p>
          O componente também utiliza o hook <code>useEffect</code> para observar quando uma nova instância da função <code>handler</code> é criada.
        </p>
        <h4>Objetivo:</h4>
        <p>
          Demonstração do uso do hook <code>useCallback</code> para memorizar uma função de callback e otimizar a performance de um componente funcional.
        </p>
      </div>
    </>
  );
}