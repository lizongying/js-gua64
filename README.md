# 六十四卦編碼

六十四卦編碼，js實現

如：“hello，世界”會編碼為“䷯䷬䷿䷶䷸䷬䷀䷌䷌䷎䷼䷲䷰䷳䷸䷘䷔䷭䷒〇”

[npm](https://www.npmjs.com/package/js-gua64)

![](screenshots)

## 各語言實現

* [golang](https://github.com/lizongying/go-gua64)
* [js](https://github.com/lizongying/js-gua64)
* [java](https://github.com/lizongying/java-gua64)
* [php-gua64](https://github.com/lizongying/php-gua64)
* [python](https://github.com/lizongying/pygua64)

## 引用

### node

```
npm i js-gua64
```

## 使用方法

[docs](https://github.com/lizongying/js-gua64/docs)

需要在package.json文件中設置"type": "module"

```
import {decode, encode, verify} from 'js-gua64';


let r = decode('䷯䷬䷿䷶䷸䷬䷀䷌䷌䷎䷼䷲䷰䷳䷸䷘䷔䷭䷒〇');
console.log(r);

r = encode('hello，世界');
console.log(r);

r = verify('䷯䷬䷿䷶䷸䷬䷀䷌䷌䷎䷼䷲䷰䷳䷸䷘䷔䷭䷒〇');
console.log(r);
```
