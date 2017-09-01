import express from 'express';
import db from '../models';
const Message = db.model('message');
const User = db.model('user');
const app = express()


app.get('/', (req, res, next) => {
	Message.getAllWhereRecipient(req.params.recipientId)
	       .then(messages => res.status(200).send(messages))
	       .catch(next);
})

app.get('/from/:senderId', (req, res, next) => {
	Message.getAllWhereSender(req.params.senderId)
	       .then(messages => res.status(200).send(messages))
	       .catch(next);
});

app.post('/', (req, res, next) => {
	Message.create(req.body)
	       .then(message => res.status(201).send(message))
	       .catch(next)
})
// app.put('/:usersid', (req,res) )

export default app
