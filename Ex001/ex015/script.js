function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fANo = document.getElementById('txtano');
    var res = document.getElementById('resultado');

    if (fANo.value.length == 0 || fANo.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fSex = document.getElementsByName('radsex'); // Obtendo os elementos por "name"
        var idade = ano - Number(fANo.value); // Corrigido cálculo de idade
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fSex[0].checked) {
            genero = 'Homem';
            if (idade>=0 && idade < 2){
                img.setAttribute('src', 'imagens/bebe_menino.jpg');
            } else if (idade < 10){
                img.setAttribute('src', 'imagens/menino.jpg');
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem_homem.jpg');
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/homem.jpg');
            } else {
                img.setAttribute('src', 'imagens/idoso.jpg');
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher';
            if (idade>=0 && idade < 2){
                img.setAttribute('src', 'imagens/bebe_menina.jpg');
            } else if (idade < 10){
                img.setAttribute('src', 'imagens/menina.jpg');
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem_mulher.jpg');
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/mulher.jpg');
            } else {
                img.setAttribute('src', 'imagens/idosa.jpg');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
