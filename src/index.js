const NUMBER = 709351

const factorization = value => {
    let divisor = 2
    let number = value
    let factors = []
    let times = 1
    if(number === 1){
        factors = `${number} is prime`
    }
    while(divisor < number){

        if(number % divisor === 0){
            number = number / divisor
            if(factors.length !== 0 && (factors[factors.length-1]).number === divisor){
                times = (factors[factors.length-1]).times + 1;
                (factors[factors.length-1]).times = times
            }else{
                times = 1
                factors.push({number: divisor, times})
            }
        }else{
            divisor++
        }
    }
    if(number !== 1){
        if(factors.length !== 0 && (factors[factors.length-1].number === number)){
            times = (factors[factors.length-1]).times + 1;
            (factors[factors.length-1]).times = times
        }else if(factors.length !== 0){
            times = 1
            factors.push({number, times})
        }else{
            factors = `${number} is prime`
        }
    }
    return factors
}

console.log(factorization(NUMBER))