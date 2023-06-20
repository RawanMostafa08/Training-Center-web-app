const config = {
  server: "NOURS-PC",
  port: 1433,
  user: "Nour",
  password: "foo",
  database: "Project",
  oprions: {
    trustServerCertificate: true,
    enableArithAbort: true,
  },
  connectionTimeout: 150000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

// const config = {
//   user: "fatma123_SQLLogin_1",
//   password: "3acl2y45zc",
//   server: "DBProject.mssql.somee.com",
//   database: "DBProject",
//   options: {
//     encrypt: false,
//   },
// };
module.exports = config;
