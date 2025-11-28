function cesar(str, shift, action) {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const alphabetUpper = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let index = alphabet.indexOf(char);
        
        if (index !== -1) {
            let newIndex;
            if (action === 'encode') {
                newIndex = (index + shift) % 33;
                if (newIndex < 0) newIndex += 33;
            } 
            else if (action === 'decode') {
                newIndex = (index - shift) % 33;
                if (newIndex < 0) newIndex += 33;
            }
            result += alphabet[newIndex];
        } 
        else {
            index = alphabetUpper.indexOf(char);
            if (index !== -1) {
                let newIndex;
                if (action === 'encode') {
                    newIndex = (index + shift) % 33;
                    if (newIndex < 0) newIndex += 33;
                } 
                else if (action === 'decode') {
                    newIndex = (index - shift) % 33;
                    if (newIndex < 0) newIndex += 33;
                }
                result += alphabetUpper[newIndex];
            } 
            else result += char;
        }
    }
    return result;
}

// Расшифровка сообщения "эзтыхз фзъзъз" с shift=8: "хакуна матата"