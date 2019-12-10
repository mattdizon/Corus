let primes = {};
primes.generatePrime = (n) => {
    let res = []
    if(n < 2){
        res.push(-1)
    }
    else{
        for(i = 2; i <= n; i++){
            if(isPrime(i)){
                res.push(i)
            }
        }
    }
    for(let i = 0; i < res.length; i++){
        console.log(res[i])
    }
    return res
}

const isPrime = (i) =>{
    for (let factor = 2; factor < i; factor++){
        if (i % factor === 0){
            return false;
        }
    }
    return true;
}
module.exports = primes;
