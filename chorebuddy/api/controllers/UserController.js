/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: (req, res) => {
		User.create({
			name: req.param('name'),
			house: req.param('house'),
			manager: req.param('manager'),
			phoneNumber: req.param('phoneNumber'),
			isManager: req.param('isManager'),
		})
		.then(user => {
			res.json({ data: user });
		})
		.catch(err => {
			res.json({ error: err});
		});
	},

	addPreferedDays: (req, res) => {
		User.update(req.id, {
			preferedDays: req.param('preferedDays'),
		})
		.then(user => {
			res.json({ data: user });
		})
		.catch(err => {
			res.json({ error: err});
		});
	},


};
