const arguments = process.argv.slice(2);

function hesapla(yaricap) {
    const alan=Math.PI *Math.pow(yaricap, 2);
    console.log("Yarıçapı " +yaricap+ " olan dairenin alanı: "+Math.round(alan));
    
    
}

hesapla(arguments[0] *1);