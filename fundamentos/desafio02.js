function exibirPares (n1, n2) {
    if (n1 > n2){
        [n1,n2] = [n2,n1];
    }
    for (var i = n1; i <= n2; i++){
        if ( i !== 0 && i % 2 === 0 ){
            console.log(i);
        }
        else if ( i === 0 && n2 === 0 || i === 0 && n2 === 1 ){
            console.log('Não há valores pares neste intervalo');
        };
    };
   
};

exibirPares(36, 6);