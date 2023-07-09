module.exports = {
	HOST: "localhost",
	USER: "node",
	PASSWORD: "node",
	DB: "db_bootcamp",
	dialect: "postgres",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
