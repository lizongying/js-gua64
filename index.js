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
            encoded.push('☯');
            continue;
        }
        if (i + 3 === len + 2) {
            encoded.push(gua[bytes[i] >> 2]);
            encoded.push(gua[(bytes[i] & 0x3) << 4]);
            encoded.push('☯');
            encoded.push('☯');
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
        b.push(gua64dict[str[i]] ? gua64dict[str[i]] : 0);
    }
    const encoded = [];
    for (let i = 0; i < b.length; i = i + 4) {
        encoded.push((b[i] & 0x3f) << 2 | (b[i + 1] >> 4 & 0x3));
        if (((b[i + 1] & 0xf) << 4 | (b[i + 2] >> 2 & 0xf)) !== 0) {
            encoded.push((b[i + 1] & 0xf) << 4 | (b[i + 2] >> 2 & 0xf));
        }
        if (((b[i + 2] & 0x3) << 6 | (b[i + 3] & 0x3f)) !== 0) {
            encoded.push((b[i + 2] & 0x3) << 6 | (b[i + 3] & 0x3f));
        }
    }
    return new TextDecoder('utf-8').decode(new Uint8Array(encoded));
};

export {encode, decode};
