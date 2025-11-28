function minDigit(x){
    if(x<0 || x%1!==0){
        return NaN;
    }

    if(x==0) return 0;

    let min=9;
    let num=x;

    while(num>0){
        const digit = num % 10;
        if(digit < min){
            min = digit;
        }
        num =(num - digit)/10;
    }
    return min;
}