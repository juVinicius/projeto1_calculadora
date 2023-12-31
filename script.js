// Criando a classe da calculadora
class Calculator{
    constructor(){
        // Aqui é a propriedade que receberá os valores digitados
        this.displayValue = " ";
    }

    // Este método adiciona os valores a propriedade displayValue permitindo que o usuário veja os caracteres/valores na tela
    appendToDisplay(value) {
        this.displayValue += value;
        // Chamamos o método updateDisplay dentro do método appendToDisplay para que quando o usuário digitar alguma tecla da calculadora o valor que foi armazenado na propriedade displayValue seja exibida na tela
        this.updateDisplay();
    }

    // Este método atualiza o elemento input no HTML com o valor atual que está armazenado em displayValue
    updateDisplay(){
        document.getElementById("displayContent").value = this.displayValue;
    }

    // Este método limpa o valor que está armazenado em displayValue e chama a função updateDisplay para atualizar a tela com um valor vazio.
    clearDisplay(){
        this.displayValue = " ";
        this.updateDisplay();
    }
    // O método try catch executa o cálculo da expressão matemática contida 
    // em displayValue. Esse método utiliza a função eval () para avaliar 
    // a expressão e, se for bem sucedida, atualiza o displayValue com o
    // resultado e chama a função updateDisplay(). Se ocorrer um erro
    // durante a avaliação, ele atualiza o displayValue com a mensagem "Erro"
    // e chama a função updateDisplay().
    calculate(){
        try{
            //const result = eval(this.displayValue);
            const result = math.evaluate(this.displayValue);
            this.displayValue = result.toString();
            this.updateDisplay();
        } catch (error) {
            this.displayValue = "Erro"
            this.updateDisplay();
        }
    }
}

// Criando o objeto ou instanciando a classe
// Objeto chamado calc
const calc = new Calculator();