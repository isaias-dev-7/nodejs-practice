import { describe, it, after } from "node:test";
import { equal, deepStrictEqual } from "node:assert/strict";
import request from "supertest";

import { app, server } from "../solutions/server.js";

describe('testing server request',() => {

    
    after(() => {
        server.close();
    });

    it('should fetch all items', async () => {
        const response = await request(app).get('/items');
        equal(response.statusCode,200);
    });


    it('should fetch one item by its id', async () => {
        const response = await request(app).get("/items/1");
        equal(response.statusCode,200);
    });

    it('should create an item', async () => {
        const response = await request(app)
        .post('/items')
        .send({ content: 'item'});

        equal(response.statusCode,201);
        equal(response.body.content,'item');
    });

    it('should update an item', async () => {
        const response = await request(app)
        .put('/items/1')
        .send({ content: 'item updated'});

        equal(response.statusCode,200);
        equal(response.body.content,'item updated');
    });

    it('should delete an item', async () => {
        const response = await request(app).delete('/items/1');

        equal(response.statusCode,200);
    });
})