function solution(n) {
    let sum = 0;
    let start = n
    if(n%2!==0){
        start = n-1
    }
    
    for(let i =2; i<=start;i+=2){
        sum+=i;
    }
    return sum
}