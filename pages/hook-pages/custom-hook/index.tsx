import usePosts from "@/hooks/use-posts";

function CustomHookPage() {
    const { data, isLoading } = usePosts();
    return <div>
        <div className="card">
            {isLoading && <h3>Loading...</h3>}
            <ul>
                {data?.map(d => <li key={d.body}>{d.body}</li>)}
            </ul>
        </div>
        <div className="explanation">
            <h2>Explicação:</h2>
            <p>
                Neste exemplo, utilizamos um <strong>hook customizado</strong> chamado <code>usePosts</code> em um componente funcional chamado <code>CustomHookPage</code>.
            </p>
            <p>
                O hook customizado <code>usePosts</code> encapsula a lógica para buscar posts e retorna um objeto contendo <code>data</code> e <code>isLoading</code>.
            </p>
            <p>
                - <code>data</code> armazena os dados obtidos da requisição à API.
            </p>
            <p>
                - <code>isLoading</code> indica se a requisição está em andamento.
            </p>
            <p>
                O componente <code>CustomHookPage</code> utiliza o hook customizado para obter os dados de posts. Ele exibe uma mensagem de <strong>Loading...</strong> enquanto os dados estão sendo carregados e uma lista de posts quando a requisição é concluída.
            </p>
            <h4>Objetivo:</h4>
            <p>
                Demonstração do uso de um hook customizado para encapsular a lógica de busca de dados em um componente funcional.
            </p>
        </div>

    </div>
}

export default CustomHookPage;