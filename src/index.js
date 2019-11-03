const NUMBER = 360

const factorization = value => {
    let divisor = 2
    let number = value
    let factors = []
    while(divisor<number){

        if(number%divisor === 0){
            number = number / divisor
            factors.push(divisor)
        }else{
            divisor++
        }
    }
    if(number!==1){
        factors.push(number)
    }
    return factors
}

console.log(factorization(NUMBER))