const prompt = require('prompt-sync')();

var numero = parseInt(prompt("Digite o cpf:"));

var algarismos = String(numero).length; //conta quantos algarismos tem 

if (algarismos === 11 ){  //verifica se tem somente 11 algarismos
    var digits = (""+numero).split("");
    
        var primeiroverificador = (digits[split=0]*10 + digits[split=1]*9 + digits[split=2]*8 + digits[split=3]*7 + digits[split=4]*6 + digits[split=5]*5 + digits[split=6]*4 + digits[split=7]*3 + digits[split=8]*2) 
    
            if(primeiroverificador%11<2){
                var primVerificador = 0
            }else{
                var primVerificador = 11-primeiroverificador%11
            }

                if(primVerificador == digits[split=9 ]){
           
                    var segundoverificador = (digits[split=0]*11 + digits[split=1]*10 + digits[split=2]*9 + digits[split=3]*8 + digits[split=4]*7 + digits[split=5]*6 + digits[split=6]*5 + digits[split=7]*4 + digits[split=8]*3 + digits[split=9]*2)
    
                        if(segundoverificador%11<2){
                            var segVerificador = 0
            
                        }else{
                            var segVerificador = 11-segundoverificador%11
            
                        }

                        if(segVerificador == digits[split=10 ]){
                            console.log('CPF valido')
                        }else{
                        console.log('CPF invalido! Tente novamente')
                        }

                }else{
                    console.log('CPF invalido! Tente novamente')
                }

}else{
    console.log("CPF invalido! Erro na quantidade de digitos")
}   