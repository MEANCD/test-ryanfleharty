function findMaxAndAverage(arr){
    var maximum = arr[0];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        if( arr[i] > maximum ){
            maximum = arr[i];
        }
    }
    console.log("the average is" + sum/arr.length)
    console.log(maximum);
    return maximum;
}
findMaxAndAverage([3,7,4,9,11,3]);