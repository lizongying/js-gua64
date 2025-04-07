# 六十四卦編碼

六十四卦編碼，js實現

如：“hello，世界”會編碼為“䷯䷬䷿䷶䷸䷬䷀䷌䷌䷎䷼䷲䷰䷳䷸䷘䷔䷭䷒〇”

[js-gua64](https://github.com/lizongying/js-gua64)

[npm](https://www.npmjs.com/package/js-gua64)

[demo](https://lizongying.github.io/js-gua64/)

![](screenshots/img.png)

## 各語言實現

* [rust](https://github.com/lizongying/rs-gua64)
* [golang](https://github.com/lizongying/go-gua64)
* [js](https://github.com/lizongying/js-gua64)
* [java](https://github.com/lizongying/java-gua64)
* [php](https://github.com/lizongying/php-gua64)
* [python](https://github.com/lizongying/pygua64)
* [c#](https://github.com/lizongying/dotnet-gua64)

## 引用

### node

install

```
npm i js-gua64
```

package.json

```json
{
  "type": "module",
  "dependencies": {
    "js-gua64": "^0.1.4"
  }
}
```

example

```
import {decode, encode, verify} from 'js-gua64';

let r = decode('䷯䷬䷿䷶䷸䷬䷀䷌䷌䷎䷼䷲䷰䷳䷸䷘䷔䷭䷒〇');
console.log(r);

r = encode('hello，世界');
console.log(r);

r = verify('䷯䷬䷿䷶䷸䷬䷀䷌䷌䷎䷼䷲䷰䷳䷸䷘䷔䷭䷒〇');
console.log(r);
```

### browser

```
<script type="module">
    import {decode, encode, verify} from 'https://lizongying.github.io/js-gua64/gua64.min.js';
</script>
```

## 讚賞

![image](./screenshots/appreciate.png)