//快速排序
var a = [2,1,3,4,5]
function qSort(arr,low,high){
    if(low < high){
        var pivot = part(arr,low,high)
        qSort(arr,low,pivot-1)
        qSort(arr,pivot+1,high)
    }
}
function part(arr,low,high){
    var temp = arr[low]
    while(low<high){
        while(low<high && arr[high]>=temp) {--high}
        arr[low] = arr[high]
        while(low<high && arr[low]<=temp) {++low}
        arr[high] = arr[low]
    }
    arr[low] = temp
    return low
}
console.log(a)
qSort(a,0,4)
console.log(a)
