import express from 'express';
import db from '../models';

const User = db.model('user');
const Message = db.model('message');
const router = express.Router();


 router.get('/', ( req, res, next ) => {
	User.findAll({})
	    .then(users => {
		    res.json(users)
	    })
	    .catch(next)
})

router.put('/:usersId', ( req, res, next ) => {
	console.log(req.body)
	User.findById(req.params.usersId)
	    .then(theuser => {
		    theuser.update(req.body.email)
	    })
	    .then(updUser => {
		    res.status(201).send(updUser)
	    })
	    .catch(next)
})

export default router
