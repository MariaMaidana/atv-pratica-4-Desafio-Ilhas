/*Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
desejado pelo cliente, determine o número de cada uma das notas
necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00 */

let quant50 = 0;
let quant10 = 0;
let quant5 = 0;
let quant1 = 0;

let saque = prompt('Insira o valor que será sacado');

if(saque !== null) {
    saque = parseInt(saque.replace('.','').replace(',','.'));
}

if (!saque) {
    document.write('Valor inválido');
} else {
        while(saque >= 50) {  
            saque = saque - 50;
            quant50++
        }
        
        while(saque >= 10) {  
            saque = saque - 10;
            quant10++
        }

        while(saque >= 5) {  
            saque = saque - 5;
            quant5++
        }

        while(saque >= 1) {  
            saque = saque - 1;
            quant1++
        }
        
        document.write(`${quant50} notas de 50 <br>`);
        document.write(`${quant10} notas de 10 <br>`);
        document.write(`${quant5} notas de 5 <br>`);
        document.write(`${quant1} notas de 1 <br>`);

    }
    
