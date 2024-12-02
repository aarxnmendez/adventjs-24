function createFrame(names) {
    let longest = 0;
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > longest) {
            longest = names[i].length;
        }
    }

    let frame = '';
    for (let i = 0; i < longest + 4; i++) {
        frame += '*';
    }
    frame += '\n';

    for (let i = 0; i < names.length; i++) {
        frame += '* ' + names[i];
        for (let j = 0; j < longest - names[i].length; j++) {
            frame += ' ';
        }
        frame += ' *\n';
    }

    for (let i = 0; i < longest + 4; i++) {
        frame += '*';
    }
    return frame;
}