import { describe, it } from 'node:test';
import { equal } from 'node:assert/strict';
import { writeFileSync } from 'node:fs';
import { files } from '../solutions/index.js';

describe('files', () => {
   
    it('reading files', async () => {
        writeFileSync('file1.txt','ok');
        writeFileSync('file2.txt','well');
        writeFileSync('file3.txt','done');

        equal("ok well done", await files());
        
    });
})