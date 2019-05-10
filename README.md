# Modbus CRC16 Check

This is a library about Modbus CRC16 checkout.

## Example

```
const buffer = Buffer.from([ 0x01, 0x03, 0x04, 0x11, 0xF4, 0x20, 0xCF ]);

console.log('crc16          -- ', crc16(buffer));
console.log('crc16table     -- ', crc16table(buffer));
console.log('crc16TableFast -- ', crc16TableFast(buffer));
```

## Function

* `crc16(buffer)`: computing CRC when it`s called, it is the slowest.
* `crc16table(buffer)`: getting high and low values in their respective tables, it is better than `crc16()`.
* `crc16TableFast(buffer)`: getting value in abs tables, it is the fastest and recommended.

