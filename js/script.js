async function conselhosAleatorios() {
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    const json = await resposta.json()
    let conselho = json.slip.advice
    printarConselhosAleatorios(conselho)
}
function printarConselhosAleatorios(conselho) {
    document.querySelector('.conselhos').innerHTML = conselho
}
conselhosAleatorios()
document.querySelector('.botao').addEventListener('click', () => {
    conselhosAleatorios()
})


































































