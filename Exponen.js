function pow(x,n){
    if (n<1 || n%1!==0){
        return NaN;
    }

    let res=1;
    for(let i=0; i<n; i++){
        res *=x;
    }
    return res;
}