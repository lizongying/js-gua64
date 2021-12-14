# 六十四卦

六十四卦代替base64

## install

```
npm i js-gua64
```

## example

需要在package.json文件中设置"type": "module"

```
import {decode, encode} from 'js-gua64';


let r = decode('䷯䷬䷿䷶䷸䷬䷀䷌䷌䷎䷼䷲䷰䷳䷸䷘䷔䷭䷒☯');
console.log(r);

r = encode('hello，世界');
console.log(r);
```