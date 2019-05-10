'use strict'

const { crc16, crc16table, crc16TableFast } = require('../lib');

const buffer = Buffer.from([ 0x01, 0x03, 0x04, 0x11, 0xF4, 0x20, 0xCF ]);

function crc2Str(value) {
    let crcBuf = Buffer.alloc(2);
    crcBuf.writeUInt16BE(value);

    return crcBuf.toString('hex');
}

// <Buffer e7 69 >
console.log('crc16          -- ', `${crc16(buffer)} | ${crc2Str(crc16(buffer))}`);
console.log('crc16table     -- ', `${crc16table(buffer)} | ${crc2Str(crc16table(buffer))}`);
console.log('crc16TableFast -- ', `${crc16TableFast(buffer)} | ${crc2Str(crc16TableFast(buffer))}`);