import express from 'express'
import cors from 'cors'
import { items } from './items.js'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/items', (req, res) => {
    res.json(items)
})

app.post('/items', (req, res) => {
    const item = req.body
    items.push(item)
    res.json({ message: 'Item Saved' })
})

app.listen(4000);