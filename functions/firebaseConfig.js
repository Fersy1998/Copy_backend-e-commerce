const admin= require('firebase-admin');


//var serviceAccount = require("path/to/serviceAccountKey.json");
var serviceAccount = require("./credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:'https://appland-e-commerce-ec53d.firebaseio.com'
});

const db=admin.firestore();

module.exports={db}