function calcular(moto, entrada) {
    const porcetagem = (moto, entrada) => {
        let porcetagemCalculo = (entrada/moto)*100
        let porcento = 0
        if ((porcetagemCalculo > 10) && (porcetagemCalculo < 30 )){
            porcento = 20
        }else if ((porcetagemCalculo >= 30) && (porcetagemCalculo < 50 )){
            porcento = 30
        }else if ((porcetagemCalculo >= 50) && (porcetagemCalculo < 100 )){
            porcento = 50
        }else {
            console.log('Entrada Invalida')
        }
        return porcento
    }
    const valorFin = (moto, entrada) => {
        let valorFinanciado = (moto - entrada) + 1500
        return valorFinanciado
    }
    const coeficiente = (porcetagem) => {
        let coeficiente = []
        switch (porcetagem) {
            case 20 :
                coeficiente = [0.09484 , 0.06604, 0.05177 , 0.03761
                 , 0.03063]
                 break
            case 30 :
                coeficiente = [0.08914 , 0.06116 , 0.04720 , 0.03329
                    , 0.02638]
                    break
            case 50 :
                coeficiente = [0.09460 , 0.06580 , 0.05152  , 0.03736
                    , 0.03037]
                    break 
        }
        return coeficiente
    }



    console.log(coeficiente(porcetagem(moto, entrada)))
    console.log(valorFin(moto, entrada))
    console.log(porcetagem(moto, entrada))
}



 console.log(calcular(10000, 5000))