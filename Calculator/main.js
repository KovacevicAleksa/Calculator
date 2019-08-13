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

if (queue.length > 1){
        // pop last element from the array
    let last = queue.pop();
    // check if element length is more than 1
    if (last.length > 1) {
        // remove last character from string and push to the array again
        queue.push(last.slice(0, -1))
    }
}
};

function testLength() {

    if (document.case.display.value.length > 16 && document.case.display.value.length < 21) {

        Notiflix.Notify.Info('Because you have a lot of charatchers font size is smaller');
        document.getElementById("display").style.fontWeight = "550";
        document.getElementById("display").style.fontSize = "2em";
    } else if (document.case.display.value.length > 20) {
        var str = document.case.display.value.length
        Notiflix.Notify.Warning('Max characters you can see is 28 ');
        Notiflix.Notify.Failure('Number of your characters' + str);

        document.getElementById("display").style.fontWeight = "500";
        document.getElementById("display").style.fontSize = "1.5em";
    } else {
        document.getElementById("display").style.fontWeight = "500";
        document.getElementById("display").style.fontSize = "2.5em";
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    var numbers = document.querySelectorAll(".digit, #back")
    numbers.forEach(el => el.addEventListener('click', testLength))
});

function runEquals() {
    if (document.case.display.value.length < 3) {
        Notiflix.Notify.Info('Enter charatchers !');
    } else if (isNaN(document.case.display.value)) {
        var equals = Math.round(eval(document.case.display.value) * 1000) / 1000;
        document.case.display.value = equals;
        document.getElementById("result").innerHTML += queue.join("") + "=" + equals + "\n";
        queue = [equals.toString()];
        document.getElementById('back').value = "CE";
        document.getElementById('back').onclick = runBack;
        Notiflix.Notify.Success(' ');
    } else if (document.case.display.value == "Infinity") {
        document.getElementById('back').value = "AC";
        document.getElementById('back').onclick = DeleteAll;
        Notiflix.Notify.Warning(' Infinity ! ');

    } else {
        document.getElementById('back').value = "CE";
        document.getElementById('back').onclick = runBack;
        Notiflix.Notify.Warning(' Can not be calculated ! ');

    }
}

function testNum() {
    if (document.case.display.value == "Infinity") {
        document.getElementById('back').value = "AC";
        document.getElementById('back').onclick = DeleteAll;
        Notiflix.Notify.Warning(' Infinity ! ');
    } else if (document.case.display.value == "NaN") {
        document.getElementById('back').value = "AC";
        document.getElementById('back').onclick = DeleteAll;
        Notiflix.Notify.Warning(' Not a Number ! ');
    } else if (!document.case.display.value.includes("")) {} else if (document.case.display.value.includes("/0")) {
        Notiflix.Notify.Failure(' You cannot divide by 0 ! ');
    } else if (document.case.display.value.includes("..") || document.case.display.value.includes("//") || document.case.display.value.includes("**") || document.case.display.value.includes("--") || document.case.display.value.includes("++")) {
        runBack();
        Notiflix.Notify.Failure('Enter number ! ');
    } else if (!document.case.display.value.includes("(") && document.case.display.value.includes(")")) {
        Notiflix.Notify.Failure('U cannot end bracket now !');
    } else if (document.case.display.value.includes(")") && !/([123456789])/.test(document.case.display.value)) {
        Notiflix.Notify.Failure('U cannot end bracket now !');
    } else if (document.case.display.value.includes(")") && !/([+/*-])/.test(document.case.display.value)) {
        Notiflix.Notify.Failure('U cannot end bracket now !');
    } else if (!document.case.display.value.includes("(") && document.case.display.value.includes(")") && !/([+/*-])/.test(document.case.display.value)) {
        Notiflix.Notify.Failure('U cannot end bracket now !');
    } else if (!document.case.display.value.includes("(") && document.case.display.value.includes(")") && !/([+/*-])/.test(document.case.display.value) && !/([123456789])/.test(document.case.display.value)) {}
        else {
        document.getElementById('back').value = "CE";
        document.getElementById('back').onclick = runBack;
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    var numbers = document.querySelectorAll(".digit, .oper")
    numbers.forEach(el => el.addEventListener('click', testNum))
});
Notiflix.Confirm.Init({
    timeout: 3000,
    okButtonBackground: "#C46600",
    titleColor: "#C46600",
});

function DeleteAll() {
    document.case.display.value = "";
}

function Del() {
    Notiflix.Confirm.Show(' Confirm',
        'Are you sure you want to delete text?', 'Yes', 'No',
        function() {
            Notiflix.Notify.Success('Text is Deleted');
            document.getElementById("result").innerHTML = "";
        },
        function() {
            Notiflix.Notify.Info('Text is not Deleted');
        });
}

//print
function printTextArea() {
    childWindow = window.open('', 'childWindow', 'location=yes, menubar=yes, toolbar=yes');
    childWindow.document.open();
    childWindow.document.write('<html><head></head><body>');
    childWindow.document.write(document.getElementById('result').value.replace(/\n/gi, '<br>'));
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
window.onload = function() {
    //local storage savebtn
    var note_textarea = document.querySelector('#TE');
    var result_textarea = document.querySelector('#result');
    var save_button = document.querySelector('#SaveBtn');
    var display = document.querySelector('#display');

    save_button.addEventListener('click', updateOutput);

    result_textarea.textContent = localStorage.getItem('content1');
    note_textarea.textContent = localStorage.getItem('content');
    display.value = localStorage.getItem('content_display');

    function updateOutput() {
        Notiflix.Notify.Success('Text  has been saved ');
        localStorage.setItem('content', note_textarea.value);
        localStorage.setItem('content1', result_textarea.value);
        localStorage.setItem('content_display', display.value);

    }

    window.onload = function() {
        const myInput = document.getElementById('display');
        myInput.onpaste = function(e) {
            e.preventDefault();
        }
    }

}

function Git() {
    window.open("https://github.com/TheLexa", "_blank");
};

// NUMBERS
/*
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ( (charCode < 40 || charCode > 57)) {
        return false;
    }
    return true;
}
var equal = document.getElementById("equal");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
         runEquals();
    }
});
*/
