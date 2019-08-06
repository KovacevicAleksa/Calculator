
// hide and how element
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ( (charCode < 40 || charCode > 57)) {
        return false;
    }
    return true;
}
function myFunction() {
    var x = document.getElementById("Cal");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
var queue = []; // store key history

function getHistory() {
    var str = ''
    for (var i = 0; i < queue.length; i++)
        str += queue[i];
    return str;
}
// display functions
function runLB() {
    document.case.display.value += "("
    queue.push('(')
}

function runRB() {
    document.case.display.value += ")"
    queue.push(')')
}

function run1() {
    document.case.display.value += "1"
    queue.push('1')
};

function run2() {
    document.case.display.value += "2"
    queue.push('2')
};

function run3() {
    document.case.display.value += "3"
    queue.push('3')
};

function run4() {
    document.case.display.value += "4"
    queue.push('4')
};

function run5() {
    document.case.display.value += "5"
    queue.push('5')
};

function run6() {
    document.case.display.value += "6"
    queue.push('6')
};

function run7() {
    document.case.display.value += "7"
    queue.push('7')
};

function run8() {
    document.case.display.value += "8"
    queue.push('8')
};

function run9() {
    document.case.display.value += "9"
    queue.push('9')
};

function run0() {
    document.case.display.value += "0"
    queue.push('0')
};

function runPlus() {
    document.case.display.value += "+"
    queue.push('+')
};

function runMinus() {
    document.case.display.value += "-"
    queue.push('-')
};

function runDivide() {
    document.case.display.value += "/"
    queue.push('/')
};

function runMultiply() {
    document.case.display.value += "*"
    queue.push('*')
};

function runComma() {
    document.case.display.value += "."
    queue.push('.')
};

function runBack() {
    var val = document.case.display.value.slice(0, -1);
    document.case.display.value = val;

    // pop last element from the array
    let last = queue.pop();
    // check if element length is more than 1
    if (last.length > 1) {
        // remove last character from string and push to the array again
        queue.push(last.slice(0, -1))
    }

};

function runEquals() {
    if (document.case.display.value == "") {
        document.case.display.placeholder = "Type!"
    } else {
        var equals = Math.round(eval(document.case.display.value)* 1000) / 1000;
        document.case.display.value = equals;
        document.getElementById("result").innerHTML += queue.join("") + "=" + equals + "\n";
        queue = [equals.toString()];


    }
}

function Del() {
    document.getElementById("result").innerHTML = "";
}
//print
function printTextArea() {
  childWindow = window.open('','childWindow','location=yes, menubar=yes, toolbar=yes');
  childWindow.document.open();
  childWindow.document.write('<html><head></head><body>');
  childWindow.document.write(document.getElementById('result').value.replace(/\n/gi,'<br>'));
  childWindow.document.write('</body></html>');
  childWindow.print();
  childWindow.document.close();
  childWindow.close();
}
//Font ++ and --
function FontM() {
    txt = document.getElementById('result');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    if (currentSize <= 10) {
        txt.style.fontSize = (currentSize + 5) + 'px';
    } else {
        txt.style.fontSize = (currentSize - 5) + 'px';
    }
}
//print
function FontP() {
    txt = document.getElementById('result');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    if (currentSize >= 50) {
        txt.style.fontSize = (currentSize - 5) + 'px';
    } else {
        txt.style.fontSize = (currentSize + 5) + 'px';
    }
}


//save txtarea input local storage ..
function SaveBtn(){
var input_textarea = document.querySelector('#result');
var save_button = document.querySelector('#SaveBtn');

save_button.addEventListener('click', updateOutput);

input_textarea.textContent = localStorage.getItem('content');
input_textarea.value = localStorage.getItem('content');

function updateOutput() {
     Del();
	localStorage.setItem('content', input_textarea.value);
    input_textarea.textContent = input_textarea.value;
}
}
window.onload = function() {
 const myInput = document.getElementById('display');
 myInput.onpaste = function(e) {
   e.preventDefault();
 }
}

var equal = document.getElementById("equal");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
         runEquals();
    }
});

//lock scrolling
$('body').css({'overflow':'hidden'});
 $(document).bind('scroll',function () {
      window.scrollTo(0,0);
 });

 function Git() {
     window.open("https://github.com/TheLexa", "_blank");
};
