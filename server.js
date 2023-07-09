const db = require(`./app/models`);
const userController = require(`./app/controllers/user.controller`);
const bootcampController = require(`./app/controllers/bootcamp.controller`);

const run = async () => {
	// Crear Users
	const user1 = await userController.createUser({
		firstName: `Mateo`,
		lastName: `Díaz`,
		email: `mateo.diaz@correo.com`,
	});
	const user2 = await userController.createUser({
		firstName: `Santiago`,
		lastName: `Mejías`,
		email: `santiago.mejias@correo.com`,
	});
	const user3 = await userController.createUser({
		firstName: `Lucas`,
		lastName: `Rojas`,
		email: `lucas.rojas@correos.com`,
	});
	const user4 = await userController.createUser({
		firstName: `Facundo`,
		lastName: `Fernandez`,
		email: `facundo.fernandez@correo.com`,
	});

	// Crear bootcamps
	const bootcamp1 = await bootcampController.createBootcamp({
		title: `Introduciendo El Bootcamp De React.`,
		cue: 10,
		description: `React es la librería más usada en Javascript para el desarrollo de interfaces.`,
	});
	const bootcamp2 = await bootcampController.createBootcamp({
		title: `Bootcamp Desarrollo Web Full Stack.`,
		cue: 12,
		description: `Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: Javascript, nodeJS, Angular, MongoDB, ExpressJS.`,
	});
	const bootcamp3 = await bootcampController.createBootcamp({
		title: `Bootcamp Big Data, Inteligencia Artificial & Machine Learning.`,
		cue: 18,
		description: `Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning`,
	});

	// Agregando users a bootcamps
	console.log("\n************************************************");
	await bootcampController.addUser(bootcamp1.id, user1.id);
	console.log("************************************************");
	console.log("\n************************************************");
	await bootcampController.addUser(bootcamp1.id, user2.id);
	console.log("************************************************");
	console.log("\n************************************************");
	await bootcampController.addUser(bootcamp2.id, user1.id);
	console.log("************************************************");
	console.log("\n************************************************");
	await bootcampController.addUser(bootcamp3.id, user1.id);
	console.log("************************************************");
	console.log("\n************************************************");
	await bootcampController.addUser(bootcamp3.id, user2.id);
	console.log("************************************************");
	console.log("\n************************************************");
	await bootcampController.addUser(bootcamp3.id, user3.id);
	console.log("************************************************");
};

const queries = async () => {
	bootcampController.findById(1).then((res) => {
		console.log("\n**********bootcampController.findById()*********");
		console.log(JSON.stringify(res, null, 2));
		console.log("************************************************");
	});

	bootcampController.findAll().then(res => {
		console.log("\n*********bootcampController.findAll()***********");
		console.log(JSON.stringify(res, null, 2));
		console.log("************************************************");
	})

	userController.findById(1).then(res => {
		console.log("\n**********userController.findById()*************");
		console.log(JSON.stringify(res, null, 2));
		console.log("************************************************");
	})

	userController.findAll().then(res => {
		console.log("\n***********userController.findAll()*************");
		console.log(JSON.stringify(res, null, 2));
		console.log("************************************************");
	})
};

// db.sequelize
// 	.sync({
// 		force: true,
// 	})
// 	.then(() => {
// 		console.log(`Eliminando y resincronizando la base de datos.`);
// 		run();
// 	});

queries();
