let multi = document.querySelector("multiplicar");
multiplicar.addEventListener("click", multiplicacao);
function multiplicacao() {
    let tn1 = document.querySelector("#txtn1");
    let n = Number(tn1.value);

    let resultado = document.querySelector("#resultado")

    for (let i = 1; i <= 10; i++) {
        resultado.innerText += `${n} Vezes ${i} = ${n * i} \n`
    }
    
    
}
