function getSortedArray(array, key){
    const sortedarray = [...array];

    for(let i=0; i<sortedarray.length - 1; i++){
        for(let j=0; j<sortedarray.length - i - 1; j++){
            if (sortedarray[j][key]>sortedarray[j+1][key]){
                const temp = sortedarray[j];
                sortedarray[j]= sortedarray[j+1];
                sortedarray[j+1] = temp;
            }
        }
    }
    return sortedarray;
}