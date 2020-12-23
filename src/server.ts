import express from 'express';

const app = express();

app.get('/', (req, res) => {

    return res.json({ Hello: 'Hello word' });

})

app.listen(3333, () => {
    console.log('Server has started!')

})