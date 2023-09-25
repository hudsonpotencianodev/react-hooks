import { useLayoutEffect, useEffect, useRef } from "react";

/** @deprecated https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85 */
function UseLayoutEffectPage() {
    const h3Ref = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        if (h3Ref.current) {
            h3Ref.current.innerText = "useLayoutEffect";
        }
    }, []);

    useEffect(() => {
        if (h3Ref.current) {
            h3Ref.current.innerText = "useEffect";
        }
    }, []);

    return (
        <div>

            <div className="card">
                <h3 ref={h3Ref}></h3>
            </div>
            <div className="explanation">
                <h2>Explicação:</h2>
                <p>
                    O componente possui um estado local <code>h3Ref</code> associado a um elemento <code>&lt;h3&gt;</code> do DOM.
                </p>
                <p>
                    - <code>useLayoutEffect</code> é utilizado para realizar operações de layout de forma síncrona após as mudanças no DOM. Quando o componente é montado, verificamos se <code>h3Ref.current</code> está definido e, se sim, alteramos o texto do elemento para <strong>useLayoutEffect</strong>.
                </p>
                <p>
                    - <code>useEffect</code> é utilizado para realizar operações de forma assíncrona após as mudanças no DOM. Neste caso, verificamos se <code>h3Ref.current</code> está definido e, se sim, alteramos o texto do elemento para <strong>useEffect</strong>.
                </p>
                <p>
                    A renderização exibe um card com um elemento <code>&lt;h3&gt;</code> associado à referência <code>h3Ref</code>.
                </p>
                <h4>Objetivo:</h4>
                <p>
                    Demonstrar a diferença entre <code>useLayoutEffect</code> e <code>useEffect</code> e como eles afetam a renderização e manipulação do DOM.
                </p>
            </div>
        </div>
    );
}

export default UseLayoutEffectPage;
