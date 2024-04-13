import {decode, encode, verify} from './index.js';


let r = decode('䷯䷬䷿䷶䷸䷬䷀䷌䷌䷎䷼䷲䷰䷳䷸䷘䷔䷭䷒〇');
console.log(r);

r = encode('hello，世界');
console.log(r);

r = verify('䷯䷬䷿䷶䷸䷬䷀䷌䷌䷎䷼䷲䷰䷳䷸䷘䷔䷭䷒〇');
console.log(r);

r = verify('hello，世界');
console.log(r);

r = encode('8087:7000');
console.log(r);

r = decode('䷞䷓䷁䷊䷷䷼䷣䷉䷽䷓䷁䷒');
console.log(r);