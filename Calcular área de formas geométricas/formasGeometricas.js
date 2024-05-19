function triangulo() {
    const baseTriangulo = parseFloat(prompt("Informe a base do triângulo:"))
    const alturaTriangulo = parseFloat(prompt('Informe a altura do triângulo:'))
    return baseTriangulo * alturaTriangulo / 2
}

function retangulo() {
    const base = parseFloat(prompt("Informe a base do retângulo:"))
    const altura = parseFloat(prompt('Informe a altura do retângulo:'))
    return base * altura
}

function quadrado() {
    const lado = parseFloat(prompt('Informa o lado do quadrado:'))
    return lado * lado
}

function trapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const baseMenor = parseFloat(prompt('Informe a base menor do trapézio:'))
    const alturaTrapezio = parseFloat(prompt('Informe a altura do trapézio:'))
    return (baseMaior + baseMenor) * alturaTrapezio / 2
}

function circulo() {
    const pi = 3.14
    const raio = parseFloat(prompt("Infome o raio do círculo:"))
    return pi * (raio * raio)
}

function exibirMenu() {
    return prompt(
        "Calculadora Geométrica:\n\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}

function executar() {
    let opcao = ""
}

do {
    opcao = exibirMenu()
    let resultado = ""

    switch (opcao) {
        case "1":
            resultado = triangulo()
            break
        case "2":
            resultado = retangulo()
            break
        case "3":
            resultado = quadrado()
            break
        case "4":
            resultado = trapezio()
            break
        case "5":
            resultado = circulo()
            break
        case "6":
            alert('Saindo...')
            break
        default:
            alert('Opção inválida!')
            break
    }

    if (resultado) {
        alert("Resultado: " + resultado)
    }

    executar()

} while (opcao != 6)

