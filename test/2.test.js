import { proccessFile } from '../solutions/index.js';
import { describe, it } from 'node:test';
import { equal } from 'node:assert/strict';
import { writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

describe('proccesing file', () => {
 
    it('ex 3 run',(t, done) => {
        writeFileSync('input.txt','gogogo');
        proccessFile();

        readFile('output.txt','utf8').then( content => {
            equal(content,'GOGOGO');
            done();
        });     
    });
});