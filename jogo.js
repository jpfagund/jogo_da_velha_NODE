const prompt = require('prompt-sync')();
let jogoBase = [[1,2,3],
                [4,5,6],
                [7,8,9]]
let jogada = 1
function verificar(){
    let velha = 0;
    if(jogoBase[0][0] == 'X' && jogoBase[0][1] == 'X' && jogoBase[0][2] == 'X'){
        console.table(jogoBase)
        console.log(`O time X ganhou!`)
    }else if(jogoBase[0][0] == 'O' && jogoBase[0][1] == 'O' && jogoBase[0][2] == 'O'){
        console.table(jogoBase)
        console.log(`O time O ganhou!`)
    }  
    else if(jogoBase[0][0] == 'X' && jogoBase[1][0] == 'X' && jogoBase[2][0] == 'X'){
        console.table(jogoBase)
        console.log('O time X ganhou!')
    }else if(jogoBase[0][0] == 'O' && jogoBase[1][0] == 'O' && jogoBase[2][0] == 'O'){
        console.table(jogoBase)
        console.log('O time O ganhou!')
    }
    else if(jogoBase[1][0] == 'X' && jogoBase[1][1] == 'X' && jogoBase[1][2] == 'X'){
        console.table(jogoBase)
        console.log('O time X ganhou!')
    }else if(jogoBase[1][0] == 'O' && jogoBase[1][1] == 'O' && jogoBase[1][2] == 'O'){
        console.table(jogoBase)
        console.log('O time O ganhou!')
    }
    else if(jogoBase[0][1] == 'X' && jogoBase[1][1] == 'X' && jogoBase[2][1] == 'X'){
        console.table(jogoBase)
        console.log('O time X ganhou!')
    }else if(jogoBase[0][1] == 'O' && jogoBase[1][1] == 'O' && jogoBase[2][1] == 'O'){
        console.table(jogoBase)
        console.log('O time O ganhou!')
    }
    else if(jogoBase[2][0] == 'X' && jogoBase[2][1] == 'X' && jogoBase[2][2] == 'X'){
        console.table(jogoBase)
        console.log('O time X ganhou!')
    }else if(jogoBase[2][0] == 'O' && jogoBase[2][1] == 'O' && jogoBase[2][2] == 'O'){
        console.table(jogoBase)
        console.log('O time O ganhou!')
    }
    else if(jogoBase[0][2] == 'X' && jogoBase[1][2] == 'X' && jogoBase[2][2] == 'X'){
        console.table(jogoBase)
        console.log('O time X ganhou!')
    }else if(jogoBase[0][2] == 'O' && jogoBase[1][2] == 'O' && jogoBase[2][2] == 'O'){
        console.table(jogoBase)
        console.log('O time O ganhou!')
    }
    else if(jogoBase[0][2] == 'X' && jogoBase[1][1] == 'X' && jogoBase[2][0] == 'X'){
        console.table(jogoBase)
        console.log('O time X ganhou!')
    }else if(jogoBase[0][2] == 'O' && jogoBase[1][1] == 'O' && jogoBase[2][0] == 'O'){
        console.table(jogoBase)
        console.log('O time O ganhou!')
    }
    else if(jogoBase[0][0] == 'X' && jogoBase[1][1] == 'X' && jogoBase[2][2]){
        console.table(jogoBase)
        console.log('O time X ganhou!')
    }else if(jogoBase[0][0] == 'O' && jogoBase[1][1] == 'O' && jogoBase[2][2] == 'O'){
        console.table(jogoBase)
        console.log('O time O ganhou!')
    }
    else{
        velha = 0
        for(let x = 1; x < 10; x++){
            
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(jogoBase[i][j] == x){
                        velha++
                    }
                }
            }

        }
        if(velha == 0){
            console.table(jogoBase)
            console.log('Deu velha!')
        }else{
            jogar()
        }
    }
}
function jogar(){
    console.table(jogoBase)
    let casaEscolhida = Number(prompt('Escolha uma casa para jogar:'))
    if(jogoBase.some(row => row.includes(casaEscolhida))){
        if(jogada % 2 == 0){
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(jogoBase[i][j] == casaEscolhida){
                        jogoBase[i][j] = 'X'
                        jogada++
                        verificar()
                    }
                }
            }
        }else if(jogada % 2 == 1){
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(jogoBase[i][j] == casaEscolhida){
                        jogoBase[i][j] = 'O'
                        jogada++
                        verificar()
                    }
                }
            }
        }
    }else{
        console.log('A casa que você escolheu não está disponivel, jogue novamente!')
        jogar()
    }
}
jogar()