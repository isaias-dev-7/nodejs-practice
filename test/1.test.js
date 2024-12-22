import { getDataPromise } from '../solutions/index.js';
import { describe, it } from 'node:test';
import { equal } from 'node:assert/strict';

describe('get Promises Data',() =>{
    it('get data exc #1', async () => {
        const { data } = await getDataPromise();
        equal(data, 'important data');
    });
});
