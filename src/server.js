import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";
import { db } from "./db.js";

const app = express();

app.use(bodyParser.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const start = async () => {
  await db.connect(
    "mongodb+srv://tellymo:Pass1234@cluster0.guxd5.mongodb.net/test"
  );
  await app.listen(8080);
  console.log("Your Gaza Server is listening on port 8080...");
};

start();
