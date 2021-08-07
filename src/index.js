const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let str = '';
    for (i = 0; i < expr.length; i += 10) {
        str = expr.slice(i, i + 10);
        if (str == '**********') {
            result += ' ';
        } else {
            let res = '';
            for (j = 0; j < str.length; j += 2) {
                let piece = str.slice(j, j + 2);
                if (piece == '10') {
                    res += '.';
                }

                if (piece == '11') {
                    res += '-';
                }
            }
            result += MORSE_TABLE[res];
        }
    }
    return result;
}
 
module.exports = {
    decode
}