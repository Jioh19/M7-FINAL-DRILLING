// El método toma un array de objetos
let users = [
	{
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
	},
	{
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
	},
	{
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
	},
	{
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
	},
	{
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
	},
	{
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
	},
];

// El método toma un array de objetos
let bootcamp = [
	{
		title: faker.lorem.word(),
		cue: faker.number.int({ min: 5, max: 10 }),
		description: faker.lorem.sentence(),
	},
	{
		title: faker.lorem.word(),
		cue: faker.number.int({ min: 5, max: 10 }),
		description: faker.lorem.sentence(),
	},
	{
		title: faker.lorem.word(),
		cue: faker.number.int({ min: 5, max: 10 }),
		description: faker.lorem.sentence(),
	},
	{
		title: faker.lorem.word(),
		cue: faker.number.int({ min: 5, max: 10 }),
		description: faker.lorem.sentence(),
	},
	{
		title: faker.lorem.word(),
		cue: faker.number.int({ min: 5, max: 10 }),
		description: faker.lorem.sentence(),
	},
	{
		title: faker.lorem.word(),
		cue: faker.number.int({ min: 5, max: 10 }),
		description: faker.lorem.sentence(),
	},
];

User.bulkCreate(users, {
	validate: true,
})
	.then(() => {
		console.log("Users Creados ");
	})
	.catch((err) => {
		errorCode(err.code);
		//console.log("Fallo la inserción de users");
		//console.log(err);
	})
	.finally(() => {
		User.close;
	});

Bootcamp.bulkCreate(bootcamp, {
	validate: true,
})
	.then(() => {
		console.log("Bootcamp Creados ");
	})
	.catch((err) => {
		console.log("Fallo la inserción de bootcamp");
		console.log(err);
	})
	.finally(() => {
		Bootcamp.close;
	});

// console.log(users);
// console.log(bootcamp);
