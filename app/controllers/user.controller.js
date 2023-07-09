const { users } = require("../models");
const db = require("../models");
const User = db.users;
const Bootcamp = db.bootcamps;
// Crear y Guardar Usuarios
exports.createUser = (user) => {
	return User.create({
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
	})
		.then((user) => {
			console.log(`>> Se ha creado el user: ${JSON.stringify(user, null, 4)}`);
			return user;
		})
		.catch((err) => {
			console.log(`>> Error al crear al user ${err}`);
		});
};

// Obtener los datos de un user
exports.findById = (userId) => {
	return User.findByPk(userId, {
		include: [
			{
				model: Bootcamp,
				as: "bootcamps",
				attributes: ["id", "title", "cue", "description"],
				through: {
					attributes: [],
				},
			},
		],
	})
		.then((users) => {
			return users;
		})
		.catch((err) => {
			console.log(`>> Error mientras se encontraba al user: ${err}`);
		});
};

//Obtener todos los user
exports.findAll = () => {
	return User.findAll({
		include: [
			{
				model: Bootcamp,
				as: "bootcamps",
				attributes: ["id", "title", "cue", "description"],
				through: {
					attributes: [],
				},
			},
		],
	})
		.then((users) => {
			return users;
		})
		.catch((err) => {
			console.log(">> Error buscando los users: ", err);
		});
};

exports.updateById = (userId) => {

}

exports.deleteById = (userId) => {

}