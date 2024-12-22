import { describe, it, beforeEach, afterEach } from 'node:test';
import { equal } from 'node:assert/strict';
import { unlinkSync, writeFileSync } from "node:fs";

import { envConfig } from "../solutions/index.js";

describe('4-dotenv', () => {

    beforeEach(() => {
        // clean proccess.env
        for(const key of Object.keys(process.env)){
            delete process.env[key];
        }
    });

    afterEach(() => {
        try {
            unlinkSync('.env');   
        } catch (error) {}
    });

    it('runing test', () => {
        const values = 'PORT=3000\nTOKEN="isaias"';
        writeFileSync('.env',values);

        envConfig();

        equal(process.env.PORT,'3000');
        equal(process.env.TOKEN,'isaias');
    });

    it('without .env', () => {
        envConfig();
        equal(process.env.HOST, undefined);
    })
});