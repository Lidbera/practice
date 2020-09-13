const oracledb = require("oracledb");
const dbConfig = require("../dbConfig");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

oracledb.autoCommit = true;

const connection = {
  user: dbConfig.user,
  password: dbConfig.password,
  connectString: dbConfig.connectString,
};

router.get("/test", function (req, res) {
  oracledb.getConnection(connection, function (err, conn) {
    if (err) {
      console.error(err.message);
      return;
    }
    let query = "select * from member";
    conn.execute(query, [], function (err, res) {
      if (err) {
        console.error(err.message);
        doRelease(conn);
        return;
      }

      const colNames = res.metaData;
      const newRows = res.rows.map((row) =>
        row.map((col, i) => ({
          name: colNames[i]["name"],
          value: col,
        }))
      );
      doRelease(conn, newRows);
    });
  });

  function doRelease(connection, rowList) {
    connection.release(function (err) {
      if (err) {
        console.error(err.message);
      }

      console.log(rowList);
      res.send(rowList);
    });
  }
});

app.use("/", router);
app.all("*", function (req, res) {
  res.status(404).send("<h1>404 Not Found</h1>");
});

http.createServer(app).listen(app.get("port"), function () {
  console.log("Listening to port", app.get("port"));
});
