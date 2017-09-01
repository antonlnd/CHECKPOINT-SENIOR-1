import Sequelize from 'sequelize';
import db from './_db';

const User = db.model('user');

const Message = db.define('message', {
		subject: {
			type: Sequelize.STRING,
			defaultValue: 'No Subject'
		},
		body: {
			type: Sequelize.TEXT,
			allowNull: false
		}
	}

)


Message.getAllWhereSender = function ( id ) {
	return this.findAll({
		where  : {
			fromId: id
		},
		include: [{
			model: User,
			as   : 'to'
		}, {
			model: User,
			as   : 'from'
		}]
	})
}


Message.prototype.truncateSubject = function ( num, ell ) {
	this.subject = this.subject.slice(0, num)
	if (ell) {
		this.subject += '...'
	}
	return this
}


export default Message
