# Hooks

Desde a versão 16.8 do React, a introdução dos Hooks trouxe uma nova abordagem à gestão de estado e efeitos nos componentes funcionais. Vamos aprender cada um dos Hooks fornecidos pelo React, incluindo os potentes Custom Hooks, que possibilitam a reutilização de lógica complexa em toda a aplicação.

### **useState** [▶️](https://hudsonpotencianodev.github.io/react-hooks/hook-pages/use-state)

**Descrição:** `useState` é um hook que permite adicionar estado a componentes funcionais no React. Ele retorna um par de valores: o estado atual e uma função que permite atualizá-lo.

**Funcionamento:** Ao chamar `useState` com um valor inicial, o React cria uma "caixa" onde esse estado será armazenado. A função de atualização pode ser chamada para modificar esse estado, e ao fazer isso, o componente será re-renderizado com o novo valor.

**Objetivo:** `useState` é usado para gerenciar estados locais em componentes funcionais. Ele é essencial para lidar com dados que podem mudar ao longo do tempo, como a entrada do usuário ou o estado de um componente.

### **useRef** [▶️](https://hudsonpotencianodev.github.io/react-hooks/hook-pages/use-ref)

**Descrição:** `useRef` cria uma referência mutável que pode ser utilizada para persistir valores entre re-renderizações sem causar a atualização do componente.

**Funcionamento:** `useRef` retorna um objeto com a propriedade `current`. Essa propriedade pode ser atribuída a elementos do DOM, ou a qualquer valor que você queira persistir entre re-renderizações.

**Objetivo:** `useRef` é usado para manter uma referência persistente a um elemento do DOM ou a um valor que não irá causar a re-renderização do componente quando for alterado.

### **useImperativeHandle** [▶️](https://hudsonpotencianodev.github.io/react-hooks/hook-pages/use-imperative)

**Descrição:** `useImperativeHandle` personaliza o valor que é exposto para um componente pai utilizando `forwardRef`.

**Funcionamento:** Ele aceita uma ref e uma função que retorna o valor que deve ser exposto. Isso é útil para ocultar ou modificar certas propriedades que são passadas via ref.

**Objetivo:** `useImperativeHandle` é usado para controlar quais valores são expostos ao componente pai quando ele utiliza `forwardRef`. Isso ajuda a criar interfaces mais limpas e específicas.

### **useEffect** [▶️](https://hudsonpotencianodev.github.io/react-hooks/hook-pages/use-effect)

**Descrição:** **`useEffect`** permite a execução de efeitos colaterais em componentes funcionais. Efeitos colaterais podem incluir ações como buscar dados de uma API, manipular o DOM ou subscrever eventos.

**Funcionamento:** **`useEffect`** é chamado após cada renderização do componente. Ele aceita uma função como argumento, a qual contém o código que irá realizar o efeito desejado. Pode também retornar uma função de limpeza, que é executada quando o componente é desmontado.

**Objetivo:** `useEffect` é usado para gerenciar efeitos colaterais em componentes funcionais. Isso é útil para integrar componentes com o ciclo de vida da aplicação, lidar com operações assíncronas e realizar limpezas quando o componente é desmontado.

### **useLayoutEffect** [▶️](https://hudsonpotencianodev.github.io/react-hooks/hook-pages/use-layout-effect)

**Descrição:** `useLayoutEffect` é similar ao `useEffect`, mas é sincronizado com o layout da página antes da pintura.

**Funcionamento:** Assim como o `useEffect`, aceita uma função como argumento. No entanto, é chamado após todas as mutações do DOM, mas antes da repintura.

**Objetivo:** É usado quando uma ação precisa ser realizada imediatamente após as mudanças no DOM, antes que o usuário veja a atualização visual.

### **useReducer** [▶️](https://hudsonpotencianodev.github.io/react-hooks/hook-pages/use-reducer)

**Descrição:** `useReducer` é um hook que gerencia o estado de um componente utilizando um redutor (reducer) e uma ação (action).

**Funcionamento:** Ele retorna o estado atual e uma função de despacho (dispatch) que pode ser utilizada para enviar ações ao redutor.

**Objetivo:** `useReducer` é usado para gerenciar estados complexos que envolvem múltiplas transições. É uma alternativa ao `useState` quando o estado é mais elaborado.

### **useContext** [▶️](https://hudsonpotencianodev.github.io/react-hooks/hook-pages/use-context)

**Descrição:** `useContext` permite a um componente funcional consumir um contexto criado com `React.createContext`.

**Funcionamento:** Ele aceita um objeto de contexto criado previamente e retorna o valor atual do contexto. Isso evita a necessidade de passar props através de múltiplos níveis de componentes.

**Objetivo:** `useContext` é usado para acessar dados globais em componentes funcionais sem a necessidade de passá-los manualmente através de props. É útil para situações em que vários componentes precisam compartilhar o mesmo estado ou configuração.

### **useMemo** [▶️](https://hudsonpotencianodev.github.io/react-hooks/hook-pages/use-memo)

**Descrição:** `useMemo` memoriza o resultado de uma função e o retorna quando as dependências específicas não mudam.

**Funcionamento:** Ele aceita uma função e um array de dependências. O resultado da função é memorizado e só recalculado se alguma das dependências mudar.

**Objetivo:** `useMemo` é usado para otimizar o desempenho ao evitar cálculos repetidos em componentes que dependem de dados computados.

### useCallback [▶️](https://hudsonpotencianodev.github.io/react-hooks/hook-pages/use-callback)

**Descrição:** `useCallback` memoriza uma versão memorizada de uma função que somente muda se as dependências passadas mudarem.

**Funcionamento:** Semelhante ao `useMemo`, ele aceita uma função e um array de dependências. Retorna a função memorizada.

**Objetivo:** `useCallback` é usado para otimizar a performance, especialmente quando passamos funções para componentes filho para garantir que eles não sejam recriados em cada renderização.

### **React.memo** [▶️](https://hudsonpotencianodev.github.io/react-hooks/hook-pages/react-memo)

Ao envolver componentes funcionais com `React.memo`, podemos evitar renderizações desnecessárias sempre que as propriedades não mudam. Isso resulta em um aumento significativo na performance, especialmente em componentes que não dependem de props mutáveis.

### **Custom Hooks** [▶️](https://hudsonpotencianodev.github.io/react-hooks/hook-pages/custom-hook)

**Descrição:** Um Custom Hook é uma função que encapsula a lógica de um ou mais hooks para serem reutilizados em diferentes componentes.

**Funcionamento:** Um Custom Hook é criado como qualquer outra função JavaScript, mas pode fazer uso de qualquer hook interno ou até mesmo de outros Custom Hooks.

**Objetivo:** Custom Hooks são utilizados para encapsular lógica comum ou complexa e promover a reutilização de código em diferentes componentes e aplicações.
