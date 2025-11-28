function pluralizeRecords(n){
    if(n<0 || n%1!==0){
        return NaN;
    }
    
    let recform;
    if(n%10===1 && n%100!==11){
        recform = "запись";
    }
    else if(n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20)){
        recform = "записи";
    }
    else recform = "записей";

    let verbform;
    if(n%10===1 && n%100!==11){
        verbform = "была найдена";
    }
    else verbform = "было найдено";

    return `В результате выполнения запроса ${verbform} ${n} ${recform}`;
}