# Conversor de Temperatura (Celsius ↔ Fahrenheit)

Este projeto implementa um conversor de temperatura entre Celsius e Fahrenheit usando JavaScript. A conversão é realizada por meio de inputs de temperatura e um botão que ativa o cálculo, exibindo o resultado diretamente na interface.

## Funcionalidades

- **Conversão de Celsius para Fahrenheit**: Quando o usuário insere uma temperatura em Celsius, o programa calcula e exibe o valor correspondente em Fahrenheit.
- **Conversão de Fahrenheit para Celsius**: Quando o usuário insere uma temperatura em Fahrenheit, o programa calcula e exibe o valor correspondente em Celsius.
- **Sincronização dos Valores**: Se ambos os campos possuem valores, a conversão é realizada de acordo com o valor no input Celsius, mantendo a coerência entre os campos.
- **Validação de Entrada**: Exibe uma mensagem de erro se nenhum valor válido é inserido.

## Estrutura do Código

1. **DOM Elements**:
   - `celsiusInput`: Campo de entrada para temperatura em Celsius.
   - `fahrenheitInput`: Campo de entrada para temperatura em Fahrenheit.
   - `resultadoDiv`: Elemento para exibir o resultado da conversão.
   - `calculateButton`: Botão que ativa a conversão.

2. **Evento de Click**:
   - Ao clicar em `calculateButton`, é realizada uma verificação nas entradas:
     - **Celsius para Fahrenheit**: Se apenas o valor de Celsius é fornecido, converte para Fahrenheit.
     - **Fahrenheit para Celsius**: Se apenas o valor de Fahrenheit é fornecido, converte para Celsius.
     - **Sincronização**: Se ambos os campos possuem valores, a conversão é priorizada pelo campo Celsius, ajustando o valor no campo Fahrenheit.
   - Caso nenhum valor válido seja inserido, uma mensagem de erro é exibida.

## Fórmulas de Conversão

- **Celsius para Fahrenheit**: `(Celsius * 9/5) + 32`
- **Fahrenheit para Celsius**: `(Fahrenheit - 32) * 5/9`

## Exemplo de Uso

1. **Inserindo um valor em Celsius**: Digite um valor em Celsius e clique no botão "Calcular". O valor em Fahrenheit aparecerá no campo apropriado e no `resultadoDiv`.
2. **Inserindo um valor em Fahrenheit**: Digite um valor em Fahrenheit e clique em "Calcular". O valor correspondente em Celsius será exibido.


