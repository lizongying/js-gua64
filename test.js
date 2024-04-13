import {decode, encode} from './index.js';


let r = decode('䷯䷬䷿䷶䷸䷬䷀䷌䷌䷎䷼䷲䷰䷳䷸䷘䷔䷭䷒〇');
console.log(r);

r = encode('hello，世界');
console.log(r);