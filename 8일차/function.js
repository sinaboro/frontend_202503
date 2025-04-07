//즉시 실행 함수
(
    function init(){
        console.log("initialized2!");
    }
)();

(
    function (){
        console.log("initialized3!");
    }    
)();

const func = (function(){
    function a(){
        console.log("aaaaaaa");
    }
    function b(){
        console.log("bbbbbbbb");
    }
    return{
        funcA: a,
        funcB: b,
    }
})();

func.funcA();
func.funcB();

const result = (function(a,b){
    function init(){
        return doSum(a,b);
    }
    function doSum(a,b){
        return a+b;
    }

    return init();
})(10,20);

console.log("result : " , result);