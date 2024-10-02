function tabuada(){
    let numero = document.getElementById('iptNumberInicio').value;
    let resultado = document.getElementById('selTabuada');
    resultado.innerHTML = '';

    if (numero === ""){
        alert('Por favor digite um número!');
    } else {
        numero = Number(numero);

        for (var i = 0; i <= 10; i++){
            let num = numero * i;
            let option = document.createElement('option');
            option.text = `${numero} x ${i} = ${num}`;
            option.value = `tab${i}`;
            // resultado.add(option); //Para adicionar ao select utilizamos .add()
            resultado.appendChild(option);
        }
    }
}