/*
https://github.com/lizongying/js-gua64
*/
const gua = '䷁䷖䷇䷓䷏䷢䷬䷋' +
    '䷎䷳䷦䷴䷽䷷䷞䷠' +
    '䷆䷃䷜䷺䷧䷿䷮䷅' +
    '䷭䷑䷯䷸䷟䷱䷛䷫' +
    '䷗䷚䷂䷩䷲䷔䷐䷘' +
    '䷣䷕䷾䷤䷶䷝䷰䷌' +
    '䷒䷨䷻䷼䷵䷥䷹䷉' +
    '䷊䷙䷄䷈䷡䷍䷪䷀';

const encode = (str) => {
    const bytes = new TextEncoder().encode(str);
    const encoded = [];
    const len = bytes.length;
    for (let i = 0; i < len; i = i + 3) {
        if (i + 3 <= len) {
            encoded.push(gua[bytes[i] >> 2]);
            encoded.push(gua[(bytes[i] & 0x3) << 4 | (bytes[i + 1] >> 4)]);
            encoded.push(gua[(bytes[i + 1] & 0xf) << 2 | (bytes[i + 2] >> 6)]);
            encoded.push(gua[bytes[i + 2] & 0x3f]);
            continue;
        }
        if (i + 3 === len + 1) {
            encoded.push(gua[bytes[i] >> 2]);
            encoded.push(gua[(bytes[i] & 0x3) << 4 | (bytes[i + 1] >> 4)]);
            encoded.push(gua[(bytes[i + 1] & 0xf) << 2]);
            encoded.push('〇');
            continue;
        }
        if (i + 3 === len + 2) {
            encoded.push(gua[bytes[i] >> 2]);
            encoded.push(gua[(bytes[i] & 0x3) << 4]);
            encoded.push('〇');
            encoded.push('〇');
        }
    }
    return encoded.join('');
};


const decode = (str) => {
    const gua64dict = {};
    for (let i = 0; i < gua.length; i++) {
        gua64dict[gua[i]] = i;
    }
    const b = [];
    for (let i = 0; i < str.length; i++) {
        b.push(gua64dict[str[i]] !== undefined ? gua64dict[str[i]] : 255);
    }
    const encoded = [];
    for (let i = 0; i < b.length; i = i + 4) {
        encoded.push((b[i] << 2) | (b[i + 1] >> 4));
        if (b[i + 2] !== 255) {
            encoded.push((b[i + 1] << 4) | (b[i + 2] >> 2));
        }
        if (b[i + 3] !== 255) {
            encoded.push((b[i + 2] << 6) | b[i + 3]);
        }
    }
    return new TextDecoder('utf-8').decode(new Uint8Array(encoded));
};

const verify = (str) => {
    const array = gua.split('');
    array.push('〇');
    return [...str].every(char => array.includes(char));
};

if (typeof exports !== 'undefined') {
    exports.encode = encode;
    exports.decode = decode;
    exports.verify = verify;
} else {
    export {encode, decode, verify};
}

