function myFunction() {
  var x = document.getElementById("Cal");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function runLB(){
		document.case.display.value += "("
}
function runRB(){
		document.case.display.value += ")"
}

function run1(){

	document.case.display.value += "1"
};
function run2(){

	document.case.display.value += "2"
};
function run3(){

	document.case.display.value += "3"
};
function run4(){

	document.case.display.value += "4"
};
function run5(){

	document.case.display.value += "5"
};

function run6(){

	document.case.display.value += "6"
};

function run7(){

	document.case.display.value += "7"
};

function run8(){

	document.case.display.value += "8"
};

function run9(){

	document.case.display.value += "9"
};

function run0(){

	document.case.display.value += "0"
};
function runPlus(){

	document.case.display.value += "+"
};
function runMinus(){

	document.case.display.value += "-"
};
function runDivide(){

	document.case.display.value += "/"
};
function runMultiply(){

	document.case.display.value += "*"
};
function runComma(){

	document.case.display.value += "."
};
function runBack(){
	var val = document.case.display.value.slice(0, -1);
    document.case.display.value = val;
};

function runC(){

	document.case.display.value = ""
};


function runEquals() {
        if (document.case.display.value == "") {
        	document.case.display.value = ""
        } else  {
	var equals = eval(document.case.display.value)
	document.case.display.value = equals;
}
}
