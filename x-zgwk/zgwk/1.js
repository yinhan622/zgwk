function a(){
    var n = 1;
    return function b(){
        n+=1;
        console.log(n);
    }
}
var b1 = a();
var b2 = a();
b1();
b2();