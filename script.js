function contar() {
    const inicio = document.querySelector('#txtinicio')
    const fim = document.querySelector('#txtfim')
    const passo = document.querySelector('#txtpasso')
    const res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert(`[ERRO] Verifique os dados e tente novamente!`);
    } else {
        res.innerHTML = 'Contando: <br>'
        let inicionumber = Number(inicio.value)
        let fimnumber = Number(fim.value)
        let passonumber = Number(passo.value)
        if (passonumber <= 0) {
            alert(`Passo inválido! Considerando passo 1.`);
            passonumber = 1; // Define passo como 1 se não for informado
        }
        if (inicionumber < fimnumber) {
            for (let c = inicionumber; c <= fimnumber; c += passonumber) {
            res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            for (let c = inicionumber; c >= fimnumber; c -= passonumber) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }   
        res.innerHTML += `\u{1F3C1}` // Emoji de bandeira de chegada
    }


}