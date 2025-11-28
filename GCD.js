function gcd(a,b){
    if(a<0 || b<0){
        return NaN;
    }

    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;        
    }
    return a;
}