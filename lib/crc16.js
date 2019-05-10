'use strict'

const { crcTableHi, crcTableLo, talbeAbs } = require('./table');

function crc16(buf) {
    let crc = 0xFFFF;
    for (let i = 0; i < buf.length; i++) {
        crc ^= buf[i];
        for (let j = 0; j < 8; j++) {
            let odd = crc & 0x0001;
            crc = crc >> 1;
            if (odd) crc ^= 0xA001;
        }
    }

    return crc;
}


function crc16table(buf) {
    let high = 0xff;
    let low = 0xff;

    for (let i = 0; i < buf.length; i++) {
        let ch = buf[i];

        let index = low ^ ch;
        low = high ^ crcTableHi[index];
        high = crcTableLo[index];
    }

    return (high << 8 | low);
}

function crc16TableFast(buf) {
    let crc = 0xFFFF;

    for (let i = 0; i < buf.length; i++) {
        let ch = buf[i];
        crc = talbeAbs[(ch ^ crc) & 15] ^ (crc >> 4);
        crc = talbeAbs[((ch >> 4) ^ crc) & 15] ^ (crc >> 4);
    }

    return crc;
}

module.exports = {
    crc16,
    crc16table,
    crc16TableFast
};