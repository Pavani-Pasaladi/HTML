console.log("Execution Starts");

var n1,n2,sum,sub,mul,div;
n1=5;
n2=10;


function addition() {
    n1=parseInt(document.getElementById('num1').value);
    n2=parseInt(document.getElementById('num2').value);

    console.log(" value of n1:"+n1);
    console.log(" value of n2:"+n2);
    sum=n1+n2;
    document.getElementById('result').value=sum;
    console.log("sum of two nums:"+sum);
}

function subtraction() {
    n1=parseInt(document.getElementById('num1').value);
    n2=parseInt(document.getElementById('num2').value);

    console.log(" value of n1:"+n1);
    console.log(" value of n2:"+n2);
    sub=n1-n2;
    document.getElementById('result').value=sub;
    console.log("subtraction of two nums:"+sub);
}

function multiplication() {
    n1=parseInt(document.getElementById('num1').value);
    n2=parseInt(document.getElementById('num2').value);

    console.log(" value of n1:"+n1);
    console.log(" value of n2:"+n2);
    mul=n1*n2;
    document.getElementById('result').value=mul;
    console.log("multiplication of two nums:"+mul);
}

function division() {
    n1=parseInt(document.getElementById('num1').value);
    n2=parseInt(document.getElementById('num2').value);

    console.log(" value of n1:"+n1);
    console.log(" value of n2:"+n2);
    div=n1/n2;
    document.getElementById('result').value=div;
    console.log("division of two nums:"+div);
}


console.log("Execution ends");
