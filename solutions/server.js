import express from 'express';

export const app = express();

app.use(express.json());

let items = [{
    id:1,
    content: 'item',
}];

//Get /items
//GET /items/:id
//POST /items
//PUT /items/:id
//DELETE /items/:id

app.get('/items',(req, res) => {
    return res.status(200).json(items);
});

app.get('/items/:id',(req, res) => {
    const { id } = req.params;
    const item = items.find( item => item.id === id );
    return res.status(200).json(item);
});

app.post('/items',(req, res) => {
    const { content } = req.body;
    const id = items.length + 1;
    const newItem = { id, content }
    items.push(newItem);
    return res.status(201).json(newItem);
});

app.put('/items/:id',( req, res ) => {
    const { id } = req.params;
    const { content } = req.body;
    const item = items.find( item => item.id === Number(id) );

    item.content = content;
    return res.status(200).json(item);
});

app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    const index = items.findIndex( item => item.id === id );
    items.splice(index,1);
    return res.status(200).json();
});

export const server = app.listen(process.env.PORT ?? 3000);