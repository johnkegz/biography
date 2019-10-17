module.exports = {
  development: {
    username: "postgres",
    password: "kegz",
    database: "bio",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "postgres://gclimthhrozteq:c7163d683c8b17b0e2d2bef1f765ad762713aa0d6953fb92b26755c58c564129@ec2-23-21-87-183.compute-1.amazonaws.com:5432/d7npntg4ocu904",
    host: process.env.HOST || "127.0.0.1",
    dialect: "postgres"
  }
};
