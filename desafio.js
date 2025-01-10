function calcularMedia() {
    // Pegando os valores das notas
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)

    // Verificando se todas as notas foram preenchidas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, insira todas as notas corretamente!")
        return
    }

    // Calculando a média
    let media = (nota1 + nota2 + nota3) / 3

    // Exibindo o resultado
    let resultado = document.getElementById("resultado")
    
    if (media >= 7) {
        resultado.innerHTML = `Média: ${media.toFixed(2)} - Aluno aprovado!`
        resultado.style.color = "green"
    } else if (media === 6) {
        resultado.innerHTML = `Média: ${media.toFixed(2)} - Aluno em recuperação.`
        resultado.style.color = "orange"
    } else {
        resultado.innerHTML = `Média: ${media.toFixed(2)} - Aluno reprovado.`
        resultado.style.color = "red"
    }
}