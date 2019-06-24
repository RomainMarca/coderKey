function changeText(textEnter, textExit) {
    textEnter = textEnter.toUpperCase();
    for (let l=0; l<textEnter.length; l++) {
        switch (textE[l]) {
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
            default: 
                for (let m=0;m<26;m++) {
                    if (textEnter[l] === letters[m]) {
                        textExit += abc[m]
                    }
                }
        }
    }
    textExit = upperText(textExit);

    return textExit;
}