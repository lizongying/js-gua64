import {decode, encode} from './index.js';


let r = decode('䷯䷬䷿䷶䷸䷬䷀䷌䷌䷎䷼䷲䷰䷳䷸䷘䷔䷭䷒☯');
console.log(r);

r = encode('hello，世界');
console.log(r);