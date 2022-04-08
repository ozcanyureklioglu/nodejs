const arguments = process.argv.slice(2);

function hesapla(yaricap) {
    const alan=Math.PI *Math.pow(yaricap, 2);
    console.log("Yarıçapı " +yaricap+ " olan dairenin alanı: "+Math.round(alan));
    
    
}
function showPrimeNumbers(lownumber, highNumber) {
    for (let i =lownumber; i <= highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j ++) {
            if( i % j ===0 && j !==i) {
                isPrime = false
            }
        }

        if(isPrime) {
            console.log(i);
        }
    }
}

//hesapla(arguments[0] *1);

module.exports = {
    hesapla:hesapla
}