let _output = [];
let input = document.getElementById("input");
let conv = document.getElementById("convert");
let swap = document.getElementById("swap");
let output = document.getElementById("op");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let val;
let s = 0;
let x = '';
let i = '';
let a = 0;
let max = 57;

function reverseString(str) {
    return str.split("").reverse().join("");
}


function convertToDecimal(_input) {

    x = _input.toString();
    i = reverseString(x);

    for (let r = 0; r < i.length; r++) {
        _output.push(+i.charAt(r));
    }

    for (let j = _output.length - 1; j >= 0; j--) {

        if (_output[j] == 0 || _output[j] == 1) {
            s += Math.pow(2, j) * _output[j];
            output.innerHTML = s;
            console.log("j :", j);
        }
        else {
            console.log("errrorrroororor");
            output.innerHTML = "err";
        }
    }

    console.log(_output);
    console.log(s);


}





function convertToBinary(_input) {


    i += _input % 2;


    while (_input > 0) {

        _input = Math.floor(_input / 2);
        i += _input % 2;
        console.log(_input);



    }

    var x = reverseString(i);
    x = x.substr(1);
    console.log(x);
    output.innerHTML = x;

}


swap.onclick = function () {

    if (a == 0) {
        a += 1;
        p1.innerHTML = 'enter a binary number :';
        p2.innerHTML = 'decimal number :';
        max =  49;
        input.value = output.innerHTML;
        s = 0;
        _output = [];
        i = '';
        convertToDecimal(input.value);

    } else {
        a -= 1;
        p1.innerHTML = 'enter a decimal number :';
        p2.innerHTML = 'binary number :';
        max = 57;
        input.value = output.innerHTML;
        i = '';
        convertToBinary(input.value);
    }


    console.log(a);

}





conv.onclick = function () {
    switch (a) {


        case 0:

            i = '';
            val = input.value;
            convertToBinary(val);
            console.log("case 0");
            break;
        case 1:

            s = 0;
            _output = [];
            i = '';
            val = input.value;
            convertToDecimal(val);
            console.log("case 1");

            break;






    }
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    return !(charCode > 31 && (charCode < 48 || charCode > max));
  }