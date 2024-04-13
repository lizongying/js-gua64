import {decode} from './gua64.min.js';

import fs from 'fs';

// const filePath = '';
const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        return;
    }
    console.log(decode(data));
});