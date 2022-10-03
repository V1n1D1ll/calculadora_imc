const calcular = document.getElementById('BUTTON')

function imc() {
    const Name = document.getElementById('Name').value
    const Height = document.getElementById('Height').value
    const Weight = document.getElementById('Weight').value
    const res = document.getElementById('res')

    if (Weight !== '' && Height !== '' && Name !== '') {

        const valorimc = (Weight / (Height * Height)).toFixed(2)

        let classificacao = ""

        if (valorimc < 18.5) {
            classificacao = 'MENORES QUE 18.5 SIGNIFICAM MAGREZA'
        } else if (valorimc >= 18.5 && valorimc <= 24.9) {
            classificacao = 'ENTRE 18.5 E 24.9 SIGNIFICAM NORMALIDADE'
        } else if (valorimc >= 25 && valorimc <= 29.9) {
            classificacao = 'ENTRE 25.0 E 29.9 SIGNIFICAM SOBREPESO'
        } else if (valorimc >= 30 && valorimc <= 39.9) {
            classificacao = 'ENTRE 30.0 E 39.9 SIGNIFICAM OBESIDADE'
        } else {
            classificacao = 'MAIOR QUE 40.0 SIGNIFICAM OBESIDADE GRAVE'
        }
        res.textContent = `IMC = ${valorimc}, VALORES ${classificacao}`

    } else {
        res.textContent = 'PREENCHA TODOS OS CAMPOS!!!'
    }
}


calcular.addEventListener('click', imc)