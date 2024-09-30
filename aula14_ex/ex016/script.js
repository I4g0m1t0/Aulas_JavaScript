function contar() {
    var inicio = Number(document.getElementById('iptNumberInicio').value);
    var fim = Number(document.getElementById('iptNumberFim').value);
    var passo = Number(document.getElementById('iptNumberPasso').value);
    var res = document.getElementById('resultado');

    if ((fim < inicio) || (passo <= 0)) {
        res.innerHTML = 'Impossível contar!';
    } else if (inicio < fim) {
        res.innerHTML = ''; // Limpar o conteúdo antes de começar a contagem
        for (var i = inicio; i <= fim; i += passo) {
            res.innerHTML += `${i} -> `;
        }
        res.innerHTML += 'Fim!';
    }
}
