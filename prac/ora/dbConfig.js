require("dotenv").config();

const { ID, PW, CS } = process.env;

module.exports = {
  user: process.env.NODE_ORACLEDB_USER || ID,
  password: process.env.NODE_ORACLEDB_PASSWOR || PW,
  connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || CS,
};
