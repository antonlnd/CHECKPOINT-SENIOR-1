import db from './_db';
import Sequelize from 'sequelize'

const User = db.define('user', {
	email: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

export default User
