import Child from "./child";
import ChildTwo from "./child-two";
import ContextProvider from "./context";

export default function UseContextPage() {
    return (
        <div>
            <ContextProvider>
                <Child></Child>
                <ChildTwo></ChildTwo>
            </ContextProvider>
            <div className="explanation">
                <h2>Explicação:</h2>
                <p>
                    O componente <code>UseContextPage</code> atua como o componente pai que envolve os componentes <code>Child</code> e <code>ChildTwo</code> em um provedor de contexto chamado <code>ContextProvider</code>.
                </p>
                <p>
                    O hook <code>useContext</code> é utilizado para consumir o valor de um contexto fornecido pelo componente pai. Ele retorna o valor atual do contexto.
                </p>
                <p>
                    O componente <code>ContextProvider</code> é responsável por criar e fornecer o contexto. Ele utiliza o hook <code>useState</code> para gerenciar o estado <code>userName</code> e a função <code>setUserName</code> para atualizá-lo.
                </p>
                <p>
                    Além disso, é utilizado o hook <code>useMemo</code> para memoizar o objeto de contexto e garantir que ele não seja recalculado em cada renderização, a menos que <code>userName</code> mude.
                </p>
                <p>
                    O contexto é composto por um objeto com a propriedade <code>userName</code> e a função <code>updateUser</code>. A função <code>updateUser</code> é usada para atualizar o nome do usuário.
                </p>
                <p>
                    Os componentes filhos <code>Child</code> e <code>ChildTwo</code> consomem o contexto usando <code>useContext</code> e podem acessar as propriedades do contexto, como <code>userName</code> e <code>updateUser</code>.
                </p>
                <h4>Objetivo:</h4>
                <p>
                    Demonstração do uso do contexto e do hook <code>useContext</code> para fornecer e consumir dados em componentes aninhados.
                </p>
            </div>
        </div>
    )
}