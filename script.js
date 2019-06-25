/************************************************************/
//Todo modify code for encrypted a new text and new codeKey.
/************************************************************/

let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let newLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let abc = '';
let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;
let index5 = 0;
let index6 = 0;
let codeKey = '';


// box
let p1 = document.getElementById("L1");
p1.textContent = letters[index1];
let p2 = document.getElementById("L2");
p2.textContent = letters[index2];
let p3 = document.getElementById("L3");
p3.textContent = letters[index3];
let p4 = document.getElementById("L4");
p4.textContent = letters[index4];
let p5 = document.getElementById("L5");
p5.textContent = letters[index5];
let p6 = document.getElementById("L6");
p6.textContent = letters[index6];

//top click
function onClickTop(pos, index) {
    if (index >= 25) {
        index = -1;   
    }
    pos.textContent = letters[index += 1];
}
function addOne(index) {
    if (index >= 25) {
        index = -1;   
    }
    index += 1;
    return index;
}

//bottom click
function onClickBottom(pos, index) {
    if (index <= 0) {
        index = 26;
    }
    pos.textContent = letters[index -= 1];
}
function removeOne(index) {
    if (index <= 0) {
        index = 26;
    }
    index -= 1;
    return index;
}

//pos1
document.getElementById("boxTop1").addEventListener("click", function(e) {
    onClickTop(p1, index1);
    index1 = addOne(index1);
});
document.getElementById("boxBottom1").addEventListener("click", function(e) {
    onClickBottom(p1, index1);
    index1 = removeOne(index1);
});

//pos2
document.getElementById("boxTop2").addEventListener("click", function(e) {
    onClickTop(p2, index2);
    index2 = addOne(index2);
});
document.getElementById("boxBottom2").addEventListener("click", function(e) {
    onClickBottom(p2, index2);
    index2 = removeOne(index2);
});

//pos3
document.getElementById("boxTop3").addEventListener("click", function(e) {
    onClickTop(p3, index3);
    index3 = addOne(index3);
});
document.getElementById("boxBottom3").addEventListener("click", function(e) {
    onClickBottom(p3, index3);
    index3 = removeOne(index3);
});

//pos4
document.getElementById("boxTop4").addEventListener("click", function(e) {
    onClickTop(p4, index4);
    index4 = addOne(index4);
});
document.getElementById("boxBottom4").addEventListener("click", function(e) {
    onClickBottom(p4, index4);
    index4 = removeOne(index4);
});

//pos5
document.getElementById("boxTop5").addEventListener("click", function(e) {
    onClickTop(p5, index5);
    index5 = addOne(index5);
});
document.getElementById("boxBottom5").addEventListener("click", function(e) {
    onClickBottom(p5, index5);
    index5 = removeOne(index5);
});

//pos6
document.getElementById("boxTop6").addEventListener("click", function(e) {
    onClickTop(p6, index6);
    index6 = addOne(index6);
});
document.getElementById("boxBottom6").addEventListener("click", function(e) {
    onClickBottom(p6, index6);
    index6 = removeOne(index6);
});


//clic on EXECUTE
function clicButton() {
    codeKey = p1.textContent + p2.textContent + p3.textContent 
    + p4.textContent + p5.textContent + p6.textContent;

/**********************************************************************/
//for playing realy defining the codeKey and write text on ID"text".
// Recover the text on ID"textModif" and copscol on ID"text". 
// codeKey defining = "badeux"
/**********************************************************************/

    codeKey = codeKey.toUpperCase();

    for (let i=0; i<6;i++) {
        for (let j=0; j<26;j++) {
            if (codeKey[i] === newLetters[j]) {
                newLetters[j] = '';
            } 
        }   
    }
    for (let k=0 ; k<26; k++) {
        abc += newLetters[k];
    }
    abc = codeKey + abc;
    console.log(abc + " " +abc.length)

/**********************************************************************/
//For playing realy comment call final text function.
//Modify textModifValue ID "textModif" by "text".
/**********************************************************************/

    //Transform initial text
    let text =  document.getElementById("text").textContent;
    let textValue= '';
    textValue = codeText(text, textValue, letters, abc);
    let textModif = document.getElementById("textModif");
    textModif.textContent = textValue;

    //transform final text
    let textModifValue = document.getElementById("textModif").textContent;
    let textFinal = '';
    textFinal = codeText(textModifValue, textFinal, abc, letters);
    let realText = document.getElementById("realText");
    realText.textContent = textFinal;
   
}

//toUpperCase first letter sentence
function upperText(str) {
    final = '';
    str = str.toLowerCase();
    String.prototype.srtFunc = function() {
        return this.charAt(0).toUpperCase() + this.substr(1);
    }
    for (let p=0; p<str.length;p++) {
        if (str[p - 2] === '.') {
            final += str[p].toUpperCase();
        } else {
            final += str[p];
        }
    }
    final = final.srtFunc();
    return final;
}

//transform text method
function codeText(textEnter, textExit, alpha, beta) {
    textEnter = textEnter.toUpperCase();
    for (let l=0; l<textEnter.length; l++) {
        switch (textEnter[l]) {
            case ' ':
                textExit += ' ';
                break;
            case "'":
                textExit += "'";
                break;
            case ',':
                textExit += ',';
                break;
            case '.':
                textExit += '.';
                break;
            case '(':
                textExit += '(';
                break;
            case ')':
                textExit += ')';
                break;
            case 'à':
                textExit += 'à';
                break;
            case 'é': 
                textExit += 'é';
                break;
            case 'è':
                textExit += 'è';
                break;
            default: 
                for (let m=0;m<26;m++) {
                    if (textEnter[l] === alpha[m]) {
                        textExit += beta[m]
                    }
                }
        }
    }
    textExit = upperText(textExit);
    return textExit;
}