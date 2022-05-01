function allocateRandomAngPao(amount, numberOfReceiver){
    let result = []
    let min = 0
    let max = 0
    let angPao = 0
    let initialAmount = amount

    while(numberOfReceiver > 0){
        if(amount > 1){
            min = Math.floor(amount/numberOfReceiver)
            max = min*3
            angPao = Math.floor((Math.random() * (max - min) + min)) + Math.round(Math.random()*10)/10
        } else if(amount <=1){
            min = 0.1
            max = min + 1/numberOfReceiver
            angPao = ((Math.random() * (max - min) + min)).toFixed(1)
        }

        if(numberOfReceiver == 1){
            let subTotal = Math.round(result.reduce((a, b) => parseFloat(a, 10) + parseFloat(b, 10), 0)*10)/10
            LastAngPao = Math.round((initialAmount - subTotal)*10)/10
            result.push(LastAngPao.toString())
            return result
        }

        if(amount > 0){
            if(angPao > amount){
                angPao = amount.toFixed(1)
                amount = 0
            } else {
                amount -= angPao
            }
        } else if (amount === 0){
            angPao = 0
        }

        result.push(angPao.toString())
        numberOfReceiver--
    } 
    

}

module.exports = allocateRandomAngPao
