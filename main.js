let result = document.querySelector("#result");
let num = document.querySelectorAll(".numButton").value;
let calcu = document.querySelectorAll(".calButton").value;


//数字ボタン
function numClick(num){
    if(result.value == "" && num == "0"){
        result.value = "";
    }else if(result.value == "" && num == "."){
        result.value ="";
    }else{
        result.value += num; 
    }
}

//リセットボタン
function cClick(){
    result.value="";
}

//演算子ボタン
//式の最後が演算子かどうか
function opera(){
    return["+","-","*","/"].includes(result.value.toString().slice(-1));
}

function calClick(calcu){
    if(opera()){
        result.value=result.value.slice(0,-1) + calcu;
    }else{
        result.value += calcu;
    }
}

//=ボタン
function equal_click(){
    if(opera()){
        result.value=result.value.slice(0,-1);
    }
    
    result.value = eval(result.value);
}
