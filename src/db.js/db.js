import { MongoClient } from "mongodb";

const DB_NAME = "tellymo";

export const db = {
  _dbClient: null,
  connect: async function (url) {
    const client = await MongoClient.connect(url, {
      poolSize: 10,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this._dbClient = client;
  },
  getConnection: function () {
    if (!this._dbClient) {
      console.log("You need to call the connect() function first");
      process.exit(1);
    }
    return this._dbClient.db(DB_NAME);
  },
};

// const uri = "mongodb+srv://tellymo:<password>@cluster0.guxd5.mongodb.net/test";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
