const { users, bootcamps } = require("../models");
const db = require("../models");
const Bootcamp = db.bootcamps;
const User = db.users;

// Crear y guardar un nuevo bootcamp
exports.createBootcamp = (bootcamp) => {
	return Bootcamp.create({
		title: bootcamp.title,
		cue: bootcamp.cue,
		description: bootcamp.description,
	})
		.then((bootcamp) => {
			console.log(`>> Creado el bootcamp: ${JSON.stringify(bootcamp, null, 4)}`);
			return bootcamp;
		})
		.catch((err) => {
			console.log(`>> Error al crear el bootcamp: ${err}`);
		});
};

exports.addUser = (bootcampId, userId) => {
	return Bootcamp.findByPk(bootcampId).then((bootcamp) => {
		if (!bootcamp) {
			console.log("No se encontró el bootcamp");
			return null;
		}
		return User.findByPk(userId).then((user) => {
			if (!user) {
				console.log("Usuario no encontrado");
				return null;
			}
			bootcamp.addUser(user);
			console.log("************************************************");
			console.log(`>> Agregado el usuario id=${user.id} al bootcamp con id=${bootcamp.id}`);
			console.log("************************************************");
			return bootcamp;
		});
	});
};

// Obtener los datos de un user
exports.findById = (bootcampId) => {
	return Bootcamp.findByPk(bootcampId, {
		include: [
			{
				model: User,
				as: "users",
				attributes: ["id", "firstName", "lastName", "email"],
				through: {
					attributes: [],
				},
			},
		],
	})
		.then((bootcamps) => {
			return bootcamps;
		})
		.catch((err) => {
			console.log(`>> Error mientras se encontraba los bootcamps: ${err}`);
		});
};

//Obtener todos los bootcamp
exports.findAll = () => {
	return Bootcamp.findAll({
		include: [
			{
				model: User,
				as: "users",
				attributes: ["id", "firstName", "lastName", "email"],
				through: {
					attributes: [],
				},
			},
		],
	})
		.then((bootcamps) => {
			return bootcamps;
		})
		.catch((err) => {
			console.log(">> Error buscando los bootcamps: ", err);
		});
};